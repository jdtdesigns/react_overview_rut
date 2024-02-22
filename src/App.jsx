import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'

import Header from './components/Header'
// Import the Home component
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true)

  return (
    <div className={`main-content ${isDarkMode ? 'dark' : ''}`}>
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <main>
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
