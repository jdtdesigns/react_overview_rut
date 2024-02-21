// TODO: Create a `name` variable
import { useState } from 'react'
import './JSXVariables.scss'

// TODO: Create a `thoughts` variable
// This should be a string regarding what you think of React
const thoughts = 'is cool'

const styles = {
  nameEl: {
    color: '#444',
    backgroundColor: '#ddd',
    border: '1px solid #aaa'
  },
  colorInput: {
    width: '400px',
    padding: '4px 10px'
  }
}

function JSXVariables() {
  const [name, setName] = useState('nv')
  const [color, setColor] = useState('#2aff78')

  const clickHandler = () => {
    setName('something else')
    setColor('blue')
  }

  const handleColorChange = (event) => {
    setColor(event.target.value)
  }

  return (
    <div className="main-container" style={{ backgroundColor: color }}>
      <div className="container">
        <div className="p-5 mb-4 bg-light">
          {/* TODO: Add your name variable */}
          <h1 style={styles.nameEl}>Hi! My name is {name}</h1>
          {/* TODO: Add your number of letters variable */}
          <h2>My name has {name.length} letters</h2>
          {/* TODO: Add your thoughts variable */}
          <h2>I think React {thoughts}</h2>

          <p>{color}</p>

          <input style={styles.colorInput} onChange={handleColorChange} type="text" placeholder="Type the color you want (name, hex, rgb, rgba)" />

          <button onClick={clickHandler}>Click Me</button>
        </div>
      </div>
    </div>
  );
}

export default JSXVariables;

// function useState(initialValue) {
//   let val = initialValue
//   const updateVal = newVal => {
//     val = newVal
//   }

//   return [val, updateVal]
// }

// const [name, setName] = useState('nv')

// const fruits = ['orange', 'apple']

// const [orange, apple] = fruits;

// const el = document.querySelector('#btn');

// function callback() {

// }

// el.addEventListener('click', callback);