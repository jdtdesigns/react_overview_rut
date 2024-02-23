import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const url = 'https://swapi.dev/api/people'
  const fruits = ['orange', 'apple', 'grape']
  const [chars, setChars] = useState([])

  useEffect(() => {
    axios.get(url)
      .then((res) => {
        setChars(res.data.results)
      })
  }, [])

  return (
    <>
      {fruits.map((fruit, index) => (
        <p key={index}>{fruit}</p>
      ))}

      <main>
        {chars.map((char, index) => (
          <div key={index}>
            <h3>Name: {char.name}</h3>
            <p>Birth Year: {char.birth_year}</p>
          </div>
        ))}
      </main>
    </>
  )
}

export default App

