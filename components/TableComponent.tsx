// components/TableComponent.tsx
import React from 'react';
import FinnishTable from './FinnishTable';
import { StartTable, processTableData } from './Table';

interface TableComponentProps {
  data: any[];
  startDate: string;
  duration: number;
  titleH1: string;
  titleH2?: string;
  zadek?: boolean;
}

const TableComponent: React.FC<TableComponentProps> = ({
  data,
  startDate,
  duration,
  titleH1,
  titleH2,
  zadek,
}) => {
  const { startTable, menTable, womenTable, lastRun } = processTableData(
    data,
    startDate
  );
  const startTime = new Date(startDate.split(' ')[0] + ' ' + lastRun);
  startTime.setTime(startTime.getTime());

  return (
    <>
      <h1 className="text-2xl text-center">{titleH1}</h1>
      <h3 className="text-lg mt-2 text-center">{titleH2}</h3>

      {startTable.length !== 0 && (
        <StartTable
          startTime={startTime}
          startTable={startTable}
          menTableLength={menTable.length}
          womenTableLength={womenTable.length}
          duration={duration}
        />
      )}

      {menTable.length !== 0 && (
        <FinnishTable
          table={menTable}
          title={`Muži - ${
            startTable.length === 0 ? 'Konečné' : 'Průběžné'
          } výsledky`}
          zadek
        />
      )}

      {womenTable.length !== 0 && (
        <FinnishTable
          table={womenTable}
          title={`Ženy - ${
            startTable.length === 0 ? 'Konečné' : 'Průběžné'
          } výsledky`}
          women
          zadek
        />
      )}
    </>
  );
};

export default TableComponent;
