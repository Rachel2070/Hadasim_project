import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from 'axios';
import Button from '@mui/material/Button';
import './MemberDetails.css'

const MemberDetails = () => {
    const [member, setMember] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchMember = async () => {
            try {
                const memberRes = await axios.get(`http://localhost:4000/api/members/${id}`);
                setMember(memberRes.data)
            } catch (error) {
                console.error('There was an error fetching the member details:', error);
            }
        };
        fetchMember();
    }, [id]);

    if (!member) {
        return <div>Loading...</div>
    };

    return (
        <div className="member-detail">
            <h2>{member.firstName} {member.lastName}</h2>
            <p>Identity Card: {member.identityCard}</p>
            <p>Address: {member.address.street} {member.address.number}, {member.address.city}</p>
            <p>Date Of Birth: {new Date(member.dateOfBirth).toLocaleDateString()}</p>
            <p>Telephone: {member.telephone}</p>
            <p>Mobile Phone: {member.mobilePhone}</p>
            {member.photoUrl && <img src={member.photoUrl} alt="Member avatar" className="member-avatar" />}

            <div className='btn-container'>
                <Link to={`/`} className='btn'>
                    <Button variant="contained">Back</Button>
                </Link>
                <Link to={`/member/${member._id}/EditMember`} className='btn'>
                    <Button variant="contained">Edit</Button>
                </Link>
                <Link to={`/member/${member._id}/DeleteMember`} className='btn'>
                    <Button variant="contained">Delete</Button>
                </Link>
                <Link to={`/member/${member._id}/MemberCovidInfo`} className='btn'>
                    <Button variant="contained">Covid Details</Button>
                </Link>
            </div>
        </div>
    );
}

export default MemberDetails;