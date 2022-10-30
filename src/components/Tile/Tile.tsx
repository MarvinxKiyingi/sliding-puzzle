import { styled, Box } from '@mui/material';
import { ITile } from '../../models/ITile';
import { boardSize } from '../../utils/variables';

const StyledTile = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  backgroundColor: '#371722',
  color: '#BBAB9B',
  borderRadius: 10,
  boxSizing: 'border-box',
  fontSize: 'larger',
}));

export const Tile = (props: ITile) => {
  return (
    <StyledTile onClick={props?.onClick} style={{ opacity: props.tileNumber === boardSize - 1 ? 0 : 1 }}>
      {props.tileNumber + 1}
    </StyledTile>
  );
};
