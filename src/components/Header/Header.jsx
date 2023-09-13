import { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Menu, MenuItem, Button } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { ExitToApp } from '@mui/icons-material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useLogoutMutation } from '../../slices/api/authApiSlice';
import { logout } from '../../slices/authSlice';
import Logo from '../../assets/logo.png';
import Sidebar from '../Sidebar/Sidebar';

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'space-between',
  height: '70px !important',
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const AdminHeader = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const [logoutApiCall] = useLogoutMutation();

  const [anchorEl, setAnchorEl] = useState(null);
  const menuOpen = Boolean(anchorEl);
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const { userInfo } = useSelector((state) => state.auth);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleLogout = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate('/');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <AppBar position='fixed' open={open}>
        <Toolbar>
          {userInfo && userInfo.role === 'admin' ? (
            <IconButton
              color='inherit'
              aria-label='open drawer'
              onClick={handleDrawerOpen}
              edge='start'
              sx={{
                marginRight: 5,
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
          ) : null}
          <Link to='/'>
            <img
              src={Logo}
              alt='Logo'
              style={{
                marginRight: '10px',
                width: 28,
                height: 40,
                marginLeft: '-20px',
              }}
            />
          </Link>
          <Typography variant='h6' noWrap component='div'>
            IMPCOPS
          </Typography>
          {userInfo ? (
            <IconButton
              aria-controls={menuOpen ? 'menu-appbar' : undefined}
              aria-haspopup='true'
              aria-expanded={menuOpen ? 'true' : undefined}
              color='inherit'
              onClick={handleMenuOpen}
              sx={{
                position: 'absolute',
                right: 25,
              }}
            >
              <AccountCircle />
            </IconButton>
          ) : (
            <Button
              color='inherit'
              component={Link}
              to='/login'
              sx={{
                position: 'absolute',
                right: 25,
              }}
            >
              <ExitToApp style={{ marginRight: '8px' }} />
              Sign In
            </Button>
          )}
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            id='menu-appbar'
            onClose={handleMenuClose}
            onClick={handleMenuClose}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <MenuItem onClick={handleLogout}>
              <ExitToApp style={{ marginRight: '8px' }} />
              Logout
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      {userInfo && userInfo.role === 'admin' ? (
        <Sidebar open={open} handleDrawerClose={handleDrawerClose} />
      ) : null}
    </>
  );
};

export default AdminHeader;
