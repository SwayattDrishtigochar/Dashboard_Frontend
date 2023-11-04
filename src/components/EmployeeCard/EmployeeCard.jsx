import React from 'react';
import { Card, CardContent, Typography, Skeleton } from '@mui/material';

const EmployeeCard = ({ employee, isFetching }) => {
  return (
    <Card sx={{ width: '100%', borderRadius: '10px' }} elevation={3}>
      <CardContent>
        {isFetching ? (
          <>
            <Skeleton
              variant='h6'
              width='100%'
              sx={{
                mb: 1,
              }}
            />
            <Skeleton
              variant='body2'
              width='100%'
              sx={{
                mb: 1,
              }}
            />
            <Skeleton
              variant='body2'
              width='100%'
              sx={{
                mb: 1,
              }}
            />
          </>
        ) : (
          <>
            <Typography variant='h6' gutterBottom>
              {employee?.fname} {employee?.lname}
            </Typography>
            <Typography variant='body2' gutterBottom>
              Email:
              {employee?.email}
            </Typography>
            <Typography variant='body2' gutterBottom>
              Phone:
              {employee?.phone}
            </Typography>
            <Typography variant='body2' gutterBottom>
              {'Last Login:' + ' ' + employee?.lastLogin}
            </Typography>
            <Typography variant='body2' gutterBottom>
              {'Registered on:' + ' ' + employee?.createdAt}
            </Typography>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default EmployeeCard;
