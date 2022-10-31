import { Box, styled } from '@mui/material';
import { usePuzzleState } from '../../utils/context/PuzzleStates';
import { ColCounter } from './ColCounter';
import { RowCounter } from './RowCounter';

const StyledStartContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '3rem',
  '.boardSize': {
    display: 'flex',
    justifyContent: 'center',
  },
}));

export const Start = () => {
  const { columnSum, rowSum } = usePuzzleState();
  return (
    <StyledStartContainer>
      <ColCounter counterVariant={'Colum'} />
      <RowCounter counterVariant={'Row'} />
      <Box className='boardSize'> {`${columnSum} X ${rowSum}`}</Box>
    </StyledStartContainer>
  );
};
