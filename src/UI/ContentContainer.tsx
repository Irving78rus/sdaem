import React from "react";
import styled  from "styled-components";
interface  Props {
  height:any;
  margin:any;
  justifyContent:any;
  flexDirection:any;
  width:any;
  alignItems:any;
  position?:any;
  padding?:any
}
const ContentContainerStl = styled.div<Props>`
display: flex;
justify-content:${props=>props.justifyContent||'space-between'} ; 
align-items: ${props=>props.alignItems||'center'} ;
padding:${props=>props.padding||'0 80px;'} ; 
margin: ${props=>props.margin||'0 auto'} ;
width:  ${props=>props.width||''} ;
height: ${props=>props.height||''} ;
flex-direction: ${props=>props.flexDirection||'row'} ;
position: ${props=>props.position||"relative"};;
`
 
const ContentContainer  = (props:any) => {
  return <ContentContainerStl {...props} />;
};
export default ContentContainer; 