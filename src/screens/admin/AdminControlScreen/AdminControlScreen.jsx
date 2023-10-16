import { Box, Grid, Typography, Paper } from '@mui/material';
import Requests from '../../../components/Requests/Requests';
import Employees from '../../../components/Employees/Employees';

const AdminControlScreen = () => {
  return (
    <Box width={'100%'} p={'10px'} mt={'70px'}>
      <Typography
        gutterBottom
        component={Paper}
        elevation={3}
        sx={{ p: '10px' }}
        variant='h5'
        textAlign={'center'}
        fontWeight={'bold'}
      >
        Admin Control Panel
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Requests />
        </Grid>
        <Grid item xs={12}>
          <Employees />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AdminControlScreen;
