import { ThemeProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';
import { mainTheme } from './Styles/Theme';
import { Route, Routes } from 'react-router-dom';
import AboutLayout from './Pages/Layouts/_AboutLayout.component';
import ContactLayout from './Pages/Layouts/_ContactLayout.component';
import HomeLayout from './Pages/Layouts/_HomeLayout.component';
import PortfolioLayout from './Pages/Layouts/_PortfolioLayout.component';
import Project1Layout from './Pages/Layouts/Projects/_Project1Layout.component';
import Project2Layout from './Pages/Layouts/Projects/_Project2Layout.component';
import Project3Layout from './Pages/Layouts/Projects/_Project3Layout.component';
import Project4Layout from './Pages/Layouts/Projects/_Project4Layout.component';

export default function App() {
  return (
    <>
      {/* Create theme */}
      <ThemeProvider theme={mainTheme}>
        <CssBaseline />
        {/* Create routes to pages */}
        <Routes>
          <Route path='/' element={<HomeLayout />} />
          <Route path='/about' element={<AboutLayout />} />
          <Route path="/portfolio" element={<PortfolioLayout />} />
          <Route path='/contact' element={<ContactLayout />} />
          <Route path='/project1' element={<Project1Layout />} />
          <Route path='/project2' element={<Project2Layout />} />
          <Route path="/project3" element={<Project3Layout />} />
          <Route path='/project4' element={<Project4Layout />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}