import { ThemeProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';
import { mainTheme } from './Styles/Theme';
import CustomNavbar from './Utilities/CustomNav';
import HomeLayout from './Components/Layouts/_HomeLayout.component';

export default function App() {
  return (
    <>
      <ThemeProvider theme={mainTheme}>
        <CssBaseline />
        <CustomNavbar />
        <HomeLayout />
      </ThemeProvider>
    </>
  );
}