import { useState, useEffect } from 'react';
import { Typography } from '@mui/material';

const Clock = () => {
  const [clock, setClock] = useState('{time}');

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      setClock(date.toLocaleString());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <Typography
      position={'absolute'}
      top={'-5px'}
      right={'20px'}
      fontWeight={'bold'}
      border={'1px solid black'}
      padding={'5px'}
      borderRadius={'5px'}
      boxShadow={'0px 0px 10px 0px rgba(0,0,0,0.75)'}
    >
      {clock}
    </Typography>
  );
};

export default Clock;
