import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Features from './Pages/Feature';
import Categories from './Pages/Categories';
import HomePlant from './Pages/HomePlant';
import OutdoorPlant from './Pages/OutdoorPlant';
import Flowers from './Pages/Flower';
import React, { useState } from 'react';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Footer from './Pages/Footer';

import Drawer from './Pages/Drawer';



function App() {
  

  const [cartItems , setcartItems] = useState([]);
 const ClickCart = (item) => {
  setcartItems((oldItems) => [...oldItems, item]);
};



 const [isDrawerOpen, setIsDrawerOpen] = useState(false);
 const openDrawer = () =>{
  setIsDrawerOpen(true)
 }
 const closeDrawer = () =>{
  setIsDrawerOpen(false)
 }

   const DeleteItem = (index) => {
  setcartItems((oldItems) => oldItems.filter((_, i) => i !== index));
};



  return (
    <Router>
      <Home openDrawer={openDrawer} />
      <Features />

      <Routes>
        <Route path="/" element={<Categories ClickCart={ClickCart} />}>
  <Route index element={<HomePlant ClickCart={ClickCart} />} /> 
  <Route path="all" element={<HomePlant ClickCart={ClickCart}  />} />
  <Route path="outdoor" element={<OutdoorPlant ClickCart={ClickCart}  />} />
  <Route path="flower" element={<Flowers ClickCart={ClickCart}  />} />


        </Route>
      </Routes>
      <About/>
      <Contact />
      <Footer/>

   <Drawer 
   
   DeleteItem={DeleteItem} cartItems={cartItems} isOpen={isDrawerOpen} onClose={closeDrawer} />
  
 
    </Router>
  );
}

export default App;
