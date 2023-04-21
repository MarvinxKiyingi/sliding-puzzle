import { Box, styled } from '@mui/material';

const appFontFamily = " 'Open Sans', sans-serif";
export const CounterContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
  alignItems: 'center',
  '.title,.counterAmount': {
    fontFamily: appFontFamily,

    [theme.breakpoints.up('sm')]: {
      fontSize: 'calc(2rem + 2vmin)',
    },
  },
  '.counterContainer': {
    display: 'flex',
    gap: '0.8rem',
  },

  '.counterAmount': {
    display: 'flex',
    justifyContent: 'center',
    height: '100%',
    alignItems: 'center',
    padding: '0 1rem',
    backgroundColor: '#f5ff7d',
    borderRadius: '0.5rem',
    boxShadow: '0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)',
    [theme.breakpoints.up('md')]: {
      padding: '0 1.5rem',
    },
  },
}));
