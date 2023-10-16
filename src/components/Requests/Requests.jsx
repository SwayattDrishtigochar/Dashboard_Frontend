import { useState } from 'react';
import {
  Grid,
  TextField,
  Button,
  Box,
  Paper,
  Typography,
  Skeleton,
} from '@mui/material';
import Loader from '../Loader/Loader';
import RequestCard from '../RequestCard/RequestCard';
import { useGetRequestsQuery } from '../../slices/api/adminApiSlice';
import { useSelector, useDispatch } from 'react-redux';

const Requests = () => {
  const { userInfo } = useSelector((state) => state.auth);

  const {
    data: requests,
    isFetching,
    refetch,
  } = useGetRequestsQuery(userInfo.company, {
    refetchOnMountOrArgChange: true,
  });

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredRequests = requests?.filter((request) => {
    const fullName = `${request.fname} ${request.lname}`;
    return fullName.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <Box sx={{ p: 2, background: '#fefefe' }} borderRadius='10px'>
      <Grid container alignItems='center' spacing={2}>
        <Grid item xs={12} sm={12} lg={12} p='0'>
          <Typography variant='h6'>Requests</Typography>
        </Grid>
        <Grid item xs={6} sm={6} lg={6}>
          <TextField
            type='text'
            placeholder='Search Requests'
            value={searchQuery}
            onChange={handleSearchChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={4} sm={4} lg={4}>
          <Button
            onClick={() => refetch()}
            variant='contained'
            sx={{
              height: '45px',
            }}
          >
            Refresh
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={1} sx={{ mt: 3 }}>
        {filteredRequests?.map((request) => (
          <RequestCard
            key={request._id}
            request={request}
            isLoading={isFetching}
          />
        ))}

        {/* <RequestCard />
        <RequestCard />
        <RequestCard /> */}
      </Grid>
    </Box>
  );
};

export default Requests;
