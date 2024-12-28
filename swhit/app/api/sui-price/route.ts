import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const response = await fetch('https://api.diadata.org/v1/assetQuotation/Sui/0x2::sui::SUI')
    const data = await response.json()
    return NextResponse.json({ price: data.Price, lastUpdate: data.Time })
  } catch (err) {
    return NextResponse.json({ error: 'Failed to fetch Sui price' }, { status: 500 })
  }
}

