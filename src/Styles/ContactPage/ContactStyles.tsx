import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const FormRootBoxSx = {
    display: 'block',
    width: '100%',
}

export const FormContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    maxWidth: '30rem',
    margin: 'auto',
    padding: '1rem',
    backgroundColor: '#f9f9f9',
    borderRadius: '0.5rem',
  });
