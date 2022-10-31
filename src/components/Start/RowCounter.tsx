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

export const RowCounter = ({ counterVariant }: ICounter) => {
  const { rowSum, setRowSum } = usePuzzleState();
  const handleIncrease = () => {
    setRowSum((prev: number) => prev + 1);
  };

  const handleDecrease = () => {
    setRowSum((prev: number) => prev - 1);
  };

  return (
    <CounterContainer>
      <Typography className='title'>{counterVariant}</Typography>

      <Box className='counterContainer'>
        <IconButton disabled={rowSum === 2 ? true : false} onClick={() => handleDecrease()}>
          <RemoveIcon fontSize='inherit' />
        </IconButton>

        <Typography className='counterAmount'> {rowSum}</Typography>

        <IconButton disabled={rowSum >= 7 ? true : false} onClick={() => handleIncrease()}>
          <AddIcon fontSize='inherit' />
        </IconButton>
      </Box>
    </CounterContainer>
  );
};
