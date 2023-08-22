import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  container: {
    padding: theme.spacing(1),
    margin: 0,
    width: '100%',
  },

  image: {
    width: '100%',
    [theme.breakpoints.down('lg')]: {
      display: 'none',
    },
  },
}));
