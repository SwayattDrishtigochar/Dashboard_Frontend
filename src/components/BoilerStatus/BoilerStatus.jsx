import { Box, Grid, Paper, Typography } from '@mui/material';
import BoilerImg from '../../assets/boiler.png';
import { useGetSensorStateQuery } from '../../slices/api/sensorApiSlice';

const BoilerStatus = () => {
  const { data: boilerState, isLoading } = useGetSensorStateQuery(
    {
      collection: 'INMotor',
    },
    {
      refetchOnMountOrArgChange: true,
      skip: false,
      // pollingInterval: 1000,
    }
  );

  return (
    <Box width={'100%'}>
      <Grid container spacing={2}>
        <Grid item xs={12} width={'100%'}>
          <Typography
            component={Paper}
            elevation={3}
            sx={{ p: '10px' }}
            variant='h6'
            textAlign={'center'}
            fontWeight={'bold'}
          >
            Boiler Status
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box component={Paper}>
            <img src={BoilerImg} width={'100%'} />
          </Box>
        </Grid>
        <Grid item container xs={12} md={6} spacing={2}>
          <Grid item xs={12}>
            <Box
              component={Paper}
              p={'10px 15px'}
              bgcolor={
                isLoading ? '#f0d615' : boilerState ? '#3dcc5b' : '#ff5454'
              }
            >
              <Typography variant={'h6'} textAlign={'center'}>
                Boiler is {isLoading ? 'Loading' : boilerState ? 'ON' : 'OFF'}
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box component={Paper} p={'10px 15px'}>
              <Typography variant={'body1'} fontSize={'18px'}>
                Running Time:{' '}
                {isLoading ? 'Loading' : boilerState ? 'ON' : 'OFF'}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box component={Paper} p={'10px 15px'}>
              <Typography variant={'body1'} fontSize={'18px'}>
                Main Control Valve:{' '}
                {isLoading ? 'Loading' : boilerState ? 'ON' : 'OFF'}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box component={Paper} p={'10px 15px'}>
              <Typography variant={'body1'} fontSize={'18px'}>
                Status: {isLoading ? 'Loading' : boilerState ? 'ON' : 'OFF'}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BoilerStatus;
