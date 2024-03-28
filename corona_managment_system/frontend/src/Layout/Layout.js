import React from 'react';
import { Link } from 'react-router-dom';
import AccessibleIcon from '@mui/icons-material/Accessible';
import IconButton from '@mui/material/IconButton';
import './Layout.css'



const Layout = ({ children }) => {
    return (
        <div className="layout">
            <header className="header">
                <h1>Covid Management System</h1>
                <nav>
                    <ul className="nav-links">
                        <li><Link to="/">Home</Link></li>
                    </ul>
                </nav>
            </header>
            <main className="main-content">
                {children}
            </main>
            <footer className="footer">
                © 2023 My Application. All rights reserved.
                <IconButton>
                    <AccessibleIcon color="primary"/>
                </IconButton>
            </footer>
        </div>)
};

export default Layout;