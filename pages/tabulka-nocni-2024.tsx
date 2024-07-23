import { GetServerSideProps } from 'next';
import TableComponent from '../components/TableComponent';
import { fetchData } from '../lib/fetchData';
import { PageProps } from '../lib/definitions';

export const getServerSideProps: GetServerSideProps = async () => {
  const startDate = '2024-07-19 21:30:00';
  const duration = 5;

  try {
    const sheetId = process.env.GOOGLE_SHEET_ID as string;
    if (!sheetId) {
      throw new Error('Sheet ID not found');
    }

    const data = await fetchData(sheetId);
    return {
      props: {
        data,
        startDate,
        duration,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        data: [],
        startDate,
        duration,
      },
    };
  }
};
export default function TabulkaNocni2024({
  data,
  startDate,
  duration,
}: PageProps) {
  return (
    <>
      <TableComponent
        data={data}
        startDate={startDate}
        duration={duration}
        titleH1="Noční soutěž Bohuslavice"
        titleH2="7. kolo NHHL."
      />
    </>
  );
}
