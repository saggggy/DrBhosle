import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './components/pages/Home/Home';
import Contact from './components/pages/Concact/Concact';
import Video from './components/pages/Video/Video';
import About from './components/pages/About/About';
import Carrior from './components/pages/Carrior/Carrior';
import Frontend from './components/pages/Carrior/Job/Frontend';
import From from './components/pages/Carrior/Job/Form';
// import Full from './components/pages/Carrior/Job/Full';
// import Mern from './components/pages/Carrior/Job/Mern';
// import Back from './components/pages/Carrior/Job/Back';
import MyTabs from './components/MyTabs';
import menu from './menu.json';
import Heading from './components/Heading/Heading';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <MyTabs />
      <Heading/>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/front' element={<Frontend />} />
        {/* <Route path='/back' element={<Back />} /> */}
        {/* <Route path='/fullstack' element={<Full />} /> */}
        <Route path='/from' element={<From />} />
        <Route path='/video' element={<Video />} />
        <Route path='/career' element={<Carrior />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />

        {/* No Pages Available Route */}
        <Route path='*' element={<div className='container d-flex justify-content-center align-items-center' style={{ height: '78vh' }}><img src="./errorpage.avif" alt="404" height={220} /></div>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
