import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
import { useState } from "react";
import LoginPopup from "./components/LoginPopup";
import OrderPlace from "./pages/OrderPlace";
import Verify from "./pages/Verify";


function App() {
  const [showLogin,setShowLogin]= useState(false);

  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div className=" flex flex-col w-full h-full  m-auto font-outfit">
        <div className="w-full h-14 flex items-center justify-center bg-slate-100">
          <Navbar setShowLogin={setShowLogin} />
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<OrderPlace />} />
          <Route path="/verify" element={<Verify/>}/>
        </Routes>

        <Footer />
      </div>
    </>
  );
}

export default App;
