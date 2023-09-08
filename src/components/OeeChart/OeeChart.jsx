import React from 'react';
import NeedleChart from '../NeedleChart/NeedleChart';
import { Box } from '@mui/material';

const OeeChart = () => {
  return (
    <Box
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      width={'100%'}
      height={'100%'}
    >
      <NeedleChart value={10} />
    </Box>
  );
};

export default OeeChart;
