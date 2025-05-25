import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from './Components/profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Profile />
      <Profile name="Mahesh" age={19} bio="My name is Mahesh" />
    </>
  )
}

export default App
