import { Box, Grid, Paper, Typography } from '@mui/material';
import {
  useGetBoilerDataQuery,
  useGetAllWoodByDateQuery,
} from '../../slices/boilerApiSlice';
import Loader from '../Loader/Loader';

const AmbientData = () => {
  const {
    data: boilerData,
    isFetching,
    isLoading,
  } = useGetBoilerDataQuery(
    {},
    {
      refetchOnMountOrArgChange: true,
      skip: false,
      // pollingInterval: 1000,
    }
  );
  const { data: woodData } = useGetAllWoodByDateQuery();

  const lastDocument = isFetching ? null : boilerData?.[boilerData?.length - 1];
  console.log(lastDocument);

  return (
    <Box
      border='1px solid black'
      borderRadius='20px'
      p='16px'
      variant='outlined'
    >
      <Grid container spacing={2} position={'relative'}>
        {isLoading && <Loader />}
        <Grid item xs={6}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant='h6'>Ambient Temperature</Typography>
            <Typography variant='body1'>Value 1</Typography>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant='h6'>Steam Pressure (psi)</Typography>
            <Typography variant='body1'>
              {lastDocument?.steamPressure || 'No data'}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant='h6'>Feed Pump</Typography>
            <Typography variant='body1'>
              {(lastDocument &&
                lastDocument?.feedPump1 &&
                (lastDocument?.feedPump1 === 'ON' ? 'Pump 1' : 'Pump 2')) ||
                'No data'}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant='h6'>Water Analysis</Typography>
            <Typography variant='body1'>Value 4</Typography>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant='h6'>Water Level (%)</Typography>
            <Typography variant='body1'>
              {lastDocument?.waterLevel || 'No data'}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant='h6'>Wood (kg)</Typography>
            <Typography variant='body1'>
              {woodData?.totalWoodAmount || '0'}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AmbientData;
