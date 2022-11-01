import { Box, IconButton, styled, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { usePuzzleState } from '../../utils/context/PuzzleStates';

const appFontFamily = " 'Open Sans', sans-serif";
const CounterContainer = styled(Box)({
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
  alignItems: 'center',
  '.title,.counterAmount': {
    fontFamily: appFontFamily,
    fontSize: 'calc(10px + 2vmin)',
  },
  '.counterContainer': {
    display: 'flex',
    alignItems: 'center',
  },
});

export const ColCounter = () => {
  const { columnSum, setColumnSum } = usePuzzleState();
  const handleIncrease = () => {
    setColumnSum((prev: number) => prev + 1);
  };

  const handleDecrease = () => {
    setColumnSum((prev: number) => prev - 1);
  };

  return (
    <CounterContainer>
      <Typography className='title'>Column</Typography>

      <Box className='counterContainer'>
        <IconButton disabled={columnSum === 2 ? true : false} onClick={() => handleDecrease()}>
          <RemoveIcon fontSize='inherit' />
        </IconButton>

        <Typography className='counterAmount'> {columnSum}</Typography>

        <IconButton disabled={columnSum >= 7 ? true : false} onClick={() => handleIncrease()}>
          <AddIcon fontSize='inherit' />
        </IconButton>
      </Box>
    </CounterContainer>
  );
};
