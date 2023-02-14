import React from "react";
import styled  from "styled-components";
interface  Props {
  justifyContent?:string;
  alignItems?:string;
  gap?:string;
  flexDirection?:string;
  width?:string;
  height?:string;
  flexWrap?:string;
  backgroundColor?:string;
  margin?:string;
  position?:string;
  top?:string;
  right?:string;
  padding?:string;
  borderRight?:string;
  borderRadius?:string;
  borderBottom?:string;
  borderTop?:string;
  maxWidth?:string;
  zIndex?:string;
}
const FlexContainerStl = styled.div<Props>`
  display:flex;
  justify-content:${props=>props.justifyContent||'space-between'};
  align-items:${props=>props.alignItems||'center'};
  gap:${props=>props.gap||'0px'};
  flex-direction:${props=>props.flexDirection||'row'};
  width:${props=>props.width||""};
  max-width:${props=>props.maxWidth||""};
  height:${props=>props.height||""};
  flex-wrap:${props=>props.flexWrap||""}; 
  z-index:${props=>props.zIndex||""}; 
  background-color: ${props=>props.backgroundColor||""}; 
  margin: ${props=>props.margin||""}; 
  position: ${props=>props.position||"relative"};
  top:${props=>props.top||''};
  right:${props=>props.right||''};
  padding: ${props=>props.padding||""}; 
  border-right: ${props=>props.borderRight||""};
  border-radius: ${props=>props.borderRadius||""}; 
  border-bottom: ${props=>props.borderBottom||""}; 
  border-top: ${props=>props.borderTop||""};  
`
const FlexContainer  = (props:any) => {
  return <FlexContainerStl {...props} />;
};
export default FlexContainer; 