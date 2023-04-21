import { Button, CardActions, CardContent, styled, Box, Alert, Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import { usePuzzleState } from '../../utils/context/PuzzleStates';
import { isSolved } from '../../utils/isSolved';

import { shuffle } from '../../utils/shuffle';
import { swap } from '../../utils/swap';
import { Start } from '../Start/Start';
import { Tile } from '../Tile/Tile';
import { ConfettiContainer } from '../Confetti/Confetti';
import { useWindowSize } from 'react-use';

const StyledCardContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#ffffff',
  margin: '1rem',
  borderRadius: '0.5rem',
  width: '-webkit-fill-available',
  [theme.breakpoints.up(290)]: {
    padding: '2rem',
  },
  [theme.breakpoints.up('md')]: {
    width: '40%',
    aspectRatio: '1/1',
    display: 'flex',
    flexDirection: 'column',
  },
  '.board': {
    aspectRatio: '1/1',
  },
  '.buttonContainer': {
    justifyContent: 'center',
    padding: '1rem',
    fontWeight: 700,
    '.primary,.secondary': {
      fontSize: '0.7rem',
      [theme.breakpoints.up(290)]: {
        fontSize: '1rem',
      },
    },
    '.primary': {
      backgroundColor: '#FD750A',
      '&.start': {
        aspectRatio: '1/1',
        borderRadius: '50%',
      },
    },
    '.secondary': {
      border: ' solid #FD750A',
      color: '#FD750A',
    },
  },
  button: {
    fontFamily: "'Open Sans', sans-serif",
    alignSelf: 'center',
  },
}));

export const Board = () => {
  const { columnSum, rowSum, boardSize, tiles, isStarted, setTiles, setIsStarted, stopConfetti, setStopConfetti } =
    usePuzzleState();
  const { width, height } = useWindowSize();

  const startInlineStyles = {};
  const boardInlineStyles = {
    display: 'grid',
    gap: '1rem',
    gridTemplateColumns: `repeat(${columnSum}, 1fr)`,
    gridTemplateRows: `repeat(${rowSum}, 1fr)`,
  };

  const shuffleTiles = () => {
    const shuffledTiles = shuffle(tiles);
    setTiles(shuffledTiles);
  };

  const swapTiles = (tileIndex: number) => {
    const swappedTiles = swap(tiles, tiles[tileIndex], boardSize, columnSum);
    setTiles(swappedTiles);
  };

  const handleTileClick = (index: number) => {
    swapTiles(index);
  };

  const handleShuffleClick = () => {
    shuffleTiles();
  };

  const handleStartClick = () => {
    shuffleTiles();
    setIsStarted(true);
  };

  const hasWon = isSolved(tiles);

  const solvedPuzzle = hasWon && isStarted;

  // Stop the confetti efter 15 sec
  if (solvedPuzzle) {
    setTimeout(() => {
      setStopConfetti(false);
    }, 15000);
  } else {
    setStopConfetti(true);
  }

  useEffect(() => {
    setTiles([...Array(boardSize).keys()]);
  }, [boardSize, setTiles]);

  return (
    <StyledCardContainer>
      {solvedPuzzle && <ConfettiContainer height={height} width={width} numberOfPieces={150} recycle={stopConfetti} />}
      {solvedPuzzle && <Alert severity='success'>Great job! you solved it! 🎉</Alert>}

      <CardContent className='board' sx={isStarted ? boardInlineStyles : startInlineStyles}>
        {!isStarted ? (
          <Start />
        ) : (
          <>
            {tiles?.map((tile, index) => (
              <Tile key={index} tileNumber={tile} onClick={() => handleTileClick(index)} />
            ))}
          </>
        )}
      </CardContent>
      <CardActions className='buttonContainer'>
        {!isStarted ? (
          <Button className='primary start' variant='contained' size='large' onClick={() => handleStartClick()}>
            Start game
          </Button>
        ) : (
          <Stack direction='row' spacing={2}>
            <Button className='primary' variant='contained' size='large' onClick={() => handleShuffleClick()}>
              {hasWon ? 'New game' : 'Shuffle'}
            </Button>
            <Button className='secondary' variant='outlined' size='large' onClick={() => setIsStarted(false)}>
              Home
            </Button>
          </Stack>
        )}
      </CardActions>
    </StyledCardContainer>
  );
};
