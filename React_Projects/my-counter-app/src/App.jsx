import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CounterApp from './Components/Counter'

function App() {


  return (
    <>
      <CounterApp number={1}/>
    </>
  )
}

export default App
