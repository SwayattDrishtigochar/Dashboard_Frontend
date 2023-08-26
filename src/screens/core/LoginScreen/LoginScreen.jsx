import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
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
import Keyboard from 'react-simple-keyboard';
import FormContainer from '../../../components/FormContainer/FormContainer';
import Loader from '../../../components/Loader/Loader';
import useStyles from './styles';
import KioskBoard from 'kioskboard';
// import "../../../../node_modules/react-simple-keyboard/build/css/index.css";

const LoginScreen = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  // const [layoutName, setLayoutName] = useState('default');
  // const [inputName, setInputName] = useState(''); // Track the active input field name for the Keyboard
  // const [keyboardValue, setKeyboardValue] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const classes = useStyles();

  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [login, { isLoading, error, isError }] = useLoginMutation();

  const { userInfo } = useSelector((state) => state.auth);

  // const isFormValid = email && password;

  // const handleInputChange = (inputValue) => {
  //   setKeyboardValue(inputValue);
  //   if (inputName === 'email') {
  //     setEmail(inputValue);
  //   } else if (inputName === 'password') {
  //     setPassword(inputValue);
  //   }
  // };

  useEffect(() => {
    if (userInfo) {
      if (userInfo.role === 'admin') {
        navigate(`/${userInfo.company}/dashboard`);
      } else {
        navigate(`/${userInfo.company}/boiler`);
      }
    }
  }, [navigate, userInfo]);

  useEffect(() => {
    if (emailRef.current) {
      KioskBoard?.run(emailRef.current.querySelector('input'), {
        language: 'en',
        theme: 'light',
        autoScroll: true,
        allowRealKeyboard: true,
        allowMobileKeyboard: true,
        capsLockActive: false,
        keysArrayOfObjects: [
          {
            0: 'q',
            1: 'w',
            2: 'e',
            3: 'r',
            4: 't',
            5: 'y',
            6: 'u',
            7: 'i',
            8: 'o',
            9: 'p',
          },
          {
            0: 'a',
            1: 's',
            2: 'd',
            3: 'f',
            4: 'g',
            5: 'h',
            6: 'j',
            7: 'k',
            8: 'l',
            9: '@',
          },
          {
            0: 'z',
            1: 'x',
            2: 'c',
            3: 'v',
            4: 'b',
            5: 'n',
            6: 'm',
            7: '.',
          },
        ],
      });
    }
    if (passwordRef.current) {
      KioskBoard?.run(passwordRef.current.querySelector('input'), {
        language: 'en',
        theme: 'light',
        autoScroll: true,
        allowRealKeyboard: true,
        allowMobileKeyboard: true,
        capsLockActive: false,
        keysArrayOfObjects: [
          {
            0: 'q',
            1: 'w',
            2: 'e',
            3: 'r',
            4: 't',
            5: 'y',
            6: 'u',
            7: 'i',
            8: 'o',
            9: 'p',
          },
          {
            0: 'a',
            1: 's',
            2: 'd',
            3: 'f',
            4: 'g',
            5: 'h',
            6: 'j',
            7: 'k',
            8: 'l',
            9: '@',
          },
          {
            0: 'z',
            1: 'x',
            2: 'c',
            3: 'v',
            4: 'b',
            5: 'n',
            6: 'm',
            7: '.',
          },
        ],
      });
    }
  }, [emailRef, passwordRef]);

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

  // const onKeyPress = (button, e) => {
  //   if (button === '{shift}') {
  //     setLayoutName(layoutName === 'default' ? 'shift' : 'default');
  //   }
  //   if (button === '{enter}') {
  //     handleLogin(e);
  //   }
  // };

  console.log('LoginScreen rendered');

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
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
              // onFocus={() => setInputName('email')} // Set the active input field for the Keyboard
              error={isError}
              // helperText={error}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <EmailIcon />
                  </InputAdornment>
                ),
              }}
            />
          </FormControl>

          <FormControl fullWidth margin='normal'>
            <TextField
              label='Password'
              type={showPassword ? 'text' : 'password'}
              ref={passwordRef}
              // value={password}
              // onChange={(e) => setPassword(e.target.value)}
              // onFocus={() => setInputName('password')} // Set the active input field for the Keyboard
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
          </FormControl>
          {/* {inputName === 'email' && ( // Render the Keyboard below the Email TextField when the inputName matches
            <Keyboard
              layoutName={layoutName}
              theme='hg-theme-default hg-layout-numeric numeric-theme'
              layout={{
                default: [
                  '1 2 3 4 5 6 7 8 9 0 .',
                  'q w e r t y u i o p',
                  'a s d f g h j k l',
                  '{shift} z x c v b n m {backspace}',
                  '@ {space} {enter}',
                ],
                shift: [
                  '! @ # $ % ^ & * ( ) .',
                  'Q W E R T Y U I O P',
                  'A S D F G H J K L',
                  '{shift} Z X C V B N M {backspace}',
                  '@ {space} {enter}',
                ],
                numbers: ['1 2 3', '4 5 6', '7 8 9', '{abc} 0 {backspace}'],
              }}
              display={{
                '{clear}': 'C',
                '{bksp}': 'backspace',
                '{enter}': 'Enter',
                '{backspace}': '⌫',
                '{shift}': '⇧',
                '{space}': 'space ',
              }}
              inputName='email'
              onKeyPress={onKeyPress}
              onChange={(input) => handleInputChange(input)}
              value={keyboardValue}
            />
          )}
          {inputName === 'password' && (
            <Keyboard
              inputName='password'
              theme='hg-theme-default hg-layout-numeric numeric-theme'
              layout={{
                default: [
                  '1 2 3 4 5 6 7 8 9 0 .',
                  'q w e r t y u i o p',
                  'a s d f g h j k l',
                  '{shift} z x c v b n m {backspace}',
                  '@ {space} {enter}',
                ],
                shift: [
                  '! @ # $ % ^ & * ( ) .',
                  'Q W E R T Y U I O P',
                  'A S D F G H J K L',
                  '{shift} Z X C V B N M {backspace}',
                  '@ {space} {enter}',
                ],
                numbers: ['1 2 3', '4 5 6', '7 8 9', '{abc} 0 {backspace}'],
              }}
              display={{
                '{clear}': 'C',
                '{bksp}': 'backspace',
                '{enter}': 'Enter',
                '{backspace}': '⌫',
                '{shift}': '⇧',
                '{space}': ' space',
              }}
              onKeyPress={onKeyPress}
              onChange={(input) => handleInputChange(input)}
              value={keyboardValue}
            />
          )} */}

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
            // disabled={!isFormValid}
            className={classes.button}
            sx={{ mt: 2, mb: 1 }}
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
