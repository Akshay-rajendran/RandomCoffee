import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Coffee from './assets/component/Coffee'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Coffee/>
  )
}

export default App
