import { Button, CardActions, CardContent, styled, Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { shuffle } from '../../utils/shuffle';

import { columnSum, rowSum, tileSum } from '../../utils/variables';
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
    div: {
      flexBasis: '20%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
    },
  },
  '.buttonContainer': {
    justifyContent: 'center',
  },
  button: {
    fontFamily: "'Open Sans', sans-serif",
    alignSelf: 'center',
  },
}));
export const Board = () => {
  const [tiles, setTiles] = useState([...Array(tileSum).keys()]);
  const [isStarted, setIsStarted] = useState(false);

  const squares = Array.from({ length: tileSum }, (_tile, i) => i);

  const moveSquare = (tile: number) => {
    let zeroIndex = tiles.indexOf(0);
    let valIndex = tiles.indexOf(tile);

    console.log('tiles', tiles.length);
    console.log('zeroIndex', zeroIndex);
    console.log('valIndex', valIndex);

    if (valIndex + columnSum === zeroIndex || valIndex - columnSum === zeroIndex) {
      swap(valIndex, zeroIndex);
    } else if (valIndex + 1 === zeroIndex && zeroIndex % columnSum !== 0) {
      swap(valIndex, zeroIndex);
    } else if (valIndex - 1 === zeroIndex && (zeroIndex + 1) % columnSum !== 0) {
      swap(valIndex, zeroIndex);
    }
  };

  const swap = (valIndex: number, zeroIndex: number) => {
    let temArray = [...tiles];
    temArray[zeroIndex] = tiles[valIndex];
    temArray[valIndex] = 0;
    setTiles(() => [...temArray]);
  };

  const handleShuffleClick = () => {
    setTiles(shuffle(tiles));
  };

  const handleStartClick = () => {
    setTiles(() => shuffle(squares));
    setIsStarted(true);
  };

  return (
    <StyledCardContainer>
      <CardContent
        className='board'
        sx={{
          display: 'grid',
          gap: '1rem',
          gridTemplateColumns: `repeat(${columnSum}, 1fr)`,
          gridTemplateRows: `repeat(${rowSum}, 1fr)`,
        }}
      >
        {tiles.map((tile, index) => (
          <Tile key={index} tileNumber={tile ? tile : ''} onClick={() => moveSquare(tile)} />
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
