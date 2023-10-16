import { Box, Grid, Paper, Typography } from '@mui/material';
import {
  useGetBoilerDataQuery,
  useGetAllWoodByDateQuery,
} from '../../slices/api/boilerApiSlice';
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
    <Box borderRadius='20px' width={'100%'}>
      <Grid container spacing={2} position={'relative'}>
        {isLoading && <Loader />}
        <Grid item xs={12} md={6}>
          <Paper
            elevation={3}
            sx={{
              p: 2,
              display: 'flex',
              alignItems: 'center',
              borderRadius: '10px',
            }}
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
        <Grid item xs={12} md={6}>
          <Paper
            elevation={3}
            sx={{
              p: 2,
              display: 'flex',
              alignItems: 'center',
              borderRadius: '10px',
            }}
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
        <Grid item xs={12} md={6}>
          <Paper
            elevation={3}
            sx={{
              p: 2,
              display: 'flex',
              alignItems: 'center',
              borderRadius: '10px',
            }}
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
                {feedPump1 === 'ON' && feedPump2 === 'ON'
                  ? 'Both pumps are ON'
                  : feedPump1 === 'ON'
                  ? 'Pump 1 is ON'
                  : feedPump2 === 'ON'
                  ? 'Pump 2 is ON'
                  : 'No Data'}
              </Typography>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper
            elevation={3}
            sx={{
              p: 2,
              display: 'flex',
              alignItems: 'center',
              borderRadius: '10px',
            }}
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
        <Grid item xs={12} md={6}>
          <Paper
            elevation={3}
            sx={{
              p: 2,
              display: 'flex',
              alignItems: 'center',
              borderRadius: '10px',
            }}
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
              <Typography variant='body1'>
                {waterLevel ? `${waterLevel} %` : 'No Data'}
              </Typography>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper
            elevation={3}
            sx={{
              p: 2,
              display: 'flex',
              alignItems: 'center',
              borderRadius: '10px',
            }}
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
              <Typography variant='h6'>Wood Amount</Typography>
              <Typography variant='body1'>
                {woodData ? `${woodData?.totalWoodAmount} kg` : 'No Data'}
              </Typography>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AmbientData;
