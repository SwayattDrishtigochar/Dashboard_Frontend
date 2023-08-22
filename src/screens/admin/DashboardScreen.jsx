import { Box, Paper } from '@mui/material';
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

const DashboardScreen = () => {
  const temperatureData = [
    { time: '00:00', temperature: 25 },
    { time: '03:00', temperature: 23 },
    { time: '06:00', temperature: 22 },
    { time: '09:00', temperature: 26 },
    { time: '12:00', temperature: 30 },
    { time: '15:00', temperature: 28 },
    { time: '18:00', temperature: 26 },
    { time: '21:00', temperature: 24 },
  ];

  // Sample data for the bar chart
  // Sample data for the bar chart
  const barChartData = [
    { name: 'Machine 1', value: 120 },
    { name: 'Machine 2', value: 80 },
    { name: 'Machine 3', value: 65 },
    { name: 'Machine 4', value: 65 },
  ];

  return (
    <Box sx={{ display: 'flex', mt: '70px' }}>
      <AdminHeader />
      <Box component='main' sx={{ p: 1 }} display='flex'>
        {/* <DrawerHeader /> */}
        <Paper
          elevation={3}
          sx={{ p: 2, mb: 2 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Line Chart */}
          <LineChart width={400} height={300} data={temperatureData}>
            <XAxis dataKey='time' />
            <YAxis />
            <CartesianGrid stroke='#eee' strokeDasharray='5 5' />
            <Tooltip />
            <Legend />
            <Line type='monotone' dataKey='temperature' stroke='#8884d8' />
          </LineChart>
        </Paper>
        <Paper
          elevation={3}
          sx={{ p: 2, m: 2 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <BarChart width={400} height={300} data={barChartData}>
            <XAxis dataKey='name' />
            <YAxis />
            <CartesianGrid stroke='#eee' strokeDasharray='5 5' />
            <Tooltip />
            <Legend />
            <Bar dataKey='value' fill='#8884d8' />
          </BarChart>
        </Paper>
      </Box>
    </Box>
  );
};

export default DashboardScreen;
