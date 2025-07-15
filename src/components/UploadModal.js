import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Grid,
  MenuItem,
  Typography,
  Box,
  IconButton,
  Paper
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useDropzone } from 'react-dropzone';

const benchmarkingTypes = ['Ford Vehicle', 'Non-Ford Vehicle'];
const fordVehicles = ['F-150', 'Mustang', 'Escape'];
const modelYears = ['2022', '2023', '2024'];

const UploadDetailsDialog = ({ open, onClose }) => {
  const [formData, setFormData] = useState({
    studyName: '',
    benchmarkingType: '',
    vhmGroup: '',
    fordVehicle: '',
    modelYear: '',
    competitorMake: '',
    competitorModel: '',
    commodityName: '',
    description: '',
    file: null
  });

  const [errors, setErrors] = useState({});

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      console.log(acceptedFiles, "line 35");

      setFormData({ ...formData, file: acceptedFiles[0] });
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.benchmarkingType) tempErrors.benchmarkingType = 'Required';
    if (!formData.fordVehicle) tempErrors.fordVehicle = 'Required';
    return tempErrors;
  };

  const handleSubmit = () => {
    const tempErrors = validate();
    if (Object.keys(tempErrors).length > 0) {
      setErrors(tempErrors);
    } else {
      console.log('Form Submitted', formData);
      onClose();
    }
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle style={{color:"#1E3A8A", fontWeight:"bold"}}>
        Upload Details
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{ position: 'absolute', right: 8, top: 8 ,color:"#1E3A8A"}}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <TextField
              label="Study Name"
              name="studyName"
              value={formData.studyName}
              onChange={handleChange}
              fullWidth
              variant="outlined"
              sx={{
                backgroundColor: '#fff',
                borderRadius: 1.5,
                '& .MuiOutlinedInput-root': {
                  borderRadius: 2,
                  fontSize: '14px',
                },
                '& .MuiInputLabel-root': {
                  color: '#1E3A8A',
                  fontWeight: 600,
                  fontSize: '13px',
                },
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#e0e0e0',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#90caf9',
                },
                '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#1E3A8A',
                }
              }}
            />

          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              select
              label="*Benchmarking Type"
              name="benchmarkingType"
              value={formData.benchmarkingType}
              onChange={handleChange}
              fullWidth
              error={!!errors.benchmarkingType}
              helperText={errors.benchmarkingType}
              sx={{
                backgroundColor: '#fff',
                borderRadius: 1.5,
                '& .MuiOutlinedInput-root': {
                  borderRadius: 2,
                  fontSize: '14px',
                },
                '& .MuiInputLabel-root': {
                  color: '#1E3A8A',
                  fontWeight: 600,
                  fontSize: '13px',
                },
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#e0e0e0',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#90caf9',
                },
                '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#1E3A8A',
                }
              }}
            >
              {benchmarkingTypes.map((type) => (
                <MenuItem key={type} value={type}>{type}</MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="VHM/Cluster Group/VESC"
              name="vhmGroup"
              value={formData.vhmGroup}
              onChange={handleChange}
              fullWidth
              variant="outlined"
              sx={{
                backgroundColor: '#fff',
                borderRadius: 1.5,
                '& .MuiOutlinedInput-root': {
                  borderRadius: 2,
                  fontSize: '14px',
                },
                '& .MuiInputLabel-root': {
                  color: '#1E3A8A',
                  fontWeight: 600,
                  fontSize: '13px',
                },
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#e0e0e0',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#90caf9',
                },
                '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#1E3A8A',
                }
              }}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              select
              label="*Ford Vehicle"
              name="fordVehicle"
              value={formData.fordVehicle}
              onChange={handleChange}
              fullWidth
              error={!!errors.fordVehicle}
              helperText={errors.fordVehicle}
              sx={{
                backgroundColor: '#fff',
                borderRadius: 1.5,
                '& .MuiOutlinedInput-root': {
                  borderRadius: 2,
                  fontSize: '14px',
                },
                '& .MuiInputLabel-root': {
                  color: '#1E3A8A',
                  fontWeight: 600,
                  fontSize: '13px',
                },
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#e0e0e0',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#90caf9',
                },
                '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#1E3A8A',
                }
              }}
            >
              {fordVehicles.map((vehicle) => (
                <MenuItem key={vehicle} value={vehicle}>{vehicle}</MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              select
              label="Model Year"
              name="modelYear"
              value={formData.modelYear}
              onChange={handleChange}
              fullWidth
              sx={{
                backgroundColor: '#fff',
                borderRadius: 1.5,
                '& .MuiOutlinedInput-root': {
                  borderRadius: 2,
                  fontSize: '14px',
                },
                '& .MuiInputLabel-root': {
                  color: '#1E3A8A',
                  fontWeight: 600,
                  fontSize: '13px',
                },
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#e0e0e0',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#90caf9',
                },
                '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#1E3A8A',
                }
              }}
            >
              {modelYears.map((year) => (
                <MenuItem key={year} value={year}>{year}</MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Competitor Make"
              name="competitorMake"
              value={formData.competitorMake}
              onChange={handleChange}
              fullWidth
              variant="outlined"
              sx={{
                backgroundColor: '#fff',
                borderRadius: 1.5,
                '& .MuiOutlinedInput-root': {
                  borderRadius: 2,
                  fontSize: '14px',
                },
                '& .MuiInputLabel-root': {
                  color: '#1E3A8A',
                  fontWeight: 600,
                  fontSize: '13px',
                },
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#e0e0e0',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#90caf9',
                },
                '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#1E3A8A',
                }
              }}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Competitor Model"
              name="competitorModel"
              value={formData.competitorModel}
              onChange={handleChange}
              fullWidth
              variant="outlined"
              sx={{
                backgroundColor: '#fff',
                borderRadius: 1.5,
                '& .MuiOutlinedInput-root': {
                  borderRadius: 2,
                  fontSize: '14px',
                },
                '& .MuiInputLabel-root': {
                  color: '#1E3A8A',
                  fontWeight: 600,
                  fontSize: '13px',
                },
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#e0e0e0',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#90caf9',
                },
                '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#1E3A8A',
                }
              }}
            />
          </Grid>

          <Grid item xs={12} sm={12}>
            <TextField
              label="Commodity Name"
              name="commodityName"
              value={formData.commodityName}
              onChange={handleChange}
              fullWidth
              variant="outlined"
              sx={{
                backgroundColor: '#fff',
                borderRadius: 1.5,
                '& .MuiOutlinedInput-root': {
                  borderRadius: 2,
                  fontSize: '14px',
                },
                '& .MuiInputLabel-root': {
                  color: '#1E3A8A',
                  fontWeight: 600,
                  fontSize: '13px',
                },
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#e0e0e0',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#90caf9',
                },
                '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#1E3A8A',
                }
              }}
            />
          </Grid>

          <Grid item xs={12}>
            <Typography variant="subtitle2" gutterBottom style={{color:"#1E3A8A", fontWeight:"bold"}}>File Upload</Typography>
            <Paper
              variant="outlined"
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                border: '2px dashed #c5c5c5',
                height: 120,
                borderRadius: 2,
                backgroundColor: '#f9f9f9',
                cursor: 'pointer',
              }}
              {...getRootProps()}
            >
              <input {...getInputProps()} />
              <Box display="flex" flexDirection="column" alignItems="center">
                <CloudUploadIcon fontSize="large" sx={{ color: '#90a4ae' }} />
                <Typography variant="caption" color="text.secondary">
                  {formData.file ? formData.file.name : 'Drag and drop or click to upload file'}
                </Typography>
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              fullWidth
              variant="outlined"
              multiline
              rows={3}
              sx={{
                backgroundColor: '#fff',
                borderRadius: 1.5,
                '& .MuiOutlinedInput-root': {
                  borderRadius: 2,
                  fontSize: '14px',
                },
                '& .MuiInputLabel-root': {
                  color: '#1E3A8A',
                  fontWeight: 600,
                  fontSize: '13px',
                },
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#e0e0e0',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#90caf9',
                },
                '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#1E3A8A',
                }
              }}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">Cancel</Button>
        <Button onClick={handleSubmit} variant="contained" color="primary">Submit</Button>
      </DialogActions>
    </Dialog>
  );
};

export default UploadDetailsDialog;