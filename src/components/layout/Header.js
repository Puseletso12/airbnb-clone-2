import React from "react";
import SearchIcon from "@mui/icons-material/Search"
import LanguageIcon from "@mui/icons-material/Language";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Avatar } from "@mui/material";
import "./Header.css"

const Header = () => {
  return (
    <div className="header">
      <img
        src="https://th.bing.com/th/id/R.11566b13ebe3fe195137ce2bd1804a69?rik=Og%2bcKTbfN4mhBA&riu=http%3a%2f%2flogos-download.com%2fwp-content%2fuploads%2f2016%2f03%2fAirbnb_logo.png&ehk=QhLUqOjF6HxBvuuxjqpvtKEeCf%2bnDOuAUWx8DInRPOo%3d&risl=&pid=ImgRaw&r=0"
        className="header_logo"
        alt="logo"
      />
      <div className="header_center">
        <input type="text" />
        <SearchIcon />
      </div>
      <div className="header_right">
        <p>Become a Host</p>
        <LanguageIcon />
        <ExpandMoreIcon />
        <Avatar />
      </div>
    </div>
  );
};

export default Header;
