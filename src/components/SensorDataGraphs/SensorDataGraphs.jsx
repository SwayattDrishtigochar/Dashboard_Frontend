import { useState, useEffect } from 'react';
import { useGetSensorDataQuery } from '../../slices/api/sensorApiSlice';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { Grid, Paper, Typography } from '@mui/material';

const SensorDataGraphs = ({ data_id }) => {
  const dummyData = [
    {
      current: 1,
      timestamp: '11:00 AM',
    },
    {
      current: 1.5,
      timestamp: '11:01 AM',
    },
    {
      current: 2,
      timestamp: '11:02 AM',
    },
    {
      current: 2.5,
      timestamp: '11:03 AM',
    },
    {
      current: 3,
      timestamp: '11:04 AM',
    },
    {
      current: 3.5,
      timestamp: '11:05 AM',
    },
    {
      current: 4,
      timestamp: '11:06 AM',
    },
    {
      current: 4.5,
      timestamp: '11:07 AM',
    },
    {
      current: 5,
      timestamp: '11:08 AM',
    },
    {
      current: 5.5,
      timestamp: '11:09 AM',
    },
    {
      current: 6,
      timestamp: '11:10 AM',
    },
    {
      current: 6.5,
      timestamp: '11:11 AM',
    },
    {
      current: 7,
      timestamp: '11:12 AM',
    },
    {
      current: 7.5,
      timestamp: '11:13 AM',
    },
    {
      current: 8,
      timestamp: '11:14 AM',
    },
    {
      current: 8.5,
      timestamp: '11:15 AM',
    },
    {
      current: 9,
      timestamp: '11:16 AM',
    },
    {
      current: 9.5,
      timestamp: '11:17 AM',
    },
    {
      current: 10,
      timestamp: '11:18 AM',
    },
    {
      current: 10.5,
      timestamp: '11:19 AM',
    },
    {
      current: 11,
      timestamp: '11:20 AM',
    },
    {
      current: 11.5,
      timestamp: '11:21 AM',
    },
    {
      current: 12,
      timestamp: '11:22 AM',
    },
    {
      current: 12.5,
      timestamp: '11:23 AM',
    },
    {
      current: 13,
      timestamp: '11:24 AM',
    },
    {
      current: 13.5,
      timestamp: '11:25 AM',
    },
    {
      current: 14,
      timestamp: '11:26 AM',
    },
  ];
  dummyData.forEach((dataPoint) => {
    dataPoint.current = Math.pow(dataPoint.current, 2);
  });
  const [sensorData, setSensorData] = useState([]);
  const { data } = useGetSensorDataQuery(
    {
      collection: data_id,
      limit: 20,
    },
    {
      pollingInterval: 10000,
      refetchOnMountOrArgChange: true,
      refetchOnReconnect: true,
      refetchOnFocus: true,
    }
  );

  useEffect(() => {
    if (data) {
      setSensorData([...data.documents].reverse());
    }
  }, [data]);

  return (
    <>
      <Grid container spacing={2} sx={{ mt: '10px', width: '100%' }}>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={4}
          xl={3}
          flex
          alignItems={'center'}
          justifyContent={'center'}
        >
          <Typography variant='h6' gutterBottom textAlign={'center'}>
            Vibration
          </Typography>
          <Paper sx={{ border: '1px solid black' }}>
            <ResponsiveContainer width='100%' height={300}>
              <LineChart data={sensorData} style={{ marginLeft: '-20px' }}>
                <XAxis dataKey='timestamp' />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid stroke='#eee' strokeDasharray='5 5' />
                <Line
                  type='monotone'
                  dataKey='X_accel'
                  stroke='#ff8a8a'
                  strokeWidth={3}
                  dot={false}
                />
                <Line
                  type='monotone'
                  dataKey='Y_accel'
                  stroke='#3fa7ff'
                  strokeWidth={3}
                  dot={false}
                />
                <Line
                  type='monotone'
                  dataKey='Z_accel'
                  stroke='#fff111'
                  strokeWidth={3}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={4}
          xl={3}
          flex
          alignItems={'center'}
          justifyContent={'center'}
        >
          <Typography variant='h6' gutterBottom textAlign={'center'}>
            Temperature
          </Typography>
          <Paper sx={{ border: '1px solid black' }}>
            <ResponsiveContainer width='100%' height={300}>
              <LineChart data={sensorData} style={{ marginLeft: '-20px' }}>
                <XAxis dataKey='timestamp' />
                <YAxis />
                <Tooltip />
                <Legend />

                <CartesianGrid stroke='#eee' strokeDasharray='5 5' />
                <Line
                  type='monotone'
                  dataKey='Temperature'
                  stroke='#ff9751'
                  strokeWidth={3}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={4}
          xl={3}
          flex
          alignItems={'center'}
          justifyContent={'center'}
        >
          <Typography variant='h6' gutterBottom textAlign={'center'}>
            Pressure
          </Typography>
          <Paper sx={{ border: '1px solid black' }}>
            <ResponsiveContainer width='100%' height={300}>
              <LineChart data={sensorData}>
                <XAxis dataKey='timestamp' />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid stroke='#eee' strokeDasharray='5 5' />
                <Line
                  type='monotone'
                  dataKey='Pressure'
                  stroke='#8884d8'
                  strokeWidth={3}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={4}
          xl={3}
          flex
          alignItems={'center'}
          justifyContent={'center'}
        >
          <Typography variant='h6' gutterBottom textAlign={'center'}>
            Current
          </Typography>
          <Paper sx={{ border: '1px solid black' }}>
            <ResponsiveContainer width='100%' height={300}>
              <LineChart data={sensorData}>
                <XAxis dataKey='timestamp' />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid stroke='#eee' strokeDasharray='5 5' />
                <Line
                  type='monotone'
                  dataKey='Current'
                  stroke='#fff013'
                  strokeWidth={3}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default SensorDataGraphs;
