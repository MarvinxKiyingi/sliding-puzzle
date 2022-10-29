import { tileSum } from './variables';

export const isSolvable = (tiles: number[]) => {
  let product = 1;
  for (let i = 1, l = tileSum - 1; i <= l; i++) {
    for (let j = i + 1, m = l + 1; j <= m; j++) {
      product *= (tiles[i - 1] - tiles[j - 1]) / (i - j);
    }
  }
  return Math.round(product) === 1;
};
