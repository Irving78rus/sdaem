import React, { useContext } from "react";
import styled from "styled-components";
import arrow from "../../assets/icon/arrow.svg";
import { filterFlatForPrice } from "../../redux/baseFlat";
import { Context } from "../../redux/context";
import { useAppDispatch } from "../../redux/hooks";
 
interface Props {
  background?: any;
  backgroundColor?: any;
  opacity?: any;
  color?: any;
  fontWeight?: any;
  width?: any;
  left: any;
  flexDirection?: any;
  display: any;
  alignItems: any;
  boxShadow?: any;
}
 

const Dropdown = styled.div<Props>`
  padding:10px;
  display:flex;
  flex-direction:${(props) => props.flexDirection || 'column'};
  align-items:${(props) => (props.flexDirection==='row'&&'center') || 'flex-start'};
  gap:10px;
  .dropdown-btn {
    position: relative;
    min-width: 150px;
    width:100%;
    height: 37px;
    background: ${(props) => props.background || '#f8f8f8'};  
    box-shadow: ${(props) => props.boxShadow || ''};  
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
    min-width: 150px;
    width:100%;
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
    width: 86%;
    height: 30px; 
    img{
      position: absolute;
      border:none;
      top:10px;
      right:  0 ;
       
 }
 `;
 const Title = styled.div<Props>`
 font-weight: 500;
font-size: 14px;
line-height: 17px;
 
color:${(props) => props.color  || '#BDBDBD'};  
 `;
const Select = (props:any ) => {
  const {closeAllSelect}:any = useContext(Context);

  const dispatch = useAppDispatch();
  

  return (
    <Dropdown {...props}>
      <Title {...props}>{props.title} </Title>
          <div className={props.isActiveSelect?"dropdown-btn active":'dropdown-btn'}  onClick={(e:any)=>{
            e.stopPropagation();
            closeAllSelect()
            props.setIsActiveSelect(!props.isActiveSelect)
          }}>
            <span>{props.selected }</span>
            <Arrow >
            <img src={arrow} alt="Arrow"></img>
        </Arrow>
          </div>
          {props.isActiveSelect&&
          <div className="dropdown-content">
            {props.options.map((option:any)=><div key={option} className="dropdown-item" onClick={(e:any)=>{
              props.selectedOption(e.target.textContent)
              // closeAllSelect()
              props.setIsActiveSelect(!props.isActiveSelect)
              if(e.target.textContent==='По возрастанию цены'){
                dispatch(filterFlatForPrice('up'))
              }
              if (e.target.textContent==='По убыванию цены'){
                dispatch(filterFlatForPrice('down'))
              }
              }}>{option}</div>)}
        </div> }
          
        </Dropdown>
  );
};
export default Select;
