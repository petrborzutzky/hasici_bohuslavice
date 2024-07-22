import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';
import NodeCache from 'node-cache';
import FinnishTable from '../components/FinnishTable';
import { StartTable, compareTimes, sortTable } from '../components/Table';
import { UsersRowDataZadek } from '../lib/definitions';

const myCache = new NodeCache({ stdTTL: 60, checkperiod: 60 });
const START_DATE = '2024-07-21 17:00:00';
const DURATION = 3; // 5 min duration between teams

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
  const sheet = doc.sheetsByIndex[1];
  sheet.loadHeaderRow(2);
  const userRows = await sheet.getRows<UsersRowDataZadek>({
    limit: 50,
  });

  return userRows.map((row) => [
    row.get('Star. poz.') ? row.get('Star. poz.') : null,
    row.get('TÝM') ? row.get('TÝM') : null,
    row.get('Pohlaví') ? row.get('Pohlaví') : null,
    row.get('Čas 1') ? row.get('Čas 1') : null,
    row.get('Čas 2') ? row.get('Čas 2') : null,
    row.get('VÝSLEDNÝ ČAS') ? row.get('VÝSLEDNÝ ČAS') : null,
    row.get('PRŮBĚŽNÉ UMÍSTĚNÍ') ? row.get('PRŮBĚŽNÉ UMÍSTĚNÍ') : null,
    row.get('Odběhnuto') ? row.get('Odběhnuto') : null,
  ]);
}

export async function getServerSideProps() {
  let data = myCache.get('tabulkaDenniZadek2024');
  if (!data) {
    data = await fetchData();

    myCache.set('tabulkaDenniZadek2024', data);
  }

  return { props: { data } };
}

export default function TabulkaDenniZadek2024({ data }: any) {
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
  menTable = sortTable(menTable);
  womenTable = sortTable(womenTable);

  return (
    <>
      <h1 className="text-2xl text-center">
        Memoriál Rudolfa Šebestíka - 2024
      </h1>
      <h3 className="text-lg sm:mb-10 mb-10 mt-2 text-center">
        O nejrychlejší zadek.
      </h3>
      {startTable.length !== 0 && (
        <StartTable
          startTime={startTime}
          startTable={startTable}
          menTableLength={menTable.length}
          womenTableLength={womenTable.length}
          duration={DURATION}
        />
      )}

      {menTable.length !== 0 && (
        <FinnishTable table={menTable} zadek title={`Muži - ${
            startTable.length === 0 ? 'Konečné' : 'Průběžné'
          } výsledky`} />
      )}

      {womenTable.length !== 0 && (
        <FinnishTable
          zadek
          table={womenTable}
          title={`Ženy - ${
            startTable.length === 0 ? 'Konečné' : 'Průběžné'
          } výsledky`}
          women
        />
      )}
    </>
  );
}
