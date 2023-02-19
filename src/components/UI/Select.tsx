import React, { useContext } from "react";
import styled from "styled-components";
import arrow from "../../assets/icon/arrow.svg";
import { Context } from "../../redux/context";


interface Props {
  background?: string;
  backgroundColor?: string;
  opacity?: string;
  color?: string;
  fontWeight?: string;
  width?: string;
  left: string;
  flexDirection?: string;
  display: string;
  alignItems: string;
  boxShadow?: string;
  position?: string;
  top?: string;
  right?: string;
}


const Dropdown = styled.div<Props>`
  padding:10px;
  display:flex;
  flex-direction:${(props) => props.flexDirection || 'column'};
  align-items:${(props) => (props.flexDirection === 'row' && 'center') || 'flex-start'};
  gap:10px;
  .dropdown-btn {
    position: relative;
    min-width: 150px;
    width:115%;
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
      position:relative;
      top:${props => props.top || 0};
       right:${props => props.right || 0};
    }
    &:hover{
      cursor:pointer;
    }
    
  }
  .active {
    display:flex;
    align-items:center ;
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
const Arrow = styled.div`
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
 
color:${(props) => props.color || '#BDBDBD'};  
 `;

//  interface semiProps{
//   title?:string;
//   isActiveSelect?:boolean;
//   setIsActiveSelect:(isActiveSelect: boolean) => void; 
//   selected?:string;
//   selectedOption:(isActiveSelect: string) => void; 
//   options:string[];
//   background?:string;
//   boxShadow?:string;
//   color?:string;
//   flexDirection?:string;
//  }

const Select = (props: any) => {
  const { closeAllSelect } = useContext(Context);


  return (
    <Dropdown {...props}>
      <Title {...props}>{props.title} </Title>
      <div className={props.isActiveSelect ? "dropdown-btn active" : 'dropdown-btn'}
        onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation();
        closeAllSelect()
        props.setIsActiveSelect(!props.isActiveSelect)
      }}>
        <span>{props.selected}</span>
        <Arrow >
          <img src={arrow} alt="Arrow"></img>
        </Arrow>
      </div>
      {props.isActiveSelect &&
        <div className="dropdown-content">
          {props.options.map((option: string) =>
            <div key={option} className="dropdown-item" onClick={(e) => {
              props.selectedOption((e.target as HTMLElement).textContent)
              // closeAllSelect()
              props.setIsActiveSelect(!props.isActiveSelect)
              {props.filterForPrice&&props.filterForPrice((e.target as HTMLElement).textContent)}
            }}>{option}
            </div>)}
        </div>}

    </Dropdown>
  );
};
export default Select;
