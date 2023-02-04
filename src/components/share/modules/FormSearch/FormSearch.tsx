import React, { useContext, useState } from "react";
import MoreOptionIcon from "../../../../assets/icon/MoreOption.svg";
import { NavLink, useNavigate } from "react-router-dom";
import FlexContainer from "../../../UI/FlexContainer";
import Button from "../../../UI/Button";
import Select from "../../../UI/Select";
import { useAppDispatch } from "../../../../redux/hooks";
import Input from "../../../UI/Input";
import { getFilterFlats } from "../../../../redux/baseFlat";
import MoreOption from "./components/MoreOption";
import Checkbox from "../../../UI/Checkbox ";
import { VerticalLine } from "../../../UI/VerticalLine";

import { HorizontalLine, List, RightArrow, SelectTitle } from "./FormSearchStyle";
import { Context } from "../../../../redux/context";
import { GetListUniqueItems } from "../../utils/hooks";
import IconMap from "../../../../assets/icon/IconMap";
import { allOption } from "./constant";
interface FormSearchProps {
  map: boolean;
  clearButton: boolean;
  backgroundColor?: string;
  flexDirection?: string;
  alignItems?: string;
  justifyContent?: string;
  color?: string;
}

export default function FormSearch({
  map,
  clearButton,
  backgroundColor,
  flexDirection,
  color,
}: FormSearchProps) {
  const {
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
    city,
    setCity,
    metro,
    setMetro,
    district,
    setDistrict,
  } = useContext(Context);
  const dispatch = useAppDispatch();

  const addParamsToStore = () => {
    if (upPrice && toPrice && Number(upPrice) > Number(toPrice)) {
      setToPrice("");
    } else {
      dispatch(
        getFilterFlats({
          city: city,
          upPrice: Number(upPrice),
          toPrice: Number(toPrice),
          rooms: Number(rooms),
          metro: metro,
          district: district,
          sleepingPlaces: Number(sleepingPlaces),
          GasStove: GasStove,
          Oven: Oven,
          CoffeeMaker: CoffeeMaker,
          MicrowaveOven: MicrowaveOven,
          Dishes: Dishes,
          Dishwasher: Dishwasher,
        })
      );
    }
  };
  const clearParams = () => {
    dispatch(
      getFilterFlats({
        city: "",
        upPrice: "",
        toPrice: "",
        rooms: 0,
        metro: "",
        district: "",
        sleepingPlaces: 0,
        GasStove: false,
        Oven: false,
        CoffeeMaker: false,
        MicrowaveOven: false,
        Dishes: false,
        Dishwasher: false,
      })
    );
    setUpPrice(0);
    setToPrice(0);
    setRooms(0);
    setSleepingPlaces(0);
    setGasStove(false);
    setOven(false);
    setCoffeeMaker(false);
    setMicrowaveOven(false);
    setDishes(false);
    setDishwasher(false);
  };
  const [isActive, setIsActive] = useState(false);
  const open = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setIsActive(!isActive);
  };

  const uniqueMetro = GetListUniqueItems("metro");
  const uniqueDistrict = GetListUniqueItems("district");
  const uniqueSleepingPlaces = GetListUniqueItems("sleepingPlaces");

  return (
    <>
      <FlexContainer
        width={"100%"}
        borderBottom="1px solid rgba(78, 100, 249, 0.1)"
        height={map ? "100%" : "80px"}
        backgroundColor={backgroundColor}
        flexWrap="wrap"
        borderRadius={isActive ? "0 10px 0 0" : "0 10px 10px 10px"}
        onClick={() => setIsActiveSelectCity(false)}
      >
        <FlexContainer width={"100%"} padding={clearButton ? "0 80px" : "0"} flexWrap="wrap">
          {map && (
            <>
              <Select
                options={GetListUniqueItems("city")}
                selected={city || "Выберите"}
                selectedOption={setCity}
                title="Город"
                isActiveSelect={isActiveSelectCity}
                setIsActiveSelect={setIsActiveSelectCity}
              />
              <VerticalLine></VerticalLine>
            </>
          )}

          <Select
            options={GetListUniqueItems("rooms")}
            color={color}
            flexDirection={flexDirection}
            selected={rooms || "Выберите"}
            selectedOption={setRooms}
            title="Комнаты"
            isActiveSelect={isActiveSelectRooms}
            setIsActiveSelect={setIsActiveSelectRooms}
          />
          <VerticalLine></VerticalLine>

          <FlexContainer flexDirection={flexDirection} gap="10px">
            <SelectTitle color={color}>{"Цена за сутки (BYN)"}</SelectTitle>
            <FlexContainer gap="10px">
              <Input
                type={"number"}
                width={"80px"}
                height={"37px"}
                placeholder="  От"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setUpPrice(e.target.value);
                }}
                value={upPrice}
              />
              <HorizontalLine></HorizontalLine>
              <Input
                width={"80px"}
                placeholder="  До"
                type={"number"}
                height={"37px"}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setToPrice(e.target.value);
                }}
                value={toPrice}
              />
            </FlexContainer>
          </FlexContainer>
          <VerticalLine></VerticalLine>

          <MoreOption onClick={(e: React.MouseEvent<HTMLElement>) => open(e)}>
            {" "}
            Больше опций
            <img src={MoreOptionIcon} alt="MoreOptionIcon" />
          </MoreOption>
          <VerticalLine></VerticalLine>

          {map && (
            <MoreOption>
              <NavLink to="Map">На карте</NavLink> {<IconMap fill="#664EF9 "></IconMap>}
            </MoreOption>
          )}
          <FlexContainer gap="10px">
            {clearButton && (
              <Button
                fontSize="15px"
                fontWeight="600"
                background={"#F8F8F8"}
                width={"130px"}
                height={"40px"}
                color={"black"}
                onClick={() => {
                  clearParams();
                }}
              >
                {"Очистить"}
              </Button>
            )}

            <NavLink to={"/Result"} style={{ marginRight: "34px", textDecoration: "none" }}>
              <Button
                fontSize="15px"
                fontWeight={clearButton ? "600" : "700"}
                background={clearButton ? "#664EF9" : "#FFD54F"}
                width={"100%"}
                height={"40px"}
                color={clearButton ? "white" : "black"}
                onClick={() => {
                  addParamsToStore();
                }}
              >
                <FlexContainer width={"100%"}>
                  {clearButton ? "Показать объекты" : "Показать"} <RightArrow></RightArrow>
                </FlexContainer>
              </Button>
            </NavLink>
          </FlexContainer>
        </FlexContainer>
      </FlexContainer>

      {isActive && (
        <FlexContainer width={"100%"} padding={clearButton ? "0 80px" : "0"}>
          <List>
            <FlexContainer gap="10px">
              <Select
                options={uniqueMetro}
                color={color}
                selected={metro || "Выберите"}
                selectedOption={setMetro}
                title="Метро"
                isActiveSelect={isActiveSelectMetro}
                setIsActiveSelect={setIsActiveSelectMetro}
              />
              <Select
                options={uniqueDistrict}
                color={color}
                selected={district || "Выберите"}
                selectedOption={setDistrict}
                title="Район"
                isActiveSelect={isActiveSelectDistrict}
                setIsActiveSelect={setIsActiveSelectDistrict}
              />
              <Select
                options={uniqueSleepingPlaces}
                color={color}
                selected={sleepingPlaces || "Выберите"}
                selectedOption={setSleepingPlaces}
                title="Спальные места"
                isActiveSelect={isActiveSelectSleepingPlaces}
                setIsActiveSelect={setIsActiveSelectSleepingPlaces}
              />
            </FlexContainer>
            <FlexContainer flexWrap="wrap">
              {allOption.map((item: string, index) => (
                <Checkbox
                  label={item}
                  id={item}
                  key={index}
                  setGasStove={setGasStove}
                  setOven={setOven}
                  setCoffeeMaker={setCoffeeMaker}
                  setMicrowaveOven={setMicrowaveOven}
                  setDishes={setDishes}
                  setDishwasher={setDishwasher}
                />
              ))}
            </FlexContainer>
          </List>
        </FlexContainer>
      )}
    </>
  );
}
