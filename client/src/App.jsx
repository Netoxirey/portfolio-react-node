import { Routes, Route } from "react-router-dom"
import NavBar from '@components/NavBar'
import Home from "@components/Home"
import Dashboard from "@components/Dashboard"


function App() {


  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="dashboard" element={<Dashboard/>}/>
      </Routes>
    </>
  )
}

export default App
