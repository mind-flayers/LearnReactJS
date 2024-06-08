import './App.css';
import { useState } from 'react';

/*
function App() {
  const name = "Mishaf";

  var age = 17;
  return (
    <div className="App">
      <h1>Hello !</h1>
      {(age>=18) ? (
        <>
          <h2>{name}</h2>
          <p>You can vote</p>
        </>
      ) : (
        <>
          <h2>{name}</h2>
          <p>Sorry! You cannot vote</p>
        </>
      )
      }
    </div>
  );
}
*/

/*
// This code defines a functional component called Person that returns JSX elements displaying a person's name, last name, and age.
const Person = (props) => {
  return (
    <>
    <h1>First Name: {props.firstName}</h1>
    <h2>Last Name: {props.lastName}</h2>
    <h3>Age: {props.age}</h3>
    </> 
  )
}
*/

/*
const App = () => {
  return (
    <div className='App'>
      <h1>Hello !</h1>

      // Calls the Person component to display a person's name, last name, and age.
      <Person 
        firstName="Mishaf" 
        lastName="Hasan" 
        age="23" 
      /> 
      
      <Person 
        firstName = "Jazz"
        lastName = "Alter"
        age = "30"
      />
    </div>
  )
}
*/


// Hooks in React -- useState()
const App = () => {
  const [counter, setCounter] = useState(0);
  const [speed, setSpeed] = useState(1);
  return (
    <div className='App'>
      <button onClick={() => setCounter(nextCount => nextCount + speed)}>+</button>
      <h1>{counter}</h1>
      
      <button onClick={() => setCounter(prevCount => prevCount - speed)}>-</button>
      <h3>
        <button onClick={() => setSpeed(1)}>1x</button>   
        <button onClick={() => setSpeed(5)}>5x</button> 
        <button onClick={() => setSpeed(10)}>10x</button>
      </h3>
    </div>
  )

}



export default App;
