import React, { useState } from "react";

function Greeting() {
    const [userName, setUserName] = useState("User");

    return (
        <div>
            <input
                type='text'
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder='Enter User Name' 
            />

            <h1>Hello, {userName}!</h1>;
        </div>
    )
}

export default Greeting;