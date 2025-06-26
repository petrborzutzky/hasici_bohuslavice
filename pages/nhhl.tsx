import { GetServerSideProps } from 'next';
import TableComponent from '../components/TableComponent';
import { fetchData } from '../lib/fetchData';
import { PageProps } from '../lib/definitions';

const START_DATE = '2025-06-27 22:00:00';
const DURATION = 5;
const COUNTING_FROM_ZERO = true;

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
export default function Nhhl({ data }: PageProps) {
  return (
    <>
      <TableComponent
        data={data}
        startDate={START_DATE}
        duration={DURATION}
        countingFromZero={COUNTING_FROM_ZERO}
        titleH1="Noční soutěž Bohuslavice"
        titleH2="6. kolo NHHL (2025)"
      />
    </>
  );
}
