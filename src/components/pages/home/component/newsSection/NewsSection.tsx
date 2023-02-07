import React from "react";
import { NavLink } from "react-router-dom";
import Flat from "../../../../../assets/icon/Flat.png";
import { RightArrow } from "../../../../share/modules/FormSearch/FormSearchStyle";
import ContentContainer from "../../../../UI/ContentContainer";
import Dots from "../../../../UI/Dots";
import FlexContainer from "../../../../UI/FlexContainer";
import { Line } from "../../../../UI/Line";
import {
  BottomLastBlock,
  IMG,
  LeftBlock,
  RightBlock,
  ShowAllStl,
  SubTitle,
} from "./NewsSectionStyle";

export default function NewsSection() {
  return (
    <BottomLastBlock>
      <ContentContainer
        width={"100%"}
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <FlexContainer width={"90%"} height={"50px"} justifyContent="flex-end">
          <Dots fill="#FFD54F" position="static"></Dots>{" "}
        </FlexContainer>
        <SubTitle>ЧТО ТАКОЕ SDAEM.BY </SubTitle>

        <FlexContainer width={"100%"}>
          <LeftBlock>
            <h3> Квартира на сутки в Минске</h3>
            <FlexContainer gap={"20px"} alignItems="flex-start" margin="0 0 30px 0">
              <IMG backgroundImage={Flat} width={"50%"} height={"270px"} borderRadius="20px"></IMG>
              <p style={{ width: "50%" }}>
                <span> Нужна квартира на сутки в Минске?</span> <br />
                На веб-сайте sdaem.by вас ждет масса выгодных предложений. Каталог насчитывает{" "}
                <span>более 500 квартир.</span> Благодаря удобной навигации вы быстро найдете
                подходящий вариант.
                <br />
                <br />В каталоге представлены комфортабельные однокомнатные квартиры на сутки и
                квартиры с большим количеством комнат в разных районах города, с различной степенью
                удобства от дешевых до VIP с джакузи.
              </p>
            </FlexContainer>
            <p>
              Чтобы снять квартиру на сутки в Минске, вам достаточно определиться с выбором и
              связаться с владельцем для уточнения условий аренды и заключить договор. Заметим, на
              сайте представлены исключительно квартиры на сутки без посредников, что избавляет
              посетителей от необходимости взаимодействовать с агентствами, тратя свое время и
              деньги. Также пользователи сайта могут совершенно бесплатно размещать объявления о
              готовности сдать квартиру на сутки.
            </p>
          </LeftBlock>
          <RightBlock>
            <h2>Новости</h2>
            <NavLink to="News/New">Линия Сталина: суровый отдых в усадьбах на сутки</NavLink>
            <span>14 Январь</span>
            <Line> </Line>
            <NavLink to="News/New">Линия Сталина: суровый отдых в усадьбах на сутки</NavLink>
            <span>14 Январь</span>
            <Line> </Line>
            <NavLink to="News/New">Линия Сталина: суровый отдых в усадьбах на сутки</NavLink>
            <span>14 Январь</span>
            <Line> </Line>
            <NavLink to="News/New">Линия Сталина: суровый отдых в усадьбах на сутки</NavLink>
            <span>14 Январь</span>
            <Line> </Line>
            <NavLink to="News/New">Линия Сталина: суровый отдых в усадьбах на сутки</NavLink>
            <span>14 Январь</span>
            <ShowAllStl>
              {" "}
              <FlexContainer justifyContent="flex-start">
                <NavLink to="News">{"Посмотреть все "} </NavLink>
                <RightArrow background="#664ef9"></RightArrow>
              </FlexContainer>
            </ShowAllStl>
          </RightBlock>
        </FlexContainer>
      </ContentContainer>
    </BottomLastBlock>
  );
}
