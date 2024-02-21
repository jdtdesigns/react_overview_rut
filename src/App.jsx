import { useState } from 'react'

import Header from './components/Header'
// Import the Home component
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'

function App() {
  const [page, setPage] = useState('home')

  function renderPage() {
    switch (page) {
      case 'home':
        return <Home />
      case 'about':
        return <About />
      default:
        return <Contact />
    }
  }

  return (
    <>
      <Header page={page} setPage={setPage} />
      <main>
        {/* Conditionally output the Home component if page is set to 'home', likewise output Contact if it's equal to 'contact' and About if equal to 'about' */}
        {/* {page === 'home' ? <Home /> :
          page === 'contact' ? <Contact /> : <About />} */}
        {renderPage()}
      </main>
    </>
  )
}

export default App
