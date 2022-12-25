import React from 'react'
import './Header.css'
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from "@mui/icons-material/Home";
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { AUTH } from './firebaseConfig';
import { signOut } from 'firebase/auth';

function Header() {
  function logout() {
    signOut(AUTH)
      .then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
  }

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
      <div>
        <Button variant="contained" style={{ marginRight: "10px" }} onClick={() => logout()}>Sign out</Button>
      </div>
    </div>
  )
}
export default Header