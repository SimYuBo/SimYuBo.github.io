import { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, Typography } from '@mui/material';
import { DialogProps } from '../../Interfaces/IDialog';

const PortfolioDialog = ({ imageUrl, dialogTitle, dialogDescription, dialogImageUrl, duration, languages }: DialogProps) => {
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
                        width: '100%',
                        borderRadius: 3,
                    }}></img>
            </IconButton>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>{dialogTitle}</DialogTitle>
                <DialogContent>
                    <img src={dialogImageUrl} alt={dialogTitle} style={{ maxWidth: '100%' }} />
                    <DialogContentText>
                        <Typography>{dialogDescription}</Typography>
                        <Typography sx={{mt: '1em'}}>{duration}</Typography>
                        <Typography>{languages}</Typography>
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