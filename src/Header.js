import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LanguageIcon from '@mui/icons-material/Language';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_icon"
          src="https://i.pinimg.com/564x/c6/49/8b/c6498bc6f8fe8336b8aa1b5232cc36e8.jpg"
          alt="AirBnB icon"
        ></img>
      </Link>

      <div className="header_center">
        <input type="text"></input>
        <SearchIcon />
      </div>

      <div className="header_right">
        <p>Become a host</p>
        <LanguageIcon />
        <ExpandMoreIcon />
        <AccountCircleIcon />
      </div>
    </div>
  );
};

export default Header;
