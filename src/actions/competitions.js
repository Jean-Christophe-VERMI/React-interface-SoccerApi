export const DISPATCH_ALL_MATCHS = 'DISPATCH_ALL_MATCHS';
export const DISPATCH_PREMIER_LEAGUE = 'DISPATCH_PREMIER_LEAGUE';
export const DISPATCH_LALIGA = 'DISPATCH_LALIGA';
export const DISPATCH_SERIEA = 'DISPATCH_SERIEA';

export const dispatchAllMatchs = (allMatchs) => ({
  type: DISPATCH_ALL_MATCHS,
  allMatchs,
});

export const dispatchPremierLeague = (matchsPremierLeague) => ({
  type: DISPATCH_PREMIER_LEAGUE,
  matchsPremierLeague,
});

export const dispatchLaLiga = (matchsLaLiga) => ({
  type: DISPATCH_LALIGA,
  matchsLaLiga,
});

export const dispatchSeriea = (matchsSeriea) => ({
  type: DISPATCH_SERIEA,
  matchsSeriea,
});



