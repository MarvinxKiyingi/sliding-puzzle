import { Button, CardActions, CardContent, styled, Box, Alert } from '@mui/material';
import { useState } from 'react';

import { isSolved } from '../../utils/isSolvable';

import { shuffle } from '../../utils/shuffle';
import { swap } from '../../utils/swap';

import { columnSum, rowSum, boardSize } from '../../utils/variables';

import { Tile } from '../Tile/Tile';

const StyledCardContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#f8e5e5',
  margin: '1rem',
  width: '-webkit-fill-available',
  [theme.breakpoints.up('md')]: {
    width: '50%',
    aspecRatio: '1/1',
    display: 'flex',
    flexDirection: 'column',
  },
  '.board': {
    aspectRatio: '1/1',
  },
  '.buttonContainer': {
    justifyContent: 'center',
  },
  button: {
    fontFamily: "'Open Sans', sans-serif",
    alignSelf: 'center',
  },
}));

const inlineStyles = {
  display: 'grid',
  gap: '1rem',
  gridTemplateColumns: `repeat(${columnSum}, 1fr)`,
  gridTemplateRows: `repeat(${rowSum}, 1fr)`,
};

export const Board = () => {
  const [tiles, setTiles] = useState([...Array(boardSize).keys()]);
  const [isStarted, setIsStarted] = useState(false);
  const [hasCompletedPuzzle, setHasCompletedPuzzle] = useState(false);

  const shuffleTiles = () => {
    const shuffledTiles = shuffle(tiles);
    setTiles(shuffledTiles);
  };

  const swapTiles = (tileIndex: number) => {
    const swappedTiles = swap(tiles, tiles[tileIndex]);
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

  if (hasCompletedPuzzle) {
    setHasCompletedPuzzle(isSolved(tiles));
  }

  return (
    <StyledCardContainer>
      {hasCompletedPuzzle && isStarted && <Alert severity='success'>Great job! you solved it! 🎉</Alert>}

      <CardContent className='board' sx={inlineStyles}>
        {tiles.map((tile, index) => (
          <Tile key={index} tileNumber={tile} onClick={() => handleTileClick(index)} />
        ))}
      </CardContent>
      <CardActions className='buttonContainer'>
        {!isStarted ? (
          <Button variant='contained' size='large' onClick={() => handleStartClick()}>
            Start game
          </Button>
        ) : (
          <Button variant='contained' size='large' onClick={() => handleShuffleClick()}>
            Shuffle
          </Button>
        )}
      </CardActions>
    </StyledCardContainer>
  );
};
