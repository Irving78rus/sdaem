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
  const params = useAppSelector((state: any) => state.baseFlat.params);
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
 const [city, setCity] = useState(params.city);
  const [metro, setMetro] = useState(params.metro);
  const [district, setDistrict] = useState(params.district);
  const [dropSelectList, setDropSelectList] = useState(false);
  const [rooms, setRooms] = useState(params.rooms);
  const [sleepingPlaces, setSleepingPlaces] = useState(params.sleepingPlaces);
  const [GasStove, setGasStove] = useState(params.GasStove);
  const [Oven, setOven] = useState(params.Oven);
  const [CoffeeMaker, setCoffeeMaker] = useState(params.CoffeeMaker);
  const [MicrowaveOven, setMicrowaveOven] = useState(params.MicrowaveOven);
  const [Dishes, setDishes] = useState(params.Dishes);
  const [Dishwasher, setDishwasher] = useState(params.Dishwasher);
  const [upPrice, setUpPrice] = useState(params.upPrice);
  const [toPrice, setToPrice] = useState(params.toPrice);
  return (
    <div  style={{minHeight:'100vh',display:'flex',flexDirection:'column' }}>
   <Context.Provider
        value={{
          dropSelectList, setDropSelectList,
          isActiveSelectCity, setIsActiveSelectCity
          ,isActiveSelectRooms, setIsActiveSelectRooms,
          isActiveSelectMetro, setIsActiveSelectMetro,
          isActiveSelectDistrict, setIsActiveSelectDistrict,
          isActiveSelectSleepingPlaces, setIsActiveSelectSleepingPlaces,closeAllSelect,
          city, setCity,
          metro, setMetro,
          district, setDistrict,
          rooms, setRooms,sleepingPlaces, setSleepingPlaces,
          GasStove, setGasStove,Oven, setOven,CoffeeMaker, setCoffeeMaker,MicrowaveOven, setMicrowaveOven,
          Dishes, setDishes,Dishwasher, setDishwasher,upPrice, setUpPrice,toPrice, setToPrice
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
