/* "StAuth10244: I Nishkarsh Dubb, 000838587 certify that this material is my original work. No other person's work has been used without due acknowledgement. I have not made my work available to anyone else." */

import React from "react"; // Import React

// Create a RollButton component
function RollButton(props) {
    
    // Get the onClick function from props
    const {onClick}=props;

    // Return the button
    // When the button is clicked, the onClick function will be called
  return (
    
    <div className="roll-button">
    <button onClick={props.onClick}>Roll</button>
    </div>
  );
}

// Export the RollButton component
export default RollButton;