import React, { useState } from 'react';
import './Banner.css';
import { Button } from '@mui/material';
import Search from './Search';
import { Link } from 'react-router-dom';

const Banner = () => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="banner">
      <div className="banner_search">
        {showSearch && <Search></Search>}

        <Button
          onClick={() => setShowSearch(!showSearch)}
          variant="outlined"
          className="banner_searchButton"
        >
          {showSearch ? 'Hide' : 'Search Dates'}
        </Button>
      </div>
      <div className="banner_info">
        <h1>Get out and stretch your imagination</h1>
        <h5>
          Plan a different kind of getaway to uncover the hidden gems near you
        </h5>
        <Link to="/search" className='banner_info_link'>
        <Button variant="outlined"  className='banner_info_button'>Explore Nearby</Button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
