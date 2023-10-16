import React from 'react';
import { useGetSensorDataQuery } from '../../slices/api/sensorApiSlice';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import { Box, Grid, Paper, Typography } from '@mui/material';
import Loader from '../Loader/Loader';

const SensorDataGraphs = ({ data_id }) => {
  const { data, error, isLoading } = useGetSensorDataQuery(
    {
      collection: data_id,
      limit: 20,
    },
    {}
  );
  console.log(data);
  isLoading && <Loader />;
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
            <LineChart width={500} height={300} data={data?.documents}>
              <XAxis dataKey='timestamp' />
              <YAxis />
              <Tooltip />
              <Legend />
              <CartesianGrid stroke='#eee' strokeDasharray='5 5' />
              <Line type='monotone' dataKey='X_accel' stroke='#8884d8' />
              <Line type='monotone' dataKey='Y_accel' stroke='#82ca9d' />
              <Line type='monotone' dataKey='Z_accel' stroke='#82ca9d' />
            </LineChart>
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
            <LineChart width={500} height={300} data={data?.documents}>
              <XAxis dataKey='timestamp' />
              <YAxis />
              <Tooltip />
              <Legend />

              <CartesianGrid stroke='#eee' strokeDasharray='5 5' />
              <Line type='monotone' dataKey='Temperature' stroke='#8884d8' />
            </LineChart>
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
            <LineChart width={500} height={300} data={data?.documents}>
              <XAxis dataKey='timestamp' />
              <YAxis />
              <Tooltip />
              <Legend />
              <CartesianGrid stroke='#eee' strokeDasharray='5 5' />
              <Line type='monotone' dataKey='Pressure' stroke='#8884d8' />
            </LineChart>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default SensorDataGraphs;
