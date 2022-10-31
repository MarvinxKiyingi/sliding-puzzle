import { getMatrixPosition } from './getMatrixPosition';

export const swap = (tiles: number[], index: number, boardSize: number, columnSum: number) => {
  let tilesResult = [...tiles];
  let emptyIndex = tilesResult.indexOf(boardSize - 1);
  let targetIndex = tilesResult.indexOf(index);

  const dif = Math.abs(targetIndex - emptyIndex);

  let indexPosition = getMatrixPosition(targetIndex, columnSum);
  let emptyPosition = getMatrixPosition(emptyIndex, columnSum);

  if (indexPosition.col === emptyPosition.col || indexPosition.row === emptyPosition.row) {
    if (dif === 1 || dif === columnSum) {
      tilesResult[emptyIndex] = index;
      tilesResult[targetIndex] = boardSize - 1;
    }
  }
  return tilesResult;
};
