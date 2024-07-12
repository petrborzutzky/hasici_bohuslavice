export default function FinnishTable({
  table,
  title,
  women,
}: {
  table: any;
  title: string;
  women?: boolean;
}) {
  return (
    <>
      <h2 className="text-xl mb-10 text-center mt-20">{title}</h2>
      <table className="min-w-full text-xs sm:text-base shadow-lg">
        <thead>
          <tr className={women ? 'bg-red-200' : 'bg-blue-200'}>
            <th className="py-2 px-2 sm:px-5 sm:text-center text-left">Poř.</th>
            <th className="py-2 px-2 text-left">Soutěžící</th>
            <th className="py-2 px-5">LP</th>
            <th className="py-2 px-5">PP</th>
            <th className="py-2 sm:px-5 px-2 pl-9 text-right">
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
                  row[2] === 'ŽENY'
                    ? 'odd:bg-white bg-red-50 hover:bg-red-400 border-b-2'
                    : 'odd:bg-white bg-blue-50 hover:bg-blue-400 border-b-2'
                }
              >
                <td className="font-bold text-left px-2 sm:px-5 sm:text-center">
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
                <td className="text-left p-2 border-x">
                  {row[1]}
                  {row[2] === 'ŽENY' ? ' (Ž)' : ''}
                </td>
                <td className="text-xs border-x px-2">
                  {row[3]}{' '}
                  <span className="text-gray-500">{secondRemover(row[3])}</span>
                </td>
                <td className=" text-xs border-x px-2">
                  {row[4]}
                  <span className="text-gray-500">{secondRemover(row[4])}</span>
                </td>
                <td className="font-bold sm:px-5 px-2 text-right">
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
