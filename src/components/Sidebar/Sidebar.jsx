import React, { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import EngineeringIcon from '@mui/icons-material/Engineering';
import { useMediaQuery } from '@mui/material';

const drawerWidth = 240;
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Sidebar = ({ open, handleDrawerClose }) => {
  const location = useLocation();
  const [value, setValue] = useState(location.pathname);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { userInfo } = useSelector((state) => state.auth);
  const drawerItems = [
    {
      text: 'Dashboard',
      icon: <DashboardIcon />,
      link: `/${userInfo?.company}/dashboard`,
    },
    {
      text: 'Boiler',
      icon: <LocalFireDepartmentIcon />,
      link: '/boiler/data',
    },
    {
      text: 'Users',
      icon: <ManageAccountsIcon />,
      link: `/company/${userInfo?.company}`,
    },
    {
      text: 'Equipments',
      icon: <EngineeringIcon />,
      link: `/company/${userInfo?.company}/equipments`,
    },
  ];
  return (
    <>
      <Drawer
        variant='permanent'
        open={open}
        sx={{
          display: isMobile ? 'none' : 'block',
        }}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        {drawerItems.map((item, index) => (
          <List key={index}>
            <ListItem disablePadding sx={{ display: 'block' }}>
              <Link
                to={item.link}
                style={{
                  textDecorationLine: 'none',
                  color: 'inherit',
                }}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.text}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </Link>
            </ListItem>
            <Divider />
          </List>
        ))}
      </Drawer>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{
          display: isMobile ? 'flex' : 'none',
          width: '100%',
          position: 'fixed',
          bottom: 0,
          zIndex: 1000,
        }}
      >
        {drawerItems.map((item, index) => (
          <BottomNavigationAction
            key={index}
            label={item.text}
            value={item.link}
            icon={item.icon}
            component={Link}
            to={item.link}
          />
        ))}
      </BottomNavigation>
    </>
  );
};

export default Sidebar;
