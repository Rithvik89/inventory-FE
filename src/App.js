import React from 'react';
import { createTheme,MantineProvider, Container, Button,Textarea, Header } from '@mantine/core';
import { ThemeProvider } from "styled-components";
import Home from './screen/HomeScreen/HomeScreen';
import Edit from './screen/EditScreen/EditScreen';
import Error from './screen/ErrorScreen/ErrorScreen';
import Activity from './screen/ActivityScreen';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from './screen/LoginScreen/LoginScreen';
import Topbar from './organs/Topbar';
import Footer from './organs/Footer';




function App() {
  return (
   
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
        >
        <Topbar/>
        <Footer/>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<LoginScreen />}></Route>
            <Route path="/home" element={<Home/>}></Route>
            <Route path="/activity" element={<Activity/>}></Route>
            <Route path="/:hash" element={<Edit/> }></Route>
            <Route element={<Error/>}></Route>
            <Route path='/not-found' element={<Error/>}></Route>
        </Routes>
      </BrowserRouter>
      
            
      </MantineProvider>

  );
}

export default App;