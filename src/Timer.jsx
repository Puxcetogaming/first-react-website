import React, { useState, useEffect } from "react";

function Timer() {
    const [time, setTime] = useState({ minutes: 0, seconds: 0 });

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(prevTime => {
                const newSeconds = prevTime.seconds + 1;
                const newMinutes = newSeconds >= 60 ? prevTime.minutes + 1 : prevTime.minutes;
                return {
                    minutes: newMinutes,
                    seconds: newSeconds % 60
                };
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <h2>Timer: {time.minutes} minutes, {time.seconds} seconds</h2>
        </div>
    );
}

export default Timer;
