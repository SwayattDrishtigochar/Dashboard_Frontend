import { Box, Grid, Paper, Typography } from '@mui/material';

import AmbientData from '../../../components/AmbientData/AmbientData';
import SteamGraph from '../../../components/SteamGrapgh/SteamGraph';
import BoilerStatus from '../../../components/BoilerStatus/BoilerStatus';

// DashboardScreen component
const DashboardScreen = () => {
  // Data for temperature chart
  // const temperatureData = getTemperatureData();

  return (
    <Box
      display={'flex'}
      alignItems={'center'}
      flexDirection={'column'}
      sx={{ mt: '80px', width: '100%', px: '10px' }}
    >
      <Typography
        width={'100%'}
        gutterBottom
        component={Paper}
        elevation={3}
        sx={{ p: '10px' }}
        variant='h5'
        textAlign={'center'}
        fontWeight={'bold'}
      >
        Dashboard
      </Typography>
      <Grid container spacing={2} width='100%'>
        <Grid item xs={12} sm={12} md={6} xl={6}>
          <SteamGraph />
        </Grid>
        <Grid item xs={12} sm={12} md={6} xl={6}>
          <SteamGraph />
        </Grid>

        <Grid item xl={6}>
          <AmbientData />
        </Grid>
        <Grid item xl={3} sm={12} width={'100%'}>
          <BoilerStatus />
        </Grid>
        <Grid item xl={3} width={'100%'}>
          <Equipments
            equipments={['Equipment 1', 'Equipment 2', 'Equipment 3']}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

const Equipments = ({ equipments }) => {
  return (
    <Box
      component={Paper}
      elevation={3}
      borderRadius='20px'
      p={'16px !important'}
    >
      <Typography variant='h6' gutterBottom>
        Equipments
      </Typography>
      <Typography variant='body1' component='ol' p={'16px'}>
        {equipments.map((equipment, index) => (
          <li key={index}>{equipment}</li>
        ))}
      </Typography>
    </Box>
  );
};

export default DashboardScreen;
