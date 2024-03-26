// App.js
import React from "react";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Container from "@mui/material/Container";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Container maxWidth="lg">
        <Outlet />
      </Container>
      <Footer />
    </div>
  );
};

export default App;
