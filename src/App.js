import React from 'react'
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import About from './component/About';
import Header from './component/Header';
import Home from './component/Home';
import Navbar from './component/Navbar';
import Contact from './component/Contact';
import Footer from './component/Footer';
import Course from './component/Course';
import Image from './component/Image';
import Registration from './component/Registration';
import 'font-awesome/css/font-awesome.min.css';

const App = () => {
  return (
    <div>

      <Header />
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About/>}exact/>
        <Route path='/Image-Gallery' element={<Image/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/course' element={<Course/>}/>
        <Route path='/Registration' element={<Registration/>}/>
      </Routes>


      <Footer />

    </div>
  )
}

export default App

