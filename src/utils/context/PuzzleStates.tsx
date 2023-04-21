import React, { useContext, useState } from 'react';
import { IPuzzleStates } from '../../models/IPuzzleStates';

type IPuzzleStatesProvider = {
  children: JSX.Element | JSX.Element[];
};

// Initiating context
export const PuzzleContex = React.createContext({} as IPuzzleStates);

// Exporting the context, to be used wherever
export const usePuzzleState = () => useContext(PuzzleContex);

export const PuzzleStatesProvider = ({ children }: IPuzzleStatesProvider) => {
  const [columnSum, setColumnSum] = useState(3);
  const [rowSum, setRowSum] = useState(3);

  const boardSize = columnSum * rowSum;

  const [tiles, setTiles] = useState<number[]>([]);
  const [isStarted, setIsStarted] = useState(false);
  const [hasCompletedPuzzle, setHasCompletedPuzzle] = useState(false);
  const [stopConfetti, setStopConfetti] = useState(true);

  const values = {
    columnSum,
    setColumnSum,
    rowSum,
    setRowSum,
    boardSize,
    tiles,
    setTiles,
    isStarted,
    setIsStarted,
    hasCompletedPuzzle,
    setHasCompletedPuzzle,
    stopConfetti,
    setStopConfetti,
  };
  return <PuzzleContex.Provider value={values}>{children}</PuzzleContex.Provider>;
};
