import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Chip,
} from '@mui/material';
import { Motor } from '../../assets/equipments';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const EquipmentCard = ({ data }) => {
  const { userInfo } = useSelector((state) => state.auth);
  return (
    <Grid item xs={12} sm={6} md={3} lg={2}>
      <Card
        component={Link}
        to={`/company/${userInfo.company}/equipments/${data._id}`}
        elevation={6}
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          borderRadius: '10px',
          cursor: 'pointer',
          textDecoration: 'none',
        }}
      >
        <CardMedia
          component='img'
          image={Motor} // Replace with the actual image URL
          alt='Equipment Image'
          sx={{
            height: '200px',
            width: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
        <CardContent>
          <Typography variant='h6' gutterBottom>
            {data?.name}
          </Typography>
          <Typography variant='body2' color='textSecondary'>
            {data?.description}
          </Typography>
          <Grid
            container
            spacing={1}
            sx={{
              pt: '10px',
            }}
          >
            {data.tags.map((tag, index) => (
              <Grid
                key={index}
                item
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <Chip label={tag} variant='outlined' color='primary' />
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default EquipmentCard;
