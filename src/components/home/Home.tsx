import React, { useContext, useState } from "react";
import elips from "../../assest/icon/elips.svg";
import car from "../../assest/img/car.png";
import Flat from "../../assest/img/Flat.png";
import hand from "../../assest/img/handle.svg";
import list from "../../assest/img/list.svg";
import CardBackGround from "../../assest/img/CardBackGround.svg";
import house from "../../assest/img/house.png";
import bane from "../../assest/img/bane.png";
import ContentContainer from "../../UI/ContentContainer";
import FlexContainer from "../../UI/FlexContainer";
import Button from "../../UI/Button";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getFilterFlats } from "../../redux/baseFlat";
import FormSearch from "./FormSearch";
import Select from "../../UI/Select";
import { Line } from "../../UI/Line";
import Slider from "../../UI/Slider";
import {
  Background,
  BackgroundImg,
  BottomLastBlock,
  BottomNav,
  CardGold,
  CardList,
  IMG,
  IMGBlock,
  Itog,
  LeftBlock,
  MainBottomCard,
  RightBlock,
  SearhToMapBlock,
  ShowAllStl,
  SubTitle,
  TextBlock,
  Title,
  UnderSwiper,
  WrapperFilter,
  WrapperFilter2,
} from "./HomeStyle";
import { GetListUniqueItems } from "../share/hooks";
import { useNavigate } from "react-router-dom";
import { cityArr } from "../../redux/flatCreater";
import { VerticalLine } from "../../UI/VerticalLine";
import Dots  from "../../UI/Dots";
import IconMap from "../share/IconMap";
import { Context } from "../../redux/context";
import { RightArrov } from "./FormSearchStyle";
import { Flex } from "../result/ResultStyle";


export default function Home() {
  const params = useAppSelector((state: any) => state.baseFlat.params);
  const {closeAllSelect,dropSelectList, setDropSelectList,isActiveSelectCity,
     setIsActiveSelectCity,isActiveSelectRooms, setIsActiveSelectRooms,
     city, setCity,
     metro, setMetro,
     district, setDistrict } = useContext(Context);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
 
  const flats = useAppSelector((state: any) => state.baseFlat.flat);
  const topNavigationFormSearch = useAppSelector((state: any) => state.baseFlat.topNavigationFormSearch);
  const showFlatInCity = (item: string) => {
    dispatch(getFilterFlats({
      city: item, upPrice: 0, toPrice: 0, rooms: 0, metro: '', district: '', sleepingPlaces: 0, GasStove: null, Oven: null,
      CoffeeMaker: null, MicrowaveOven: null, Dishes: null, Dishwasher: null
    }));
    navigate("/Result")
  }
 
 

  const [isActiveFieldsFormSearch, setIsActiveFieldsFormSearch] = useState(0);
  const [activeSelectElement, setActiveSelectElement] = useState(0);

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

  const MoreOptionsList = [
    {
      title: "Район",
      techTitle: "district",
      id: 7,
      select: "Район",
      active: false,
      list: GetListUniqueItems('district'),
    },
    {
      title: "Метро",
      techTitle: "metro",
      select: "Метро",
      id: 8,
      active: false,
      list: GetListUniqueItems('metro'),
    },
  ];

 
  
  return (
    <>
      <Background onClick={() => closeAllSelect()}>
        <BackgroundImg onClick={() => closeAllSelect()}>
          <ContentContainer justifyContent="center" flexDirection="column" padding="0 120px">
            <h1>
              Sdaem.by - у нас живут <span>ваши объявления</span>
            </h1>
            <FlexContainer flexDirection="column" alignItems="flex-start" width="100%">
              <BottomNav>
                {topNavigationFormSearch.map((item:any) => (
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
                backgroundColor={"white"}
                flexDirection="column"
                alignItems="flex-start"
                city={city}
                setCity={setCity}
                metro={metro}
                setMetro={setMetro}
                district={district}
                setDistrict={setDistrict}
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
              <img src={elips} alt="elips"></img>
            </IMG>
            <IMG backgroundImage={bane} width={"407px"} height={"270px"}>
              <p>попариться в бане с друзьями</p>
              <h3 className={"h3"}>Бани и сауны</h3>
              <img src={elips} alt="elips"></img>
            </IMG>
            <IMG backgroundImage={car} width={"516px"} height={"270px"}>
              <p>Если срочно нужна машина</p>
              <h3 className={"h3"}>Авто на прокат</h3>
              <img src={elips} alt="elips"></img>
            </IMG>
          </IMGBlock>
          <TextBlock>


            <ul>
              <li >
                <p>{"Квартиры"}</p>{flats.length}
              </li>
              {cityArr.map((item: string, index: number) => (
                <li key={index}>
                 <p>Квартиры в {item}</p><span>{flats.filter((flat: any) => item === flat.city).length}</span> 
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
              {popular.map((item, index) => (
                <li key={index}>
                  <p>{item}</p>{" "}
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
                {MoreOptionsList.map((item: any) => (
                  <FlexContainer
                    height="100px"
                    justifyContent="center"
                    key={item.id}
                    flexDirection="column"
                    alignItems="flex-start"
                    padding="20px"
                  >
                    {/* <Select
                      techTitle={item.techTitle}
                      list={item.list}
                      activeSelect={activeSelectElement}
                      setActiveSelect={setActiveSelectElement}
                      id={item.id}
                      item={item}
                      select={item.select}
                      width={"150px"}
                      left={"110px"}
                       
                      setMetro={setMetro}
                      setDistrict={setDistrict}
                      metro={metro}
                      district={district}
                      backgroundColor='white'
                    ></Select> */}
                  </FlexContainer>
                ))}
              </FlexContainer>
              <WrapperFilter2></WrapperFilter2>
            </WrapperFilter>
          </FlexContainer> 
          <FlexContainer margin='30px 0 0 0'>      <Slider photos={flats} position='static' content={true} PAGE_WIDTH='1347' width='1347px' height={'615px'} style={{marginTop:'30px'}}></Slider></FlexContainer>
      
          <UnderSwiper>
            <Itog>
              <FlexContainer alignItems='center'><p>341 <span>+</span>  </p></FlexContainer>

              <Title>Предложений по Минску</Title>
            </Itog>
            <VerticalLine></VerticalLine>
            <Button boxShadow='0px 15px 40px rgba(0, 96, 206, 0.15)'
             backgroundHover='linear-gradient(90deg, #867CFC 0%, #6929F3 94.5%)'>
              Посмотреть все <RightArrov background='white'></RightArrov>   </Button>
          </UnderSwiper>


        </FlexContainer>
      </CardList>
      <Background borderBottomLeftRadius="0" borderBottomRightRadius="0" margin="0">
        <BackgroundImg>

          <ContentContainer justifyContent="center" flexDirection="column" alignItems="center">
            <Dots right='140px' top='46px' fill='white'></Dots>
            <SearhToMapBlock>

              <h1>Поиск квартир на карте</h1>
              <p>
                Ищите квартиры на сутки в центре города, возле парка или в живописном районе
              </p>
              <Button background="white" color="black" fontWeight='600'  colorHover='#FEC100'>
                <IconMap fill='#FFD54F'></IconMap> Открыть карту
              </Button>
            </SearhToMapBlock>

            <FlexContainer gap="20px" position="absolute" top="400px">
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

                <Button  margin ='30px 0 0 0' background={'linear-gradient(270deg, #7E6AF3 0%, #6540CD 100%)'} height={"30px"} color={"white"}>
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
          <FlexContainer width={"90%"} height={'50px'} justifyContent='flex-end' >  <Dots fill='#FFD54F' position='static'></Dots>  </FlexContainer>
        
          <SubTitle>ЧТО ТАКОЕ SDAEM.BY </SubTitle>
        
          <FlexContainer width={"100%"}>
            <LeftBlock>
              <h3> Квартира на сутки в Минске</h3>
              <FlexContainer gap={"20px"} alignItems="flex-start" margin="0 0 30px 0" >
                <IMG backgroundImage={Flat} width={"50%"} height={"270px"} borderRadius='20px'></IMG>
                <p style={{ width: "50%" }}>
                  {" "}
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
                готовности сдать квартиру на сутки.{" "}
              </p>
            </LeftBlock>
            <RightBlock>
              <h2>Новости</h2>
              <p>Линия Сталина: суровый отдых в усадьбах на сутки</p>
              <span>14 Январь</span>
              <Line> </Line>
              <p>Линия Сталина: суровый отдых в усадьбах на сутки</p>
              <span>14 Январь</span>
              <Line> </Line>
              <p>Линия Сталина: суровый отдых в усадьбах на сутки</p>
              <span>14 Январь</span>
              <Line> </Line>
              <p>Линия Сталина: суровый отдых в усадьбах на сутки</p>
              <span>14 Январь</span>
              <Line> </Line>
              <p>Линия Сталина: суровый отдых в усадьбах на сутки</p>
              <span>14 Январь</span>

              <ShowAllStl>{"Посмотреть все >"}</ShowAllStl>
            </RightBlock>
          </FlexContainer>
        </ContentContainer>
      </BottomLastBlock>
    </>
  );
}
