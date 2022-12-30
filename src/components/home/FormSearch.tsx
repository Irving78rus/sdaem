import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";
import logo from "../../assest/img/logo.png";
import insta from "../../assest/img/insta.svg";
import vk from "../../assest/img/vk.svg";
import Back from "../../assest/img/404Back.png";
import dots from "../../assest/img/dots.svg";
import verifyVisa from "../../assest/img/verifyVisa.png";
import snow from "../../assest/img/snow.png";
import webpay from "../../assest/img/webpay.png";
import MoreOptionIcon from "../../assest/icon/MoreOption.svg";
import masterSecure from "../../assest/img/masterSecure.png";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import ContentContainer from "../../UI/ContentContainer";
import FlexContainer from "../../UI/FlexContainer";
import Button from "../../UI/Button";
import Select from "../../UI/Select";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import Input from "../../UI/Input";
import { setGasStove, setParams, setParams2, setUpPriceToStore } from "../../redux/baseFlat";
import { setToPriceToStore } from "../../redux/baseFlat";
import MoreOption from "../../UI/MoreOption";
import Checkbox from "../../UI/Checkbox ";
import { VerticalLine } from "../../UI/VerticalLine";
import IconMap from "../share/IconMap";

interface Props {
  height: any;
  margin: any;
  justifyContent: any;
  flexDirection: any;
  width?: any;
  backgroundColor: any;
}
const List = styled.div<Props>`
  width: ${(props) => props.width || "100%"};
  box-shadow: 0px 0px 40px rgba(135, 124, 202, 0.3);
  height:100%;
  background: #ffffff;
  display:flex;
  flex-wrap:wrap;
  top: 47px;
  left: 0;
  flex-direction:column;
  align-items:flex-start;
   
 
`;
const SelectTitle = styled.p`
 margin:0px;
 margin-bottom:11px;
 font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 17px;
color: #BDBDBD;
`;


export default function FormSearch(props: any) {
  const params = useAppSelector((state: any) => state.baseFlat.params);
 
  const [city, setCity] = useState(params.city);
  const [upPrice, setUpPrice] = useState('');
  const [toPrice, setToPrice] = useState('');
  const [rooms, setRooms] = useState(params.rooms);
  const [metro, setMetro] = useState(params.metro);
  const [district, setDistrict] = useState(params.district);
  const [sleepingPlaces, setSleepingPlaces] = useState(params.sleepingPlaces);
  const [GasStove, setGasStove] = useState( null);
  const [Oven, setOven] = useState( null);
  const [CoffeeMaker, setCoffeeMaker] = useState( null);
  const [MicrowaveOven, setMicrowaveOven] = useState( null);
  const [Dishes, setDishes] = useState( null);
  const [Dishwasher, setDishwasher] = useState( null);
  const dispatch = useAppDispatch();
  const [titleSelect, setTitleSelect] = useState ('');
  
const addParamsToStore =(e:any)=>{
  dispatch(setParams2({ city: city, upPrice: upPrice, toPrice: toPrice,rooms:rooms,
  metro:metro,district:district, sleepingPlaces:sleepingPlaces,GasStove:GasStove,Oven:Oven,
  CoffeeMaker:CoffeeMaker,MicrowaveOven:MicrowaveOven,Dishes:Dishes,Dishwasher:Dishwasher} ));
  
}
const clearParams =(e:any)=>{
  dispatch(setParams2({ city: '', upPrice: 0, toPrice: 0,rooms:0,metro:'',district:'', sleepingPlaces:0,GasStove:null,Oven:null,
  CoffeeMaker:null,MicrowaveOven:null,Dishes:null,Dishwasher:null} ));
  setTitleSelect('')
  setUpPrice('')
  setToPrice('')
   
}

  const [isActive, setIsActive] = useState(false)
  const open = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    setIsActive(!isActive)
    if(isActive){
      setActiveSelect(0)
    }
  }
   
  const flat = useAppSelector((state: any) => state.baseFlat.flat);
  const metroRender = flat.map((item: any) => item.metro);
  const uniqueMetro = metroRender.filter((item: any, pos: any) => metroRender.indexOf(item) === pos);

  const districtRender = flat.map((item: any) => item.district);
  const uniqueDistrict = districtRender.filter((item: any, pos: any) => districtRender.indexOf(item) === pos);

  const sleepingPlacesRender = flat.map((item: any) => item.sleepingPlaces);
  const uniqueSleepingPlaces = sleepingPlacesRender.filter((item: any, pos: any) => sleepingPlacesRender.indexOf(item) === pos);
 
  
  const moreSelected = [
    {
      title: "Спальные места",
      techTitle: "sleepingPlaces",
      id: 6,
      select: "Выберите",
      active: false,
      list: uniqueSleepingPlaces,
    },

    {
      title: "Район",
      techTitle: "district",
      id: 7,
      select: "Выберите",
      active: false,
      list: uniqueDistrict,
    },
    {
      title: "Метро",
      techTitle: "metro",
      select: "Выберите",
      id: 8,
      active: false,
      list: uniqueMetro,
    }

  ];

  const [activeSelect, setActiveSelect] = useState(0);
  const allOption = ['Газовая плита', 'Духовка', "Кофеварка", "Микроволновая печь", "Посуда",
    "Посудомоечная машина"]

  return (
    <>
      <FlexContainer width={'100%'} backgroundColor={props.backgroundColor} >

        {props.nav2.map((item: any,index:any) => (
          <FlexContainer  key={index} >

            <FlexContainer height='100px' justifyContent='center' key={item.id} flexDirection={props.flexDirection} alignItems={props.alignItems} gap='10px'  padding='20px'>
              {item.title && <SelectTitle>{item.title}</SelectTitle>}
              {(item.id === 1 || item.id === 4) && <Select
                techTitle={item.techTitle}
                list={item.list}
                activeSelect={activeSelect}
                setActiveSelect={setActiveSelect}
                id={item.id}
                item={item}
                select={item.select}
                width={'150px'}
                left={'110px'}
                dropSelectList={props.dropSelectList}
                 setDropSelectList={props.setDropSelectList}
                 setCity={setCity}
                 setRooms={setRooms}
                  
              >

              </Select>
 
              }

              {item.id === 2 && <FlexContainer height={"30px"} gap={"30px"}>
                <Input
                  type={"text"}
                  width={"80px"}
                  height={"37px"}
                  placeholder="  От"
                  onChange={(e: any) => {
                    setUpPrice(e.target.value);
                  }}
                   
                  value={upPrice}
                />
                <Input
                  width={"80px"}
                  placeholder="  До"
                  type={"text"}
                  height={"37px"}
                  onChange={(e: any) => {
                    setToPrice(e.target.value);
                  }}
                  value={toPrice}
                />
              </FlexContainer>}
              {item.id === 3 && <MoreOption onClick={(e: any) => open(e)}> Больше опций <img src={MoreOptionIcon} alt="MoreOptionIcon" /></MoreOption>}

            </FlexContainer>


            <VerticalLine> </VerticalLine>

          </FlexContainer>
        ))}
        {props.map&&<MoreOption onClick={(e: any) => open(e)}>На карте {<IconMap fill='#664EF9 '></IconMap>}</MoreOption>}
        <FlexContainer>
        {props.clearButton&& <Button onClick={(e:any)=>{clearParams(e)}}
         fontSize='15px' fontWeight='800' background={"#FFD54F"} 
         width={'130px'} height={'40px'} color={"black"}>
          {'Очистить'}
          </Button>}
          <NavLink to={"/Result"} style={{ marginRight: '34px', textDecoration: "none" }}> 
         <Button onClick={(e:any)=>{addParamsToStore(e)}}
         fontSize='15px' fontWeight='800' background={"#FFD54F"} 
         width={'130px'} height={'40px'} color={"black"}>
          {'Показать >'}
          </Button></NavLink>
          
          </FlexContainer>
        

      </FlexContainer>
      {isActive && <List {...props}>
      <FlexContainer >
        {moreSelected.map((item: any) => (
      <FlexContainer height='100px' justifyContent='center' key={item.id} flexDirection="column"  alignItems='flex-start' padding='20px'>
              {item.title && <SelectTitle>{item.title}</SelectTitle>}
              <Select
                techTitle={item.techTitle}
                list={item.list}
                activeSelect={activeSelect}
                setActiveSelect={setActiveSelect}
                id={item.id}
                item={item}
                select={item.select}
                width={'150px'}
                left={'110px'}
                dropSelectList={props.dropSelectList}
                setDropSelectList={props.setDropSelectList}
                setMetro={setMetro}
                 setDistrict={setDistrict}
                 setSleepingPlaces={setSleepingPlaces}
                 
              >
              </Select>
            </FlexContainer>
            
         
        ))}
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
 