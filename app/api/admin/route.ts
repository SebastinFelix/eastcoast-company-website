import { NextRequest, NextResponse } from 'next/server';
import { getAllSubmissions } from '@/lib/storage';

export async function GET(req: NextRequest) {
  const key = req.nextUrl.searchParams.get('key');
  const adminKey = process.env.ADMIN_KEY ?? 'eastcoast2024';

  if (key !== adminKey) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const submissions = getAllSubmissions();
  return NextResponse.json({ total: submissions.length, submissions });
}
