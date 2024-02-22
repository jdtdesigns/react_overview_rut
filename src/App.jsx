import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'

import Header from './components/Header'
// Import the Home component
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [quote, setQuote] = useState('')

  useEffect(() => {
    const quote_url = 'https://api.quotable.io/random'

    fetch(quote_url)
      .then(res => res.json())
      .then(data => {
        setQuote(data.content)
      })
  }, [isDarkMode])

  return (
    <div className={`main-content ${isDarkMode ? 'dark' : ''}`}>
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <main>
        <div className="quote-wrap">
          {quote && <p className="quote">"{quote}"</p>}
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
