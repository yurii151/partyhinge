import React from 'react'
import './Header.css'
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import logo from './tinderlogo.png' // relative path to image 
import IconButton from '@mui/material/IconButton';
import { Icon } from '@mui/material';

function Header() {
    return (
        <div className = "header">
            <IconButton>
            <PersonIcon className = "header__icon" fontSize="large" />
            </IconButton>
            <img className= "header__logo"
            src={logo} alt={"logo"}/> 
            <IconButton>
            <ForumIcon className = "header__icon" fontSize="large"/>
            </IconButton>
        </div>
    )
}
export default Header