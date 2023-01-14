import React, { useState } from 'react';
 
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
 
 
import { useAppSelector } from './redux/hooks';
import Result from './components/result/Result';
import { Authorization } from './components/authorization/Auth/Authorization';
import { Registration } from './components/authorization/Registration/Registration';
import { Context } from './redux/context';
function App() {
  const [isActiveSelectCity, setIsActiveSelectCity] = useState(false);
  const [isActiveSelectRooms, setIsActiveSelectRooms] = useState(false);
  const [isActiveSelectMetro, setIsActiveSelectMetro] = useState(false);
  const [isActiveSelectDistrict, setIsActiveSelectDistrict] = useState(false);
  const [isActiveSelectSleepingPlaces, setIsActiveSelectSleepingPlaces] = useState(false);

 const closeAllSelect = ()=>{
  setIsActiveSelectCity(false)
  setIsActiveSelectRooms(false)
  setIsActiveSelectMetro(false)
  setIsActiveSelectDistrict(false)
  setIsActiveSelectSleepingPlaces(false)
  setDropSelectList(false)
 }

  const [dropSelectList, setDropSelectList] = useState(false);
  return (
    <div  style={{minHeight:'100vh',display:'flex',flexDirection:'column' }}>
   <Context.Provider
        value={{
          dropSelectList, setDropSelectList,
          isActiveSelectCity, setIsActiveSelectCity
          ,isActiveSelectRooms, setIsActiveSelectRooms,
          isActiveSelectMetro, setIsActiveSelectMetro,
          isActiveSelectDistrict, setIsActiveSelectDistrict,
          isActiveSelectSleepingPlaces, setIsActiveSelectSleepingPlaces,closeAllSelect
        }}
      >
    <TopHeader/>
    <BottomHeader/>
     
    <Routes>
   
    <Route path="/" element={<Home />} />
    <Route path="News" element={ <News/>} />
    <Route path="News/*" element={ <New/>} />
    <Route path="Contact" element={ <СontactsComponent/>} />
    <Route path="Authorization" element={ <Authorization/>} />
    <Route path="Result" element={ <Result/>} />
    <Route path="Registration" element={ <Registration/>} />
    <Route path="Catalog" element={ <Catalog/>} />
    <Route path="Favorite" element={ <Favorite/>} />
    <Route path="*" element={ <Error/>} />
    </Routes>
     
    <Footer/>
    </Context.Provider>
       </div>
  );
}

export default App;
