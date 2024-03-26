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

const DeleteMember = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = async (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
        await handleDelete();
    };

    const handleDelete = async () => {
        try {
            const res = await axios.delete(`http://localhost:4000/api/members/${id}`);
            navigate('/');
        } catch (error) {
            console.error('There was an error deleting the member:', error);
        }
    };

    return (
        <div className="delete-member-container">
            <Card className="delete-member-card">
                <CardContent className="delete-member-card-content">
                    <Typography variant="h5" gutterBottom>
                        Are you sure you want to delete this member?
                    </Typography>
                </CardContent>
                <CardActions className="delete-member-buttons">
                    <Button variant="contained" size="medium" onClick={handleClick} className="delete-member-button">
                        Yes, I'm sure
                    </Button>
                    <Snackbar
                        open={open}
                        autoHideDuration={2000}
                        onClose={handleClose}
                        message="Member deleted successfully."
                    />

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