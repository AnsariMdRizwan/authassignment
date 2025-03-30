import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from './page/login'
import RegisterForm from './page/register';
import Home from './page/home';

function App() {


  return (
    <>

      <Routes>

        <Route path="/" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/home" element={<Home />} />

      </Routes>

    </>
  )
}

export default App
