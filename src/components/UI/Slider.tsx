import React, { useState, useEffect } from "react";
import CardResultTile from "../result/CardResultTile";
import styled from "styled-components";
import ContentContainer from "./ContentContainer";
import FlexContainer from "./FlexContainer";
import { useAppSelector } from "../../redux/hooks";
import { stateModel } from "../../redux/types";
interface Props {
  margin?: any;
}
const Window = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  overflow: hidden;
  justify-content: flex-start;
`;
const APC = styled.div`
  height: 100%;
 display: flex;
  transition: translate;
 transition-property: transform;
 transition-duration: 300ms;
 transition-timing-function: ease-in-out;
}
 
 `;
const BlockItem = styled.div<Props>`
  position: relative;
  display: flex;
  width: 407px;
  height: 575px;
  margin: ${(props) => props.margin || "0 21px"};
  .sliderImg {
    width: 407px;
    height: 250px;
  }
`;
const ButtonSlider = styled.div`
  &.homeSlider2 {
    position: relative;
    display: flex;
    width: 29px;
    height: 29px;
    background: rgba(255, 255, 255, 0.4);
    border-radius: 50%;
    &:hover {
      background: rgba(102, 78, 249, 0.1);
    }
    .leftArrow {
      border-top: 2px solid #ffffff;
      border-right: 2px solid #ffffff;
      width: 9px;
      height: 9px;
    }
    .rightArrow {
      border-top: 2px solid #ffffff;
      border-right: 2px solid #ffffff;
      width: 9px;
      height: 9px;
    }
  }
  &.homeSlider {
    position: relative;
    display: flex;
    width: 40px;
    height: 40px;
    border: 1px solid #664ef9;
    background: inherit;
    border-radius: 50%;
    &:hover {
      background: rgba(102, 78, 249, 0.1);
    }
  }

  cursor: pointer;
`;
const RightArrow = styled.div`
  position: absolute;
  width: 11px;
  height: 11px;
  border-top: 2px solid #664ef9;
  border-right: 2px solid #664ef9;
  top: 37%;
  left: 30%;
  transform: rotate(45deg);
`;
const LeftArrow = styled.div`
  position: absolute;
  width: 11px;
  height: 11px;
  border-top: 2px solid #664ef9;
  border-right: 2px solid #664ef9;
  top: 37%;
  left: 41%;
  transform: rotate(225deg);
`;

const Slider = ({
  photos,
  content = false,
  width,
  height,
  CardResultImg,
  margin,
  PAGE_WIDTH,
  position,
  widthButton,
  top,
}: any) => {
  const [offset, setOffset] = useState(0);
  const [maxOffset, setMaxOffset] = useState(0);
  const [rightNumber, setRightNumber] = useState(4);
  const [res, setRes] = useState([photos.slice(0, 3)]);

  useEffect(() => {
    setRes(photos.slice(0, rightNumber));
  }, [rightNumber, photos]);

  useEffect(() => {
    setMaxOffset(-(PAGE_WIDTH * (Math.ceil(photos.length / 3) - 1)));
  }, [photos]);

  const right = () => {
    if (photos.length > rightNumber) {
      setRightNumber((prev) => prev + 1);
    }
    setOffset((prev) => {
      const newOffset = prev - PAGE_WIDTH / 3;
      return Math.max(newOffset, maxOffset);
    });
  };

  const left = () => {
    setOffset((prev) => {
      const newOffset = prev + PAGE_WIDTH / 3;
      const minOffset = 0;
      return Math.min(newOffset, minOffset);
    });
  };
  const favoriteFlats = useAppSelector((state: stateModel) => state.baseFlat.favoriteFlats);
  return (
    <ContentContainer flexDirection="column" justifyContent="center" padding="0">
      <ContentContainer width={width} height={!content ? "250px" : height} padding="0">
        <Window>
          <APC style={{ transform: `translateX(${offset}px)` }}>
            {res.map((item: any, index: any) => (
              <BlockItem key={index} margin={margin}>
                {content && <CardResultTile flat={item} top="-240px" favoriteFlats={favoriteFlats}></CardResultTile>}
                {!content && <img className="sliderImg" src={CardResultImg} alt="cartImage" />}
              </BlockItem>
            ))}
          </APC>
        </Window>
      </ContentContainer>
      <FlexContainer gap="20px" position={position} width={widthButton} top={top}>
        {photos.length > 3 && (
          <ButtonSlider
            className={position === "absolute" ? "homeSlider2" : "homeSlider"}
            onClick={() => {
              left();
            }}
          >
            <LeftArrow className="leftArrow"></LeftArrow>{" "}
          </ButtonSlider>
        )}
        {photos.length > 3 && (
          <ButtonSlider
            className={position === "absolute" ? "homeSlider2" : "homeSlider"}
            onClick={() => {
              right();
            }}
          >
            <RightArrow className="rightArrow"></RightArrow>{" "}
          </ButtonSlider>
        )}
      </FlexContainer>
    </ContentContainer>
  );
};

export default Slider;
