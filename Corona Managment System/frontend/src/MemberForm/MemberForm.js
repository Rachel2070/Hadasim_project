import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import * as moment from "moment";
// import './EditMember.css';


function MemberForm() {
    let navigate = useNavigate();

    const [member, setMember] = useState(null);
    const [flag, setFlag] = useState(false);
    const { id } = useParams(); // Get the member ID from the URL parameters
    const { register, handleSubmit, setValue } = useForm(); // Initialize useForm4
    const url = 'http://localhost:4000/api/members';

    useEffect(() => {
        const fetchMember = async () => {
            try {
                if (id) {
                    const response = await axios.get(`${url}/${id}`);
                    setMember(response.data);
                }
                setFlag(true)

            } catch (error) {
                console.error('There was an error fetching the member details:', error);
            }
        }
        fetchMember()
    }, [setValue, id]);

    const onSubmit = async (info) => {
        console.log(info)
        if (info.dateOfBirth) {
            const parsedDate = moment(info.dateOfBirth, 'DD/MM/YYYY');
            const value = parsedDate.isValid() ? parsedDate.toDate() : undefined;
            info.dateOfBirth = value;
        }
        try {
            let res = null;
            if (id) {
                res = await axios.put(`${url}/${id}/info`, info);
                navigate(`/member/${id}`);
            } else {
                res = await axios.post(`${url}/`, info);
                navigate(`/`);
            }
            console.log(res);
        } catch (error) {
            console.error('There was an error with this member:', error);
            if (error.response && error.response.status === 400) {
                alert('A member with this ID card already exists.');
            }
        }
    };


    return (
        <div className="member-detail">
            {id ? <h2>Edit Member</h2> : <h2>Create Member</h2>}

            {flag &&
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Box sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}>
                        <TextField required defaultValue={member?.firstName || ''}      {...register("firstName")} label="First Name" variant="outlined" />
                        <TextField required defaultValue={member?.lastName || ''}       {...register("lastName")} label="Last Name" variant="outlined" />
                        <TextField required defaultValue={member?.identityCard || ''}   {...register("identityCard", {minLength: 9})} label="Identity Card (9 digits)" variant="outlined" />
                        <TextField required defaultValue={member?.address.street || ''} {...register("address.street")} label="Street" variant="outlined" />
                        <TextField required defaultValue={member?.address.number}       {...register("address.number")} label="Building Number" variant="outlined" />
                        <TextField required defaultValue={member?.address.city || ''}   {...register("address.city")} label="City" variant="outlined" />
                        <TextField required defaultValue={moment(member?.dateOfBirth).format('DD/MM/YYYY') || moment(new Date()).format('DD/MM/YYYY')} {...register("dateOfBirth")} label="Date Of Birth" variant="outlined" /*type='date'*/ />
                        <TextField required defaultValue={member?.telephone || ''}      {...register("telephone")} label="Telephone" variant="outlined" />
                        <TextField required defaultValue={member?.mobilePhone || ''}    {...register("mobilePhone")} label="Mobile Phone" variant="outlined" />
                    </Box>
                    {member?.photoUrl &&
                        <Box display="flex" justifyContent="center">
                            <img src={member.photoUrl} alt="Member avatar" className="member-avatar" />
                        </Box>
                    }
                    <Box mt={2} display="flex" justifyContent="flex-end">
                        <Button variant="contained" type="submit" className='btn' style={{ marginRight: '3%' }}>Save</Button>
                        {id ?
                            <Link to={`/member/${id}`} style={{ textDecoration: 'none' }}>
                                <Button variant="contained" className='btn'>Cancel</Button>
                            </Link>
                            :
                            <Link to={`/`} style={{ textDecoration: 'none' }}>
                                <Button variant="contained" className='btn'>Cancel</Button>
                            </Link>
                        }
                    </Box>
                </form>
            }
        </div>
    );
}

export default MemberForm;
