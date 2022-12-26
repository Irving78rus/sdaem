import React, { useState } from "react";
import styled from "styled-components";
import { isTemplateExpression } from "typescript";
import Arrov from "../assest/icon/arrov.svg";
import { setCountRooms, setDistrictToStore, setMetroToStore, setParams, setSleepingPlacesToStore } from "../redux/baseFlat";
import { useAppDispatch } from "../redux/hooks";
import { VerticalLine } from "./VerticalLine";
interface Props {
  background?: any;
  backgroundColor?: any;
  opacity?: any;
  color?: any;
  fontWeight?: any;
  width?: any;
  left:any;
  flexDirection:any;
  display:any;
  alignItems:any;
}

const SelectStl = styled.div<Props>`
   
  display:${props=>props.display||'flex'};
  align-items:${props=>props.alignItems||'center'};
  
  padding: 17px 18px;
  flex-direction:${props=>props.flexDirection||'row'};
  width: ${(props) => props.width || "150px"};
  font-weight: ${(props) => props.fontWeight || "400"};
  color: ${(props) => props.color || "black"};
  background-color: ${(props) => props.backgroundColor || "#F8F8F8"};
  border: 2px solid #f8f8f8;
  height: 31px;
  border-radius: 20px;

  &:hover {
    background-color: rgba(102, 78, 249, 0.1);
    cursor: pointer;
    border: 2px solid rgba(102, 78, 249, 0);
  }

  &.active {
    display:${props=>props.display||'flex'};
  align-items:${props=>props.alignItems||'center'};
    box-sizing: border-box;
    background-color: white;
    border: 2px solid rgba(102, 78, 249, 0.8);
  }
`;
const Arrow = styled.div<Props>`
 position: absolute;
 top:4px;
 border:none;
    width: 66px;
    height: 30px; 
    img{
      position: absolute;
      border:none;
      top:10px;
      left:${(props) => props.left || "0px"};
     
    }
 
}
 `;

const Wrapper = styled.div<Props>`
display:${props=>props.display||'flex'};
// align-items:${props=>props.alignItems||'center'};
  position: relative;

`;
const List = styled.div<Props>`
  width: ${(props) => props.width || "150px"};
  box-shadow: 0px 0px 40px rgba(135, 124, 202, 0.3);
  background: #ffffff;
  
  z-index:2;
  position: absolute;
  top: 47px;
  left: 0;
  div:hover {
    background: #f8f8f8;
    border-radius: 10px;
  }
  border-radius: 10px;
`;
const DropTable = styled.div`
 
position: relative;
  padding: 15px;
`;
const Select = (props: any) => {
   
  const as = (e: any) => {
    e.stopPropagation();
    props.setActiveSelect(props.id);
    props.setDropSelectList(!props.dropSelectList)
  };
  const [title, setTitle] = useState ('');
  const dispatch = useAppDispatch();
  const addParams = (e:any, item:any,techTitle:any) => {
    setTitle(item)
    if(techTitle==='city'){
      dispatch(setParams(item));
    }
    if(techTitle==='sleepingPlaces'){
      dispatch(setSleepingPlacesToStore(item));
    }
    if(techTitle==='district'){
      dispatch(setDistrictToStore(item));
    }
    if(techTitle==='metro'){
      dispatch(setMetroToStore(item));
    }
    if(techTitle==='rooms'){
      dispatch(setCountRooms(item));
    }
  
    e.stopPropagation();
  props.setActiveSelect(0);
  props.setDropSelectList(!props.dropSelectList)
  };
  return (
    <Wrapper {...props}>
      <SelectStl
        className={props.id === props.activeSelect ? "active" : null}
        {...props}
        onClick={(e) => as(e)}
      >
        {title ? title: props.select}
        <Arrow {...props}>
          <img src={Arrov} alt="arrov"></img>
         
        </Arrow>
        {props.dropSelectList && props.id === props.activeSelect && (
          <List {...props}>
            {" "}
            {props.list.map((item: any) => (
              <DropTable key={item} onClick={(e)=>{addParams(e,item,props.techTitle)}}>{item}</DropTable>
            ))}
          </List>
        )}
        
      </SelectStl>
    </Wrapper>
  );
};
export default Select;
