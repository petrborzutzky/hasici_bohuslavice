export default function FinnishTable({
  table,
  title,
  women,
  zadek = false,
}: {
  table: any;
  title: string;
  women?: boolean;
  zadek?: boolean;
}) {
  return (
    <>
      <h2 className="text-xl mb-5 text-center mt-10">{title}</h2>
      <table className="min-w-full text-xs sm:text-base shadow-lg mx-auto sm:min-w-0 dark:text-slate-300 ">
        <thead>
          <tr
            className={
              women
                ? 'bg-red-200 dark:bg-rose-900'
                : 'bg-blue-200 dark:bg-sky-900'
            }
          >
            <th className="py-2 px-2 sm:px-5 sm:text-center text-left">Poř.</th>
            <th className="py-2 px-2 text-left">Soutěžící</th>
            {!zadek && <th className="py-2">LP</th>}
            {!zadek && <th className="py-2">PP</th>}
            <th className="py-2 sm:px-5 pr-2 pl-9 text-right">
              Čas<span className="invisible inline">ss</span>
            </th>
          </tr>
        </thead>
        <tbody className="text-center font-mono">
          {table.map((row: any, i: number) => {
            return (
              <tr
                key={i}
                className={
                  (row[2] === 'ŽENY'
                    ? 'bg-red-50 hover:bg-red-400 '
                    : 'bg-blue-50 hover:bg-blue-400 ') +
                  'odd:bg-white border-b dark:odd:bg-slate-600 dark:bg-slate-700 dark:hover:bg-slate-500 dark:border-slate-900'
                }
              >
                <td className="font-bold text-left pl-2 sm:px-5 sm:text-center whitespace-nowrap">
                  <span className="hidden sm:inline">
                    {row[0] === '1.' ? '🏆' : ''}
                  </span>
                  <span className="hidden sm:inline">
                    {row[0] === '2.' ? '🥈' : ''}
                  </span>
                  <span className="hidden sm:inline sm:mr-1.5">
                    {row[0] === '3.' ? '🥉' : ''}
                  </span>
                  {row[0]}
                  {row[0] === '1.' ? '🏆' : ''}
                  {row[0] === '2.' ? '🥈' : ''}
                  {row[0] === '3.' ? '🥉' : ''}
                </td>
                <td className="text-left p-2 border-x dark:border-slate-900">
                  {row[1]}
                  {row[2] === 'ŽENY' ? ' (Ž)' : ''}
                </td>
                {!zadek && (
                  <td className="text-xs border-x dark:border-slate-900 px-1 whitespace-nowrap">
                    {row[3]}{' '}
                    <span className="text-gray-500">
                      {secondRemover(row[3])}
                    </span>
                  </td>
                )}
                {!zadek && (
                  <td className="text-xs border-x px-1 dark:border-slate-900 whitespace-nowrap">
                    {row[4]}
                    <span className="text-gray-500">
                      {secondRemover(row[4])}
                    </span>
                  </td>
                )}

                <td className="font-bold sm:px-5 px-2 text-right whitespace-nowrap">
                  {row[5]}{' '}
                  <span className="text-gray-500 font-normal">
                    {secondRemover(row[5])}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

function secondRemover(str: string) {
  if (str === 'n' || str === 'd') {
    return '';
  } else if (str === 'N' || str === 'D') {
    return <span className="invisible"> s</span>;
  } else {
    return ' s';
  }
}
