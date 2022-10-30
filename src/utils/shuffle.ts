import { isSolved } from './isSolvable';
import { isSolvable } from './isSolved';

export const shuffle: number[] | any = (tiles: number[]) => {
  const shuffledTiles = [...tiles.filter((f: any) => f !== tiles.length - 1).sort(() => Math.random() - 0.5), tiles.length - 1];
  return isSolvable(shuffledTiles) && !isSolved(shuffledTiles) ? shuffledTiles : shuffle(shuffledTiles);
};
