import { Routes,Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import List from './pages/List'
import Orders from './pages/Orders'
import Add from './pages/Add'


function App() {


  return (
    <div className="min-h-full">
      <Navbar/>
      <hr/>
      <div className="flex">
        <Sidebar/>
        <Routes>
          <Route path="/add" element={<Add/>}/>
          <Route path="/list" element={<List/>}/>
          <Route path="/orders" element={<Orders/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
