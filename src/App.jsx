import Header from './components/Header'

function App() {
  const title = 'React Overview'
  const showTitle = true

  return (
    <>

      <Header mainTitle={title} />
      <main>
        {showTitle && <h1>{title}</h1>}

        <p>{5 > 3 ? 'Yep, 5 is greater' : 'Nope, math is not true'}</p>
      </main>
    </>
  )
}

export default App
