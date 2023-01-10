import React, { useContext, useEffect, useState } from "react";
import MoreOptionIcon from "../../assest/icon/MoreOption.svg";
import { NavLink } from "react-router-dom";
import FlexContainer from "../../UI/FlexContainer";
import Button from "../../UI/Button";
import Select from "../../UI/Select";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import Input from "../../UI/Input";
import { ResetSearchParameters  } from "../../redux/baseFlat";
import MoreOption from "../../UI/MoreOption";
import Checkbox from "../../UI/Checkbox ";
import { VerticalLine } from "../../UI/VerticalLine";
import IconMap from "../share/IconMap";
import { List, RightArrov, SelectTitle } from "./FormSearchStyle";

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
  const dispatch = useAppDispatch();

  const addParamsToStore = (e: any) => {
    dispatch(ResetSearchParameters({
      city: props.city, upPrice: upPrice, toPrice: toPrice, rooms: rooms,
      metro: props.metro, district: props.district, sleepingPlaces: sleepingPlaces, GasStove: GasStove, Oven: Oven,
      CoffeeMaker: CoffeeMaker, MicrowaveOven: MicrowaveOven, Dishes: Dishes, Dishwasher: Dishwasher
    }));

  }
  const clearParams = (e: any) => {
    dispatch(ResetSearchParameters({
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
    e.preventDefault();
    e.stopPropagation();
    setIsActive(!isActive)
    if (isActive) {
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
console.log(props);

  const [activeSelect, setActiveSelect] = useState(0);
  const allOption = ['Газовая плита', 'Духовка', "Кофеварка", "Микроволновая печь", "Посуда",
    "Посудомоечная машина"]

  return (
    <>
      <FlexContainer width={'100%'} backgroundColor={props.backgroundColor} flexWrap='wrap' borderRadius='0 10px 10px 10px'>

        {props.SearchFormFields.map((item: any, index: any) => (
          <FlexContainer key={index} >

            <FlexContainer height='100px' justifyContent='center' key={item.id} flexDirection={props.flexDirection} alignItems={props.alignItems} padding='20px'>
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
                setCity={props.setCity}
                setRooms={setRooms}
             >
              </Select>}

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
        {props.map && <MoreOption onClick={(e: any) => open(e)}>На карте {<IconMap fill='#664EF9 '></IconMap>}</MoreOption>}
        <FlexContainer>
          {props.clearButton && <Button onClick={(e: any) => { clearParams(e) }}
            fontSize='15px' fontWeight='800' background={"#FFD54F"}
            width={'130px'} height={'40px'} color={"black"}>
            {'Очистить'}
          </Button>}
          <NavLink to={"/Result"} style={{ marginRight: '34px', textDecoration: "none" }}>
            <Button onClick={(e: any) => { addParamsToStore(e) }}
              fontSize='15px' fontWeight='800' background={"#FFD54F"}
              width={'130px'} height={'40px'} color={"black"}>
             <FlexContainer  width={'100%'}>Показать   <RightArrov></RightArrov></FlexContainer> 
            </Button>
            </NavLink>

        </FlexContainer>


      </FlexContainer>
      {isActive && <List {...props}>
        <FlexContainer >
          {moreSelected.map((item: any) => (
            <FlexContainer height='100px' justifyContent='center' key={item.id} flexDirection="column" alignItems='flex-start' padding='20px'>
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
                
                setMetro={props.setMetro}
                setDistrict={props.setDistrict}
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
