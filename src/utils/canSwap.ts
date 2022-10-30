export const swap = (tiles: number[], clickedTile: number, newDest: number) => {
  const tilesResult = [...tiles];
  [tilesResult[clickedTile], tilesResult[newDest]] = [tilesResult[newDest], tilesResult[clickedTile]];
  return tilesResult;
};
