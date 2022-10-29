import { Button, CardActions, CardContent, styled, Box } from '@mui/material';
import { useState } from 'react';
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
      // '&:last-child': {
      //   backgroundColor: 'white',
      //   color: 'white',
      // },
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
  const list = [...Array(tileSum).keys()];

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
        {list.map((tile) => (
          <Tile key={tile} tileNumber={tile ? tile : ''} />
        ))}
      </CardContent>
      <CardActions className='buttonContainer'>
        <Button variant='contained' size='large'>
          Shuffle
        </Button>
      </CardActions>
    </StyledCardContainer>
  );
};
