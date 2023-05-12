import { useState } from 'react';
import { Button, Snackbar, TextField, Alert } from '@mui/material';
import { Send } from '@mui/icons-material';
import { FormContainer } from '../Styles/ContactPage/ContactStyles';
import emailjs from 'emailjs-com';

interface FormValues {
    name: string;
    email: string;
    message: string;
}

const initialState: FormValues = {
    name: '',
    email: '',
    message: '',
};

const ContactForm = () => {
    const [formValues, setFormValues] = useState<FormValues>(initialState);
    const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);
    const [snackbarSeverity, setSnackbarSeverity] = useState<
        'success' | 'error'
    >('success');
    const [snackbarMessage, setSnackbarMessage] = useState<string>('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues((prevValues) => ({
            ...prevValues,
            [event.target.name]: event.target.value,
        }));
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const emailData = {
                to_name: 'Sim Yu Bo',
                to_email: 'boyusim@gmail.com',
                from_name: formValues.name,
                from_email: formValues.email,
                message: formValues.message,
            };

            await emailjs.send(
                'service_uftaqdq',
                'template_lkns4qv',
                emailData,
                'YOUR_USER_ID'
            );

            setSnackbarSeverity('success');
            setSnackbarMessage('Message sent successfully!');
            setOpenSnackbar(true);
            setFormValues(initialState);
        } catch (error) {
            setSnackbarSeverity('error');
            setSnackbarMessage('Failed to send message. Please try again later.');
            setOpenSnackbar(true);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <FormContainer >
                <TextField
                    required
                    label="Name"
                    name="name"
                    value={formValues.name}
                    onChange={handleChange}
                />
                <TextField
                    required
                    label="Email"
                    name="email"
                    value={formValues.email}
                    onChange={handleChange}
                    type="email"
                />
                <TextField
                    required
                    label="Message"
                    name="message"
                    value={formValues.message}
                    onChange={handleChange}
                    multiline
                    rows={4}
                />
                <Button
                    variant="contained"
                    color="primary"
                    endIcon={<Send />}
                    type="submit"
                >
                    Send
                </Button>
                <Snackbar
                    open={openSnackbar}
                    autoHideDuration={6000}
                    onClose={() => setOpenSnackbar(false)}
                >
                    <Alert
                        onClose={() => setOpenSnackbar(false)}
                        severity={snackbarSeverity}
                        sx={{ width: '100%' }}
                    >
                        {snackbarMessage}
                    </Alert>
                </Snackbar>
            </FormContainer>
        </form>
    );
};

export default ContactForm;