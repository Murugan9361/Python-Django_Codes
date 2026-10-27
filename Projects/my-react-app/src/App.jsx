import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import UsememoHook from "./Components/About";
import UseCallbackHook from "./Components/Home";
import UseeffectHook from "./Components/UseeffectHook";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Dashboard from "./Components/Dashboard";
import Layout from "./Components/Layout";
import Home from "./Components/Home";
import About from "./Components/About";
import Producted from "./Components/Producted";
import Contentview from "./Components/Contentview";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <UsememoHook/> */}
      {/* <UseCallbackHook/> */}
      {/* <UseeffectHook/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<Producted/>}>
            <Route path="/dashboard" element={<Layout />}>
              <Route index element={<Dashboard />} />
              <Route path="home" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="view/:id" element={<Contentview />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
