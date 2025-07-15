import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  CircularProgress,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import UploadModal from "../components/UploadModal";
import {get} from "../services/api"

const statusColor = {
  Completed: "green",
  "Pending Review": "orange",
  Processing: "blue",
};

export default function DataUploads() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false);
  const [uploads, setUploads] = useState([]);
  const [dataUploads, setDataUploads] = useState([]);

  // useEffect(() => {
  //   fetchDataUploads();
  // }, []);

  // const fetchDataUploads = async () => {
  //   try {
  //     const response = await get("get-data-uploads");

  //     setDataUploads(response.data.data);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //    // navigate("/login");
  //   }
  // };


  useEffect(() => {
    setDataUploads([
      {
        id: 1,
        studyName: "Cost Optimization Study",
        fileName: "cost_opt_study_report.pdf",
        uploadTime: "2024-07-01 14:30",
        status: "Completed",
      },
      {
        id: 2,
        studyName: "Engine Test Data",
        fileName: "engine_test_results.pdf",
        uploadTime: "2024-07-03 10:15",
        status: "Pending Review",
      },
      {
        id: 3,
        studyName: "Supplier Audit",
        fileName: "supplier_audit_report.docx",
        uploadTime: "2024-07-04 09:45",
        status: "Completed",
      },
      {
        id: 4,
        studyName: "New Model Specs",
        fileName: "model_specs_v1.zip",
        uploadTime: "2024-07-05 16:00",
        status: "Pending Review",
      },
      {
        id: 5,
        studyName: "Production Line Efficiency",
        fileName: "line_efficiency_data.csv",
        uploadTime: "2024-07-06 08:30",
        status: "Completed",
      },
      {
        id: 6,
        studyName: "Material Research",
        fileName: "material_properties.xlsx",
        uploadTime: "2024-07-06 13:00",
        status: "Processing",
      },
      {
        id: 7,
        studyName: "Emissions Testing",
        fileName: "emissions_test_report.pdf",
        uploadTime: "2024-07-07 14:00",
        status: "Pending Review",
      },
      {
        id: 8,
        studyName: "Design Review Package",
        fileName: "design_review_v2.pptx",
        uploadTime: "2024-07-07 11:20",
        status: "Completed",
      },
      {
        id: 9,
        studyName: "Market Trends Analysis",
        fileName: "market_trends_2024.docx",
        uploadTime: "2024-07-08 09:30",
        status: "Completed",
      },
      {
        id: 10,
        studyName: "Fuel Efficiency Report",
        fileName: "fuel_efficiency_report.pdf",
        uploadTime: "2024-07-08 15:45",
        status: "Pending Review",
      },
    ]);
  }, []);

  const handleSubmit = async (data) => {};

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" fontWeight="bold" mb={1} style={{color:"#1E3A8A"}}>
        Data Uploads
      </Typography>
      <Button variant="contained" sx={{ mb: 3 }} onClick={() => setOpen(true)} style={{background:"#1E3A8A"}}>
        Add a new files
      </Button>
      <UploadModal
        open={open}
        onClose={() => setOpen(false)}
        onSubmit={handleSubmit}
      />
      {loading && <CircularProgress />}
      {error && <Typography color="error">{error}</Typography>}
      {!loading && (
        <TableContainer component={Paper}>
          <Table>
            <TableHead >
              <TableRow >
                <TableCell style={{color:"#1E3A8A", fontWeight:"bold"}}>Study Name ⬍</TableCell>
                {/* <TableCell> */}
                  <TableCell fontSize="small" style={{color:"#1E3A8A", fontWeight:"bold"}}> File Name
                </TableCell>
                {/* <TableCell> */}
                  <TableCell fontSize="small" style={{color:"#1E3A8A", fontWeight:"bold"}}> Upload Time
                </TableCell>
                {/* <TableCell> */}
                  <TableCell fontSize="small" style={{color:"#1E3A8A", fontWeight:"bold"}}> Status
                </TableCell>
                <TableCell align="center" style={{color:"#1E3A8A", fontWeight:"bold"}}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dataUploads.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.studyName}</TableCell>
                  <TableCell>
                    <a
                      href="#"
                      style={{ color: "#1565c0", textDecoration: "none" }}
                    >
                      {row.fileName}
                    </a>
                  </TableCell>
                  <TableCell>{row.uploadTime}</TableCell>
                  <TableCell sx={{ color: statusColor[row.status] }}>
                    {row.status}
                  </TableCell>
                  <TableCell align="center">
                    <IconButton>
                      <EditIcon fontSize="small" />
                    </IconButton>
                    <IconButton onClick={() => deleteUpload(row.id)}>
                      <DeleteIcon fontSize="small" />
                    </IconButton>
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
