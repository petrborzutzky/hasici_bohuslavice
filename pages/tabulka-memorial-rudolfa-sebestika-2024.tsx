import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';
import NodeCache from 'node-cache';
import FinnishTable from '../components/FinnishTable';
import { StartTable, compareTimes, sortTable } from '../components/Table';
import { UsersRowData } from '../lib/definitions';

const myCache = new NodeCache({ stdTTL: 60, checkperiod: 60 });
const START_DATE = '2024-07-21 15:00:00';

async function fetchData() {
  const serviceAccountAuth = new JWT({
    email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    key: (process.env.GOOGLE_PRIVATE_KEY as string).replace(/\\n/g, '\n'),
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  const doc = new GoogleSpreadsheet(
    process.env.GOOGLE_SHEET_ID2 as string,
    serviceAccountAuth
  );

  await doc.loadInfo();
  const sheet = doc.sheetsByIndex[0];
  sheet.loadHeaderRow(2);
  const userRows = await sheet.getRows<UsersRowData>({
    limit: 50,
  });

  return userRows.map((row) => [
    row.get('Star. poz.') ? row.get('Star. poz.') : null,
    row.get('TÝM') ? row.get('TÝM') : null,
    row.get('Pohlaví') ? row.get('Pohlaví') : null,
    row.get('LP') ? row.get('LP') : null,
    row.get('PP') ? row.get('PP') : null,
    row.get('VÝSLEDNÝ ČAS') ? row.get('VÝSLEDNÝ ČAS') : null,
    row.get('PRŮBĚŽNÉ UMÍSTĚNÍ') ? row.get('PRŮBĚŽNÉ UMÍSTĚNÍ') : null,
    row.get('Odběhnuto') ? row.get('Odběhnuto') : null,
  ]);
}

export async function getServerSideProps() {
  let data = myCache.get('tabulkaDenni2024');
  if (!data) {
    data = await fetchData();

    myCache.set('tabulkaDenni2024', data);
  }

  return { props: { data } };
}

export default function TabulkaNocni2024({ data }: any) {
  const startTime = new Date(START_DATE);
  let lastRun = START_DATE.split(' ')[1];
  const startTable = [];
  let menTable = [];
  let womenTable = [];

  for (let i = 0; i < data.length; i++) {
    if (!data[i][1]) {
      continue;
    }
    if (!data[i][7] || !data[i][5]) {
      startTable.push(data[i]);
      if (data[i][7]) {
        lastRun = compareTimes(data[i][7], lastRun) ? data[i][7] : lastRun;
      }
    } else {
      lastRun = compareTimes(data[i][7], lastRun) ? data[i][7] : lastRun;
      if (data[i][2] === 'MUŽI') {
        menTable.push(data[i]);
      } else {
        womenTable.push(data[i]);
      }
    }
  }

  //console.log(data);
  const time = new Date(START_DATE.split(' ')[0] + ' ' + lastRun);
  startTime.setTime(time.getTime());
  startTime.setMinutes(startTime.getMinutes() - 4);

  menTable = sortTable(menTable);
  womenTable = sortTable(womenTable);

  return (
    <>
      <h1 className="text-2xl sm:mb-20 mb-10 text-center">
        Memorial Rudolfa Šebestíka - 2024
      </h1>
      {startTable.length !== 0 && (
        <StartTable
          startTime={startTime}
          startTable={startTable}
          menTableLength={menTable.length}
          womenTableLength={womenTable.length}
        />
      )}

      {menTable.length !== 0 && (
        <FinnishTable table={menTable} title="Muži - Průběžné výsledky" />
      )}

      {womenTable.length !== 0 && (
        <FinnishTable
          table={womenTable}
          title="Ženy - Průběžné výsledky"
          women
        />
      )}
    </>
  );
}
