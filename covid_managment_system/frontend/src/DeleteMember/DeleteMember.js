import React, { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Snackbar from '@mui/material/Snackbar';

import './DeleteMember.css';

// Component for deleting a member
const DeleteMember = () => {
    const navigate = useNavigate(); // Hook for navigation
    const { id } = useParams(); // Hook for accessing URL parameters

    // State for controlling Snackbar
    const [open, setOpen] = useState(false);

    // Function to handle opening Snackbar
    const handleClick = () => {
        setOpen(true);
    };

    // Function to handle closing Snackbar and deleting the member
    const handleClose = async (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
        await handleDelete(); // Call to delete member function
    };

    // Function to delete the member
    const handleDelete = async () => {
        try {
            const res = await axios.delete(`http://localhost:4000/api/members/${id}`); // HTTP request to delete member
            navigate('/'); // Redirect to home page after deletion
        } catch (error) {
            console.error('There was an error deleting the member:', error); // Log error if deletion fails
        }
    };

    // JSX to render the component
    return (
        <div className="delete-member-container">
            <Card className="delete-member-card">
                <CardContent className="delete-member-card-content">
                    <Typography variant="h5" gutterBottom>
                        Are you sure you want to delete this member?
                    </Typography>
                </CardContent>
                <CardActions className="delete-member-buttons">
                    {/* Button to confirm deletion */}
                    <Button variant="contained" size="medium" onClick={handleClick} className="delete-member-button">
                        Yes, I'm sure
                    </Button>
                    {/* Snackbar for displaying deletion message */}
                    <Snackbar
                        open={open}
                        autoHideDuration={2000}
                        onClose={handleClose}
                        message="Member deleted successfully."
                    />

                    {/* Button to cancel deletion and return to member details */}
                    <Link to={`/member/${id}`}>
                        <Button variant="outlined" size="medium" className="delete-member-button">
                            Actually no
                        </Button>
                    </Link>
                </CardActions>
            </Card>
        </div>
    )
};

export default DeleteMember;
