import { Box, Grid, Paper, Typography } from '@mui/material';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import AdminHeader from './AdminHeader/AdminHeader';
import NeedleChart from '../../components/NeedleChart/NeedleChart';

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
      <Box width='100%' display='flex' flexDirection='column'>
        <Grid container spacing={1} width='100%' m={'10px'}>
          <Grid item>
            <Box
              sx={{ p: 1, background: '#fefefe' }}
              component={Paper}
              elevation={0}
              variant='outlined'
              border='1px solid black'
              borderRadius='20px'
            >
              <Grid container width='100%'>
                <Grid
                  item
                  display='flex'
                  alignItems='center'
                  justifyContent='center'
                  flexDirection='column'
                >
                  <Paper
                    elevation={12}
                    sx={{
                      m: '10px',
                      borderRadius: '10px',
                    }}
                  >
                    <NeedleChart value={10} />
                  </Paper>
                  <Typography>OEE</Typography>
                </Grid>
                <Grid
                  item
                  display='flex'
                  alignItems='center'
                  justifyContent='center'
                  flexDirection='column'
                >
                  <Paper
                    elevation={12}
                    sx={{ m: '10px', borderRadius: '10px' }}
                  >
                    <LineChart width={400} height={250} data={data}>
                      <XAxis dataKey='name' />
                      <YAxis />
                      <CartesianGrid stroke='#eee' strokeDasharray='5 5' />
                      {/* <Line type='monotone' dataKey='uv' stroke='#8884d8' /> */}
                      <Line type='monotone' dataKey='pv' stroke='#82ca9d' />
                    </LineChart>
                  </Paper>
                  <Typography>Performance Trend</Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          {/*  */}
          <Grid item>
            <Box
              sx={{ p: 1, background: '#fefefe' }}
              component={Paper}
              elevation={0}
              variant='outlined'
              border='1px solid black'
              borderRadius='20px'
            >
              <Grid container width='100%'>
                <Grid
                  item
                  display='flex'
                  alignItems='center'
                  justifyContent='center'
                  flexDirection='column'
                >
                  <Paper
                    elevation={12}
                    sx={{
                      m: '10px',
                      borderRadius: '10px',
                    }}
                  >
                    <NeedleChart value={10} />
                  </Paper>
                  <Typography>OEE</Typography>
                </Grid>
                <Grid
                  item
                  display='flex'
                  alignItems='center'
                  justifyContent='center'
                  flexDirection='column'
                >
                  <Paper
                    elevation={12}
                    sx={{ m: '10px', borderRadius: '10px' }}
                  >
                    <LineChart width={400} height={250} data={data}>
                      <XAxis dataKey='name' />
                      <YAxis />
                      <CartesianGrid stroke='#eee' strokeDasharray='5 5' />
                      {/* <Line type='monotone' dataKey='uv' stroke='#8884d8' /> */}
                      <Line type='monotone' dataKey='pv' stroke='#82ca9d' />
                    </LineChart>
                  </Paper>
                  <Typography>Performance Trend</Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={1} width='100%' m={'10px'}>
          <Grid item>
            <Box
              sx={{ p: 1 }}
              component={Paper}
              elevation={3}
              borderRadius='20px'
            ></Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default DashboardScreen;
