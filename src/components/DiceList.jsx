/* "StAuth10244: I Nishkarsh Dubb, 000838587 certify that this material is my original work. No other person's work has been used without due acknowledgement. I have not made my work available to anyone else." */


import React from "react"; // Import React
import Dice from "./Dice"; // Import the Dice component

// Create a DiceList component
function DiceList(props) {

    // Get the dice count from props
    const {numbers=[1], onClick} = props;

    
    
    return (  
        
        // Return the dice list  
        // Map the numbers array to the Dice component 
        // How does the map function work? 
        // Map function is used to iterate over an array and return a new array.
        // So, in this case, the numbers array is being iterated over and a new array is being returned. 
        // The new array is being returned as a list of dice components.
        // The key attribute is used to uniquely identify each element in the list.
        // The key attribute is required when creating lists of elements.
    
        // The key attribute is used to give React a way to identify which items in a list have changed, been added, or been removed. 
        // When you render a list of items in React, it's important to give each item a unique identifier so that React can efficiently update the list when it changes.
        // When you don't provide a key attribute, React will use the index of the item in the array as the key by default. 
        // However, using the index as the key can cause problems when the list is modified, because it can lead to unpredictable behavior and poor performance.

        <div className="dice-list">
            {numbers.map((number, index) => (
        <Dice key={index} number={number} onClick={() => onClick(index)} />
        ))}

        </div>
    );
    
}

// Export the DiceList component
export default DiceList;