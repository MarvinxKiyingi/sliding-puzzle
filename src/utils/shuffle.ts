import { isSolved } from './isSolved';
import { isSolvable } from './isSolvable';

export const shuffle: number[] | any = (tiles: number[], boardSize: number) => {
  const shuffledTiles = [...tiles.filter((f: any) => f !== tiles.length - 1).sort(() => Math.random() - 0.5), tiles.length - 1];
  return isSolvable(shuffledTiles, boardSize) && !isSolved(shuffledTiles) ? shuffledTiles : shuffle(shuffledTiles);
};
