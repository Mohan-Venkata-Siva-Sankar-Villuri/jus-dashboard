import React, { useState } from 'react';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Typography,
} from '@mui/material';
import { BugReportTwoTone, PersonTwoTone, RadioTwoTone } from '@mui/icons-material';

const sidebarData = {
  notifications: [
    {
      icon: <BugReportTwoTone sx={{ color: '#00796b' }} />,
      message: 'You have a bug that needs attention',
      time: 'Just now',
      bgColor: '#e0f7fa',
    },
    {
      icon: <PersonTwoTone sx={{ color: '#00796b' }} />,
      message: 'New user registered',
      time: '59 minutes ago',
      bgColor: '#e0f7fa',
    },
    {
      icon: <BugReportTwoTone sx={{ color: '#00796b' }} />,
      message: 'You have a bug that needs attention',
      time: '12 hours ago',
      bgColor: '#e0f7fa',
    },
    {
      icon: <RadioTwoTone sx={{ color: '#00796b' }} />,
      message: 'Andi Lane subscribed to you',
      time: 'Today, 11:59 AM',
      bgColor: '#e0f7fa',
    },
  ],
  activities: [
    {
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
      message: 'You have a bug that needs attention',
      time: 'Just now',
    },
    {
      avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
      message: 'Released a new version',
      time: '59 minutes ago',
    },
    {
      avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
      message: 'Submitted a bug',
      time: '12 hours ago',
    },
    {
      avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
      message: 'Modified A data in Page X',
      time: 'Today, 11:59 AM',
    },
    {
      avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
      message: 'Deleted a page in Project X',
      time: 'Feb 2, 2023',
    },
  ],
  contacts: [
    { name: 'Natali Craig', avatar: 'https://randomuser.me/api/portraits/women/3.jpg' },
    { name: 'Drew Cano', avatar: '', color: 'red', initial: 'D' },
    { name: 'Orlando Diggs', avatar: '', color: 'yellow', initial: 'O' },
    { name: 'Andi Lane', avatar: 'https://randomuser.me/api/portraits/women/2.jpg' },
    { name: 'Kate Morrison', avatar: 'https://randomuser.me/api/portraits/women/4.jpg' },
    { name: 'Koray Okumus', avatar: 'https://randomuser.me/api/portraits/men/5.jpg' },
  ],
};

interface Props{
  open:boolean;
  setOpen:() =>void;
}

const RightSidebar = ({openNotification}:any) => {
  return (
    <>
      <Drawer
       key={"right-side-bar"}
        anchor="right"
        open={openNotification}
        variant={openNotification?"permanent":"temporary"}
        sx={{
          zIndex: 1300, 
          '& .MuiPaper-root': {
            boxShadow: 'none',
            borderLeft:'1px solid rgba(0, 0, 0, 0.2)'
          },
        }}
        ModalProps={{
          BackdropProps: { invisible: true }, 
        }}
      >
        <Box
          sx={{
            width: '300px',
            p: 2,
            height: '100vh',
            overflowY: 'auto',
          }}
          role="presentation"
        >
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
              Notifications
            </Typography>
            <List>
              {sidebarData.notifications.map((notification, index) => (
                <ListItem key={index}>
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: notification.bgColor }}>
                      {notification.icon}
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={notification.message}
                    secondary={notification.time}
                    primaryTypographyProps={{ noWrap: true }}
                  />
                </ListItem>
              ))}
            </List>
          </Box>
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
              Activities
            </Typography>
            <List>
              {sidebarData.activities.map((activity, index) => (
                <ListItem key={index}>
                  <ListItemAvatar>
                    <Avatar src={activity.avatar} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={activity.message}
                    secondary={activity.time}
                    primaryTypographyProps={{ noWrap: true }}
                  />
                </ListItem>
              ))}
            </List>
          </Box>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
              Contacts
            </Typography>
            <List>
              {sidebarData.contacts.map((contact, index) => (
                <ListItem key={index}>
                  <ListItemAvatar>
                    {contact.avatar ? (
                      <Avatar src={contact.avatar} />
                    ) : (
                      <Avatar sx={{ bgcolor: contact.color }}>{contact.initial}</Avatar>
                    )}
                  </ListItemAvatar>
                  <ListItemText primary={contact.name} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default RightSidebar;
