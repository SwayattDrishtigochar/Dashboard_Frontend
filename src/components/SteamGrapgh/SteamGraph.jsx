import { Box, Grid, Paper, Typography, CircularProgress } from '@mui/material';
import { useGetSteamDataQuery } from '../../slices/api/boilerApiSlice';
import NeedleChart from '../NeedleChart/NeedleChart';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';

const SteamGraph = () => {
  const { data, isFetching } = useGetSteamDataQuery(
    {},
    {
      refetchOnMountOrArgChange: true,
      skip: false,
    }
  );

  const steamData = data?.map((item) => ({
    time: item.time,
    value: item.steamPressure,
  }));

  const lastSteamData = steamData?.[steamData.length - 1];

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
            Steam Pressure
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} xl={6}>
          <Paper
            elevation={3}
            sx={{ borderRadius: '10px', textAlign: 'center' }}
          >
            {isFetching ? (
              <Box flex justifyContent={'center'} alignItems={'center'}>
                <CircularProgress />
              </Box>
            ) : (
              <NeedleChart value={lastSteamData?.value || 0} />
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
            }}
          >
            <ResponsiveContainer width={'100%'} height={250}>
              <LineChart
                data={data?.length > 0 ? data : [{ time: 0, steamPressure: 0 }]}
                style={{
                  marginLeft: '-20px',
                }}
              >
                <XAxis dataKey='time' />
                <YAxis />
                <Tooltip />
                <CartesianGrid stroke='#eee' strokeDasharray='5 5' />
                <Line
                  type='monotone'
                  dataKey='steamPressure'
                  stroke='#82ca9d'
                />
              </LineChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SteamGraph;
