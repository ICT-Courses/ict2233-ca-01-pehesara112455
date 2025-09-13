import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home"
import Navbar from './Components/Navbar';


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/Navbar' element  = {<Navbar/>}/>
      </Routes>
    </Router>
  )
}

export default App
