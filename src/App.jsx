import './App.css'
import { Outlet } from 'react-router-dom'
import Home from './Pages/Home/home'
import NavBar from './Components/NavBar/NavBar'
import Baseboard from './Components/Baseboard/Baseboard'

function App() {

  return (
    <>
      <NavBar />
      <Outlet />
      <Baseboard />
    </>
  )
}

export default App
