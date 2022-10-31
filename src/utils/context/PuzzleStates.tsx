import React, { useContext, useState } from 'react';
import { IPuzzleStates } from '../../models/IPuzzleStates';

type props = {
  children: JSX.Element | JSX.Element[];
};

export const PuzzleContex = React.createContext({} as IPuzzleStates);

export const usePuzzleState = () => useContext(PuzzleContex);

export const PuzzleStatesProvider = ({ children }: props) => {
  const [columnSum, setColumnSum] = useState(3);
  const [rowSum, setRowSum] = useState(3);

  const boardSize = columnSum * rowSum;

  const [tiles, setTiles] = useState<number[]>([]);
  const [isStarted, setIsStarted] = useState(false);
  const [hasCompletedPuzzle, setHasCompletedPuzzle] = useState(false);

  const [counter, setCounter] = useState(2);

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
    counter,
    setCounter,
  };
  return <PuzzleContex.Provider value={values}>{children}</PuzzleContex.Provider>;
};
