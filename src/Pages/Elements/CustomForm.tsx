import { useState } from 'react';
import { Snackbar, Alert } from '@mui/material';
import { Send } from '@mui/icons-material';
import { CustomButton, CustomTextField, FormContainer } from '../../Styles/ContactStyles';
import emailjs from 'emailjs-com';

// Importing necessary dependencies and components

interface FormValues {
    name: string;
    email: string;
    message: string;
}

// Defining an interface to represent the form values

const initialState: FormValues = {
    name: '',
    email: '',
    message: '',
};

// Initializing the initial state of the form values

const ContactForm = () => {
    const [formValues, setFormValues] = useState<FormValues>(initialState);
    const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);
    const [snackbarSeverity, setSnackbarSeverity] = useState<
        'success' | 'error'
    >('success');
    const [snackbarMessage, setSnackbarMessage] = useState<string>('');

    // Defining state variables and their initial values using the useState hook

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues((prevValues) => ({
            ...prevValues,
            [event.target.name]: event.target.value,
        }));
    };

    // Handling the change event for input fields and updating the form values

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
                'HP1dxANU6H-QiLrKJ'
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

    // Handling the form submission event and sending an email using emailjs library

    return (
        <form onSubmit={handleSubmit}>
            <FormContainer >
                <CustomTextField
                    required
                    label="Name"
                    name="name"
                    value={formValues.name}
                    onChange={handleChange}
                />
                <CustomTextField
                    required
                    label="Email"
                    name="email"
                    value={formValues.email}
                    onChange={handleChange}
                    type="email"
                />
                <CustomTextField
                    required
                    label="Message"
                    name="message"
                    value={formValues.message}
                    onChange={handleChange}
                    multiline
                    rows={7}
                />
                <CustomButton
                    variant="contained"
                    endIcon={<Send />}
                    type="submit"
                    sx={{ width: '30%', height: '4em' }}
                >
                    Send
                </CustomButton>
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