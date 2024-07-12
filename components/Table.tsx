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
      <table className="mx-auto shadow-lg text-xs sm:text-base min-w-full sm:min-w-0">
        <thead>
          <tr>
            <th className="py-2 sm:px-5 px-2 text-left">Start. pořadí</th>
            <th className="py-2 sm:px-5 px-2 text-left">Na základně</th>
            <th className="py-2 sm:px-5 px-2 text-left">Soutěžící</th>
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

export function sortTable(table: any[]) {
  table
    .sort((a, b) =>
      a[5] > b[5]
        ? 1
        : b[5] > a[5]
        ? -1
        : Number(a[3].replace(',', '.')) + Number(a[4].replace(',', '.')) >
          Number(b[3].replace(',', '.')) + Number(b[4].replace(',', '.'))
        ? 1
        : Number(b[3].replace(',', '.')) + Number(b[4].replace(',', '.')) >
          Number(a[3].replace(',', '.')) + Number(a[4].replace(',', '.'))
        ? -1
        : 0
    )
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
  return table;
}

function timeToSeconds(time: string) {
  const [hours, minutes, seconds] = time.split(':').map(Number);
  return hours * 3600 + minutes * 60 + seconds;
}

export function compareTimes(time1: string, time2: string) {
  const seconds1 = timeToSeconds(time1);
  const seconds2 = timeToSeconds(time2);

  // Pokud je čas1 mezi půlnocí a 6:00 a čas2 mezi 18:00 a půlnocí, přičteme 24 hodin k čas1
  if (seconds1 < 6 * 3600 && seconds2 > 18 * 3600) {
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
