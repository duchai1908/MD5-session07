
import { Link, NavLink, Route, Routes } from 'react-router-dom'
import About from '../pages/About'
import Home from '../pages/Home'
import './App.css'

function App() {
  return (
    <>
    <nav>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"about"}>About</NavLink>
    </nav>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/about' element={<About></About>}></Route>
    </Routes>
    </>
  )
}

export default App
