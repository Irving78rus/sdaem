import React, { useContext, useState } from "react";
import MoreOptionIcon from "../../assest/icon/MoreOption.svg";
import { NavLink } from "react-router-dom";
import FlexContainer from "../../UI/FlexContainer";
import Button from "../../UI/Button";
import Select from "../../UI/Select";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import Input from "../../UI/Input";
import { getFilterFlats } from "../../redux/baseFlat";
import MoreOption from "../../UI/MoreOption";
import Checkbox from "../../UI/Checkbox ";
import { VerticalLine } from "../../UI/VerticalLine";
import IconMap from "../share/IconMap";
import { List, RightArrov, SelectTitle } from "./FormSearchStyle";
import styled from "styled-components";
import { Context } from "../../redux/context";
import Arrov from "../../assest/icon/arrov.svg";
import { GetListUniqueItems } from "../share/hooks";

export default function FormSearch(props: any) {
  const params = useAppSelector((state: any) => state.baseFlat.params);
  const [upPrice, setUpPrice] = useState('');
  const [toPrice, setToPrice] = useState('');
  const [rooms, setRooms] = useState(params.rooms);
  const [sleepingPlaces, setSleepingPlaces] = useState(params.sleepingPlaces);
  const [GasStove, setGasStove] = useState(null);
  const [Oven, setOven] = useState(null);
  const [CoffeeMaker, setCoffeeMaker] = useState(null);
  const [MicrowaveOven, setMicrowaveOven] = useState(null);
  const [Dishes, setDishes] = useState(null);
  const [Dishwasher, setDishwasher] = useState(null);
  const { isActiveSelectCity, setIsActiveSelectCity, isActiveSelectRooms, setIsActiveSelectRooms,
    isActiveSelectMetro, setIsActiveSelectMetro,
    isActiveSelectDistrict, setIsActiveSelectDistrict,
    isActiveSelectSleepingPlaces, setIsActiveSelectSleepingPlaces } = useContext(Context);
    const dispatch = useAppDispatch();
    console.log({
      city: props.city, upPrice: upPrice, toPrice: toPrice, rooms: rooms,
      metro: props.metro, district: props.district, sleepingPlaces: sleepingPlaces, GasStove: GasStove, Oven: Oven,
      CoffeeMaker: CoffeeMaker, MicrowaveOven: MicrowaveOven, Dishes: Dishes, Dishwasher: Dishwasher
    });
    
    const addParamsToStore = (e: any) => {
      dispatch(getFilterFlats({
        city: props.city, upPrice: upPrice, toPrice: toPrice, rooms: rooms,
        metro: props.metro, district: props.district, sleepingPlaces: sleepingPlaces, GasStove: GasStove, Oven: Oven,
        CoffeeMaker: CoffeeMaker, MicrowaveOven: MicrowaveOven, Dishes: Dishes, Dishwasher: Dishwasher
      }));
  
    }
    const clearParams = (e: any) => {
      dispatch(getFilterFlats({
        city: '', upPrice: 0, toPrice: 0, rooms: 0, metro: '', district: '', sleepingPlaces: 0, GasStove: null, Oven: null,
        CoffeeMaker: null, MicrowaveOven: null, Dishes: null, Dishwasher: null
      }));
      setUpPrice('')
      setToPrice('')
      setRooms('')
      setSleepingPlaces('')
      setGasStove(null)
      setOven(null)
      setCoffeeMaker(null)
      setMicrowaveOven(null)
      setDishes(null)
      setDishwasher(null)
  
    }
  const [isActive, setIsActive] = useState(false)
  const open = (e: any) => {
    e.stopPropagation();
    setIsActive(!isActive)
  }
  const allOption = ['Газовая плита', 'Духовка', "Кофеварка", "Микроволновая печь", "Посуда", "Посудомоечная машина"]
  const uniqueMetro = GetListUniqueItems('metro')
  const uniqueDistrict = GetListUniqueItems('district')
  const uniqueSleepingPlaces = GetListUniqueItems('sleepingPlaces')
 

  return (
    <>
      <FlexContainer
         
        width={"100%"}
        backgroundColor={props.backgroundColor}
        flexWrap="wrap"
        borderRadius="0 10px 10px 10px"
        onClick={(e: any) => setIsActiveSelectCity(false)}
      >
         {props.map &&<><Select options={GetListUniqueItems('city')}  selectedOption={props.setCity} title='Город' isActiveSelect={isActiveSelectCity} setIsActiveSelect={setIsActiveSelectCity} />
       <VerticalLine></VerticalLine></>  }
        <Select options={GetListUniqueItems('rooms')} selectedOption={setRooms} title='Комнаты' isActiveSelect={isActiveSelectRooms} setIsActiveSelect={setIsActiveSelectRooms} />
        <VerticalLine></VerticalLine>
        <FlexContainer flexDirection='column' gap='10px'>
          <SelectTitle>{"Цена за сутки (BYN)"}</SelectTitle>
          <FlexContainer  >
            <Input type={"text"} width={"80px"} height={"37px"} placeholder="  От"
              onChange={(e: any) => { setUpPrice(e.target.value) }} value={upPrice} />
            <Input width={"80px"} placeholder="  До" type={"text"} height={"37px"}
              onChange={(e: any) => { setToPrice(e.target.value) }} value={toPrice} />
          </FlexContainer>
        </FlexContainer>
        <VerticalLine></VerticalLine>
        <MoreOption onClick={(e: any) => open(e)}> Больше опций <img src={MoreOptionIcon} alt="MoreOptionIcon" /></MoreOption>
        <VerticalLine></VerticalLine>
        {props.map &&<MoreOption onClick={(e: any) => open(e)}>На карте {<IconMap fill='#664EF9 '></IconMap>}</MoreOption>}
        <FlexContainer>
          {props.clearButton && (
            <Button fontSize="15px" fontWeight="800" background={"#FFD54F"}
              width={"130px"} height={"40px"} color={"black"}  onClick={(e: any) => { clearParams(e) }}  >
              {"Очистить"}
            </Button>
          )}
          <NavLink to={"/Result"} style={{ marginRight: "34px", textDecoration: "none" }}>
            <Button fontSize="15px" fontWeight="800" background={"#FFD54F"}
              width={"130px"} height={"40px"} color={"black"} onClick={(e: any) => { addParamsToStore(e) }} >
              <FlexContainer width={"100%"}>
                Показать <RightArrov></RightArrov>
              </FlexContainer>
            </Button>
          </NavLink>
        </FlexContainer>
      </FlexContainer>
      {isActive && <List {...props}>
        <FlexContainer >
          <Select options={uniqueMetro} selectedOption={props.setMetro} title='Метро' isActiveSelect={isActiveSelectMetro} setIsActiveSelect={setIsActiveSelectMetro} />
          <Select options={uniqueDistrict} selectedOption={props.setDistrict} title='Район' isActiveSelect={isActiveSelectDistrict} setIsActiveSelect={setIsActiveSelectDistrict} />
          <Select options={uniqueSleepingPlaces} selectedOption={setSleepingPlaces} title='Спальные места' isActiveSelect={isActiveSelectSleepingPlaces} setIsActiveSelect={setIsActiveSelectSleepingPlaces} />
        </FlexContainer>
        <FlexContainer>
          {allOption.map((item: any, index) => (
            <Checkbox label={item} id={item} key={index} setGasStove={setGasStove} setOven={setOven} setCoffeeMaker={setCoffeeMaker}
              setMicrowaveOven={setMicrowaveOven} setDishes={setDishes} setDishwasher={setDishwasher}
            />
          ))}
        </FlexContainer>
      </List>}
    </>
  );
}
