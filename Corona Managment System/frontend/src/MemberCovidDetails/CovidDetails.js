import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Button from '@mui/material/Button';
import moment from 'moment'; // Import moment library
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './CovidDetails.css';



const vaccineManufacturers = [
    { label: 'Pfizer', value: 'Pfizer' },
    { label: 'Moderna', value: 'Moderna' },
    { label: 'Johnson & Johnson', value: 'Johnson & Johnson' },
    { label: 'AstraZeneca', value: 'AstraZeneca' },
    { label: 'Sinovac', value: 'Sinovac' },
];

function CovidInfo() {
    const [member, setMember] = useState(null);
    const [editing, setEditing] = useState(false); // Corrected spelling of "editing"

    const { id } = useParams(); // Get the member ID from the URL parameters
    const url = 'http://localhost:4000/api/members';
    const [updatedData, setUpdatedData] = useState({
        positiveTestDate: '',
        recoveryDate: '',
        vaccines: [],
    });

    useEffect(() => {
        const fetchMember = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/api/members/${id}`);
                setMember(response.data);
                const memberData = response.data;
                const sortedVaccines = memberData.vaccines.sort((a, b) => new Date(a.date) - new Date(b.date));

                setUpdatedData({
                    positiveTestDate: response.data.positiveTestDate,
                    recoveryDate: response.data.recoveryDate,
                    vaccines: sortedVaccines || [],
                });
            } catch (error) {
                console.error('There was an error fetching the member details:', error);
            }
        };

        fetchMember();
    }, [id, editing]);


    const handleInputChange = (index, field, value) => {
        // Check if the change is for the vaccines array
        if (index >= 0) {
            // Update a specific vaccine's data
            const newVaccines = updatedData.vaccines.map((vaccine, idx) => {
                if (idx === index) {
                    return { ...vaccine, [field]: value };
                }
                return vaccine;
            });
            setUpdatedData(prevState => ({
                ...prevState,
                vaccines: newVaccines,
            }));
        } else {
            // Update positiveTestDate or recoveryDate directly
            setUpdatedData(prevState => ({
                ...prevState,
                [field]: value,
            }));
        }
    };

    const handleAddVaccine = () => {
        if (updatedData.vaccines.length < 4) {
            setUpdatedData({
                ...updatedData,
                vaccines: [...updatedData.vaccines, { date: '', manufacturer: '' }],
            });
        }
    };

    const handleDeleteVaccine = (index) => {
        const newVaccines = updatedData.vaccines.filter((_, idx) => idx !== index);
        setUpdatedData({
            ...updatedData,
            vaccines: newVaccines,
        });
    };

    const handleSave = async () => {
        try {
            const res = await axios.put(`${url}/${id}/covidInfo`, updatedData);
            setMember(updatedData)
            setEditing(false)
        } catch (error) {
            console.error('There was an error updating the member:', error);
            alert(error.response.data);
        }

    }

    if (!member) {
        return <div>Loading...</div>;
    }

    return (
        <div className='covid-detail-container'>
            <div className="member-covid-detail">
                {editing ?
                    <div>
                        <form>
                            <h2>Positive Test Date:
                                <TextField
                                    type='date'
                                    defaultValue={member.positiveTestDate ? moment(member.positiveTestDate).format('YYYY-MM-DD') : ''}
                                    onChange={(e) => handleInputChange(-1, 'positiveTestDate', e.target.value)}
                                />
                            </h2>
                            <h2>Recovery Date:
                                <TextField
                                    required
                                    type='date'
                                    defaultValue={member.recoveryDate ? moment(member.recoveryDate).format('YYYY-MM-DD') : ''}
                                    onChange={(e) => handleInputChange(-1, 'recoveryDate', e.target.value)}
                                />
                            </h2>
                            <div >
                                {updatedData.vaccines.map((vaccine, index) => (
                                    <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '10px', paddingBottom: '3%' }}>
                                        <TextField
                                            label="Vaccine Date"
                                            required
                                            type='date'
                                            defaultValue={vaccine.date ? moment(vaccine.date).format('YYYY-MM-DD') : ''}
                                            onChange={(e) => handleInputChange(index, 'date', e.target.value)}
                                            inputProps={{ style: { width: '150px' } }} // Adjust the width as needed
                                        />
                                        <FormControl variant="outlined" fullWidth>
                                            <InputLabel>Manufacturer</InputLabel>
                                            <Select
                                                required
                                                value={vaccine.manufacturer || ''}
                                                onChange={(e) => handleInputChange(index, 'manufacturer', e.target.value)}
                                                label="Manufacturer"
                                                style={{ width: '150px' }} // Adjust the width as needed
                                            >
                                                <MenuItem value="">Manufacturer</MenuItem>
                                                {vaccineManufacturers.map((manufacturer) => (
                                                    <MenuItem key={manufacturer.value} value={manufacturer.value}>
                                                        {manufacturer.label}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                        <Button variant="contained" type='button' onClick={() => handleDeleteVaccine(index)} style={{ marginLeft: '10px' }}>Delete</Button>
                                    </div>

                                ))}
                                {updatedData.vaccines.length < 4 && (
                                    <Button variant="contained" onClick={handleAddVaccine} type='button' style={{ marginTop: '3%' }}>Add Vaccine</Button>
                                )}
                            </div>
                            <div className="button-container">
                                <Button variant="contained" onClick={handleSave} className='btn'>Save</Button>
                                <Button variant="contained" onClick={() => setEditing(false)} className='btn'>Cancel</Button>
                            </div>
                        </form>
                    </div>
                    :
                    <div>
                        <h2>Positive Test Date: {member.positiveTestDate ? moment(member.positiveTestDate).format('DD/MM/YYYY') : ''}</h2>
                        <h2>Recovery Date: {member.recoveryDate ? moment(member.recoveryDate).format('DD/MM/YYYY') : ''}</h2>
                        <ul className='vaccine-list'>
                            {member.vaccines.map(vaccine => (
                                <li key={vaccine.date}>
                                    <div>
                                        <p>Vaccine Date: {new Date(vaccine.date).toLocaleDateString()}</p>
                                        <p>Vaccine Manufacturer: {vaccine.manufacturer}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className="button-container">
                            <Link to={`/member/${id}`} >
                                <Button variant="contained" className='btn'>Back</Button>
                            </Link>
                            <Button variant="contained" onClick={() => setEditing(true)} className='btn'>Update Information</Button>
                            {/* <Button variant="contained" className='btn'>Add Vaccine</Button> */}
                        </div>
                    </div>
                }
            </div>
        </div>
    );
}

export default CovidInfo;
