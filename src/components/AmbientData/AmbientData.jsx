import { Box, Grid, Paper, Typography } from '@mui/material';
import {
  useGetBoilerDataQuery,
  useGetAllWoodByDateQuery,
} from '../../slices/boilerApiSlice';
import Loader from '../Loader/Loader';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import SpeedIcon from '@mui/icons-material/Speed';
import HeatPumpIcon from '@mui/icons-material/HeatPump';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import EmojiSymbolsIcon from '@mui/icons-material/EmojiSymbols';
import { GiWoodPile } from 'react-icons/gi';

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
  const { data: woodData } = useGetAllWoodByDateQuery(
    {},
    { skip: false, refetchOnMountOrArgChange: true }
  );

  const lastDocument = isFetching
    ? null
    : boilerData?.[boilerData?.length === 1 ? 0 : boilerData?.length - 1];
  const { steamPressure, feedPump1, feedPump2, waterLevel } = lastDocument || {
    steamPressure: 0,
    feedPump1: '',
    feedPump2: '',
    waterLevel: '',
  };

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
          <Paper
            elevation={3}
            sx={{ p: 2, display: 'flex', alignItems: 'center' }}
          >
            <DeviceThermostatIcon
              sx={{
                fontSize: '3rem',
                marginRight: '1rem',
                color: 'orange',
              }}
            />

            {/* Use the Thermometer icon */}
            <div>
              <Typography variant='h6'>Ambient Temperature</Typography>
              <Typography variant='body1'>Value 1</Typography>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper
            elevation={3}
            sx={{ p: 2, display: 'flex', alignItems: 'center' }}
          >
            <SpeedIcon
              sx={{
                fontSize: '3rem',
                marginRight: '1rem',
                color: '#89bdf1',
              }}
            />

            {/* Use the Thermometer icon */}
            <div>
              <Typography variant='h6'>Steam Pressure</Typography>
              <Typography variant='body1'>
                {steamPressure || 'NO DATA'}
              </Typography>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper
            elevation={3}
            sx={{ p: 2, display: 'flex', alignItems: 'center' }}
          >
            <HeatPumpIcon
              sx={{
                fontSize: '3rem',
                marginRight: '1rem',
                color: '#326e78',
              }}
            />

            {/* Use the Thermometer icon */}
            <div>
              <Typography variant='h6'>Feed Pump</Typography>
              <Typography variant='body1'>
                {feedPump1 && feedPump2 === 'ON'
                  ? 'Both ON'
                  : feedPump1 === 'ON'
                  ? 'Pump1'
                  : feedPump2 === 'ON'
                  ? 'Pump2'
                  : 'No Data'}
              </Typography>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper
            elevation={3}
            sx={{ p: 2, display: 'flex', alignItems: 'center' }}
          >
            <WaterDropIcon
              sx={{
                fontSize: '3rem',
                marginRight: '1rem',
                color: '#7ba2d7',
              }}
            />

            {/* Use the Thermometer icon */}
            <div>
              <Typography variant='h6'>Water Analysis</Typography>
              <Typography variant='body1'>No Data</Typography>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper
            elevation={3}
            sx={{ p: 2, display: 'flex', alignItems: 'center' }}
          >
            <EmojiSymbolsIcon
              sx={{
                fontSize: '3rem',
                marginRight: '1rem',
                color: '#7ba2d7',
              }}
            />

            {/* Use the Thermometer icon */}
            <div>
              <Typography variant='h6'>Water Level</Typography>
              <Typography variant='body1'>{waterLevel || 'No Data'}</Typography>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper
            elevation={3}
            sx={{ p: 2, display: 'flex', alignItems: 'center' }}
          >
            <GiWoodPile
              style={{
                fontSize: '3rem',
                marginRight: '1rem',
                color: '#634231',
              }}
            />

            {/* Use the Thermometer icon */}
            <div>
              <Typography variant='h6'>Water Level</Typography>
              <Typography variant='body1'>
                {woodData?.totalWoodAmount || 'No Data'}
              </Typography>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AmbientData;
