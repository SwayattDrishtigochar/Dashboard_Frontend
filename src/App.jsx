import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CssBaseline } from '@mui/material';
import Header from './components/Header/Header';

const App = () => {
  return (
    <>
      <CssBaseline />
      <ToastContainer theme='colored' />

      {/* <Header /> */}
      <Box className='App' display={'flex'}>
        <Header />
        <Outlet />
      </Box>
    </>
  );
};

export default App;
