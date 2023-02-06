import React,{useState} from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/home";
import Blog from './pages/blog'
import Register from "./pages/register";
import Customer from "./pages/customer";
import SignIn from './components/signIn/signIn'
import SignUp from './components/signUp/signUp'
import OTP from './components/otpverf/otpveri'

function App() {
  const [email,setEmail]= useState();
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/customer" element={<Customer/>}/>
        <Route path="/vendor" element={<Register/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path ='/signIn' element={<SignIn setEmail={setEmail}/>}/>
        <Route path='/signUp' element={<SignUp setEmail={setEmail}/>}/>
        <Route path='/otpVerify' element={<OTP email={email}/>}/>
      
      </Routes>
    </BrowserRouter>
      
    
  );
}

export default App;
