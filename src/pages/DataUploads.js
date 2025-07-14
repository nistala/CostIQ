import React, { useState } from 'react';
import { Box, Typography, Button, Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, IconButton, CircularProgress } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import UploadModal from '../components/UploadModal';


const statusColor = { Completed:'green','Pending Review':'orange',Processing:'blue' };

export default function DataUploads() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false);
  const [uploads, setUploads] = useState([]);

  const handleSubmit = async data => {
    // try {
    //   await (await import('../services/api')).default.post('/uploads', data, { headers:{'Content-Type':'multipart/form-data'}});
    //   fetchUploads();
    // } catch(e) { console.error(e); }
  };

  return (
    <Box sx={{ p:3 }}>
      <Typography variant="h5" fontWeight="bold" mb={1}>Data Uploads</Typography>
      <Typography variant="body2" mb={2}>Lorem Ipsum</Typography>
      <Button variant="contained" sx={{ mb:3 }} onClick={()=>setOpen(true)}>Add a new files</Button>
      <UploadModal open={open} onClose={()=>setOpen(false)} onSubmit={handleSubmit} />
      {loading && <CircularProgress />}
      {error && <Typography color="error">{error}</Typography>}
      {!loading && (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Study Name ⬍</TableCell>
                <TableCell><FilterListIcon fontSize="small"/> File Name</TableCell>
                <TableCell><FilterListIcon fontSize="small"/> Upload Time</TableCell>
                <TableCell><FilterListIcon fontSize="small"/> Status</TableCell>
                <TableCell align="center">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {uploads.map(row=>(
                <TableRow key={row.id}>
                  <TableCell>{row.studyName}</TableCell>
                  <TableCell><a href="#" style={{color:'#1565c0',textDecoration:'none'}}>{row.fileName}</a></TableCell>
                  <TableCell>{row.uploadTime}</TableCell>
                  <TableCell sx={{color:statusColor[row.status]}}>{row.status}</TableCell>
                  <TableCell align="center">
                    <IconButton><EditIcon fontSize="small"/></IconButton>
                    <IconButton onClick={()=>deleteUpload(row.id)}><DeleteIcon fontSize="small"/></IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
);
}
