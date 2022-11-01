import React, { useContext, useState } from 'react';
import { IPuzzleStates } from '../../models/IPuzzleStates';

type IPuzzleStatesProvider = {
  children: JSX.Element | JSX.Element[];
};

export const PuzzleContex = React.createContext({} as IPuzzleStates);

export const usePuzzleState = () => useContext(PuzzleContex);

export const PuzzleStatesProvider = ({ children }: IPuzzleStatesProvider) => {
  const [columnSum, setColumnSum] = useState(3);
  const [rowSum, setRowSum] = useState(3);

  const boardSize = columnSum * rowSum;

  const [tiles, setTiles] = useState<number[]>([]);
  const [isStarted, setIsStarted] = useState(false);
  const [hasCompletedPuzzle, setHasCompletedPuzzle] = useState(false);

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
  };
  return <PuzzleContex.Provider value={values}>{children}</PuzzleContex.Provider>;
};
