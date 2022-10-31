export const getMatrixPosition = (index: number, columnSum: number) => {
  return {
    row: Math.floor(index / columnSum),
    col: index % columnSum,
  };
};
