// lib/fetchData.ts
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';
import NodeCache from 'node-cache';

const myCache = new NodeCache({ stdTTL: 30, checkperiod: 30 });

export async function fetchData(sheetId: string, zadek: boolean = false) {
  const cachedData = myCache.get(sheetId);
  if (cachedData) {
    return cachedData;
  }

  const GOOGLE_SERVICE_ACCOUNT_EMAIL = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const GOOGLE_PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY;

  if (!GOOGLE_SERVICE_ACCOUNT_EMAIL || !GOOGLE_PRIVATE_KEY || !sheetId) {
    throw new Error('Missing Google API credentials or Sheet ID');
  }

  const serviceAccountAuth = new JWT({
    email: GOOGLE_SERVICE_ACCOUNT_EMAIL,
    key: (GOOGLE_PRIVATE_KEY as string).replace(/\\n/g, '\n'),
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  const doc = new GoogleSpreadsheet(sheetId, serviceAccountAuth);

  await doc.loadInfo();

  const sheet = zadek ? doc.sheetsByIndex[1] : doc.sheetsByIndex[0];
  sheet.loadHeaderRow(2);
  const userRows = await sheet.getRows({ limit: 50 });

  const data = userRows.map((row) => [
    row.get('Star. poz.') || null,
    row.get('TÝM') || null,
    row.get('Pohlaví') || null,
    zadek ? row.get('Čas 1') || null : row.get('LP') || null,
    zadek ? row.get('Čas 2') || null : row.get('PP') || null,
    row.get('VÝSLEDNÝ ČAS') || null,
    row.get('PRŮBĚŽNÉ UMÍSTĚNÍ') || null,
    row.get('Odběhnuto') || null,
  ]);

  myCache.set(sheetId, data);
  return data;
}
