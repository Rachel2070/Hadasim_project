import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import CallIcon from '@mui/icons-material/Call';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import './Members.css'
import Calling from './Calling';

// Component for displaying a list of members
const Members = () => {
    const [members, setMembers] = useState([]); // State to store members data
    const [callingMemberId, setCallingMemberId] = useState(null); // State to track member being called

    // Fetch members data from the API
    useEffect(() => {
        const fetchData = async () => {
            try {
                const membersRes = await axios.get('http://localhost:4000/api/members');
                const sortMembers = membersRes.data.sort((a, b) => a.firstName.localeCompare(b.firstName));
                setMembers(sortMembers);
            } catch (error) {
                console.error('There was an error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    // Render the members list
    return (
        <div className="members-container">
            <div>
                <h2>Members List</h2>
                {/* Link to add a new member */}
                <Link to={`/member/addMember`} style={{ textDecoration: 'none' }}>
                    <Button variant="outlined" size="large" className='btn'>Add New Member</Button>
                </Link>
                {/* Display member details */}
                <h2>Full Name | Identity Card | Phone Number</h2>
                <ul className="members-list">
                    {members.map(member => (
                        <li key={member._id}>
                            {/* Link to view member details */}
                            <Link to={`/member/${member._id}`}>{member.firstName} {member.lastName}  </Link>
                            | {member.identityCard} | {member.mobilePhone}
                            {/* Button to call member */}
                            <IconButton color="primary" aria-label="call" onClick={() => setCallingMemberId(member._id)}>
                                <CallIcon />
                            </IconButton>
                            {/* Show calling component if callingMemberId matches member's ID */}
                            {callingMemberId === member._id && <Calling firstName={member.firstName} lastName={member.lastName} />}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Members;
