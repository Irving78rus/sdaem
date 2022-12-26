import React from 'react';
 
import TopHeader from './components/header/topHeader/TopHeader';
import BottomHeader from './components/header/bottomHeader/BottomHeader';
import News from './components/news/News';
 
import New from './components/news/new/New';
import Home from './components/home/Home';
import  СontactsComponent  from './components/contact/СontactsComponent';
import Error from './components/404/Error';
import Catalog from './components/catalog/Catalog';
import Favorite from './components/favorite/Favorite';
import Footer from './components/footer/Footer';
import { Route, Routes } from "react-router-dom";
import Authorization from './components/authorization/Authorization';
import Registration from './components/authorization/Registration';
import { useAppSelector } from './redux/hooks';
import Result from './components/result/Result';
import { AuthComponent } from './components/authorization/Auth/AuthComponent';
import { RegistrationComponent } from './components/authorization/Registration/RegistrationComponent';
function App() {
 
  
  return (
    <div  style={{minHeight:'100vh',display:'flex',flexDirection:'column' }}>
   
    <TopHeader/>
    <BottomHeader/>
     
    <Routes>
   
    <Route path="/" element={<Home />} />
    <Route path="News" element={ <News/>} />
    <Route path="News/*" element={ <New/>} />
    <Route path="Contact" element={ <СontactsComponent/>} />
    <Route path="Authorization" element={ <AuthComponent/>} />
    <Route path="Result" element={ <Result/>} />
    <Route path="Registration" element={ <RegistrationComponent/>} />
    <Route path="Catalog" element={ <Catalog/>} />
    <Route path="Favorite" element={ <Favorite/>} />
    <Route path="*" element={ <Error/>} />
    </Routes>
     
    <Footer/>
       </div>
  );
}

export default App;
