import React from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, Button, Pagination, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import VisibilityIcon from '@mui/icons-material/Visibility';

const approvalData = [
  { id:1, study:'Engine Test Data',file:'engine_test_results.pdf',time:'2024-01-05 14:30',status:'Pending Review' },
  { id:2, study:'New Model Specs',file:'model_specs_v1.zip',time:'2024-01-20 16:00',status:'Pending Review' },
  { id:3, study:'Production Line Efficiency',file:'line_efficiency_data.csv',time:'2024-02-10 09:30',status:'Pending Review' },
  { id:4, study:'Emissions Testing',file:'emissions_test_report.pdf',time:'2024-02-20 14:00',status:'Pending Review' },
];

export default function UploadApproval() {
  return (
    <Box sx={{ p:4 }}>
      <Typography variant="h5" fontWeight="bold" mb={1}>Upload Approval</Typography>
      <Typography variant="body2" mb={2}>Lorem Ipsum</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Study Name ⬍</TableCell>
              <TableCell><FilterListIcon fontSize="small"/> File Name</TableCell>
              <TableCell><FilterListIcon fontSize="small"/> Upload Time</TableCell>
              <TableCell><FilterListIcon fontSize="small"/> Status</TableCell>
              <TableCell align="center"><FilterListIcon fontSize="small"/> Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {approvalData.map(row=>(
              <TableRow key={row.id}>
                <TableCell>{row.study}</TableCell>
                <TableCell><a href="#" style={{color:'#1565c0',textDecoration:'none'}}>{row.file}</a></TableCell>
                <TableCell>{row.time}</TableCell>
                <TableCell sx={{color:'orange',fontWeight:500}}>{row.status}</TableCell>
                <TableCell align="center">
                  <Button variant="contained" size="small" startIcon={<VisibilityIcon />}>Review</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
        <Pagination count={1} page={1} />
        <FormControl size="small">
          <InputLabel>Rows</InputLabel>
          <Select value={10} label="Rows">
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={25}>25</MenuItem>
            <MenuItem value={50}>50</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
);
}
