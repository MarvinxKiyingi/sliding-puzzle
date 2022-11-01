import { Box, styled, Typography } from '@mui/material';
import { usePuzzleState } from '../../utils/context/PuzzleStates';
import { ColCounter } from './ColCounter';
import { RowCounter } from './RowCounter';

const StyledStartContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  gap: '2rem',
  '.rowCounter,.colCounter': {
    flex: 1,
  },
  '.boardSizeContainer': {
    display: 'flex',
    justifyContent: 'center',
    flex: 2,

    '.boardSize': {
      display: 'flex',
      justifyContent: 'center',
      fontWeight: 400,
      alignItems: 'center',
      [theme.breakpoints.down(290)]: {
        fontSize: '4rem',
      },
      [theme.breakpoints.up(290)]: {
        fontSize: '6rem',
      },
    },
  },
}));

export const Start = () => {
  const { columnSum, rowSum } = usePuzzleState();
  return (
    <StyledStartContainer>
      <ColCounter />

      <RowCounter />

      <Box className='boardSizeContainer'>
        <Typography variant='h1' className='boardSize'>
          {`${columnSum} X ${rowSum}`}
        </Typography>
      </Box>
    </StyledStartContainer>
  );
};
