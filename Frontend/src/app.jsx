import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/home";
import Blog from './pages/blog'
import Register from "./pages/register";
import Customer from "./pages/customer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/customer" element={<Customer/>}/>
        <Route path="/vendor" element={<Register/>}/>
        <Route path='/blog' element={<Blog/>}/>
      </Routes>
    </BrowserRouter>
      
    
  );
}

export default App;
