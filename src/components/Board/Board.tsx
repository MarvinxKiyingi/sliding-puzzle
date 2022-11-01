import { Button, CardActions, CardContent, styled, Box, Alert, Stack } from '@mui/material';
import { useEffect } from 'react';
import { usePuzzleState } from '../../utils/context/PuzzleStates';
import { isSolved } from '../../utils/isSolved';

import { shuffle } from '../../utils/shuffle';
import { swap } from '../../utils/swap';
import { Start } from '../Start/Start';
import { Tile } from '../Tile/Tile';

const StyledCardContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#f8e5e5',
  margin: '1rem',
  width: '-webkit-fill-available',
  [theme.breakpoints.up('md')]: {
    width: '50%',
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
  },
  button: {
    fontFamily: "'Open Sans', sans-serif",
    alignSelf: 'center',
  },
}));

export const Board = () => {
  const { columnSum, rowSum, boardSize, tiles, isStarted, setTiles, setIsStarted } = usePuzzleState();

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

    if (isSolved(shuffledTiles)) {
      setTiles(shuffledTiles);
    }
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

  useEffect(() => {
    setTiles([...Array(boardSize).keys()]);
  }, [boardSize, setTiles]);

  return (
    <StyledCardContainer>
      {hasWon && isStarted && <Alert severity='success'>Great job! you solved it! 🎉</Alert>}

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
          <Button variant='contained' size='large' onClick={() => handleStartClick()}>
            Start game
          </Button>
        ) : (
          <Stack direction='row' spacing={2}>
            <Button variant='contained' size='large' onClick={() => handleShuffleClick()}>
              {hasWon ? 'New game' : 'Shuffle'}
            </Button>
            <Button variant='outlined' size='large' onClick={() => setIsStarted(false)}>
              Home
            </Button>
          </Stack>
        )}
      </CardActions>
    </StyledCardContainer>
  );
};
