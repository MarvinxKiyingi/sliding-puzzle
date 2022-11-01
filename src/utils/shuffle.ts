export const shuffle = (tiles: number[]) => {
  return [...tiles.filter((f: number) => f !== tiles.length - 1).sort(() => Math.random() - 0.5), tiles.length - 1];
};
