import React from 'react';
import { AppBar, Toolbar, Typography, Tabs, Tab, Box, IconButton } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';

export default function TopBar({ activeTab, onChangeTab }) {
  return (
    <AppBar position="static" color="primary">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          <span style={{ color: 'lightgreen', marginRight: 8 }}>💡</span>CostIQ
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography sx={{ ml: 2 }}>CRID2</Typography>
          <Typography sx={{ ml: 2 }}>About</Typography>
          <Typography sx={{ ml: 2 }}>Contact Us</Typography>
          <IconButton color="inherit" sx={{ ml: 1 }}>
            <AccountCircle />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
