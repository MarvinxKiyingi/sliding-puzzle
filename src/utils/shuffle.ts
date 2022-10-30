export const shuffle = (tiles: number[]) => {
  return [...tiles].sort(() => Math.random() - 0.5);
};
