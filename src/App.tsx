import { Board } from './components/Board/Board';
import { Box, styled } from '@mui/material';

const AppContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 'calc(10px + 2vmin)',
  // [theme.breakpoints.up('md')]: {},
}));

function App() {
  return (
    <AppContainer>
      <Board />
    </AppContainer>
  );
}

export default App;
