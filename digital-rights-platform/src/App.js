import React from "react";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

const App = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      minHeight="100vh"
      className="App"
    >
      <Header />
      <Box component="main" flexGrow={1}>
        <Container maxWidth="lg">
          <Outlet />
        </Container>
      </Box>
      <Footer />
    </Box>
  );
};

export default App;
