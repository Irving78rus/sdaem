import React from 'react';
 
import TopHeader from './components/header/topHeader/TopHeader';
import BottomHeader from './components/header/bottomHeader/BottomHeader';
import News from './components/news/News';
import New from './components/news/new/New';
import Home from './components/home/Home';
import Contact from './components/contact/Contact';
import Error from './components/404/Error';
import Catalog from './components/catalog/Catalog';
import Favorite from './components/favorite/Favorite';
import Footer from './components/footer/Footer';
import { Route, Routes } from "react-router-dom";
import Authorization from './components/authorization/Authorization';
import Registration from './components/authorization/Registration';
function App() {
  return (
    <div  style={{minHeight:'100vh',display:'flex',flexDirection:'column' }}>
   
    <TopHeader/>
    <BottomHeader/>
     
    <Routes>
   
    <Route path="/" element={<Home />} />
    <Route path="News" element={ <News/>} />
    <Route path="News/*" element={ <New/>} />
    <Route path="Contact" element={ <Contact/>} />
    <Route path="Authorization" element={ <Authorization/>} />
 
    <Route path="Registration" element={ <Registration/>} />
    <Route path="Catalog" element={ <Catalog/>} />
    <Route path="Favorite" element={ <Favorite/>} />
    <Route path="*" element={ <Error/>} />
    </Routes>
     
    <Footer/>
       </div>
  );
}

export default App;
