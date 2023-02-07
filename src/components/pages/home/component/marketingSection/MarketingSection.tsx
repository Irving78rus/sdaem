import React from "react";
import IconMap from "../../../../../assets/icon/IconMap";
import Button from "../../../../UI/Button";
import ContentContainer from "../../../../UI/ContentContainer";
import Dots from "../../../../UI/Dots";
import FlexContainer from "../../../../UI/FlexContainer";
import {
  Background,
  BackgroundImg,
  CardGold,
  IMG,
  MainBottomCard,
  SearchToMapBlock,
} from "./MarketingSectionStyle";
import CardBackGround from "../../../../../assets/icon/CardBackGround.svg";
import list from "../../../../../assets/icon/list.svg";
import hand from "../../../../../assets/icon/handle.svg";
import { RightArrow } from "../../../../share/modules/FormSearch/FormSearchStyle";
 
export default function MarketingSection() {
  return (
    <Background borderBottomLeftRadius="0" borderBottomRightRadius="0" margin="0">
      <BackgroundImg>
        <ContentContainer justifyContent="center" flexDirection="column" alignItems="center">
          <Dots right="140px" top="46px" fill="white"></Dots>
          <SearchToMapBlock>
            <h1>Поиск квартир на карте</h1>
            <p>Ищите квартиры на сутки в центре города, возле парка или в живописном районе</p>
            <Button background="white" color="black" fontWeight="600" colorHover="#FEC100">
              <IconMap fill="#FFD54F"></IconMap> Открыть карту
            </Button>
          </SearchToMapBlock>

          <FlexContainer gap="20px" position="absolute" top="325px">
            <MainBottomCard>
              <FlexContainer gap="24px">
                <IMG
                  backgroundImage={hand}
                  width={"100px"}
                  height={"100px"}
                  borderRadius="50%"
                  boxShadow="0px 11px 20px rgba(127, 155, 187, 0.16)"
                ></IMG>

                <h4>Начните привлекать клиентов бесплатно!</h4>
              </FlexContainer>
              <p>
                Пройдя простую регистрацию на сайте у Вас появится личный кабинет, в котором
                возможно бесплатно создавать и публиковать объявления на сайте.{" "}
              </p>

              <Button
                background={"#FFD54F"}
                height={"30px"}
                color={"black"}
                fontWeight="700"
                margin="34px 0 0 0"
              >
                + Разместить объявление
              </Button>
            </MainBottomCard>
            <MainBottomCard>
              <FlexContainer gap="20px">
                <IMG
                  backgroundImage={list}
                  width={"100px"}
                  height={"100px"}
                  borderRadius="50%"
                  boxShadow="0px 11px 20px rgba(127, 155, 187, 0.16)"
                ></IMG>

                <h4>Начните привлекать клиентов бесплатно!</h4>
              </FlexContainer>
              <p>
                Пройдя простую регистрацию на сайте у Вас появится личный кабинет, в котором
                возможно бесплатно создавать и публиковать объявления на сайте.{" "}
              </p>

              <Button
                background={"#FFD54F"}
                height={"30px"}
                color={"black"}
                fontWeight="700"
                margin="34px 0 0 0"
              >
                Узнать стоимость услуги <RightArrow background='Black'></RightArrow>
              </Button>
            </MainBottomCard>
            <CardGold>
              <img src={CardBackGround} alt="CardBackGround"></img>
              <div className="title">Приоритет Gold </div>
              <div className="wrapper">
                {" "}
                <p>
                  Приоритетное размещение Gold позволяет закрепить ваше объявление в верхней части
                  каталога!
                </p>
                <p>
                  Gold объявления перемещаются каждые 5 мин на 1 позицию, что делает размещение
                  одинаковым для всех.
                </p>
                <Button
                  margin="30px 0 0 0"
                  background={"linear-gradient(270deg, #7E6AF3 0%, #6540CD 100%)"}
                  height={"30px"}
                  color={"white"}
                >
                  Еще о тарифе Gold <RightArrow background='White'></RightArrow>
                </Button>
              </div>
            </CardGold>
          </FlexContainer>
        </ContentContainer>
      </BackgroundImg>
    </Background>
  );
}
