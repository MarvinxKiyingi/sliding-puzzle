import { styled, Box } from '@mui/material';
import { ITile } from '../../models/ITile';
import { usePuzzleState } from '../../utils/context/PuzzleStates';

const StyledTile = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  backgroundColor: '#f5ff7d',
  color: '#371722',
  borderRadius: 10,
  boxSizing: 'border-box',
  fontSize: 'larger',
  fontWeight: 700,
}));

export const Tile = (props: ITile) => {
  const { boardSize } = usePuzzleState();
  return (
    <StyledTile onClick={props?.onClick} style={{ opacity: props.tileNumber === boardSize - 1 ? 0 : 1 }}>
      {props.tileNumber + 1}
    </StyledTile>
  );
};
