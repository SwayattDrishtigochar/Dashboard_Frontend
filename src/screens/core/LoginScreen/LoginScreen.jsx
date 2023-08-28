import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useLoginMutation } from '../../../slices/authApiSlice';
import { setCredentials } from '../../../slices/authSlice';
import { toast } from 'react-toastify';
import {
  Visibility as VisibilityIcon,
  VisibilityOff as VisibilityOffIcon,
  Email as EmailIcon,
} from '@mui/icons-material';

import FormContainer from '../../../components/FormContainer/FormContainer';
import Loader from '../../../components/Loader/Loader';
import useStyles from './styles';
// import KioskBoard from 'kioskboard';
import Keyboard from '../../../components/Keyboard/Keyboard';

const LoginScreen = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const classes = useStyles();

  const [showPassword, setShowPassword] = useState(false);

  const [login, { isLoading, isError }] = useLoginMutation();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      if (userInfo.role === 'admin') {
        navigate(`/${userInfo.company}/dashboard`);
      } else {
        navigate(`/${userInfo.company}/boiler`);
      }
    }
  }, [navigate, userInfo]);

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = emailRef.current.querySelector('input').value;
    const password = passwordRef.current.querySelector('input').value;
    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate('/');
      toast.success('Login Successful');
    } catch (err) {
      toast.error(err?.data?.message || err?.error);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <FormContainer>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: 3,
        }}
      >
        <Typography variant='h4' component='h2' gutterBottom>
          Login
        </Typography>
        <Typography variant='h6' component='p' gutterBottom>
          Welcome back!
        </Typography>
        <form onSubmit={handleLogin} style={{ width: '100%' }}>
          <FormControl fullWidth margin='normal'>
            <TextField
              ref={emailRef}
              label='Email'
              error={isError}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <EmailIcon />
                  </InputAdornment>
                ),
              }}
            />
            <Keyboard inputRef={emailRef} />
          </FormControl>

          <FormControl fullWidth margin='normal'>
            <TextField
              label='Password'
              type={showPassword ? 'text' : 'password'}
              ref={passwordRef}
              error={isError}
              // helperText={error}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <IconButton onClick={toggleShowPassword} edge='start'>
                      {showPassword ? (
                        <VisibilityOffIcon />
                      ) : (
                        <VisibilityIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Keyboard inputRef={passwordRef} />
          </FormControl>

          <Button
            component={Link}
            to='/forget-password'
            variant='text'
            sx={{ mb: 3, textAlign: 'right' }}
          >
            Forgot Password?
          </Button>
          <Button
            type='submit'
            variant='contained'
            color='primary'
            className={classes.button}
            sx={{
              //change background color to white if isloading
              backgroundColor: isLoading ? 'white' : 'primary.main',
              mt: 2,
              mb: 1,
              position: 'relative',
              width: '100%',
              height: '50px',
            }}
          >
            {isLoading ? <Loader /> : 'Log In'}
          </Button>
          {/* //!Disabled for MVP */}
          {/* 
          <Typography variant='body1' textAlign='center' mt={2}>
            Dont have an account? <Link to='/register'>Register here</Link>
          </Typography> */}
        </form>
      </Box>
    </FormContainer>
  );
};

export default LoginScreen;
