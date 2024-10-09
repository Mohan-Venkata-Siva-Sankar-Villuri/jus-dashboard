import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Box, InputBase, Breadcrumbs, useTheme } from '@mui/material';
import {
  DashboardTwoTone, SearchTwoTone, WbSunnyTwoTone, HistoryTwoTone, NotificationsTwoTone, MenuTwoTone, Brightness2TwoTone
} from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';

const leftDrawerWidth = 224;
const rightSidebarWidth = 332;

const HeaderBar = ({
  setOpenNotification,
  openNotification,
  setOpenSideBar,
  openSideBar,
  handleThemeToggle,
}: any) => {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();

  const handleCardClick = (link: string) => {
    navigate(link);
  };

  const path = location.pathname;

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        borderBottom: '1px solid #e0e0e0',
        ml: openSideBar ? `${leftDrawerWidth}px` : '0px',
        width: `calc(100% - ${(openSideBar ? leftDrawerWidth : 0) + (openNotification ? rightSidebarWidth : 0)}px)`,
        right: openNotification ? `${rightSidebarWidth}px` : '0px',
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton onClick={() => setOpenSideBar(!openSideBar)}>
            <MenuTwoTone />
          </IconButton>
          <IconButton>
            <DashboardTwoTone />
          </IconButton>
          <Breadcrumbs aria-label="breadcrumb" separator="/" sx={{ ml: 1 }}>
            <Typography
              color={path === '/' ? (theme.palette.mode === "light" ? 'black' : "white") : 'grey.500'}
              sx={{ cursor: 'pointer' }}
              onClick={() => handleCardClick('/')}
            >
              Dashboard
            </Typography>

            {path === '/orders' && (
              <Typography
                sx={{ cursor: 'pointer' }}
                onClick={() => handleCardClick('/order')}
              >
                Order
              </Typography>
            )}
          </Breadcrumbs>
        </Box>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: theme.palette.mode === "light" ? "#f0f0f0" : 'rgba(255, 255, 255, 0.1)',
            padding: '2px 8px',
            borderRadius: '6px',
            width: '250px',
          }}
        >
          <SearchTwoTone sx={{ fontSize: '20px' }} />
          <InputBase
            placeholder="Search"
            sx={{ ml: 1, flex: 1 }}
            inputProps={{ 'aria-label': 'search' }}
          />
          <Typography sx={{ fontSize: '12px', mr: 1 }}>⌘/</Typography>
        </Box>

        {/* Right Section */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton onClick={() => handleThemeToggle()}>
            {theme.palette.mode === 'light' ? <WbSunnyTwoTone /> : <Brightness2TwoTone />}
          </IconButton>
          <IconButton>
            <HistoryTwoTone />
          </IconButton>
          <IconButton onClick={() => setOpenNotification(!openNotification)}>
            <NotificationsTwoTone />
          </IconButton>
          <IconButton>
            <MenuTwoTone />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderBar;
