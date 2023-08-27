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

const DashboardScreen = () => {
  const data = [
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
                      <LineChart data={data}>
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
                      <LineChart data={data}>
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

        {/* <Grid container spacing={1} width='100%' m={'10px'}>
          <Grid item container spacing={0}>
            <Grid item>
              <Box
                sx={{ p: 3 }}
                component={Paper}
                elevation={3}
                borderRadius='20px'
                border='1px solid black'
              >
                <Box display='flex' alignItems='center' flexDirection='column'>
                  <Typography borderBottom='1px solid black'>
                    Ambient Temperature
                  </Typography>
                  <Typography>32 C</Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Grid item>
            <Box width='200px' height='100px' component={Paper}></Box>
          </Grid>
        </Grid> */}
        {/* <Stack
          direction={{ xs: 'column', lg: 'row' }}
          margin=' 0 15px '
          spacing={1}
        > */}
        <Grid container spacing={1} width='100%' m={'10px'}>
          <Grid item xl={6}>
            <Box
              border='1px solid black'
              borderRadius='20px'
              p='16px'
              variant='outlined'
            >
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Paper elevation={3} sx={{ p: 2 }}>
                    <Typography variant='h6'>Ambient Temperature</Typography>
                    <Typography variant='body1'>Value 1</Typography>
                  </Paper>
                </Grid>
                <Grid item xs={6}>
                  <Paper elevation={3} sx={{ p: 2 }}>
                    <Typography variant='h6'>Steam Pressure</Typography>
                    <Typography variant='body1'>Value 2</Typography>
                  </Paper>
                </Grid>
                <Grid item xs={6}>
                  <Paper elevation={3} sx={{ p: 2 }}>
                    <Typography variant='h6'>Feed Pump</Typography>
                    <Typography variant='body1'>Value 3</Typography>
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
                    <Typography variant='h6'>Water Analysis</Typography>
                    <Typography variant='body1'>Value 5</Typography>
                  </Paper>
                </Grid>
                <Grid item xs={6}>
                  <Paper elevation={3} sx={{ p: 2 }}>
                    <Typography variant='h6'>Wood</Typography>
                    <Typography variant='body1'>Value 6</Typography>
                  </Paper>
                </Grid>
              </Grid>
            </Box>
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
