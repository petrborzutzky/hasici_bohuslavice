export function StartTable({
  startTime,
  startTable,
  menTableLength,
  womenTableLength,
  duration,
}: {
  startTime: Date;
  startTable: any;
  menTableLength: number;
  womenTableLength: number;
  duration: number;
}) {
  startTime.setMinutes(startTime.getMinutes() - duration);
  return (
    <>
      <table className="mx-auto shadow-lg mt-10 text-xs sm:text-base min-w-full sm:min-w-0">
        <thead>
          <tr>
            <th className="py-2 sm:px-5 px-2 text-left min-w-full max-w-[5rem] whitespace-nowrap sm:max-w-none">
              Startovní pořadí
            </th>
            <th className="py-2 sm:px-5 px-2 text-left min-w-full max-w-[3rem] whitespace-nowrap sm:max-w-none">
              Na základně
            </th>
            <th className="py-2 sm:px-5 px-2 text-left ">Soutěžící</th>
          </tr>
        </thead>
        <tbody className="text-center font-mono">
          {startTable.map((row: any, i: number) => {
            startTime.setMinutes(startTime.getMinutes() + duration);

            return (
              <tr
                key={i}
                className={
                  row[2] === 'ŽENY'
                    ? 'bg-red-200 hover:bg-red-400'
                    : 'bg-blue-200 hover:bg-blue-400'
                }
              >
                <td className="py-2 sm:px-5 px-2 border text-left">
                  {i + 1 + menTableLength + womenTableLength}.
                </td>
                <td className="py-2 sm:px-5 px-2 border text-left">
                  {startTime.getHours() +
                    ':' +
                    (startTime.getMinutes() < 10 ? '0' : '') +
                    startTime.getMinutes() +
                    ' h'}
                </td>
                <td className="text-left py-2 sm:px-5 px-2 border">
                  {row[1]}
                  {row[2] === 'ŽENY' ? ' (Ž)' : ''}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

function sortTable(table: any[]) {
  table
    .sort((a, b) => {
      // V případě času pod 10s se pro třídění řetězce přidá '0' na začátek řetězce.

      if (a[5].length === 4) {
        a[5] = '0' + a[5];
      }
      if (b[5].length === 4) {
        b[5] = '0' + b[5];
      }

      return a[5] > b[5]
        ? 1
        : b[5] > a[5]
        ? -1
        : Number(a[3].replace(',', '.')) + Number(a[4].replace(',', '.')) >
          Number(b[3].replace(',', '.')) + Number(b[4].replace(',', '.'))
        ? 1
        : Number(b[3].replace(',', '.')) + Number(b[4].replace(',', '.')) >
          Number(a[3].replace(',', '.')) + Number(a[4].replace(',', '.'))
        ? -1
        : 0;
    })
    .sort((a, b) => {
      if (a[5] === 'D' || b[5] === 'D') {
        if (a[5] === 'D' && b[5] !== 'D') {
          return 1;
        } else if (a[5] !== 'D' && b[5] === 'D') {
          return -1;
        } else {
          return 0;
        }
      } else {
        return 0;
      }
    });

  const indexN = table.findIndex((item: any) => item[5] === 'N');
  for (let i = 0; i < table.length; i++) {
    if (table[i][5] === 'N') {
      table[i][0] = (indexN + 1).toString() + '.';
    } else if (table[i][5] === 'D') {
      table[i][0] = '---';
    } else {
      table[i][0] = (i + 1).toString() + '.';
    }
  }
  // Odstranění '0' z řetězce
  for (let i = 0; i < table.length; i++) {
    if (table[i][5][0] === '0') {
      table[i][5] = table[i][5].slice(1);
    }
  }
  return table;
}

function timeToSeconds(time: string) {
  const [hours, minutes, seconds] = time.split(':').map(Number);
  return hours * 3600 + minutes * 60 + seconds;
}

function compareTimes(time1: string, time2: string) {
  const seconds1 = timeToSeconds(time1);
  const seconds2 = timeToSeconds(time2);

  // Pokud je čas1 mezi půlnocí a 5:00 a čas2 mezi 20:00 a půlnocí, přičteme 24 hodin k čas1
  if (seconds1 < 5 * 3600 && seconds2 > 20 * 3600) {
    if (seconds1 + 24 * 3600 - seconds2 > 0) {
      return true;
    } else {
      return false;
    }
  } else {
    if (seconds1 - seconds2 > 0) {
      return true;
    } else {
      return false;
    }
  }
}

export function processTableData(data: any, startDate: string) {
  const startTable = [];
  let menTable = [];
  let womenTable = [];
  let lastRun = startDate.split(' ')[1];

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

  menTable = sortTable(menTable);
  womenTable = sortTable(womenTable);

  return { startTable, menTable, womenTable, lastRun };
}
