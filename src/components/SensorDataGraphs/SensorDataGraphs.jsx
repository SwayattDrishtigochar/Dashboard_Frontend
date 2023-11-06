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

  console.log(sensorData);

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
                  dot={false}
                />
                <Line
                  type='monotone'
                  dataKey='Y_accel'
                  stroke='#3fa7ff'
                  dot={false}
                />
                <Line
                  type='monotone'
                  dataKey='Z_accel'
                  stroke='#fff111'
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
