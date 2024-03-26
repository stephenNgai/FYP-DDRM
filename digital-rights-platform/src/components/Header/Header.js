import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

//Library for MUI
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";

const Header = () => {
  const navigate = useNavigate();
  const [isLogged, setIsLogged] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  //Routes
  const goToHome = () => navigate("/");
  const goToCreate = () => navigate("/create");
  const goToMyCollection = () => navigate("/my-collection");
  const goToTransactions = () => navigate("/transactions");

  //TO-DO
  const loginUser = () => setIsLogged(true);
  const logoutUser = () => setIsLogged(false);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  //Below is the render logic for the header component
  return (
    <AppBar
      position="static"
      sx={{
        height: "10vh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Toolbar>
        <Box display="flex" flexGrow={1}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="home"
            onClick={goToHome}
          >
            {/* Placeholder for logo, replace src with your logo path */}
            <img
              src="/path-to-your-logo.png"
              alt="Logo"
              style={{ width: 40, height: "auto" }}
            />
          </IconButton>
          <Button color="inherit" onClick={goToHome}>
            Home
          </Button>
          <Button color="inherit" onClick={goToCreate}>
            Create
          </Button>
        </Box>
        {isLogged ? (
          // Dropdown logic here
          <>
            <IconButton
              color="inherit"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem
                onClick={() => {
                  handleClose();
                  goToMyCollection();
                }}
              >
                My Collection
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                  goToTransactions();
                }}
              >
                Transactions
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                  logoutUser();
                }}
              >
                Logout
              </MenuItem>
            </Menu>
          </>
        ) : (
          <Button color="inherit" onClick={loginUser}>
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
