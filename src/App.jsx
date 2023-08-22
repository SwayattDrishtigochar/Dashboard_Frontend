import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CssBaseline } from '@mui/material';

const App = () => {
  return (
    <>
      <CssBaseline />
      <ToastContainer theme='colored' />
      <Box className='App'>
        <Outlet />
      </Box>
    </>
  );
};

export default App;
