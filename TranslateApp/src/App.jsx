import { useState } from 'react'
import './App.css'
import Translator from './Components/Translator'

function App() {
  

  return (
    <>
    <h1 className='main-heading'>Translate your Text Here</h1>
    <div className='container'>
       < Translator />
    </div></>
  )
}

export default App
