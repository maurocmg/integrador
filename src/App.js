import './App.css'
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav'
import characters, { Rick } from './data.js'

function App () {
  return (
    <div className='App' style={{ padding: '25px' }}>
      <div>
        <Nav></Nav>
      </div>
      <div>
        <Cards
          characters={characters}
        />
      </div>
      <hr />
      
    </div>
  )
}

export default App
