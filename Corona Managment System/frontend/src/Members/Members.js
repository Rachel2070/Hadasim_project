import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import './Members.css'



const Members = () => {
    const [members, setMembers] = useState([]);

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

    return (<div className="members-container">
        <div>
            <h2>Members List</h2>

            <Link to={`/member/addMember`} style={{ textDecoration: 'none' }}>
                <Button variant="outlined" size="large" className='btn'>Add New Member</Button>
            </Link>

            <h2>Full Name | Identity Card | Phone Number</h2>
            <ul className="members-list">
                {members.map(member => {
                    return (
                        <div>
                            <li key={member._id}>
                                <Link to={`/member/${member._id}`}>{member.firstName} {member.lastName}  </Link>
                                | {member.identityCard} | {member.mobilePhone}
                                <IconButton color="primary" aria-label="call">
                                    <CallIcon />
                                </IconButton>
                            </li>
                        </div>
                    )
                })};
            </ul>
        </div>

    </div>
    );
};

export default Members;