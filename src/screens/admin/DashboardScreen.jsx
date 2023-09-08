import { Box, Grid, Paper, Typography } from '@mui/material';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';
import AdminHeader from './AdminHeader/AdminHeader';
import BoilerImg from '../../assets/boiler.png';
import AmbientData from '../../components/AmbientData/AmbientData';
import OeeChart from '../../components/OeeChart/OeeChart';

const DashboardScreen = () => {
  const temperatureData = [
    {
      time: '00:00:00',
      temperature: 34.7,
    },
    {
      time: '00:30:00',
      temperature: 42.3,
    },
    {
      time: '01:00:00',
      temperature: 38.9,
    },
    {
      time: '01:30:00',
      temperature: 45.1,
    },
    {
      time: '02:00:00',
      temperature: 31.5,
    },
    {
      time: '02:30:00',
      temperature: 47.2,
    },
    {
      time: ' 03:00:00',
      temperature: 36.8,
    },
    {
      time: '03:30:00',
      temperature: 49.8,
    },
    {
      time: '04:00:00',
      temperature: 32.4,
    },
    {
      time: '04:30:00',
      temperature: 41.0,
    },
  ];

  const steamPressureData = [
    {
      time: '00:00',
      pressure: parseFloat((Math.random() * 50).toFixed(1)),
    },
    {
      time: '01:00',
      pressure: parseFloat((Math.random() * 50).toFixed(1)),
    },
    {
      time: '02:00',
      pressure: parseFloat((Math.random() * 50).toFixed(1)),
    },
    {
      time: '03:00',
      pressure: parseFloat((Math.random() * 50).toFixed(1)),
    },
    {
      time: '04:00',
      pressure: parseFloat((Math.random() * 50).toFixed(1)),
    },
    {
      time: '05:00',
      pressure: parseFloat((Math.random() * 50).toFixed(1)),
    },
    {
      time: '06:00',
      pressure: parseFloat((Math.random() * 50).toFixed(1)),
    },
    {
      time: '07:00',
      pressure: parseFloat((Math.random() * 50).toFixed(1)),
    },
    {
      time: '08:00',
      pressure: parseFloat((Math.random() * 50).toFixed(1)),
    },
    {
      time: '09:00',
      pressure: parseFloat((Math.random() * 50).toFixed(1)),
    },
  ];

  return (
    <Box sx={{ display: 'flex', mt: '70px' }}>
      <AdminHeader />
      <Box width='100%' display='flex' flexDirection='column' mr={'20px'}>
        <Grid container spacing={1} width='100%' m={'10px'}>
          <Grid item xs={12} md={6} xl={6}>
            <Box
              sx={{ p: 2, background: '#fefefe' }}
              border='1px solid black'
              borderRadius='20px'
            >
              <Grid container spacing={1}>
                <Grid item xs={12} xl={6}>
                  <Paper
                    elevation={12}
                    sx={{
                      borderRadius: '10px',
                      textAlign: 'center',
                    }}
                  >
                    {/* Add this line */}
                    <OeeChart />
                    <Typography fontWeight={'bold'}>
                      Steam Pressure
                    </Typography>{' '}
                  </Paper>
                </Grid>
                <Grid item xl={6} xs={12}>
                  <Paper
                    elevation={12}
                    sx={{
                      borderRadius: '10px',
                      textAlign: 'center',
                      width: '100%',
                    }}
                  >
                    <ResponsiveContainer width={'100%'} height={250}>
                      <LineChart data={steamPressureData}>
                        <XAxis dataKey='time' />
                        <YAxis />
                        <CartesianGrid stroke='#eee' strokeDasharray='5 5' />
                        {/* <Line type='monotone' dataKey='uv' stroke='#8884d8' /> */}
                        <Line
                          type='monotone'
                          dataKey='pressure'
                          stroke='#82ca9d'
                        />
                      </LineChart>
                    </ResponsiveContainer>
                    <Typography fontWeight={'bold'}>Steam Pressure</Typography>{' '}
                  </Paper>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          {/*  */}
          <Grid item xs={12} md={6} xl={6}>
            <Box
              sx={{ p: 2, background: '#fefefe' }}
              border='1px solid black'
              borderRadius='20px'
            >
              <Grid container spacing={1}>
                <Grid item xs={12} xl={6}>
                  <Paper
                    elevation={12}
                    sx={{
                      borderRadius: '10px',
                      textAlign: 'center',
                    }}
                  >
                    <OeeChart />
                    <Typography fontWeight={'bold'}>OEE</Typography>
                  </Paper>
                </Grid>
                <Grid item xl={6} xs={12}>
                  <Paper
                    elevation={12}
                    sx={{
                      borderRadius: '10px',
                      textAlign: 'center',
                      width: '100%',
                    }}
                  >
                    <ResponsiveContainer width={'100%'} height={250}>
                      <LineChart data={temperatureData}>
                        <XAxis dataKey='time' />
                        <YAxis dataKey={'temperature'} />
                        <CartesianGrid stroke='#eee' strokeDasharray='5 5' />
                        {/* <Line type='monotone' dataKey='uv' stroke='#8884d8' /> */}
                        <Line
                          type='monotone'
                          dataKey='temperature'
                          stroke='#82ca9d'
                        />
                      </LineChart>
                    </ResponsiveContainer>
                    <Typography fontWeight={'bold'}>
                      Performance Trend
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
        {/*  */}
        <Grid container spacing={1} width='100%' m={'10px'}>
          <Grid item xl={6}>
            <AmbientData />
          </Grid>
          <Grid item xl={3}>
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
              <img src={BoilerImg} width='300px' />
              <Box component={Paper} p={'10px 15px'} bgcolor='#3dcc5b' sx={{}}>
                Boiler ON
              </Box>
            </Box>
          </Grid>
          <Grid item xl={3}>
            <Box
              border='1px solid black'
              borderRadius='20px'
              p={'16px !important'}
            >
              <Typography variant='h6' gutterBottom>
                Notifications
              </Typography>
              <Typography variant='body1' component='ol' p={'16px'}>
                <li>Notification 1</li>
                <li>Notification 2</li>
                <li>Notification 3</li>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default DashboardScreen;
