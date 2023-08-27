import { Box, Grid, Paper, Typography, Stack, Button } from '@mui/material';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';
import AdminHeader from './AdminHeader/AdminHeader';
import NeedleChart from '../../components/NeedleChart/NeedleChart';
import BoilerImg from '../../assets/boiler.png';
import AmbientData from '../../components/AmbientData/AmbientData';

const DashboardScreen = () => {
  // const boilerData = [];

  const lineData = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
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
                    <NeedleChart value={10} />
                    <Typography>OEE</Typography>
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
                      <LineChart data={lineData}>
                        <XAxis dataKey='name' />
                        <YAxis />
                        <CartesianGrid stroke='#eee' strokeDasharray='5 5' />
                        {/* <Line type='monotone' dataKey='uv' stroke='#8884d8' /> */}
                        <Line type='monotone' dataKey='pv' stroke='#82ca9d' />
                      </LineChart>
                    </ResponsiveContainer>
                    <Typography>Performance Trend</Typography>
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
                    <NeedleChart value={10} />
                    <Typography>OEE</Typography>
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
                      <LineChart data={lineData}>
                        <XAxis dataKey='name' />
                        <YAxis />
                        <CartesianGrid stroke='#eee' strokeDasharray='5 5' />
                        {/* <Line type='monotone' dataKey='uv' stroke='#8884d8' /> */}
                        <Line type='monotone' dataKey='pv' stroke='#82ca9d' />
                      </LineChart>
                    </ResponsiveContainer>
                    <Typography>Performance Trend</Typography>
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
