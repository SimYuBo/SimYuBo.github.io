import { createTheme } from "@mui/material";

export const mainTheme = createTheme({
    typography: {
        fontFamily: [
            '"Open Sans"',
            '"Input Mono"',
            'Roboto',
        ].join(','),
    },
    palette: {
        mode: 'dark',
        background: {
            default: '#0A192F',
        },
        primary: {
            main: '#53D4BA',
            dark: '#0A192F',
            light: '#8892B0',
            contrastText: '#CCD6F6',
        },
        secondary: {
            main: 'rgba(83, 212, 186, 0.2)',
            dark: 'rgba(10, 25, 47, 0.2)',
            light: 'rgba(204, 214, 246, 0.2)',
        }
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 425,
            md: 768,
            lg: 1024,
            xl: 1280,
        },
    },
})