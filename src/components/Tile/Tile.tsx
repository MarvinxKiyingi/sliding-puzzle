import { styled, Button, Box } from '@mui/material';
import { ITile } from '../models/ITile';

const StyledTile = styled(Box)(({ theme }) => ({
  backgroundColor: '#371722',
  color: '#BBAB9B',
  padding: 20,

  borderRadius: 10,
  boxSizing: 'border-box',
}));

export const Tile = (props: ITile) => {
  return <StyledTile onClick={props?.onClick}>{props.tileNumber}</StyledTile>;
};
