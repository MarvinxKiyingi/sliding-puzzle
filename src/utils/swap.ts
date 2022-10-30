import { getMatrixPosition } from './getMatrixPosition';
import { boardSize, columnSum } from './variables';

export const swap = (tiles: number[], index: number) => {
  let tilesResult = [...tiles];
  let emptyIndex = tilesResult.indexOf(boardSize - 1);
  let targetIndex = tilesResult.indexOf(index);

  const dif = Math.abs(targetIndex - emptyIndex);

  let indexPosition = getMatrixPosition(targetIndex);
  let emptyPosition = getMatrixPosition(emptyIndex);
  console.log('indexPosition', indexPosition);
  console.log('indexPosition', emptyPosition);
  if (indexPosition.col === emptyPosition.col || indexPosition.row === emptyPosition.row) {
    if (dif === 1 || dif === columnSum) {
      tilesResult[emptyIndex] = index;
      tilesResult[targetIndex] = boardSize - 1;
    }
  }
  return tilesResult;
};
