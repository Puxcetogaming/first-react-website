// src/pages/Images/Image.jsx
import React from "react";
import { useParams } from "react-router-dom";
import images from "../../utils/ImageMap";

function Image() {
  // The parameter name here ("image") should match the one defined in your route
  const { image } = useParams();
  const imageUrl = images[image] || null;

  return (
    <div>
      <h1>Image: {image}</h1>
      {imageUrl ? (
        <img src={imageUrl} alt={`${image}`} />
      ) : (
        <p>No image found for this ID.</p>
      )}
    </div>
  );
}

export default Image;
