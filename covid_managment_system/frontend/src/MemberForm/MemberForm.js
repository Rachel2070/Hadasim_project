import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import * as moment from "moment";

// Component for creating or editing member details
function MemberForm() {
    let navigate = useNavigate();

    const [member, setMember] = useState(null);
    const [flag, setFlag] = useState(false);
    const { id } = useParams(); // Get the member ID from the URL parameters
    const { register, handleSubmit, setValue, formState: { errors } = {} } = useForm(); // Initialize useForm hook
    const url = 'http://localhost:4000/api/members';

    // Fetch member data if editing an existing member
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

    // Function to handle form submission
    const onSubmit = async (info) => {
        if (info.dateOfBirth) {
            const parsedDate = moment(info.dateOfBirth).format('YYYY-MM-DD');
            // const value = parsedDate.isValid() ? parsedDate.toDate() : undefined;
            info.dateOfBirth = parsedDate;
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

    // Render form for creating or editing member details
    return (
        <div className="member-detail">
            {id ? <h2>Edit Member</h2> : <h2>Create Member</h2>}

            {flag &&
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Box sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}>
                        <TextField
                            required
                            defaultValue={member?.firstName || ''}
                            label="First Name"
                            variant="outlined"
                            {...register("firstName", {
                                required: "First Name is required",
                                pattern: {
                                    value: /^[^\d]+$/,
                                    message: "First Name must contain only letters"
                                }
                            })}
                            error={Boolean(errors?.firstName)}
                            helperText={errors?.firstName?.message || ""}
                        />

                        <TextField
                            required
                            defaultValue={member?.lastName || ''}
                            label="Last Name"
                            variant="outlined"
                            {...register("lastName", {
                                required: "Last Name is required",
                                pattern: {
                                    value: /^[^\d]+$/,
                                    message: "Last Name must contain only letters"
                                }
                            })}
                            error={Boolean(errors?.lastName)}
                            helperText={errors?.lastName?.message || ""}
                        />

                        <TextField
                            required
                            defaultValue={member?.identityCard || ''}
                            label="Identity Card"
                            variant="outlined"
                            {...register("identityCard", {
                                required: "Identity Card is required",
                                minLength: {
                                    value: 9,
                                    message: "Identity Card must have at least 9 digits"
                                },
                                pattern: {
                                    value: /^[0-9]+$/,
                                    message: "Identity Card must contain only digits"
                                }
                            })}
                            error={Boolean(errors.identityCard)}
                            helperText={errors.identityCard ? errors.identityCard.message : ""}
                        />

                        <TextField
                            required
                            defaultValue={member?.address.street || ''}
                            label="Street"
                            variant="outlined"
                            {...register("address.street", {
                                required: "Street is required",
                                pattern: {
                                    value: /^[^\d]+$/,
                                    message: "Street must contain only letters"
                                }
                            })}
                            error={Boolean(errors?.address?.street)}
                            helperText={errors?.address?.street?.message || ""}
                        />

                        <TextField
                            required
                            defaultValue={member?.address.number || ''}
                            label="Building Number"
                            variant="outlined"
                            {...register("address.number", {
                                required: "Building Number is required",
                                pattern: {
                                    value: /^[0-9]+$/,
                                    message: "Building Number must contain only digits"
                                }
                            })}
                            error={Boolean(errors?.address?.number)}
                            helperText={errors?.address?.number?.message || ""}
                        />

                        <TextField
                            required
                            defaultValue={member?.address.city || ''}
                            label="City"
                            variant="outlined"
                            {...register("address.city", {
                                required: "City is required",
                                pattern: {
                                    value: /^[^\d]+$/, // Use /^[^\d]+$/ to match only letters (no digits)
                                    message: "City must contain only letters"
                                }
                            })}
                            error={Boolean(errors?.address?.city)}
                            helperText={errors?.address?.city?.message || ""}
                        />

                        <TextField
                            required
                            defaultValue={moment(member?.dateOfBirth).format('YYYY-MM-DD') || moment(new Date()).format('YYYY-MM-DD')}
                            {...register("dateOfBirth")}
                            label="Date Of Birth"
                            variant="outlined"
                            type='date'
                        />

                        <TextField
                            required
                            defaultValue={member?.telephone || ''}
                            {...register("telephone")}
                            label="Telephone"
                            variant="outlined"
                        />

                        <TextField
                            required
                            defaultValue={member?.mobilePhone || ''}
                            {...register("mobilePhone")}
                            label="Mobile Phone"
                            variant="outlined"
                        />
                    </Box>
                    {member?.photoUrl &&
                        <Box display="flex" justifyContent="center">
                            <img src={member.photoUrl} alt="Member avatar" className="member-avatar" />
                        </Box>
                    }
                    {/* Form submission buttons */}
                    <Box mt={2} display="flex" justifyContent="flex-end">
                        <Button variant="contained" type="submit" className='btn' style={{ marginRight: '3%' }}>Save</Button>
                        {/* Redirect to appropriate page based on whether editing an existing member or creating a new one */}
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
