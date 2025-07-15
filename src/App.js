import React, { useState } from 'react';
import Dashboard from './pages/Dashboard';
import { Box, CssBaseline } from '@mui/material';

function App() {
  return (
    <>
      <CssBaseline />
      <Box sx={{ p: 0, m: 0, height: '100vh' }}>
        <Dashboard />
      </Box>
    </>
  );
}

export default App;
