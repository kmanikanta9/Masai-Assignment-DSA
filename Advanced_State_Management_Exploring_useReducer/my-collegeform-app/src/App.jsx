import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CollegeFormApp } from './components/collgeform'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <CollegeFormApp/>
    </>
  )
}

export default App
