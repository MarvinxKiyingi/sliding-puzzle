export const swap = (tiles: number[], index: number, boardSize: number, columnSum: number) => {
  let tilesResult = [...tiles];
  let emptyIndex = tilesResult.indexOf(boardSize - 1);
  let targetIndex = tilesResult.indexOf(index);

  const dif = Math.abs(targetIndex - emptyIndex);

  if (dif === 1 || dif === columnSum) {
    tilesResult[emptyIndex] = index;
    tilesResult[targetIndex] = boardSize - 1;
  }

  return tilesResult;
};
