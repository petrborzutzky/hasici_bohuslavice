import type { NextApiRequest, NextApiResponse } from 'next';
import { fetchData } from '../../lib/fetchData';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { id } = req.query;

    let sheetId: string | undefined;

    if (id === '1') {
      sheetId = process.env.GOOGLE_SHEET_ID;
    } else if (id === '2') {
      sheetId = process.env.GOOGLE_SHEET_ID2;
    } else {
      return res
        .status(400)
        .json({ error: 'Invalid sheet ID parameter. Use ?id=1 or ?id=2.' });
    }

    if (!sheetId)
      throw new Error('Sheet ID not found in environment variables');

    const data = await fetchData(sheetId);
    res.status(200).json(data);
  } catch (err) {
    console.error('API error in /api/sheet:', err);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}
