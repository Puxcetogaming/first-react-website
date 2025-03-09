// src/pages/Images/Images.jsx
import React from "react";
import { Link } from 'react-router-dom';
import images from "../../utils/ImageMap";
import "./Image.css"; // assuming your CSS grid styles are here

function Images() {
  const imageEntries = Object.entries(images);

  return (
    <div>
      <h1>Images Page</h1>
      <div className="image-grid">
        {imageEntries.map(([key, src]) => (
          <Link to={`/images/${key}`} key={key}>
            <img src={src} alt={key} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Images;
