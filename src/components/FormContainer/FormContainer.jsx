import { Box, Grid } from '@mui/material';
import ImgUrl from '../../assets/form.png';

const FormContainer = ({ children }) => {
  return (
    <Box
      mt={'80px'}
      sx={{
        padding: (theme) => theme.spacing(1),
        width: '100%',
      }}
    >
      <Grid container>
        <Grid
          item
          lg={4}
          md={6}
          sm={12}
          sx={{
            display: { xs: 'none', sm: 'none', md: 'none', lg: 'block' },
          }}
        >
          <img src={ImgUrl} alt='Image' style={{ width: '100%' }} />
        </Grid>
        <Grid
          item
          lg={8}
          md={12}
          sm={12}
          sx={{
            px: '0 !important',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {children}
        </Grid>
      </Grid>
    </Box>
  );
};

export default FormContainer;
