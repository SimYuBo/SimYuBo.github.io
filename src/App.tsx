import { ThemeProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';
import { mainTheme } from './Styles/Theme';
import CustomNavbar from './Utilities/CustomNav';
import HomeLayout from './Components/Layouts/_HomeLayout.component';
import AboutLayout from './Components/Layouts/_AboutLayout.component';
import PortfolioLayout from './Components/Layouts/_PortfolioLayout.component';
import ContactLayout from './Components/Layouts/_ContactLayout.component';
import { Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <>
      <ThemeProvider theme={mainTheme}>
        <CssBaseline />
        <CustomNavbar />
        <Routes>
          <Route path='/' element={<HomeLayout />}/>
          <Route path='/about' element={<AboutLayout />}/>
          <Route path='/portfolio' element={<PortfolioLayout />}/>
          <Route path='/contact' element={<ContactLayout />}/>
        </Routes>
      </ThemeProvider>
    </>
  );
}