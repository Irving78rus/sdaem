import React from "react";
import styled  from "styled-components";
interface  Props {
  height:any;
  margin:any;
}
const ContentContainerStl = styled.div<Props>`
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 80px;
margin: ${props=>props.margin||'0 auto'} ;
max-width: 1440px;
height: ${props=>props.height||'100%'} ;
`
 
const ContentContainer  = (props:any) => {
  return <ContentContainerStl {...props} />;
};
export default ContentContainer; 