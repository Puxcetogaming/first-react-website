import React, { useState } from "react";

function AlertEvent() {
    const [text, setText] = useState("");

    const handleInputChange = (e) => {
        setText(e.target.value);
    };

    const handleButtonClick = () => {
        alert(`You entered: ${text}`);
    };

    return (
        <div>
            <h3>Alert Event Example</h3>
            <input
                type="text"
                value={text}
                onChange={handleInputChange}
                placeholder="Type something..."
            />
            <button onClick={handleButtonClick}>Show Alert</button>
            <p>You typed: {text}</p>
        </div>
    )

}

export default AlertEvent;