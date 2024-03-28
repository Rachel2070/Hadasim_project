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

// Component for displaying calling dialog
const Calling = ({ firstName, lastName }) => {
    const [open, setOpen] = React.useState(true); // State for dialog open/close

    // Function to handle dialog close
    const handleClose = () => {
        setOpen(false);
    };

    // Render calling dialog
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
                        {/* Display call icon and member's name */}
                        <IconButton color="primary" aria-label="call">
                            <CallIcon />
                        </IconButton>
                        Calling {firstName} {lastName}
                    </DialogContentText>
                    {/* Display linear progress bar */}
                    <Box sx={{ width: '100%' }}>
                        <LinearProgress />
                    </Box>
                </DialogContent>
                <DialogActions>
                    {/* Button to hang up the call */}
                    <Button onClick={handleClose} autoFocus>
                        Hang up
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}

export default Calling;
