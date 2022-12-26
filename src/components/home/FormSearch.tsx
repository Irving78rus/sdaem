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
import master from "../../assest/img/master.png";
import masterSecure from "../../assest/img/masterSecure.png";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import ContentContainer from "../../UI/ContentContainer";
import FlexContainer from "../../UI/FlexContainer";
import Button from "../../UI/Button";
import Select from "../../UI/Select";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import Input from "../../UI/Input";
import { setGasStove, setParams, setUpPriceToStore } from "../../redux/baseFlat";
import { setToPriceToStore } from "../../redux/baseFlat";
import MoreOption from "../../UI/MoreOption";
import Checkbox from "../../UI/Checkbox ";
import { VerticalLine } from "../../UI/VerticalLine";

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
  const [upPrice, setUpPrice] = useState(params.upPrice || 0);
  const [toPrice, setToPrice] = useState(params.toPrice || 0);


  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setUpPriceToStore(Number(upPrice)));
  }, [upPrice, dispatch]);
  useEffect(() => {
    dispatch(setToPriceToStore(Number(toPrice)));
  }, [toPrice, dispatch]);


  const [isActive, setIsActive] = useState(false)
  const open = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    setIsActive(true)
  }
  const close = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    setIsActive(false)
    setActiveSelect(0)
  }
  const flat = useAppSelector((state: any) => state.baseFlat.flat);
  const metro = flat.map((item: any) => item.metro);
  const uniqueMetro = metro.filter((item: any, pos: any) => metro.indexOf(item) === pos);
  const district = flat.map((item: any) => item.district);
  const uniqueDistrict = district.filter((item: any, pos: any) => district.indexOf(item) === pos);
  const sleepingPlaces = flat.map((item: any) => item.sleepingPlaces);
  const uniqueSleepingPlaces = sleepingPlaces.filter((item: any, pos: any) => sleepingPlaces.indexOf(item) === pos);
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
      <FlexContainer width={'100%'} backgroundColor={props.backgroundColor} onClick={(e: any) => { close(e) }} >

        {props.nav2.map((item: any,index:any) => (
          <FlexContainer  key={index} >

            <FlexContainer height='100px' justifyContent='center' key={item.id} flexDirection={props.el} alignItems='flex-start' padding='20px'>
              {item.title && <SelectTitle>{item.title}</SelectTitle>}
              {(item.id === 1 || item.id === 4) && <Select
                techTitle={item.techTitle}
                list={item.list}
                activeSelect={activeSelect}
                setActiveSelect={setActiveSelect}
                id={item.id}
                item={item}
                select={item.select}
                width={'230px'}
                left={'170px'}
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

                />
                <Input
                  width={"80px"}
                  placeholder="  До"
                  type={"text"}
                  height={"37px"}
                  onChange={(e: any) => {
                    setToPrice(e.target.value);
                  }}
                />
              </FlexContainer>}
              {item.id === 3 && <MoreOption onClick={(e: any) => open(e)}>Больше опций</MoreOption>}

            </FlexContainer>


            <VerticalLine> </VerticalLine>

          </FlexContainer>
        ))}
        {<MoreOption onClick={(e: any) => open(e)}>На карте</MoreOption>}
        <NavLink to={"/Result"} style={{ marginRight: '34px', textDecoration: "none" }}>  <Button fontSize='15px' fontWeight='800' background={"#FFD54F"} width={'130px'} height={'40px'} color={"black"}>{'Показать >'}</Button></NavLink>

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
                width={'230px'}
                left={'170px'}
              >
              </Select>
            </FlexContainer>
            
         
        ))}
        </FlexContainer>
        <FlexContainer>
        {allOption.map((item: any, index) => (
          <Checkbox label={item} id={item} key={index}/>
        ))}
 </FlexContainer>
      </List>}


    </>
  );
}
