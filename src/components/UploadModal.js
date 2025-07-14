import React, { useState } from 'react';
import {
  Box, Button, Dialog, DialogActions, DialogContent, DialogTitle,
  Grid, TextField, MenuItem, Typography
} from '@mui/material';
import { useDropzone } from 'react-dropzone';

const clusterGroups = ['Group A','Group B'];
const modelYears = ['2022','2023','2024'];
const benchmarkingTypes = ['Type A','Type B'];
const fordVehicles = ['F-150','Mustang'];

export default function UploadModal({ open, onClose, onSubmit }) {
  const [form, setForm] = useState({
    studyName:'',clusterGroup:'',modelYear:'',benchmarkingType:'',
    fordVehicle:'',competitorMake:'',competitorModel:'',commodityName:'',description:'',
  });
  const [file, setFile] = useState(null);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    multiple:false,onDrop:accepted => setFile(accepted[0])
  });
  const handleChange = e => setForm({...form,[e.target.name]:e.target.value});
  const handleSubmit = () => {
    const data = new FormData();
    Object.entries(form).forEach(([k,v]) => data.append(k,v));
    if(file) data.append('file',file);
    onSubmit(data);
    onClose();
    setForm({studyName:'',clusterGroup:'',modelYear:'',benchmarkingType:'',
      fordVehicle:'',competitorMake:'',competitorModel:'',commodityName:'',description:''});
    setFile(null);
  };
  const handleClear = () => {
    setForm({studyName:'',clusterGroup:'',modelYear:'',benchmarkingType:'',
      fordVehicle:'',competitorMake:'',competitorModel:'',commodityName:'',description:''});
    setFile(null);
  };
  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>Upload Details</DialogTitle>
      <DialogContent>
        <Box component="form" sx={{ mt:2 }}>
          <Grid container spacing={2}>
            {[
              {name:'studyName',label:'Study Name',select:false,options:[]},
              {name:'benchmarkingType',label:'Benchmarking Type',select:true,options:benchmarkingTypes},
              {name:'clusterGroup',label:'Cluster Group',select:true,options:clusterGroups},
              {name:'fordVehicle',label:'Ford Vehicle',select:true,options:fordVehicles},
              {name:'modelYear',label:'Model Year',select:true,options:modelYears},
              {name:'competitorMake',label:'Competitor Make',select:false,options:[]},
              {name:'competitorModel',label:'Competitor Model',select:false,options:[]},
              {name:'commodityName',label:'Commodity Name',select:false,options:[]},
            ].map((field,i) => (
              <Grid item xs={6} key={i}>
                <TextField
                  fullWidth
                  name={field.name}
                  label={field.label}
                  value={form[field.name]}
                  onChange={handleChange}
                  select={field.select}
                >
                  {field.select && field.options.map(opt => <MenuItem key={opt} value={opt}>{opt}</MenuItem>)}
                </TextField>
              </Grid>
            ))}
            <Grid item xs={12}>
              <Box {...getRootProps()} sx={{
                border:'2px dashed #1976d2',p:2,textAlign:'center',cursor:'pointer',
                backgroundColor:isDragActive?'#e3f2fd':'#f9f9f9'
              }}>
                <input {...getInputProps()} />
                <Typography color="primary">
                  {file?file.name:'+ Drag and drop files here or click to select file.'}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth multiline rows={3}
                name="description" label="Description"
                value={form.description} onChange={handleChange}
              />
            </Grid>
          </Grid>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleClear}>Clear</Button>
        <Button variant="contained" onClick={handleSubmit}>Submit Files</Button>
      </DialogActions>
    </Dialog>
  );
}
