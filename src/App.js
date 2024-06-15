import React from 'react';
import { createTheme,MantineProvider, Container, Button,Textarea, Header } from '@mantine/core';
import { ThemeProvider } from "styled-components";
import Home from './screen/HomeScreen/HomeScreen';
import Error from './screen/ErrorScreen/ErrorScreen';
import Activity from './screen/ActivityScreen';
import VechicleSaleScreen from './screen/VehicleSaleScreen';
import VechicleServiceScreen from './screen/VehicleServiceScreen';
import VechicleInventoryScreen from './screen/VehicleInventoryScreen';
import SpareInventoryScreen from './screen/SpareInventoryScreen';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from './screen/LoginScreen/LoginScreen';
import Topbar from './organs/Topbar';
import Footer from './organs/Footer';
import VehicleScreen from './screen/VehicleScreen';
import SparesScreen from './screen/SparesScreen';
import DailyReport from './screen/ReportsScreen/DailyReport';
import ProfileScreen from './screen/ProfileScreen';
import MonthlyReport from './screen/ReportsScreen/MonthlyReport';





function App() {
  return (
   
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
        >
       
        <BrowserRouter>
        <Topbar/>
        <Footer/>
        <Routes>
            <Route path="/" element={<LoginScreen />}></Route>
            <Route path="/home" element={<Home/>}></Route>
            <Route path="/activity" element={<Activity/>}></Route>
            <Route path="/vehicle/sale" element={<VechicleSaleScreen/>}></Route>
            <Route path="/vehicle/service" element={<VechicleServiceScreen/>}></Route>
            <Route path="/inventory/spares" element={<SpareInventoryScreen/>}></Route>
            <Route path="/inventory/vehicle" element={<VechicleInventoryScreen/>}></Route>
            
            //TODO: add screens here ...
            <Route path="/vehicles" element={<VehicleScreen/>}></Route>
            <Route path="/spares" element={<SparesScreen/>}></Route>
            <Route path="/profile" element={<ProfileScreen/>}></Route>
            <Route path="/monthly-report" element={<MonthlyReport/>}></Route>
            <Route path="/daily-report" element={<DailyReport/>}></Route>
            <Route psth="/inventory" element={<Error/>}></Route>
            <Route element={<Error/>}></Route>
            <Route path='/not-found' element={<Error/>}></Route>
        </Routes>
      </BrowserRouter>
      
            
      </MantineProvider>

  );
}

export default App;