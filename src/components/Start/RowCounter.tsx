import { Box, IconButton, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { usePuzzleState } from '../../utils/context/PuzzleStates';
import { CounterContainer } from './styles/CounterContainer';

export const RowCounter = () => {
  const { rowSum, setRowSum } = usePuzzleState();
  const handleIncrease = () => {
    setRowSum((prev: number) => prev + 1);
  };

  const handleDecrease = () => {
    setRowSum((prev: number) => prev - 1);
  };

  return (
    <CounterContainer className='rowCounter'>
      <Typography className='title'>Row</Typography>

      <Box className='counterContainer'>
        <IconButton disabled={rowSum === 2 ? true : false} onClick={() => handleDecrease()}>
          <ExpandMoreIcon fontSize='inherit' />
        </IconButton>

        <Box className='counterAmountContainer'>
          <Typography className='counterAmount'> {rowSum}</Typography>
        </Box>

        <IconButton disabled={rowSum >= 7 ? true : false} onClick={() => handleIncrease()}>
          <ExpandLessIcon fontSize='inherit' />
        </IconButton>
      </Box>
    </CounterContainer>
  );
};
