import React from 'react';
import { Link } from 'react-router-dom';
import AccessibleIcon from '@mui/icons-material/Accessible';
import IconButton from '@mui/material/IconButton';
import './Layout.css'

// Component for the layout of the application
const Layout = ({ children }) => {
    return (
        <div className="layout">
            {/* Header section */}
            <header className="header">
                {/* Application title */}
                <h1>Covid Management System</h1>
                {/* Navigation */}
                <nav>
                    <ul className="nav-links">
                        {/* Home link */}
                        <li><Link to="/">Home</Link></li>
                    </ul>
                </nav>
            </header>
            {/* Main content section */}
            <main className="main-content">
                {/* Render child components */}
                {children}
            </main>
            {/* Footer section */}
            <footer className="footer">
                {/* Copyright information */}
                © 2023 My Application. All rights reserved.
                {/* Button for accessibility */}
                <IconButton>
                    <AccessibleIcon color="primary"/>
                </IconButton>
            </footer>
        </div>
    )
};

export default Layout;
