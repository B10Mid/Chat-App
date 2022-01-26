import React from 'react';
import './Header.scss';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SearchIcon from '@mui/icons-material/Search'
import InfoIcon from '@mui/icons-material/Info';

function Header() {

  return (
    <div className="header">

        <AccessTimeIcon id="time-icon"/>

        <div className="searchBox">
            <input className="searchInput"type="text" name="" placeholder="Search Workspace"/>
            <button className="searchButton" href="#">
                <i className="material-icons">
                    <SearchIcon id="search-icon"/>
                </i>
            </button>
        </div>

        <InfoIcon id="info-icon" />
    </div>
  )
}

export default Header;
