import React from "react";
import styled from "styled-components";
import Check from "../../assets/icon/check.svg";

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
  input:hover{
    &+label:before{
      content:'';
      background: rgba(102, 78, 249, 0.1);
      background-image: url('${Check}');
      background-position: center center;
      background-repeat: no-repeat;
    }
  }
  input:checked{
    &+label:before{
      content:'';
      background: #664EF9;
      background-image: url('${Check}');
      background-position: center center;
      background-repeat: no-repeat;
      &:hover{
      }
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
`;
interface chooseOptionPropsModel {
  target: {
    checked: boolean;
    id: string;
  };
}
 

interface CheckboxPropsModel{
  label:string;
  id:string;
  setGasStove:void,
  setOven:void,
  setCoffeeMaker:void,
  setMicrowaveOven:void,
  setDishes:void,
  setDishwasher:void,
}

const Checkbox = ({
  label,
  id,
  setGasStove,
  setOven,
  setCoffeeMaker,
  setMicrowaveOven,
  setDishes,
  setDishwasher,
}: CheckboxPropsModel) => {

  // interface allOptionModel{
  //   "Газовая плита": void,
  //   "Духовка": void,
  //   "Кофеварка": void,
  //   "Микроволновая печь": void,
  //   "Посуда": void,
  //   "Посудомоечная машина": void,
  // }

  const allOption: any = {
    "Газовая плита": setGasStove,
    "Духовка": setOven,
    "Кофеварка": setCoffeeMaker,
    "Микроволновая печь": setMicrowaveOven,
    "Посуда": setDishes,
    "Посудомоечная машина": setDishwasher,
  };

  const chooseOption = ({ target: { checked, id } }: chooseOptionPropsModel) => {
    for (let key in allOption) {
      if (id === key) {
        allOption[key](checked);
      }
    }
  };

  return (
    <CheckboxStl>
      <input
        type="checkbox"
        id={id}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          chooseOption(e);
        }}
      />
      <label htmlFor={id}> {label}</label>
    </CheckboxStl>
  );
};
export default Checkbox;
