import { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, Typography } from '@mui/material';
import { DialogProps } from '../../Interfaces/IDialog';

const PortfolioDialog = ({ imageUrl, dialogTitle, dialogDescription, dialogImageUrl, languages }: DialogProps) => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <IconButton onClick={handleClickOpen}>
                <img
                    src={imageUrl}
                    alt=""
                    style={{
                        borderRadius: 3,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                    }}></img>
            </IconButton>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>{dialogTitle}</DialogTitle>
                <DialogContent>
                    <img src={dialogImageUrl} alt={dialogTitle} style={{ maxWidth: '100%' }} />
                    <DialogContentText>
                        <Typography>{dialogDescription}</Typography>
                        <Typography sx={{ mt: '1em' }}>Made using: {languages}</Typography>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default PortfolioDialog;