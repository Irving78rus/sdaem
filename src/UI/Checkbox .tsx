import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Check from '../assest/icon/check.svg'
 
import { useAppDispatch, useAppSelector } from "../redux/hooks";
const CheckboxStl = styled.div`
 display:flex;
 align-items-center;
  label{
    position: relative;
    display:flex;
    cursor:pointer;
    padding: 20px 0;
     &:hover{
      background: white;
     }
  }
  input{
    cursor:pointer;
    opacity:0;
    position:absolute;
  }
  input:checked{
    &+label:before{
      
      content:'';
      background: #664EF9;
      background-image: url('${Check}');
      background-position: center center;
       
	background-repeat: no-repeat;
       
    }
  }
label:before{
  content:'';
    
border: 1px solid #F0F0F0;
border-radius: 5px;
width:20px;
     height:20px;
margin-right:0.5em;
margin-left:1.5em;
}
`
const Checkbox = ({ label, id,setGasStove ,setOven,setCoffeeMaker,
  setMicrowaveOven, setDishes, setDishwasher}: any) => {
  const params = useAppSelector((state: any) => state.baseFlat.params);
  
  const allOption:any = {
    'Газовая плита':setGasStove,
    'Духовка':setOven,
    'Кофеварка':setCoffeeMaker,
    'Микроволновая печь':setMicrowaveOven,
    'Посуда':setDishes,
    'Посудомоечная машина':setDishwasher
  }  
  
const [x, setX] = useState(false);
 const test =({ target: { checked,id } }:any)=>{
  for (let key in allOption) {
   if( id===key){
     allOption[key](checked) 
     }
  }
 }
  
  return (
    <CheckboxStl>

      <input type="checkbox" id={id} onChange={(e: any) => {
                    test(e);
                  }}/>
      <label htmlFor={id}> {label}</label>



    </CheckboxStl>
  );
};
export default Checkbox;
