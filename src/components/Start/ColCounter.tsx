import { Box, IconButton, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { usePuzzleState } from '../../utils/context/PuzzleStates';
import { CounterContainer } from './styles/CounterContainer';

export const ColCounter = () => {
  const { columnSum, setColumnSum } = usePuzzleState();
  const handleIncrease = () => {
    setColumnSum((prev: number) => prev + 1);
  };

  const handleDecrease = () => {
    setColumnSum((prev: number) => prev - 1);
  };

  return (
    <CounterContainer className='colCounter'>
      <Typography className='title'>Column</Typography>

      <Box className='counterContainer'>
        <IconButton disabled={columnSum === 2 ? true : false} onClick={() => handleDecrease()}>
          <ExpandMoreIcon fontSize='inherit' />
        </IconButton>

        <Box className='counterAmountContainer'>
          <Typography className='counterAmount'> {columnSum}</Typography>
        </Box>

        <IconButton disabled={columnSum >= 7 ? true : false} onClick={() => handleIncrease()}>
          <ExpandLessIcon fontSize='inherit' />
        </IconButton>
      </Box>
    </CounterContainer>
  );
};
