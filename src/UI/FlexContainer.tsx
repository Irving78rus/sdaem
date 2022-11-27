import React from "react";
import styled  from "styled-components";
interface  Props {
  justifyContent?:any;
  alignItems?:any;
  gap?:any;
  flexDirection?:any;
  width?:any;
  height?:any;
}
const FlexContainerStl = styled.div<Props>`
  display:flex;
  justify-content:${props=>props.justifyContent||'space-between'};
  align-items:${props=>props.alignItems||'center'};
  gap:${props=>props.gap||'0px'};
  flex-direction:${props=>props.flexDirection||'row'};
  width:${props=>props.width||"100%"};
  height:${props=>props.height||"100%"};
`
 
const FlexContainer  = (props:any) => {
  return <FlexContainerStl {...props} />;
};
export default FlexContainer; 