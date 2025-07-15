import React from 'react';
import { AppBar, Toolbar, Typography, Tabs, Tab, Box, IconButton } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import colstQIcon from '../../src/assets/image (5).png'

export default function TopBar({ activeTab, onChangeTab }) {
  return (
    <AppBar position="static" style={{background:"#1E3A8A"}}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          <span style={{ color: 'lightgreen', marginRight: 8 }}>💡</span>CostIQ
        </Typography> */}
        <img src={colstQIcon} alt='CostIQ'/>
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
