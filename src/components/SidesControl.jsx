/* "StAuth10244: I Nishkarsh Dubb, 000838587 certify that this material is my original work. No other person's work has been used without due acknowledgement. I have not made my work available to anyone else." */

import React from "react"; // Import React

// Import the SidesControl component
function SidesControl(props) {



    const {sides, onIncrement, onDecrement} = props; // Destructuring

    return (
        <div className="sides-control">
            <label className="control-title">Number of Sides: </label>
                <br /><br />
            <div className="value">
                <button onClick={onDecrement}>-</button>
                <span>{sides}</span>
                <button onClick={onIncrement}>+</button>
            </div>
            <br /><br />
        </div>
    );
}

// Export the SidesControl component
export default SidesControl;