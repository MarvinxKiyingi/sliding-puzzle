export type IPuzzleStates = {
  columnSum: number;
  setColumnSum: React.Dispatch<React.SetStateAction<number>>;
  rowSum: number;
  setRowSum: React.Dispatch<React.SetStateAction<number>>;
  boardSize: number;
  tiles: number[];
  setTiles: React.Dispatch<React.SetStateAction<number[]>>;
  isStarted: boolean;
  setIsStarted: React.Dispatch<React.SetStateAction<boolean>>;
  hasCompletedPuzzle: boolean;
  setHasCompletedPuzzle: React.Dispatch<React.SetStateAction<boolean>>;
  counter: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
};
