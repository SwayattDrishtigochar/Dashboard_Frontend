import { Box, Typography, Paper, Grid } from '@mui/material';
import EquipmentList from '../../../components/EquipmentList/EquipmentList';

const Equipments = () => {
  return (
    <Box
      sx={{
        width: '100%',
        mt: '80px',
        mx: '10px',
        // p: '15px',
      }}
    >
      <Typography
        component={Paper}
        elevation={3}
        sx={{ p: '10px' }}
        variant='h5'
        textAlign={'center'}
        fontWeight={'bold'}
      >
        Equipments
      </Typography>
      <Grid container spacing={1} sx={{ mt: '10px', width: '100%' }} w>
        <EquipmentList />
      </Grid>
    </Box>
  );
};

export default Equipments;
