import { Board } from './components/Board/Board';
import { Box, styled } from '@mui/material';

const AppContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 'calc(1rem + 2vmin)',
  backgroundColor: '#ede7e2',
  backgroundImage: 'radial-gradient(#000000 0.5px, transparent 0.5px), radial-gradient(#000000 0.5px, #ede7e2 0.5px)',
  backgroundSize: '20px 20px',
  backgroundPosition: '0 0,10px 10px',
}));

function App() {
  return (
    <AppContainer>
      <Board />
    </AppContainer>
  );
}

export default App;
