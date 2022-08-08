import React,{ useState } from 'react'
import './App.css'
import Board from './components/Board'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <h1 className='header'>TIC TAC TOE</h1>
     <Board/>
    </div>
  )
}

export default App
