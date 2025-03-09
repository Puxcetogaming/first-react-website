// src/pages/Images/Image.jsx
import React from "react";
import { useParams } from "react-router-dom";
import Image1 from "../../assets/Image1.png";
import Image2 from "../../assets/Image2.png";

const ImageToSelect = {
    "1": Image1,
    "2": Image2,
};

function Image() {
    const { image } = useParams(); // Make sure the name matches :image in the route
    const imageUrl = ImageToSelect[image] || null;

    return (
        <div>
            <h1>Image: {image}</h1>
            {imageUrl ? (
                <img src={imageUrl} alt="" />
            ) : (
                <p>No image found for this ID.</p>
            )}
        </div>
    );
}

export default Image;
