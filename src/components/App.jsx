/* "StAuth10244: I Nishkarsh Dubb, 000838587 certify that this material is my original work. No other person's work has been used without due acknowledgement. I have not made my work available to anyone else." */

// This is the main component that will be rendered in the index.js file
import React, {useState} from "react"; // Import React
import Header from "./Header"; // Import the Header component
import Footer from "./Footer"; // Import the Footer component
import DiceList from "./DiceList"; // Import the DiceList component
import RollButton from "./RollButton"; // Import the RollButton component
import SidesControl from "./SidesControl"; // Import the SidesControl component 
import DiceControl from "./DiceControl";


// Create a App component
function App() {

    // Create a state variable to store the number of sides of the dice, and the value of each side on each dice
    const [numbers, setNumbers] = React.useState([1]);
    const [sides, setSides] = useState(6); // set the default number of sides to 6
    const [numDice, setNumDice] = useState(1); // set the default number of dice to 1



    
    // function to handle the roll dice button click
    // This function will be passed to the RollButton component
    // The RollButton component will call this function when the button is clicked
    // This function will generate a random number between 1 and 6
    // This function will update the state variable
    // The state variable will be passed to the DiceList component

    
    function handleRollDice() {
        //map through the numbers array and change the value of each element to a random number between 1 and the total number of sides
        const newNumbers = numbers.map(number => Math.floor(Math.random() * sides) + 1);
        //update the state variable
        setNumbers(newNumbers);
    }
    
    function handleNumDiceChange(numDice) {
      if (numDice < 1) {
        return;
      }
      // initialize the numbers array with the number of dice
      // the way to do this is to create an array of the correct length and then use the map function to initialize each element to 1
      const newNumbers = Array.from({ length: numDice }, () => 1);
      //then update the state variable to the new array which has each element initialized to 1
      setNumbers(newNumbers);
      //and then set the state variable for the number of dice
      setNumDice(numDice);
    }


    // function to handle the dice click
    // This function will be passed to the DiceList component
    function handleDiceClick(index) {
      const newNumbers = [...numbers];
      const newNumber = newNumbers[index] + 1;
      if (newNumber > sides) {
        newNumbers[index] = 1;
      } else {
        newNumbers[index] = newNumber;
      }
      setNumbers(newNumbers);
    }

  return (
    <div>
      <Header />
      <div className="sameLine">
      <SidesControl
      sides={sides}
      onIncrement={() => setSides(sides < 20 ? sides + 1 : sides)}
      onDecrement={() => setSides(sides > 1 ? sides - 1 : sides)}/>        
      <DiceControl numDice={numDice} onChange={handleNumDiceChange} />
      </div>
      <DiceList numbers={numbers} onClick={handleDiceClick} /> 
      <RollButton onClick={handleRollDice} />
      


      <Footer />
    </div>
  );
}

// Export the App component
export default App;