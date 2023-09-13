import { Button, Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import FormContainer from '../FormContainer/FormContainer';

const Hero = () => {
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <FormContainer>
      <Box
        sx={{
          padding: '10px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant='h3' m={5} textAlign='center'>
          Welcome to Dashboard
        </Typography>

        {userInfo ? (
          userInfo.role === 'admin' ? (
            <Button
              variant='contained'
              color='primary'
              component={Link}
              to={`/${userInfo.company}/dashboard`}
              sx={{
                borderRadius: '10px !important',
                padding: '10px !important',
                margin: '5px 5px !important',
                width: '300px',
              }}
            >
              Dashboard
            </Button>
          ) : (
            <Button
              variant='contained'
              color='primary'
              component={Link}
              to={`/${userInfo.company}/boiler`}
              sx={{
                borderRadius: '10px !important',
                padding: '10px !important',
                margin: '5px 5px !important',
                width: '300px',
              }}
            >
              Boiler
            </Button>
          )
        ) : (
          <>
            <Box
              sx={{
                width: '100%',
                display: { sm: 'flex', md: 'row' },
                flexDirection: { sm: 'column', md: 'row' },
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Button
                variant='contained'
                color='primary'
                component={Link}
                to='/login'
                sx={{
                  borderRadius: '10px !important',
                  padding: '10px !important',
                  margin: '5px 5px !important',
                  width: '300px',
                }}
              >
                Login
              </Button>
              {/* {//!Disabled for MVP} */}
              {/* <Button
                variant='contained'
                color='primary'
                component={Link}
                to='/register'
                sx={{
                  borderRadius: '10px !important',
                  padding: '10px !important',
                  margin: '5px 5px !important',
                  width: '300px',
                }}
              >
                Register
              </Button> */}
            </Box>
          </>
        )}
      </Box>
    </FormContainer>
  );
};

export default Hero;
