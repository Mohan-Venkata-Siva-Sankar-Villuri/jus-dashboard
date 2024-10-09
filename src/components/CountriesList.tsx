import React from 'react';
import { Box, List, ListItem, Typography, LinearProgress } from '@mui/material';

type Props = {}


const countries = [
  { name: 'New York', value: 72 },
  { name: 'San Francisco', value: 39 },
  { name: 'Sydney', value: 25 },
  { name: 'Singapore', value: 61 }
];

const CountriesList = (props: Props) => {

  const calculateProgress = (value: number, maxValue: number) => {
    return (value / maxValue) * 100;
  };

  return (
    <List>
      {countries.map((country, index) => (
        <React.Fragment key={country.name}>
          <ListItem sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography sx={{ fontWeight: 'bold' }}>{country.name}</Typography>
            <Typography sx={{ fontWeight: 'bold' }}>{country.value}K</Typography>
          </ListItem>
          <Box sx={{ width: '100%', mb: index === countries.length - 1 ? 0 : 2 }}>
            <LinearProgress 
              variant="determinate" 
              value={calculateProgress(country.value, 100)} 
              sx={{
                height: "2px", 
                borderRadius: 5, 
                bgcolor: '#e0e0e0',
                '& .MuiLinearProgress-bar': {
                  bgcolor: '#A8C5DA',
                }
              }}
            />
          </Box>
        </React.Fragment>
      ))}
    </List>
  );
};

export default CountriesList;
