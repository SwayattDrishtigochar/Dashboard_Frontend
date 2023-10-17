import { Box, Typography, Paper, Grid, Chip } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useGetEquipmentQuery } from '../../slices/api/eqipmentApiSlice';
import { Motor } from '../../assets/equipments';
import Loader from '../Loader/Loader';
import SensorDataGraphs from '../SensorDataGraphs/SensorDataGraphs';

const EquipmentInformation = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useGetEquipmentQuery(id);

  return (
    <Box
      width={'100%'}
      sx={{
        mt: '80px',
        mx: '10px',
      }}
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
    >
      <Typography
        width={'100%'}
        component={Paper}
        elevation={3}
        sx={{ p: '10px' }}
        variant='h5'
        textAlign={'center'}
        fontWeight={'bold'}
      >
        Equipment Information
      </Typography>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Typography variant='h4' textAlign={'center'}>
          Error
        </Typography>
      ) : (
        <Grid container spacing={2} sx={{ mt: '10px', width: '100%' }}>
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            flex
            alignItems={'center'}
            justifyContent={'center'}
          >
            <img
              src={Motor}
              alt='Equipment'
              style={{
                width: '100%',
                boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',
                borderRadius: '10px',
              }}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography variant='h4' gutterBottom>
              {data?.name}
            </Typography>
            <Typography variant='body1'>{data?.description}</Typography>
            <Box sx={{ mt: 2 }}>
              <Typography variant='subtitle1' gutterBottom>
                Tags:
              </Typography>
              {data?.tags.map((tag, index) => (
                <Chip
                  key={index}
                  label={tag}
                  variant='contained'
                  color='primary'
                  sx={{ mr: 1, mb: 1 }}
                />
              ))}
            </Box>
            {/* Add more equipment details here */}
          </Grid>
        </Grid>
      )}
      <SensorDataGraphs data_id={data?.data_id} />
    </Box>
  );
};

export default EquipmentInformation;
