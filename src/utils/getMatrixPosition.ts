import { columnSum } from './variables';

export const getMatrixPosition = (index: number) => {
  return {
    row: Math.floor(index / columnSum),
    col: index % columnSum,
  };
};
