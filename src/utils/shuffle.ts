import { isSolved } from '../utils/isSolved';
import { isSolvable } from '../utils/isSolvable';

export const shuffle: Number[] | any = (tiles: number[]) => {
  const shuffledTiles = [...tiles.filter((t) => t !== tiles.length - 1).sort(() => Math.random() - 0.5), tiles.length - 1];
  return isSolvable(tiles) && !isSolved(tiles) ? shuffledTiles : shuffle(shuffledTiles);
};
