import React from 'react'
import './Header.css'
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from "@mui/icons-material/Home";
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="header">
            <Link to="/profile">
                <IconButton>
                    <PersonIcon className="header__icon" fontSize="large" />
                </IconButton>
            </Link>
            <Link to="/">
                <IconButton>
                    <HomeIcon className="header__icon" fontSize="large" />
                </IconButton>
            </Link>
            <div></div>
        </div>
    )
}
export default Header