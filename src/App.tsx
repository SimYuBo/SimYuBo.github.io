import { ThemeProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';
import PortfolioLayout from './Components/Layouts/_PortfolioLayout.component';
import { mainTheme } from './Styles/Theme';
import CustomNavbar from './Utilities/CustomNav';

export default function App() {
  return (
    <>
      <ThemeProvider theme={mainTheme}>
        <CssBaseline />
        <CustomNavbar />
        <PortfolioLayout />
      </ThemeProvider>
    </>
  );
}