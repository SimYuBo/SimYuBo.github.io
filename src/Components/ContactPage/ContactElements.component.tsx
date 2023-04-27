import { Box, Button, TextField, styled } from "@mui/material";
import { FormRootBoxSx } from "../../Styles/ContactPage/ContactStyles";

function FormRootBox({ children }: { children: React.ReactNode | React.ReactNode[] }) {
    return (
        <>
            <Box
                sx={FormRootBoxSx}
                component="form"
                autoComplete="off"
                noValidate
            >
                {children}
            </Box>
        </>
    );
}

const CustomTextField = styled(TextField)`
  .MuiOutlinedInput-root {
    border-width: 2px;
    border-color: #53D4BA;
  }
`;

function NameInputField() {
    return (
        <>
            <CustomTextField
                required
                id='Name'
                placeholder='Name'
                fullWidth
                sx={{mt: '2em'}}
            />
        </>
    );
}

function EmailInputField() {
    return (
        <>
            <TextField
                required
                id="Email"
                placeholder="Email"
                multiline
                fullWidth
                sx={{mt: '2em'}}
            />
        </>
    );
}

function MessageInputField() {
    return (
        <>
            <TextField
                required
                id="Message"
                placeholder="Message"
                multiline
                fullWidth
                sx={{mt: '2em'}}
            />
        </>
    );
}

function SubmitButton() {
    return (
        <>
            <Button variant='outlined' sx={{mt: '2em'}}>
                Send
            </Button>
        </>
    );
}

export function MessageForm() {
    return (
        <>
            <FormRootBox>
                <form>
                    <NameInputField />
                    <EmailInputField />
                    <MessageInputField />
                    <SubmitButton/>
                </form>
            </FormRootBox>
        </>
    );
}