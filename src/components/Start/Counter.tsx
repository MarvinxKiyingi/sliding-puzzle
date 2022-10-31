import { Box, IconButton, styled, Typography } from '@mui/material';
import { ICounter } from '../../models/ICounter';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { usePuzzleState } from '../../utils/context/PuzzleStates';

const appFontFamily = " 'Open Sans', sans-serif";
const CounterContainer = styled(Box)({
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
  '.title,.counterAmount': {
    fontFamily: appFontFamily,
    fontSize: 'calc(10px + 2vmin)',
  },
  '.counterContainer': {
    display: 'flex',
  },
});

export const Counter = ({ counterVariant }: ICounter) => {
  const { columnSum, setColumnSum, rowSum, setRowSum } = usePuzzleState();
  const handleIncrease = () => {
    if (counterVariant === 'Colum') {
      setColumnSum((prev: number) => prev + 1);
    } else setRowSum((prev: number) => prev + 1);
  };

  const handleDecrease = () => {
    if (counterVariant === 'Colum') {
      setColumnSum((prev: number) => prev - 1);
    } else setRowSum((prev: number) => prev - 1);
  };

  return (
    <CounterContainer>
      <Typography className='title'>{counterVariant}</Typography>

      <Box className='counterContainer'>
        <IconButton disabled={columnSum || rowSum === 2 ? true : false} onClick={() => handleDecrease()}>
          <RemoveIcon />
        </IconButton>

        <Typography className='counterAmount'> {columnSum || rowSum}</Typography>

        <IconButton disabled={columnSum || rowSum >= 7 ? true : false} onClick={() => handleIncrease()}>
          <AddIcon />
        </IconButton>
      </Box>
    </CounterContainer>
  );
};
