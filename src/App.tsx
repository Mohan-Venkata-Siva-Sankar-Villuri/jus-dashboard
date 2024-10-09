import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import { Box } from "@mui/system";
import HeaderBar from "./components/HeaderBar";
import RightSidebar from "./components/RightSideBar";
import Dashboard from "./components/Dashboard";
import Orders from "./components/Orders";
import { createTheme, ThemeProvider } from "@mui/material";

const App = () => {
  const lightTheme = createTheme({
    palette: {
      mode: "light",

      primary: {
        main: "#ffffff",
      },
      secondary: {
        main: "#000000",
      },
      background: {
        default: "#f5f5f5",
      },
    },
    typography: {
      fontFamily: "'Roboto', sans-serif",
    },
  });
  
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#90caf9",
      },
      secondary: {
        main: "#ffffff",
      },
      background: {
        default: "#121212",
      },
    },
    typography: {
      fontFamily: "'Roboto', sans-serif",
    },
  });
  const [openNotification, setOpenNotification] = useState<boolean>(true); 
  const [openSideBar, setOpenSideBar] = useState<boolean>(true); 
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
    <Router>
      <Box>
        <NavBar  openSideBar={openSideBar}/>
        <HeaderBar  handleThemeToggle={handleThemeToggle} setOpenSideBar={setOpenSideBar}openSideBar={openSideBar} openNotification={openNotification} setOpenNotification={setOpenNotification}/>
        <RightSidebar  openNotification={openNotification}/>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </Box>
    </Router>
    </ThemeProvider>
  );
};

export default App;
