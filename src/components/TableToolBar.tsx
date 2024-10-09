import React from 'react';
import { Box, IconButton, TextField, InputAdornment, useTheme } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import FilterListIcon from '@mui/icons-material/FilterList';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import SearchIcon from '@mui/icons-material/Search';

const TableToolbar: React.FC = () => {
  const theme = useTheme();
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      sx={{
        backgroundColor: theme.palette.mode ==="light"? '#F7F9FB':"rgba(255, 255, 255, 0.05)", // Light background color
        borderRadius: '12px',
        padding: '8px 16px',
        mb: 2,
      }}
    >
      <Box display="flex" alignItems="center" gap={1}>
        <IconButton>
          <AddIcon />
        </IconButton>
        <IconButton>
          <FilterListIcon />
        </IconButton>
        <IconButton>
          <SwapVertIcon />
        </IconButton>
      </Box>

      <TextField
        variant="outlined"
        placeholder="Search"
        size="small"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        sx={{
          width: 200,
          backgroundColor:  theme.palette.mode ==="light"? '#F7F9FB':"rgba(255, 255, 255, 0.05)",
          borderRadius: '8px',
        }}
      />
    </Box>
  );
};

export default TableToolbar;