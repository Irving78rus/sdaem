import React, { useContext, useState } from "react";
 
import car from "../../../assets/icon/car.png";
import Flat from "../../../assets/icon/Flat.png";
import hand from "../../../assets/icon/handle.svg";
import list from "../../../assets/icon/list.svg";
import CardBackGround from "../../../assets/icon/CardBackGround.svg";
import house from "../../../assets/icon/house.png";
import bane from "../../../assets/icon/bane.png";
import ContentContainer from "../../UI/ContentContainer";
import FlexContainer from "../../UI/FlexContainer";
import Button from "../../UI/Button";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { getFilterFlats } from "../../../redux/baseFlat";
import FormSearch from "../../share/modules/FormSearch/FormSearch";
import Select from "../../UI/Select";
import { Line } from "../../UI/Line";
import Slider, { ButtonSlider } from "../../share/modules/Slider/Slider";
import {
  Background,
  BackgroundImg,
  BottomLastBlock,
  BottomNav,
  CardGold,
  CardList,
  IMG,
  IMGBlock,
  TotalFlat,
  LeftBlock,
  MainBottomCard,
  RightBlock,
  SearchToMapBlock,
  ShowAllStl,
  SubTitle,
  TextBlock,
  Title,
  UnderSlider,
  WrapperBackground,
  WrapperFilter,
} from "./HomeStyle";
import { GetListUniqueItems } from "../../share/hooks";
import { NavLink, useNavigate } from "react-router-dom";
import { cityArr } from "../../../redux/flatCreater";
import { VerticalLine } from "../../UI/VerticalLine";
import Dots from "../../UI/Dots";
import { Context } from "../../../redux/context";
import { RightArrow } from "./HomeStyle";
import { flatModel, stateModel, topNavigationFormSearchModel } from "../../../redux/types";
import IconMap from "../../../assets/icon/IconMap";
import styled from "styled-components";
export const ButtonRightArrow = styled.div`
  position: absolute;
  width: 11px;
  height: 11px;
  border-top: 2px solid #ffffff;
  border-right: 2px solid #ffffff;
  top: 37%;
  left: 30%;
  transform: rotate(45deg);
`;
export default function Home() {
  const params = useAppSelector((state: stateModel) => state.baseFlat.params);
  const [isActiveFieldsFormSearch, setIsActiveFieldsFormSearch] = useState<number>(0);
  const { closeAllSelect,
    metro, setMetro,
    district, setDistrict,
    isActiveSelectMetro, setIsActiveSelectMetro,
    isActiveSelectDistrict, setIsActiveSelectDistrict,
  } = useContext(Context);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const flats = useAppSelector((state: stateModel) => state.baseFlat.flat);
  const topNavigationFormSearch = useAppSelector((state: stateModel) => state.baseFlat.topNavigationFormSearch);
  const showFlatInCity = (item: string) => {
    dispatch(getFilterFlats({
      city: item, upPrice: 0, toPrice: 0, rooms: 0, metro: '', district: '', sleepingPlaces: 0, GasStove: false, Oven: false,
      CoffeeMaker: false, MicrowaveOven: false, Dishes: false, Dishwasher: false
    }));
    navigate("/Result")
  }

  const home = [
    "Котеджи и усадьбы",
    "Квартиры в Могилеве",
    "Квартиры в Могилеве",
    "Квартиры в Могилеве",
  ];
  const popular = [
    "Популярные направления",
    "Коттеджи и усадьбы на о. Брасласких ",
    "Коттеджи и усадьбы (жилье) на Нарочи",
    "Коттеджи и усадьбы (жилье) у воды",
  ];


  const uniqueMetro = GetListUniqueItems('metro')
  const uniqueDistrict = GetListUniqueItems('district')
  return (
    <>
      <Background onClick={() => closeAllSelect()}>
        <BackgroundImg onClick={() => closeAllSelect()}>
          <ContentContainer justifyContent="center" flexDirection="column" padding="0 120px">
            <h1 style={{ margin: '80px 0 50px 0' }}>
              Sdaem.by - у нас живут <span>ваши объявления</span>
            </h1>
            <FlexContainer flexDirection="column" alignItems="flex-start" width="100%">
              <BottomNav>
                {topNavigationFormSearch.map((item: topNavigationFormSearchModel) => (
                  <li
                    key={item.id}
                    className={isActiveFieldsFormSearch === item.id ? "link active" : "link"}
                    onClick={() => {
                      setIsActiveFieldsFormSearch(item.id);
                    }}
                  >
                    {item.title}
                  </li>
                ))}
              </BottomNav>
              <FormSearch
                map={true}
                clearButton={false}
                backgroundColor="white"
                flexDirection="column"
                alignItems="flex-start"
              ></FormSearch>
            </FlexContainer>
          </ContentContainer>
        </BackgroundImg>
      </Background>
      <ContentContainer margin="0">
        <FlexContainer width="100%" margin={"90px 0"} gap="20px">
          <IMGBlock>
            <IMG backgroundImage={Flat} width={"516px"} height={"270px"}>
              <p>Снять квартиру</p>
              <h3 className={"h3"}>Квартиры на сутки</h3>
              <FlexContainer justifyContent="flex-start" gap="10px" margin={"37px"} flexWrap='wrap'>
                {cityArr.map((item: string) => <div className={"button"}
                  onClick={() => { showFlatInCity(item) }}
                  key={item}
                >{item}</div>)}

              </FlexContainer>
            </IMG>
            <IMG backgroundImage={house} width={"407px"} height={"270px"}>
              <p>Снять коттедж на праздник</p>
              <h3 className={"h3"}>Котеджы и усадьбы</h3>
              <ButtonSlider
                className={"homeSlider"}
                border='1px solid #ffffff'
                position={'absolute'}
                top={'78%'}
                left={'85%'}
              >
                <ButtonRightArrow className="rightArrow"></ButtonRightArrow>{" "}
              </ButtonSlider>
            </IMG>
            <IMG backgroundImage={bane} width={"407px"} height={"270px"}>
              <p>попариться в бане с друзьями</p>
              <h3 className={"h3"}>Бани и сауны</h3>
              <ButtonSlider
                className={"homeSlider"}
                border='1px solid #ffffff'
                position={'absolute'}
                top={'78%'}
                left={'85%'}
              >
                <ButtonRightArrow className="rightArrow"></ButtonRightArrow>{" "}
              </ButtonSlider>
            </IMG>
            <IMG backgroundImage={car} width={"516px"} height={"270px"}>
              <p>Если срочно нужна машина</p>
              <h3 className={"h3"}>Авто на прокат</h3>
              <ButtonSlider
                className={"homeSlider"}
                border='1px solid #ffffff'
                position={'absolute'}
                top={'78%'}
                left={'85%'}
              >
                <ButtonRightArrow className="rightArrow"></ButtonRightArrow>{" "}
              </ButtonSlider>
            </IMG>
          </IMGBlock>
          <TextBlock>
            <ul>
              <li >
                <p>{"Квартиры"}</p>{flats.length}
              </li>
              {cityArr.map((item: string, index: number) => (
                <li key={index}>
                  <p>Квартиры в {item}</p><span>{flats.filter((flat: flatModel) => item === flat.city).length}</span>
                </li>
              ))}
            </ul>
            <ul>
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
      <CardList>
        <FlexContainer
          width="100%"
          flexDirection="column"
          alignItems="flex-start"
          padding={"0 80px"}
         >
          <SubTitle>Квартиры на сутки </SubTitle>
          <FlexContainer width="100%">
            <h3 className="subTitle"> Aренда квартир в {params.city}</h3>
            <WrapperFilter>
              <FlexContainer>
                <Select background={'#FFFFFF'} boxShadow={'0px 5px 20px rgba(0, 96, 206, 0.1)'}
                  options={uniqueMetro} selected={metro || 'Метро'} selectedOption={setMetro}
                  isActiveSelect={isActiveSelectMetro} setIsActiveSelect={setIsActiveSelectMetro} />
                <Select background={'#FFFFFF'} boxShadow={'0px 5px 20px rgba(0, 96, 206, 0.1)'}
                  options={uniqueDistrict} selected={district || 'Район'} selectedOption={setDistrict}
                  isActiveSelect={isActiveSelectDistrict} setIsActiveSelect={setIsActiveSelectDistrict} />
              </FlexContainer>
              <WrapperBackground></WrapperBackground>
            </WrapperFilter>
          </FlexContainer>

          <FlexContainer margin='30px auto 0 auto'>
            <Slider photos={flats} position='static' content={true} PAGE_WIDTH='1347'
              width='1347px' height={'615px'} style={{ marginTop: '30px' }}>
            </Slider>
          </FlexContainer>

          <UnderSlider>
            <TotalFlat>
              <FlexContainer alignItems='center'><p>341 <span>+</span>  </p></FlexContainer>
              <Title>Предложений по Минску</Title>
            </TotalFlat>
            <VerticalLine></VerticalLine>
            <Button boxShadow='0px 15px 40px rgba(0, 96, 206, 0.15)'
              backgroundHover='linear-gradient(90deg, #867CFC 0%, #6929F3 94.5%)'>
              Посмотреть все <RightArrow background='white'></RightArrow> </Button>
          </UnderSlider>

        </FlexContainer>
      </CardList>
      <Background borderBottomLeftRadius="0" borderBottomRightRadius="0" margin="0">
        <BackgroundImg>

          <ContentContainer justifyContent="center" flexDirection="column" alignItems="center">
            <Dots right='140px' top='46px' fill='white'></Dots>
            <SearchToMapBlock>
              <h1>Поиск квартир на карте</h1>
              <p>
                Ищите квартиры на сутки в центре города, возле парка или в живописном районе
              </p>
              <Button background="white" color="black" fontWeight='600' colorHover='#FEC100'>
                <IconMap fill='#FFD54F'></IconMap> Открыть карту
              </Button>
            </SearchToMapBlock>

            <FlexContainer gap="20px" position="absolute" top="325px">
              <MainBottomCard>
                <FlexContainer gap="24px">
                  <IMG backgroundImage={hand} width={"100px"} height={"100px"} borderRadius="50%" boxShadow='0px 11px 20px rgba(127, 155, 187, 0.16)'></IMG>

                  <h4>Начните привлекать клиентов бесплатно!</h4>
                </FlexContainer>
                <p>
                  Пройдя простую регистрацию на сайте у Вас появится личный кабинет, в котором
                  возможно бесплатно создавать и публиковать объявления на сайте.{" "}
                </p>

                <Button background={"#FFD54F"} height={"30px"} color={"black"} fontWeight='700' margin="34px 0 0 0">
                  + Разместить объявление
                </Button>
              </MainBottomCard>
              <MainBottomCard>
                <FlexContainer gap="20px">
                  <IMG backgroundImage={list} width={"100px"} height={"100px"} borderRadius="50%" boxShadow='0px 11px 20px rgba(127, 155, 187, 0.16)'></IMG>

                  <h4>Начните привлекать клиентов бесплатно!</h4>
                </FlexContainer>
                <p>
                  Пройдя простую регистрацию на сайте у Вас появится личный кабинет, в котором
                  возможно бесплатно создавать и публиковать объявления на сайте.{" "}
                </p>

                <Button background={"#FFD54F"} height={"30px"} color={"black"} fontWeight='700' margin="34px 0 0 0">
                  Узнать стоимость услуги {`>`}
                </Button>
              </MainBottomCard>
              <CardGold>
                <img src={CardBackGround} alt='CardBackGround'></img>
                <div className="title">Приоритет Gold </div>
                <div className="wrapper"> <p>
                  Приоритетное размещение Gold позволяет закрепить ваше объявление в верхней части каталога!
                </p>
                  <p>
                    Gold объявления перемещаются каждые 5 мин на 1 позицию, что делает размещение одинаковым для всех.
                  </p>

                  <Button margin='30px 0 0 0' background={'linear-gradient(270deg, #7E6AF3 0%, #6540CD 100%)'} height={"30px"} color={"white"}>
                    Еще о тарифе Gold
                  </Button></div>

              </CardGold>
            </FlexContainer>
          </ContentContainer>
        </BackgroundImg>
      </Background>
      <BottomLastBlock>
        <ContentContainer
          width={"100%"}
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <FlexContainer width={"90%"} height={'50px'} justifyContent='flex-end' >
            <Dots fill='#FFD54F' position='static'></Dots> </FlexContainer>
          <SubTitle>ЧТО ТАКОЕ SDAEM.BY </SubTitle>

          <FlexContainer width={"100%"}>
            <LeftBlock>
              <h3> Квартира на сутки в Минске</h3>
              <FlexContainer gap={"20px"} alignItems="flex-start" margin="0 0 30px 0" >
                <IMG backgroundImage={Flat} width={"50%"} height={"270px"} borderRadius='20px'></IMG>
                <p style={{ width: "50%" }}>
                  <span> Нужна квартира на сутки в Минске?</span> <br />
                  На веб-сайте sdaem.by вас ждет масса выгодных предложений. Каталог насчитывает{" "}
                  <span>более 500 квартир.</span> Благодаря удобной навигации вы быстро найдете
                  подходящий вариант.
                  <br />
                  <br />В каталоге представлены комфортабельные однокомнатные квартиры на сутки и
                  квартиры с большим количеством комнат в разных районах города, с различной
                  степенью удобства от дешевых до VIP с джакузи.
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
              <ShowAllStl> <NavLink  to="News">{"Посмотреть все >"}</NavLink> </ShowAllStl>
            </RightBlock>
          </FlexContainer>
        </ContentContainer>
      </BottomLastBlock>
    </>
  );
}
