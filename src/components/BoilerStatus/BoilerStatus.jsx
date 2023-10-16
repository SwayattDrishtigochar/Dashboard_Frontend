import { Box, Paper } from '@mui/material';
import BoilerImg from '../../assets/boiler.png';
import { useGetSensorStateQuery } from '../../slices/api/sensorApiSlice';

const BoilerStatus = () => {
  const { data: boilerState, isLoading } = useGetSensorStateQuery(
    {
      collection: 'INMotor',
    },
    {
      refetchOnMountOrArgChange: true,
      skip: false,
      // pollingInterval: 1000,
    }
  );

  return (
    <Box
      component={Paper}
      elevation={3}
      // border='1px solid black'
      borderRadius='20px'
      p='16px'
      display='flex'
      flexDirection='column'
      alignItems='center'
      justifyContent='space-between'
    >
      <img src={BoilerImg} width='300px' />
      <Box
        component={Paper}
        p={'10px 15px'}
        bgcolor={isLoading ? '#f0d615' : boilerState ? '#3dcc5b' : '#ff5454'}
      >
        Boiler is {isLoading ? 'Loading' : boilerState ? 'ON' : 'OFF'}
      </Box>
    </Box>
  );
};

export default BoilerStatus;
