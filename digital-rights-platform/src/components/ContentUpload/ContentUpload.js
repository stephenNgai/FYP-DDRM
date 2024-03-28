import React from "react";
//import FileUploadButton from "./FileUploadButton";
//Library for MUI components
import {
  Grid,
  Box,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

//Library for routing
import { useNavigate } from "react-router-dom";

function ContentUpload() {
  const navigate = useNavigate();

  const handleReturn = () => {
    // Navigate to the previous page
    navigate(-1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Form submission logic
    console.log("Form submitted");
  };

  return (
    <Grid container sx={{ width: "100%" }}>
      <Grid item xs={1} sx={{ width: "10%" }}>
        <Box display="flex" flexDirection="column" alignItems="center" p={2}>
          <IconButton onClick={handleReturn} aria-label="return" size="large">
            <ArrowBackIcon />
          </IconButton>
          <IconButton onClick={handleSubmit} aria-label="submit" size="large">
            <AddIcon />
          </IconButton>
        </Box>
      </Grid>
      <Grid item xs={11} sx={{ width: "90%" }}>
        <Box p={2}>
          <Typography variant="h5" gutterBottom>
            Create Resources
          </Typography>
          <Box display="flex" height="95%">
            <Box width="40%" pr={2}></Box>
            <Box width="60%">
              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  label="Add a Title"
                  variant="filled"
                  sx={{ mb: 2 }}
                />
                <TextField
                  fullWidth
                  label="Add a Author"
                  variant="filled"
                  sx={{ mb: 2 }}
                />
                <TextField
                  fullWidth
                  label="Add a Description"
                  variant="filled"
                  multiline
                  rows={4}
                  sx={{ mb: 2 }}
                />
                <TextField
                  fullWidth
                  label="Add a Tags"
                  variant="filled"
                  sx={{ mb: 2 }}
                />
                <TextField
                  fullWidth
                  label="Set a Price"
                  variant="filled"
                  sx={{ mb: 2 }}
                />
                <FormControl fullWidth sx={{ mb: 2 }} variant="filled">
                  <InputLabel>Distribution Options</InputLabel>
                  <Select label="Distribution Options">
                    <MenuItem value="option1">Option 1</MenuItem>
                    <MenuItem value="option2">Option 2</MenuItem>
                    <MenuItem value="option3">Option 3</MenuItem>
                  </Select>
                  <FormHelperText>Select a distribution option</FormHelperText>
                </FormControl>
              </form>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default ContentUpload;
