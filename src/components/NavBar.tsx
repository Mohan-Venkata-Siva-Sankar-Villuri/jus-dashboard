import React, { useState } from 'react';
import {
  Drawer, List, ListItemIcon, ListItemText, ListItemButton, Avatar, Typography, Box, Collapse
} from '@mui/material';
import {
  ViewModuleTwoTone, FolderTwoTone, LocalMallTwoTone, SchoolTwoTone, PersonTwoTone, CampaignTwoTone,
  DescriptionTwoTone, PeopleTwoTone, AccountCircleTwoTone, BusinessTwoTone, ForumTwoTone, NavigateNextTwoTone, ExpandMoreTwoTone, FiberManualRecordTwoTone
} from '@mui/icons-material';

interface SubItem {
  text: string;
}

interface Item {
  text: string;
  icon?: JSX.Element;
  subItems?: SubItem[];
}

interface NavigationItem {
  section: string;
  items: Item[];
}

const drawerWidth = 240;



const NavBar = ({openSideBar}:any) => {
  const [openSubItems, setOpenSubItems] = useState<{ [key: string]: boolean }>({});

  const navigationItems: NavigationItem[] = [
    {
      section: 'Favorites',
      items: [
        { text: 'Overview' },  
        { text: 'Projects' }, 
      ],
    },
    {
      section: 'Dashboards',
      items: [
        { text: 'Default', icon: <ViewModuleTwoTone  />, subItems: [{ text: 'Sub Default 1' }, { text: 'Sub Default 2' }] },
        { text: 'eCommerce', icon: <LocalMallTwoTone  />, subItems: [{ text: 'Sub eCommerce 1' }, { text: 'Sub eCommerce 2' }] },
        { text: 'Projects', icon: <FolderTwoTone />, subItems: [{ text: 'Sub Projects 1' }] },
        { text: 'Online Courses', icon: <SchoolTwoTone  />, subItems: [{ text: 'Sub Course 1' }, { text: 'Sub Course 2' }] },
      ],
    },
    {
      section: 'Pages',
      items: [
        { text: 'User Profile', icon: <PersonTwoTone  />, subItems: [{ text: 'Sub Profile 1' }] },
        { text: 'Projects', icon: <FolderTwoTone />, subItems: [{ text: 'Sub Project 1' }] },
        { text: 'Campaigns', icon: <CampaignTwoTone  />, subItems: [{ text: 'Sub Campaign 1' }] },
        { text: 'Documents', icon: <DescriptionTwoTone/>, subItems: [{ text: 'Sub Document 1' }, { text: 'Sub Document 2' }] },
        { text: 'Followers', icon: <PeopleTwoTone />, subItems: [{ text: 'Sub Follower 1' }] },
        { text: 'Account', icon: <AccountCircleTwoTone/>, subItems: [{ text: 'Sub Account 1' }] },
        { text: 'Corporate', icon: <BusinessTwoTone  />, subItems: [{ text: 'Sub Corporate 1' }] },
        { text: 'Social', icon: <ForumTwoTone  />, subItems: [{ text: 'Sub Social 1' }] },
      ],
    },
  ];

  const handleSubItemToggle = (itemText: string) => {
    setOpenSubItems((prevState) => ({
      ...prevState,
      [itemText]: !prevState[itemText],
    }));
  };

  return (
    <div>
      <Drawer
        key={"right-side-bar"}
        variant={openSideBar?"permanent":"temporary"}  
        open={openSideBar}
        sx={{
          width: drawerWidth, 
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            padding: 2,
            flexDirection: 'row',
          }}
        >
          <Avatar sx={{ width: 24, height: 24}}>
            <PersonTwoTone /> 
          </Avatar>
          <Typography variant="h6" sx={{ marginLeft: 2 }}>ByeWind</Typography>
        </Box>

        <List>
          {navigationItems.map((navItem, index) => (
            <div key={index}>
              <ListItemButton>
                <ListItemText
                  primary={navItem.section}
                  sx={{ fontFamily: 'Inter', fontSize: '14px', fontWeight: 400, color: 'grey' }} 
                />
              </ListItemButton>

              {navItem.section === 'Favorites' && (
                <List component="div" disablePadding>
                  {navItem.items.map((item, itemIndex) => (
                    <ListItemButton key={itemIndex} sx={{ pl: 4 }}>
                      <ListItemIcon sx={{ minWidth: 'auto', mr: 1 }}>
                        <FiberManualRecordTwoTone sx={{  fontSize: '8px' }} /> 
                      </ListItemIcon>
                      <ListItemText
                        primary={item.text}
                        sx={{ fontFamily: 'Inter', fontSize: '14px', fontWeight: 400, margin: 0 }}
                      />
                    </ListItemButton>
                  ))}
                </List>
              )}

              {navItem.section !== 'Favorites' && navItem.items && (
                <List component="div" disablePadding>
                  {navItem.items.map((item, itemIndex) => (
                    <div key={itemIndex}>
                      <ListItemButton
                        onClick={() => handleSubItemToggle(item.text)}
                        sx={{ pl: 4 }}
                      >
                        {item.subItems && (
                          openSubItems[item.text] 
                            ? <ExpandMoreTwoTone sx={{ color: 'grey' }} />  
                            : <NavigateNextTwoTone sx={{ color: 'grey' }} />  
                        )}
                        {item.icon && <ListItemIcon sx={{ mr: '2px', minWidth: 'auto' }}>{item.icon}</ListItemIcon>}
                        <ListItemText
                          primary={item.text}
                          sx={{ fontFamily: 'Inter', fontSize: '14px', fontWeight: 400, margin: 0 }}
                        />
                      </ListItemButton>

                      {/* Render sub-items without icons */}
                      <Collapse in={openSubItems[item.text]} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                          {item.subItems && item.subItems.map((subItem, subIndex) => (
                            <ListItemButton key={subIndex} sx={{ pl: 8 }}>
                              <ListItemText
                                primary={subItem.text}
                                sx={{ fontFamily: 'Inter', fontSize: '14px', fontWeight: 400, margin: 0 }}
                              />
                            </ListItemButton>
                          ))}
                        </List>
                      </Collapse>
                    </div>
                  ))}
                </List>
              )}
            </div>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default NavBar;
