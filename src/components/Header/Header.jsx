import { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { Menu, MenuItem, Button, Box, Badge } from '@mui/material';
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
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useMediaQuery } from '@mui/material';

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  display: 'flex',
  justifyContent: 'center',

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

const Header = () => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [notificationEl, setNotificationEl] = useState(null);

  const handleOpenNotification = (event) => {
    setNotificationEl(event.currentTarget);
  };

  const handleCloseNotification = () => {
    setNotificationEl(null);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [logoutApiCall] = useLogoutMutation();

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
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            margin: '0 auto',
            padding: '0 10px',
          }}
        >
          <Box display={'flex'} alignItems={'center'}>
            {userInfo && userInfo.role === 'admin' ? (
              <IconButton
                color='inherit'
                aria-label='open drawer'
                onClick={handleDrawerOpen}
                edge='start'
                sx={{
                  marginRight: 5,
                  ...(open && { display: 'none' }),
                  display: isMobile ? 'none' : 'block',
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
                  marginLeft: '0px',
                }}
              />
            </Link>
            <Typography variant='h6' noWrap component='div'>
              IMPCOPS
            </Typography>
          </Box>
          <Box>
            {userInfo ? (
              <Box>
                <Badge
                  badgeContent={1}
                  color='success'
                  sx={{
                    marginRight: '10px',
                    cursor: 'pointer',
                  }}
                  onClick={handleOpenNotification}
                >
                  <NotificationsIcon />
                </Badge>

                <IconButton
                  aria-controls={menuOpen ? 'menu-appbar' : undefined}
                  aria-haspopup='true'
                  aria-expanded={menuOpen ? 'true' : undefined}
                  color='inherit'
                  onClick={handleMenuOpen}
                >
                  <AccountCircle />
                </IconButton>
              </Box>
            ) : (
              <Button color='inherit' component={Link} to='/login'>
                <ExitToApp style={{ marginRight: '8px' }} />
                Sign In
              </Button>
            )}
          </Box>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            id='menu-appbar'
            onClose={handleMenuClose}
            onClick={handleMenuClose}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <MenuItem onClick={handleLogout} sx={{}}>
              <ExitToApp style={{ marginRight: '8px' }} />
              Logout
            </MenuItem>
          </Menu>
          <Menu
            anchorEl={notificationEl}
            open={Boolean(notificationEl)}
            onClose={handleCloseNotification}
            sx={{ width: '400px' }}
          >
            {/* Replace the following MenuItem content with your actual notifications */}
            <MenuItem onClick={handleCloseNotification}>
              <Typography noWrap>
                This is the area where you can see the notifications{' '}
              </Typography>
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

export default Header;
