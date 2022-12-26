import React from "react";
import styled  from "styled-components";
interface  Props {
  justifyContent?:any;
  alignItems?:any;
  gap?:any;
  flexDirection?:any;
  width?:any;
  height?:any;
  flexWrap?:any;
  backgroundColor?:any;
  margin?:any;
  position?:any;
  top?:any;
  padding?:any;
  borderRight?:any;
}
const FlexContainerStl = styled.div<Props>`
  display:flex;
  justify-content:${props=>props.justifyContent||'space-between'};
  align-items:${props=>props.alignItems||'center'};
  gap:${props=>props.gap||'0px'};
  flex-direction:${props=>props.flexDirection||'row'};
  width:${props=>props.width||""};
  height:${props=>props.height||""};
  flex-wrap:${props=>props.flexWrap||""}; 
  background-color: ${props=>props.backgroundColor||""}; 
  margin: ${props=>props.margin||""}; 
  position: ${props=>props.position||"relative"};
  top:${props=>props.top||0};
  padding: ${props=>props.padding||""}; 
  border-right: ${props=>props. borderRight||""};
   
`

const FlexContainer  = (props:any) => {
  return <FlexContainerStl {...props} />;
};
export default FlexContainer; 