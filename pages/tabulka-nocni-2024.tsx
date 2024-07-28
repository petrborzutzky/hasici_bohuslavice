import { GetServerSideProps } from 'next';
import TableComponent from '../components/TableComponent';
import { fetchData } from '../lib/fetchData';
import { PageProps } from '../lib/definitions';

const START_DATE = '2024-07-19 21:30:00';
const DURATION = 5;

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const sheetId = process.env.GOOGLE_SHEET_ID as string;
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
export default function TabulkaNocni2024({ data }: PageProps) {
  return (
    <>
      <TableComponent
        data={data}
        startDate={START_DATE}
        duration={DURATION}
        titleH1="Noční soutěž Bohuslavice"
        titleH2="7. kolo NHHL (2024)"
      />
    </>
  );
}
