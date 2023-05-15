import styled from "@emotion/styled";
import { Box, Button, TextField } from "@mui/material";
import { mainTheme } from "../Theme";

export const FormContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    margin: 'auto',
    paddingTop: '1em',
});

export const CustomTextField = styled(TextField)({
    '& .MuiOutlinedInput-notchedOutline': {
        borderWidth: '2px',
        borderStyle: 'solid',
        borderColor: mainTheme.palette.primary.main,
        borderRadius: '5px',
        width: '100%',
    },
    '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: mainTheme.palette.primary.light,
    },
});


export const CustomButton = styled(Button)({
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: mainTheme.palette.primary.main,
    backgroundColor: mainTheme.palette.primary.dark,
    fontFamily: 'Arial',
    fontWeight: 'bold',
    color: mainTheme.palette.primary.main,
    alignItems: 'center',
    margin: 'auto',
    '&:hover': {
        backgroundColor: mainTheme.palette.secondary.main,
    },
})