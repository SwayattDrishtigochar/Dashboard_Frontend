import {
  Card,
  CardContent,
  Typography,
  Grid,
  IconButton,
  Box,
  Skeleton,
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

const RequestCard = ({ request, isLoading }) => {
  console.log(isLoading);
  return (
    <Grid item xs={12} sm={6} md={4} lg={2}>
      <Card sx={{ width: '100%', borderRadius: '10px' }} elevation={3}>
        <CardContent>
          {isLoading ? (
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
                {request.fname} {request.lname}
              </Typography>
              <Typography variant='body2' color='textSecondary' gutterBottom>
                Email: {request.email}
              </Typography>
              <Typography variant='body2' color='textSecondary' gutterBottom>
                Phone: {request.phone}
              </Typography>
            </>
          )}
          <Box display='flex' justifyContent='end' alignItems='center'>
            <IconButton color='success'>
              <CheckIcon />
            </IconButton>
            <IconButton color='primary'>
              <CloseIcon />
            </IconButton>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default RequestCard;
