import React, { useState } from 'react';
import TopBar from '../components/TopBar';
import DataUploads from '../pages/DataUploads';
import UploadApproval from '../pages/UploadApproval';
import { Tabs, Tab, Box } from '@mui/material';
function Dashboard() {
  const [activeTab, setActiveTab] = useState(0);
    const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <>
      <TopBar  />
      <Box>
      <Tabs value={activeTab} onChange={handleTabChange} textColor="primary" indicatorColor="primary">
        <Tab label="Data Uploads" />
        <Tab label="Upload Approval" />
      </Tabs>

      <Box mt={2}>
        {activeTab === 0 && <DataUploads />}
        {activeTab === 1 && <UploadApproval />}
      </Box>
    </Box>
    </>
  );
}

export default Dashboard;
