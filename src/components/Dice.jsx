/* "StAuth10244: I Nishkarsh Dubb, 000838587 certify that this material is my original work. No other person's work has been used without due acknowledgement. I have not made my work available to anyone else." */

import React from "react";  // Import React
import "../Dice.css";  // Import the CSS file

function Dice(props) {  // Create a Dice component

 
    
    // Get the number from props
    const {number=1, onClick} = props;
    


    // Return the dice
    return(

        <div>
        <div className="dice" onClick={onClick}> 
            
                <div className="dice-face">{number}</div>
            </div>
            <br /><br />
        </div>
    );
}

// Export the Dice component
export default Dice;