import React from "react";
import { ButtonSlider } from "../../../../share/modules/Slider/Slider";
import ContentContainer from "../../../../UI/ContentContainer";
import FlexContainer from "../../../../UI/FlexContainer";
import { ButtonRightArrow, IMG, IMGBlock, TextBlock } from "./MenuSectionStyle";
import Flat from "../../../../../assets/icon/Flat.png";
import { cityArr } from "../../../../../redux/flatCreater";
import { home, popular } from "../../constant";
import { useAppSelector } from "../../../../../redux/hooks";
import car from "../../../../../assets/icon/car.png";
import house from "../../../../../assets/icon/house.png";
import bane from "../../../../../assets/icon/bane.png";
import { flatModel, stateModel } from "../../../../../redux/types";
export default function MenuSection({ showFlatInCity }: any) {
  const flats = useAppSelector((state: stateModel) => state.baseFlat.flat);

  return (
    <ContentContainer margin="0">
      <FlexContainer width="100%" margin={"90px 0"} gap="20px">
        <IMGBlock>
          <IMG backgroundImage={Flat} width={"516px"} height={"270px"}>
            <p>Снять квартиру</p>
            <h3 className={"h3"}>Квартиры на сутки</h3>
            <FlexContainer justifyContent="flex-start" gap="10px" margin={"37px"} flexWrap="wrap">
              {cityArr.map((item: string) => (
                <div
                  className={"button"}
                  onClick={() => {
                    showFlatInCity(item);
                  }}
                  key={item}
                >
                  {item}
                </div>
              ))}
            </FlexContainer>
          </IMG>
          <IMG backgroundImage={house} width={"407px"} height={"270px"}>
            <p>Снять коттедж на праздник</p>
            <h3 className={"h3"}>Котеджы и усадьбы</h3>
            <ButtonSlider
              className={"homeSlider"}
              border="1px solid #ffffff"
              position={"absolute"}
              top={"78%"}
              left={"85%"}
            >
              <ButtonRightArrow className="rightArrow"></ButtonRightArrow>{" "}
            </ButtonSlider>
          </IMG>
          <IMG backgroundImage={bane} width={"407px"} height={"270px"}>
            <p>попариться в бане с друзьями</p>
            <h3 className={"h3"}>Бани и сауны</h3>
            <ButtonSlider
              className={"homeSlider"}
              border="1px solid #ffffff"
              position={"absolute"}
              top={"78%"}
              left={"85%"}
            >
              <ButtonRightArrow className="rightArrow"></ButtonRightArrow>{" "}
            </ButtonSlider>
          </IMG>
          <IMG backgroundImage={car} width={"516px"} height={"270px"}>
            <p>Если срочно нужна машина</p>
            <h3 className={"h3"}>Авто на прокат</h3>
            <ButtonSlider
              className={"homeSlider"}
              border="1px solid #ffffff"
              position={"absolute"}
              top={"78%"}
              left={"85%"}
            >
              <ButtonRightArrow className="rightArrow"></ButtonRightArrow>{" "}
            </ButtonSlider>
          </IMG>
        </IMGBlock>
        <TextBlock>
          <ul>
            <li>
              <p>{"Квартиры"}</p>
            </li>
            {cityArr.map((item: string, index: number) => (
              <li
                key={index}
                onClick={() => {
                  showFlatInCity(item);
                }}
              >
                <p>Квартиры в {item}</p>
                <span>{flats.filter((flat: flatModel) => item === flat.city).length}</span>
              </li>
            ))}
          </ul>
          <ul>
            <li>
              <p>{"Коттеджи и усадьбы"}</p>
            </li>
            {home.map((item, index) => (
              <li key={index}>
                <p>{item}</p>123
              </li>
            ))}
          </ul>
          <ul>
            {popular.map((item: string, index) => (
              <li key={index}>
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </TextBlock>
      </FlexContainer>
    </ContentContainer>
  );
}
