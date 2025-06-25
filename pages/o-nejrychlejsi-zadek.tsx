import { GetServerSideProps } from 'next';
import TableComponent from '../components/TableComponent';
import { fetchData } from '../lib/fetchData';
import { PageProps } from '../lib/definitions';

const START_DATE = '2025-06-29 17:00:00';
const DURATION = 3;
export const getServerSideProps: GetServerSideProps = async () => {
  const zadek = true;
  try {
    const sheetId = process.env.GOOGLE_SHEET_ID2 as string;
    if (!sheetId) {
      throw new Error('Sheet ID not found');
    }

    const data = await fetchData(sheetId, zadek);
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

export default function TabulkaDenniZadek({ data }: PageProps) {
  return (
    <>
      <TableComponent
        data={data}
        startDate={START_DATE}
        duration={DURATION}
        titleH1="Memoriál Rudolfa Šebestíka 2025"
        titleH2="O nejrychlejší zadek"
        zadek
      />
    </>
  );
}
