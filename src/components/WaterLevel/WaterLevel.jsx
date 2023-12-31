import { Box, Grid, Paper, Typography, CircularProgress } from '@mui/material';
import { useGetWaterLevelDataQuery } from '../../slices/api/boilerApiSlice';

import WaterGauge from '../WaterGauge/WaterGauge';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';

const DataBlock = () => {
  const { data, isFetching } = useGetWaterLevelDataQuery(
    {},
    {
      refetchOnMountOrArgChange: true,
      skip: false,
    }
  );

  const waterData = data?.map((item) => ({
    time: item.time,
    value: item.waterLevel,
  }));

  const lastwaterData = waterData?.[waterData.length - 1]?.value;

  return (
    <Box sx={{ background: '#fefefe', mt: '10px' }}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Typography
            component={Paper}
            elevation={3}
            sx={{ p: '10px' }}
            variant='h6'
            textAlign={'center'}
            fontWeight={'bold'}
          >
            Water Level
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} xl={6}>
          <Paper
            elevation={3}
            sx={{ borderRadius: '10px', textAlign: 'center' }}
          >
            {isFetching ? (
              <Box
                width={'100%'}
                height={'100%'}
                flex
                justifyContent={'center'}
                alignItems={'center'}
              >
                <CircularProgress />
              </Box>
            ) : (
              <WaterGauge value={lastwaterData || 0} />
            )}
          </Paper>
        </Grid>
        <Grid item xl={6} xs={12}>
          <Paper
            elevation={3}
            sx={{
              borderRadius: '10px',
              textAlign: 'center',
              width: '100%',
              height: '100%',
            }}
          >
            <ResponsiveContainer width={'100%'} height={250}>
              <LineChart
                data={data?.length > 0 ? data : [{ time: 0, waterLevel: 0 }]}
                style={{
                  marginLeft: '-20px',
                }}
              >
                <XAxis dataKey='time' />
                <YAxis />
                <Tooltip />
                <CartesianGrid stroke='#eee' strokeDasharray='5 5' />
                <Line type='monotone' dataKey='waterLevel' stroke='#82ca9d' />
              </LineChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DataBlock;
