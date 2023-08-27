import { Box, Grid, Paper, Typography } from '@mui/material';
import { useGetBoilerDataQuery } from '../../slices/boilerApiSlice';
import Loader from '../Loader/Loader';

const AmbientData = () => {
  const { data: boilerData, error, isLoading } = useGetBoilerDataQuery();
  const lastDocument = boilerData?.data[boilerData?.data?.length - 1]; // Get the last document
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
            <Typography variant='h6'>Steam Pressure</Typography>
            <Typography variant='body1'>
              {lastDocument?.steamPressure}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant='h6'>Feed Pump</Typography>
            <Typography variant='body1'>
              {lastDocument?.feedPump1 === 'ON' ? 'Pump 1' : 'Pump 2'}
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
            <Typography variant='h6'>Water Level</Typography>
            <Typography variant='body1'>{lastDocument?.waterLevel}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant='h6'>Wood</Typography>
            <Typography variant='body1'>{lastDocument?.woodAmount}</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AmbientData;
