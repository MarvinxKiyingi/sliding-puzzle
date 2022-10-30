import { columnSum, rowSum } from './variables';

export const getMatrixPosition = (index: number) => {
  return {
    row: Math.floor(index / rowSum),
    column: Math.floor(index / columnSum),
  };
};
