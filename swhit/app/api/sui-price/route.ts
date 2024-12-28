import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await fetch('https://api.diadata.org/v1/assetQuotation/Sui/0x2::sui::SUI')
    const data = await response.json()
    res.status(200).json({ price: data.Price, lastUpdate: data.Time })
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch Sui price' })
  }
}