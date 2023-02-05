 
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {  useAppSelector } from "../../../redux/hooks";
import {  stateModel } from "../../../redux/types";

 
export const GetListUniqueItems = (param:string) => {
    const flat = useAppSelector((state: stateModel) => state.baseFlat.flat);
    const getList = flat.map((item:any) => item[param]);
    const getUniqueList = getList.filter((item: string, pos: number) => getList.indexOf(item) === pos);
 
  return getUniqueList
};

export const useAppContext = () => {
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
  return {
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
  }
};