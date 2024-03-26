import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Footer = () => {
  return (
    <Box component="footer" sx={{ height: "5vh", bgcolor: "background.paper" }}>
      <Container maxWidth="lg">
        <Typography variant="body2" color="text.secondary" align="center">
          © 2024 CS4514-56663202-Ngai Wing Cheuneg-FYP. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
