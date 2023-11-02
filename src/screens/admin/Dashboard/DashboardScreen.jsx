import { Box, Grid, Paper, Typography } from '@mui/material';
// import { CheckCircle, RadioButtonUnchecked } from '@material-ui/icons';

import AmbientData from '../../../components/AmbientData/AmbientData';
import SteamGraph from '../../../components/SteamGrapgh/SteamGraph';
import BoilerStatus from '../../../components/BoilerStatus/BoilerStatus';
import DataBlock from '../../../components/WaterLevel/WaterLevel';

import WaterDropIcon from '@mui/icons-material/WaterDrop';
import EmojiSymbolsIcon from '@mui/icons-material/EmojiSymbols';
import { GiWoodPile } from 'react-icons/gi';
import { CheckCircle, RadioButtonUnchecked } from '@mui/icons-material';

const DashboardScreen = () => {
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
          <DataBlock />
        </Grid>

        <Grid item xl={6}>
          <AmbientData />
        </Grid>
        <Grid item xl={3} sm={12} width={'100%'}>
          <BoilerStatus />
        </Grid>
        <Grid item xl={3} width={'100%'}>
          <Equipments
            equipments={[
              {
                name: 'Feed Pump 1',
                status: true,
                icon: <WaterDropIcon />,
              },
              {
                name: 'Feed Pump 2',
                status: false,
                icon: <WaterDropIcon />,
              },
              {
                name: 'IN Motor',
                status: true,
                icon: <EmojiSymbolsIcon />,
              },
              {
                name: 'FD Motor',
                status: true,
                icon: <GiWoodPile />,
              },
            ]}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

const Equipments = ({ equipments }) => {
  return (
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
          Equipments
        </Typography>
      </Grid>

      {equipments.map((equipment, index) => (
        <Grid item xs={12} sm={6} md={4} lg={6} key={index}>
          <Paper elevation={3} style={{ borderRadius: '20px' }}>
            <Box p={2}>
              <Box display='flex' alignItems='center' mb={2}>
                <Box mr={1}>{equipment.icon}</Box>
                <Typography variant='h6'>{equipment.name}</Typography>
              </Box>
              <Box display='flex' alignItems='center'>
                <Box mr={1}>
                  {equipment.status ? (
                    <CheckCircle style={{ color: 'green' }} />
                  ) : (
                    <RadioButtonUnchecked style={{ color: 'red' }} />
                  )}
                </Box>
                <Typography variant='body1'>
                  {equipment.status ? 'On' : 'Off'}
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};
export default DashboardScreen;
