import { Box, Grid, Paper, Typography } from '@mui/material';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';

import BoilerImg from '../../../assets/boiler.png';
import AmbientData from '../../../components/AmbientData/AmbientData';
import OeeChart from '../../../components/OeeChart/OeeChart';

// DashboardScreen component
const DashboardScreen = () => {
  // Data for temperature chart
  const temperatureData = getTemperatureData();

  // Data for steam pressure chart
  const steamPressureData = getSteamPressureData();

  return (
    <Box sx={{ display: 'flex', mt: '70px' }}>
      <Box width='100%' display='flex' flexDirection='column' mr={'20px'}>
        <Grid container spacing={1} width='100%' m={'10px'}>
          <Grid item xs={12} md={6} xl={6}>
            <DashboardCard title='Steam Pressure' data={steamPressureData} />
          </Grid>
          <Grid item xs={12} md={6} xl={6}>
            <DashboardCard title='Performance Trend' data={temperatureData} />
          </Grid>
        </Grid>
        <Grid container spacing={1} width='100%' m={'10px'}>
          <Grid item xl={6}>
            <AmbientData />
          </Grid>
          <Grid item xl={3}>
            <BoilerStatus image={BoilerImg} status='ON' />
          </Grid>
          <Grid item xl={3}>
            <Notifications
              notifications={[
                'Notification 1',
                'Notification 2',
                'Notification 3',
              ]}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

// Function to generate temperature data
const getTemperatureData = () => {
  // Add your logic to generate or fetch temperature data
  return [];
};

// Function to generate steam pressure data
const getSteamPressureData = () => {
  // Add your logic to generate or fetch steam pressure data
  return [];
};

// DashboardCard component
const DashboardCard = ({ title, data }) => {
  return (
    <Box
      sx={{ p: 2, background: '#fefefe' }}
      border='1px solid black'
      borderRadius='20px'
    >
      <Grid container spacing={1}>
        <Grid item xs={12} xl={6}>
          <Paper
            elevation={12}
            sx={{ borderRadius: '10px', textAlign: 'center' }}
          >
            <OeeChart />
            <Typography fontWeight={'bold'}>{title}</Typography>
          </Paper>
        </Grid>
        <Grid item xl={6} xs={12}>
          <Paper
            elevation={12}
            sx={{ borderRadius: '10px', textAlign: 'center', width: '100%' }}
          >
            <ResponsiveContainer width={'100%'} height={250}>
              <LineChart data={data}>
                <XAxis dataKey='time' />
                <YAxis />
                <CartesianGrid stroke='#eee' strokeDasharray='5 5' />
                <Line type='monotone' dataKey='value' stroke='#82ca9d' />
              </LineChart>
            </ResponsiveContainer>
            <Typography fontWeight={'bold'}>{title}</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

// BoilerStatus component
const BoilerStatus = ({ image, status }) => {
  return (
    <Box
      border='1px solid black'
      borderRadius='20px'
      p='16px'
      variant='outlined'
      display='flex'
      flexDirection='column'
      alignItems='center'
      justifyContent='space-between'
    >
      <img src={image} width='300px' />
      <Box component={Paper} p={'10px 15px'} bgcolor='#3dcc5b' sx={{}}>
        Boiler {status}
      </Box>
    </Box>
  );
};

// Notifications component
const Notifications = ({ notifications }) => {
  return (
    <Box border='1px solid black' borderRadius='20px' p={'16px !important'}>
      <Typography variant='h6' gutterBottom>
        Notifications
      </Typography>
      <Typography variant='body1' component='ol' p={'16px'}>
        {notifications.map((notification, index) => (
          <li key={index}>{notification}</li>
        ))}
      </Typography>
    </Box>
  );
};

export default DashboardScreen;
