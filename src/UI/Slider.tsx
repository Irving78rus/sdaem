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
  console.log(photos);
  
  return (
    
      <ContentContainer flexDirection='column' justifyContent='center' padding='0'>
        

        <ContentContainer width='1380px' height='675px' padding='0 80'> 
          <Window>
            <APC
              style={{ transform: `translateX(${offset}px)` }}
            >
              {photos.map((item: any) => (
                <BlockItem key={item.id}>
                  <> {console.log(item)      }
                  <CardResultTile flat={item} top='-240px'></CardResultTile></>
                 
                </BlockItem>
              ))}
            </APC>
          </Window>
        </ContentContainer>
        <FlexContainer> {photos.length > 3 && (
          <Button
             
            onClick={() => {
              left();
            }}
          >{`<`}</Button>
        )}
        {photos.length > 3 && (
          <Button
             
            onClick={() => {
              right();
            }}
          >{`>`}</Button>
        )}</FlexContainer>
       
      </ContentContainer>
    
  );
};

export default Slider;