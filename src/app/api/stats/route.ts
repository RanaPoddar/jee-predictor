import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  try {
    const stats = await Promise.all([
      prisma.cutoff.count(),
      prisma.cutoff.groupBy({
        by: ['instituteType'],
        _count: true,
      }),
      prisma.cutoff.findMany({
        select: {
          institute: true,
        },
        distinct: ['institute'],
      }),
      prisma.cutoff.findMany({
        select: {
          year: true,
        },
        distinct: ['year'],
        orderBy: {
          year: 'desc',
        },
        take: 1,
      }),
    ]);

    const [totalRecords, instituteTypeStats, institutes, latestYear] = stats;

    return NextResponse.json({
      totalRecords,
      instituteTypes: instituteTypeStats,
      totalInstitutes: institutes.length,
      latestYear: latestYear[0]?.year || null,
    });
  } catch (error) {
    console.error('Error fetching stats:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
