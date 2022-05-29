import React from "react";
import './App.css'
import {Routes, Route, Link} from 'react-router-dom'
import Aboutpage from "./pages/Aboutpage";
import Homepage from "./pages/Homepage";
import Blogpage from "./pages/Blogpage";
import {Notfoundpage} from "./pages/Notfoundpage";


function App() {
  return (
    <div className="App">

      <header>
        <Link to="/">Home</Link>
        <Link to="/posts">Blog</Link>
        <Link to="/about">About</Link>
      </header>

      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/about" element={<Aboutpage/>}/>
        <Route path="/posts" element={<Blogpage/>}/>
        <Route path="*" element={<Notfoundpage/>}/>
      </Routes>
    </div>
  )
}

export default App
