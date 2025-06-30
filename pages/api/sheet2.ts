import type { NextApiRequest, NextApiResponse } from 'next';
import { fetchData } from '../../lib/fetchData';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const sheetId = process.env.GOOGLE_SHEET_ID as string;
    if (!sheetId) throw new Error('Sheet ID not found');

    const data = await fetchData(sheetId);
    res.status(200).json(data);
  } catch (err) {
    console.error('API error in /sheet2:', err);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}
