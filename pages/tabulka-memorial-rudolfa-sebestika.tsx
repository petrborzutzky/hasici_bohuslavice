import { GetServerSideProps } from 'next';
import TableComponent from '../components/TableComponent';
import { fetchData } from '../lib/fetchData';
import Link from 'next/link';
import { PageProps } from '../lib/definitions';
import { useEffect, useState } from 'react';

const START_DATE = '2025-06-29 15:00:00';
const DURATION = 5;

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const sheetId = process.env.GOOGLE_SHEET_ID2 as string;
    if (!sheetId) {
      throw new Error('Sheet ID not found');
    }
    const data = await fetchData(sheetId);
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        data: [],
      },
    };
  }
};

export default function TabulkaDenni({ data: initialData }: PageProps) {
  const [data, setData] = useState(initialData);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/sheet');
        const json = await res.json();
        setData(json);
      } catch (err) {
        console.error('Client-side fetch failed:', err);
      }
    };

    const interval = setInterval(fetchData, 30000); // každých 30 sekund
    return () => clearInterval(interval); // uklidíme po odmountování
  }, []);
  return (
    <>
      <TableComponent
        data={data}
        startDate={START_DATE}
        duration={DURATION}
        titleH1="Memoriál Rudolfa Šebestíka 2025"
        titleH2="XXXII. ročník"
      />
      <div className="flex justify-center mt-10">
        <Link href="/o-nejrychlejsi-zadek">
          <span className="hover:text-blue-600 text-blue-400 cursor-pointer underline">
            O nejrychlejší zadek - tabulka
          </span>
        </Link>
      </div>
    </>
  );
}
