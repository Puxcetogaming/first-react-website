// src/pages/Images/Images.jsx
import React from "react";
import { Link } from 'react-router-dom';
import Image1 from "../../assets/Image1.png";
import Image2 from "../../assets/Image2.png";

function Images() {
    return (
        <div>
            <h1>Images Page</h1>
            <Link to="/images/1">
              <img src={Image1} alt="" />
            </Link>
            <Link to="/images/2">
              <img src={Image2} alt="" />
            </Link>
        </div>
    );
}

export default Images;
