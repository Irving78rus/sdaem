import React, { useContext, useState } from "react";
import styled from "styled-components";
import Arrov from "../assest/icon/arrov.svg";
import { Context } from "../redux/context";
 
 
interface Props {
  background?: any;
  backgroundColor?: any;
  opacity?: any;
  color?: any;
  fontWeight?: any;
  width?: any;
  left: any;
  flexDirection: any;
  display: any;
  alignItems: any;
}

const Dropdown = styled.div`
  padding:10px;
  display:flex;
  flex-direction:column;
  gap:10px;
  .dropdown-btn {
    position: relative;
    width: 150px;
    height: 37px;
    background: #f8f8f8;
    border-radius: 20px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: #686868;
    span {
      color: black;
    }
    &:hover{
      cursor:pointer;
    }
    
  }
  .active {
    padding: 17px 18px;
    display:   flex  ;
    align-items:    center  ;
    box-sizing: border-box;
    background-color: white;
    border: 2px solid rgba(102, 78, 249, 0.8);
  }
  .dropdown-content {
    position: absolute;
    z-index:51;
    top: 110%;
    background: #ffffff;
    box-shadow: 0px 0px 40px rgba(135, 124, 202, 0.3);
    border-radius: 10px;
  }
  .dropdown-item {
    padding:10px;
    border-radius: 10px;
    background: #ffffff;
    flex: none;
    order: 1;
    flex-grow: 0;
    width: 150px;
    height: 37px;
    &:hover {
      background: #f8f8f8;
      cursor:pointer;
    }
  }
`;
const Arrow = styled.div `
 position: absolute;
 top:4px;
 border:none;
    width: 66px;
    height: 30px; 
    img{
      position: absolute;
      border:none;
      top:10px;
      left:  100px ;
       
 }
 `;
 const Title = styled.div `
 font-weight: 500;
font-size: 14px;
line-height: 17px;
 
color: #BDBDBD;
 `;
const Select = ({options,title,isActiveSelect,setIsActiveSelect,selectedOption,selected}:any) => {
  const {closeAllSelect} = useContext(Context);

  const [selected2, setSelected2] = useState('Выберите');
  

  return (
    <Dropdown>
      <Title>{title} </Title>
          <div className={isActiveSelect?"dropdown-btn active":'dropdown-btn'}  onClick={(e:any)=>{
            e.stopPropagation();
            closeAllSelect()
            setIsActiveSelect(!isActiveSelect)
          }}>
            <span>{selected }</span>
            <Arrow >
            <img src={Arrov} alt="arrov"></img>
        </Arrow>
          </div>
          {isActiveSelect&&
          <div className="dropdown-content">
            {options.map((option:any)=><div key={option} className="dropdown-item" onClick={(e:any)=>{
               setSelected2(e.target.textContent)
              selectedOption(e.target.textContent)
              closeAllSelect()
              
              }}>{option}</div>)}
        </div> }
          
        </Dropdown>
  );
};
export default Select;
