import { Box, Grid, Paper, Typography, CircularProgress } from '@mui/material';
import { useGetSteamDataQuery } from '../../slices/api/boilerApiSlice';
import NeedleChart from '../NeedleChart/NeedleChart';
import Loader from '../Loader/Loader';
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
  const { data, isLoading, isFetching } = useGetSteamDataQuery(
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
              <NeedleChart value={lastSteamData?.value || 0} />
            )}

            <Typography fontWeight={'bold'}>Steam Pressure</Typography>
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
                data={data}
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

            <Typography fontWeight={'bold'}>Steam Pressure</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SteamGraph;
