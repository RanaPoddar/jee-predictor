// Utility functions for rank comparison and data processing

export function compareRanks(openingRank: string | null, closingRank: string | null, userRank: number): boolean {
  if (!openingRank || !closingRank) return false;
  
  // Convert string ranks to numbers, handling non-numeric values
  const opening = parseInt(openingRank);
  const closing = parseInt(closingRank);
  
  if (isNaN(opening) || isNaN(closing)) return false;
  
  // User rank should be between opening and closing rank
  return userRank >= opening && userRank <= closing;
}

export function isValidRank(rank: string | null): boolean {
  if (!rank) return false;
  const numRank = parseInt(rank);
  return !isNaN(numRank) && numRank > 0;
}

export function formatRank(rank: string | null): string {
  if (!rank) return 'N/A';
  const numRank = parseInt(rank);
  return isNaN(numRank) ? 'N/A' : numRank.toLocaleString();
}

export function filterResultsByRank(results: any[], userRank: number) {
  return results.filter(result => {
    return compareRanks(result.openingRank, result.closingRank, userRank);
  });
}
