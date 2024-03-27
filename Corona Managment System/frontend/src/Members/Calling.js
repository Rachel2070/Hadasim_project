import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import CallIcon from '@mui/icons-material/Call';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';



const Calling = (memberName) => {
    const { firstName, lastName } = memberName;
    const [open, setOpen] = React.useState(true);


    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <IconButton color="primary" aria-label="call">
                            <CallIcon />
                        </IconButton>
                        Calling {firstName} {lastName}
                    </DialogContentText>
                    <Box sx={{ width: '100%' }}>
                        <LinearProgress />
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} autoFocus>
                        Hang up
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );

}

export default Calling;