import React, { useState, useEffect } from "react";
import CardResultTile from "../components/result/CardResultTile"
import styled from "styled-components";
import { useAppSelector } from "../redux/hooks";
import Button from "./Button";
import ContentContainer from "./ContentContainer";
import FlexContainer from "./FlexContainer";

const Window = styled.div`
 
  display: flex;
  height: 100%;
  width: 100%;
  overflow: hidden;
 `
 const APC = styled.div`
 
 height: 100%;
 display: flex;
 gap: 90px;
 transition: translate;
 transition-property: transform;
 transition-duration: 300ms;
 transition-timing-function: ease-in-out;
}
 
 `
 const BlockItem = styled.div`

  position: relative;
display:flex;
width:370px;
height:650px;
padding:40px;

 `
 const  ButtonSlider = styled.div`
 position:relative;
display:flex;
width:40px;
height:40px;
border: 1px solid #664EF9;
background:inherit;
border-radius:50%;
&:hover{
  background:rgba(102, 78, 249, 0.1);
};
cursor:pointer;
`
const RightArrov =   styled.div`
position:absolute;
width:11px;
height:11px;
border-top: 2px solid #664EF9;
border-right: 2px solid #664EF9;
top: 37%;
    left: 30%;
    transform: rotate(45deg)
`
const LeftArrov =   styled.div`
position:absolute;
width:11px;
height:11px;
border-top: 2px solid #664EF9;
border-right: 2px solid #664EF9;
top: 37%;
    left: 41%;
    transform: rotate(225deg)
`
// import Checked from "./Checked";
const PAGE_WIDTH = 1380
// const maxOffset = -900
const Slider = () => {
  const photos = useAppSelector((state: any) => state.baseFlat.flat);
  const [offset, setOffset] = useState(0);
  const [maxOffset, setMaxOffset] = useState(0);
  useEffect(() => {
    setMaxOffset(-(PAGE_WIDTH * (Math.ceil(photos.length / 3) - 1)));
  }, [photos]);

  const right = () => {
    setOffset((prev) => {

      const newOffset = prev - PAGE_WIDTH
      return Math.max(newOffset, maxOffset);
    });
  };
  const left = () => {
    setOffset((prev) => {
      const newOffset = prev + PAGE_WIDTH
      const minOffset = 0;
      return Math.min(newOffset, minOffset);
    });
  };
 
  
  return (
    
      <ContentContainer flexDirection='column' justifyContent='center' padding='0'>
        

        <ContentContainer width='1380px' height='675px' padding='0 80'> 
          <Window>
            <APC
              style={{ transform: `translateX(${offset}px)` }}
            >
              {photos.map((item: any) => (
                <BlockItem key={item.id}>
                  
                  <CardResultTile flat={item} top='-240px'></CardResultTile> 
                 
                </BlockItem>
              ))}
            </APC>
          </Window>
        </ContentContainer>
        <FlexContainer gap='20px'> {photos.length > 3 && (
         <ButtonSlider onClick={() => {
          left();
        }}> <LeftArrov></LeftArrov>   </ButtonSlider>
        )}
        
        
        {photos.length > 3 && (
          <ButtonSlider onClick={() => {
            right();
          }}> <RightArrov></RightArrov>   </ButtonSlider>
        )}</FlexContainer>
       
      </ContentContainer>
    
  );
};

export default Slider;