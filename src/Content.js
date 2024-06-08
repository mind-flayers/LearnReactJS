import React from 'react'
import { useState } from 'react';
import { FaTrashCan } from "react-icons/fa6";

const Content = () => {
  /*
  function randomNameChange() {
    const names = ["Grow", "Help", "Earn"];
    const int = Math.floor(Math.random()*3);
    setName(names[int]);
  }

  const handleClick = (name) => {
    alert(`Thanks for the support, ${name}`);
  }
  */

  /*
  // Event Handling
  return (
    <main>
      <p>Lets {randomNameChange()} Together</p>
      <button onClick={() => handleClick("Mishaf")}> Subscribe </button>
      <button onDoubleClick={() => handleClick("Hasan")}> Double Click </button>
    </main>
  )
  */

  /*
  // UseState Hook
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Earn")

  return (
    <main>
      <p>Lets {name} Together</p>
      <button onClick={randomNameChange}> Subscribe </button>
      <button onClick={() => setCount(nextCount => nextCount+1)}>+</button>
      <div>{count}</div>
      <button onClick={() => setCount(prevCount => prevCount-1)}>-</button>
    </main>
  )
  */

  // React List and Keys

  const [items, setItems] = useState([
    {
      id: 1,
      checked: true,
      item: "Practice React"
    },
    {
      id: 2,
      checked: false,
      item: "Read Books"
    },
    {
      id: 3,
      checked: true,
      item: "Watch Tutorials"
    },
    {
      id: 4,
      checked: false,
      item: "Exercise Daily"
    }
  ]);

  /**
   * Toggles the 'checked' state of an item in the 'items' array based on its 'id'.
   * @param {number} id - The unique identifier of the item to toggle.
   */
  const handleCheckBox = (id) => {
    const updatedItems = items.map((item) => 
      (item.id === id ? { ...item, checked: !item.checked } : item));
    setItems(updatedItems);
  }

  /**
   * Removes an item from the items array based on its id and updates the state with the new array.
   * @param {number} id - The unique identifier of the item to be deleted.
   */
  const handleDelete = (id) => {
      const updatedItems = items.filter((item) => item.id !== id);
      setItems(updatedItems);
  }

  const [name, setName] = useState('');

  return (
    <main>
      {items.length===0 ? (
        <p>List is empty</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li className='item' key={item.id}>
              <input
                type='checkbox'
                onChange={() => handleCheckBox(item.id)}
                checked = {item.checked}
              />
              <label onDoubleClick={() => handleCheckBox(item.id)} style={item.checked ? {textDecoration: 'line-through'} : null}>
                {item.item}
              </label>
              {/* Delete button */}
              <FaTrashCan 
                role="button"
                onClick={() => handleDelete(item.id)}
                tabIndex={0}
              />
            </li>
          ))}
        </ul>
      )}
      
      
    </main>
  )
}

export default Content