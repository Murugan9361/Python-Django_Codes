import { createContext, useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";

import About from "./Components/About.jsx";
import Home from "./Components/Home.jsx";
import Contact from "./Components/Contact.jsx";
import Service from "./Components/Service.jsx";
import Crud from "./Components/Crud.jsx";
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import Login from "./Components/Login.jsx";
import Register from "./Components/Register.jsx";
import NavbarCom from "./Components/NavbarCom.jsx";
import NotFound from "./Components/NotFound.jsx";

export let Usercontext=createContext()
function App() {
  const [count, setCount] = useState(0);
  const[data,setData]=useState({name:"Murugan",age:24})
  let message;

  function handleClick() {
    setCount(count + 1);
  }
  function handleDecrease() {
    setCount(count - 1);
  }
  function handlereset() {
    setCount(0);
  }
  if (count == 10) {
    message = "You get 10% offer";
  } else if (count < 10) {
    message = "when you reach count 10 might you can get offer upto 60%";
  }
   else if (count > 10 && count<20) {
    message = "when you reach count 20 might you can get offer upto 60%";
  }
  else if (count==20){
    message="Now You get 50% Offer"
  }
  else{
    setCount(0)
  }

  return (
    <>
    <Usercontext.Provider value={data}>
    <BrowserRouter>
   <NavbarCom/>
     <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/service" element={<Service sendData={data}/>} />
      <Route path="*" element={<NotFound/>}/>



     </Routes>
    
    
    </BrowserRouter>
    </Usercontext.Provider>
     
    </>
  );
}

export default App;
