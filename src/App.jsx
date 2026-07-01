import './App.css'
import { Outlet } from 'react-router-dom'
import Home from './Pages/Home/home'
import NavBar from './Components/NavBar/NavBar'

function App() {

  return (
    <>
      <NavBar />
      <Outlet /> 
    </>
  )
}

export default App
