import {
  Box,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  Typography,
} from '@mui/material';
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
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

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
  const {
    steamPressure,
    feedPump1,
    feedPump2,
    waterLevel,
    time,
    feedWater,
    blowDown,
  } = lastDocument || {
    steamPressure: 0,
    feedPump1: '',
    feedPump2: '',
    waterLevel: 0,
    time: '',
  };

  return (
    <Box width={'100%'}>
      <Grid
        container
        justifyContent={'stretch'}
        spacing={2}
        position={'relative'}
      >
        <Grid item xs={12}>
          <Typography
            component={Paper}
            elevation={3}
            sx={{ p: '10px' }}
            variant='h6'
            textAlign={'center'}
            fontWeight={'bold'}
          >
            Boiler Sheet
          </Typography>
        </Grid>
        {isLoading && <Loader />}
        {/* <Grid item xs={12} md={6}>
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
            <div>
              <Typography variant='h6'>Ambient Temperature</Typography>
              <Typography variant='body1'>Value 1</Typography>
            </div>
          </Paper>
        </Grid> */}
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

            <div>
              <Typography variant='h6'>Steam Pressure</Typography>
              <Typography variant='body1'>{steamPressure}</Typography>
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
            <div>
              <Typography variant='h6'>Feed Pump</Typography>
              <Typography variant='body1'>
                {feedPump1 === 'ON' && feedPump2 === 'ON'
                  ? 'Both pumps are ON'
                  : feedPump1 === 'ON'
                  ? 'Pump 1 is ON'
                  : feedPump2 === 'ON'
                  ? 'Pump 2 is ON'
                  : 'Both pumps are OFF'}
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
            <EmojiSymbolsIcon
              sx={{
                fontSize: '3rem',
                marginRight: '1rem',
                color: '#7ba2d7',
              }}
            />

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

            <div>
              <Typography variant='h6'>Wood Amount</Typography>
              <Typography variant='body1'>
                {woodData ? `${woodData?.totalWoodAmount} kg` : 'No Data'}
              </Typography>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} md={12}>
          <Typography
            component={Paper}
            textAlign={'center'}
            elevation={3}
            sx={{
              p: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '10px',
            }}
          >
            Last Entry:{' '}
            {time &&
              new Date(time).toLocaleTimeString('en-US', {
                timeZone: 'Asia/Kolkata',
                hour12: true,
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
              })}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AmbientData;
