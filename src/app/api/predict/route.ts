import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(req: NextRequest) {
  try {
    // Ensure Prisma client is connected
    await prisma.$connect();
    
    const { searchParams } = new URL(req.url);
    const rank = searchParams.get('rank');
    const year = searchParams.get('year');
    const round = searchParams.get('round');
    const instituteType = searchParams.get('instituteType');
    const seatType = searchParams.get('seatType');
    const gender = searchParams.get('gender');
    const quota = searchParams.get('quota');

    if (!rank) {
      return NextResponse.json({ error: 'Rank is required' }, { status: 400 });
    }

    const userRank = parseInt(rank);
    if (isNaN(userRank)) {
      return NextResponse.json({ error: 'Invalid rank provided' }, { status: 400 });
    }

    // Build dynamic where clause based on filters
    const whereClause: {
      year?: number;
      round?: number;
      instituteType?: string;
      seatType?: string;
      gender?: string;
      quota?: string;
    } = {};

    if (year) {
      whereClause.year = parseInt(year);
    }

    if (round) {
      whereClause.round = parseInt(round);
    }

    if (instituteType) {
      whereClause.instituteType = instituteType;
    }

    if (seatType) {
      whereClause.seatType = seatType;
    }

    if (gender) {
      whereClause.gender = gender;
    }

    if (quota) {
      whereClause.quota = quota;
    }

    // Query database with filters
    const result = await prisma.cutoff.findMany({
      where: whereClause,
      orderBy: [
        { institute: 'asc' },
        { academicProgram: 'asc' },
      ],
      take: 200, // Increase limit for better results
    });

    // Filter results by rank range in JavaScript since string comparison is tricky
    const filteredResults = result.filter(item => {
      const openingRank = parseInt(item.openingRank?.toString() || '0');
      const closingRank = parseInt(item.closingRank?.toString() || '0');
      
      if (isNaN(openingRank) || isNaN(closingRank)) return false;
      
      // return userRank >= openingRank && userRank <= closingRank;
      return userRank <= closingRank;
    });

    // Convert BigInt fields to numbers for JSON serialization
    const serializedResults = filteredResults.map(item => ({
      ...item,
      year: item.year ? Number(item.year) : null,
      round: item.round ? Number(item.round) : null,
    }));

    // Sort results by institute type priority: IIT > NIT > IIIT > GFTI, then by closing rank
    const getInstitutePriority = (instituteType: string | null) => {
      switch (instituteType) {
        case 'IIT': return 1;
        case 'NIT': return 2;
        case 'IIIT': return 3;
        case 'GFTI': return 4;
        default: return 5; // Unknown types go last
      }
    };

    const sortedResults = serializedResults.sort((a, b) => {
      // First sort by institute type priority
      const priorityA = getInstitutePriority(a.instituteType);
      const priorityB = getInstitutePriority(b.instituteType);
      
      if (priorityA !== priorityB) {
        return priorityA - priorityB;
      }
      
      // If same institute type, sort by closing rank (lower is better)
      const rankA = parseInt(a.closingRank?.toString() || '999999');
      const rankB = parseInt(b.closingRank?.toString() || '999999');
      
      return rankA - rankB;
    });

    return NextResponse.json(sortedResults);
  } catch (error) {
    console.error('Error predicting colleges:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
