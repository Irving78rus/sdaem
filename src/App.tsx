import React, { useState } from "react";

import TopHeader from "./components/header/topHeader/TopHeader";
import BottomHeader from "./components/header/bottomHeader/BottomHeader";
 
import New from "./components/pages/new/New";
import Home from "./components/home/Home";
import СontactsComponent from "./components/contact/СontactsComponent";
import Error from "./components/404/Error";
import Catalog from "./components/catalog/Catalog";
import Favorite from "./components/favorite/Favorite";
import Footer from "./components/footer/Footer";
import { Route, Routes } from "react-router-dom";
import { useAppSelector } from "./redux/hooks";
import Result from "./components/result/Result";
import { Authorization } from "./components/pages/authorization/Authorization";
import { Registration } from "./components/pages/Registration/Registration";
import { Context } from "./redux/context";
import { stateModel } from "./redux/types";
import ResultPage from "./components/result/ResultPage";
import NewsLIst from "./components/pages/news/NewsList";

function App() {
  const params = useAppSelector((state: stateModel) => state.baseFlat.params);
  const [isActiveSelectCity, setIsActiveSelectCity] = useState<boolean>(false);
  const [isActiveSelectRooms, setIsActiveSelectRooms] = useState<boolean>(false);
  const [isActiveSelectMetro, setIsActiveSelectMetro] = useState<boolean>(false);
  const [isActiveSelectDistrict, setIsActiveSelectDistrict] = useState<boolean>(false);
  const [isActiveSelectSleepingPlaces, setIsActiveSelectSleepingPlaces] = useState<boolean>(false);

  const [city, setCity] = useState<string | undefined>(params.city);
  const [metro, setMetro] = useState<string | undefined>(params.metro);
  const [district, setDistrict] = useState<string | undefined>(params.district);
  const [dropSelectList, setDropSelectList] = useState<boolean>(false);
  const [rooms, setRooms] = useState<number | undefined>(params.rooms);
  const [sleepingPlaces, setSleepingPlaces] = useState<number | undefined>(params.sleepingPlaces);
  const [GasStove, setGasStove] = useState<boolean | undefined>(params.GasStove);
  const [Oven, setOven] = useState<boolean | undefined>(params.Oven);
  const [CoffeeMaker, setCoffeeMaker] = useState<boolean | undefined>(params.CoffeeMaker);
  const [MicrowaveOven, setMicrowaveOven] = useState<boolean | undefined>(params.MicrowaveOven);
  const [Dishes, setDishes] = useState<boolean | undefined>(params.Dishes);
  const [Dishwasher, setDishwasher] = useState<boolean | undefined>(params.Dishwasher);
  const [upPrice, setUpPrice] = useState<number | string | undefined>(params.upPrice);
  const [toPrice, setToPrice] = useState<number | string | undefined>(params.toPrice);
  
 
  const closeAllSelect = (): void => {
    setIsActiveSelectCity(false);
    setIsActiveSelectRooms(false);
    setIsActiveSelectMetro(false);
    setIsActiveSelectDistrict(false);
    setIsActiveSelectSleepingPlaces(false);
    setDropSelectList(false);
  };
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Context.Provider
        value={{
          dropSelectList,
          setDropSelectList,
          isActiveSelectCity,
          setIsActiveSelectCity,
          isActiveSelectRooms,
          setIsActiveSelectRooms,
          isActiveSelectMetro,
          setIsActiveSelectMetro,
          isActiveSelectDistrict,
          setIsActiveSelectDistrict,
          isActiveSelectSleepingPlaces,
          setIsActiveSelectSleepingPlaces,
          closeAllSelect,
          city,
          setCity,
          metro,
          setMetro,
          district,
          setDistrict,
          rooms,
          setRooms,
          sleepingPlaces,
          setSleepingPlaces,
          GasStove,
          setGasStove,
          Oven,
          setOven,
          CoffeeMaker,
          setCoffeeMaker,
          MicrowaveOven,
          setMicrowaveOven,
          Dishes,
          setDishes,
          Dishwasher,
          setDishwasher,
          upPrice,
          setUpPrice,
          toPrice,
          setToPrice,
        }}
      >
        <TopHeader />
        <BottomHeader />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="News" element={<NewsLIst />} />
          <Route path="News/*" element={<New />} />
          <Route path="Contact" element={<СontactsComponent />} />
          <Route path="Authorization" element={<Authorization />} />
          <Route path="Result" element={<ResultPage />} />
          <Route path="Registration" element={<Registration/>} />
          <Route path="Catalog" element={<Catalog />} />
          <Route path="Favorite" element={<Favorite />} />
          <Route path="*" element={<Error />} />
        </Routes>

        <Footer />
      </Context.Provider>
    </div>
  );
}

export default App;
