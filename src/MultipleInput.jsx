import React, { useState } from "react";

function MultipleInput() {
    const [inputOne, setInputOne] = useState("");
    const [inputTwo, setInputTwo] = useState("");

    const handleInputOneChange = (e) => {
        setInputOne(e.target.value);
    };

    const handleInputTwoChange = (e) => {
        setInputTwo(e.target.value);
    };

    return (
        <div>
            <h3>Multiple Input Example</h3>
            <input
                type="text"
                value={inputOne}
                onChange={handleInputOneChange}
                placeholder="First Input"
            />
            <input
                type="text"
                value={inputTwo}
                onChange={handleInputTwoChange}
                placeholder="Second Input"
            />
            <p>Input One: {inputOne}, Input Two: {inputTwo}</p>
        </div>
    )

}

export default MultipleInput;