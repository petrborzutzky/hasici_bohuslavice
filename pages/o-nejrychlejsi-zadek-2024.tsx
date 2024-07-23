import { GetServerSideProps } from 'next';
import TableComponent from '../components/TableComponent';
import { fetchData } from '../lib/fetchData';
import { PageProps } from '../lib/definitions';

export const getServerSideProps: GetServerSideProps = async () => {
  const startDate = '2024-07-21 17:00:00';
  const duration = 3;
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

export default function TabulkaDenniZadek2024({
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
        titleH1="Memoriál Rudolfa Šebestíka 2024"
        titleH2="O nejrychlejší zadek"
        zadek
      />
    </>
  );
}
