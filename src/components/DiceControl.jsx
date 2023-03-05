/* "StAuth10244: I Nishkarsh Dubb, 000838587 certify that this material is my original work. No other person's work has been used without due acknowledgement. I have not made my work available to anyone else." */

import React from "react"; // Import React

// Import the DiceControl component
function DiceControl(props) {
  const { numDice, onChange } = props; // Destructuring

  // Decrement the number of dice
  function handleDecrement() {
    onChange(numDice - 1);
  }

  // Increment the number of dice
  function handleIncrement() {
    onChange(numDice + 1);
  }

  function reset(){
    onChange(1);
  }

  // Return the dice control
  return (
    // <div className="dice-control">
    //     <div>
    //   <label className="control-title">
    //     Number of Dice:
    //   </label>
    // <br /><br />
    
    //   <button onClick={handleDecrement}>-</button>
    //   <span>{numDice}</span>
    //   <button onClick={handleIncrement}>+</button>
    //   </div>
    //   <br /><br />
  // </div>

      <div className="sides-control">
            <label className="control-title">Number of Dice: </label>
                <br /><br />
            <div className="value">
                <button onClick={handleDecrement}>-</button>
                <button onClick={handleIncrement} >{numDice}</button>
                <button onClick={handleIncrement}>+</button>
                
               
            </div>
            <br />
            <div className="value"><button onClick={reset}>Reset</button></div>
         
          
        </div>
  

    

  );
}

export default DiceControl;