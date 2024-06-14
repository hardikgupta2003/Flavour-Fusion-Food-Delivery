import { Routes,Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import List from './pages/List'
import Orders from './pages/Orders'
import Add from './pages/Add'


function App() {

  const url = "http://localhost:3000"
  return (
    <div className="min-h-full">
      <Navbar />
      <hr />
      <div className="flex">
        <Sidebar />
        <Routes>
          <Route path="/add" element={<Add url={url} />} />
          <Route path="/list" element={<List url={url} />} />
          <Route path="/orders" element={<Orders url={url} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App
