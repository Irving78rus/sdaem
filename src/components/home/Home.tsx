import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";
import logo from "../../assest/img/logo.png";
import insta from "../../assest/img/insta.svg";
import elips from "../../assest/icon/elips.svg";
import Back from "../../assest/img/404Back.png";
import dots from "../../assest/img/dots.svg";
import car from "../../assest/img/car.png";
import Flat from "../../assest/img/Flat.png";
import house from "../../assest/img/house.png";
import bane from "../../assest/img/bane.png";
import Boy from "../../assest/img/boy.png";
import Cvib from "../../assest/icon/Cvib.svg";
import CWhat from "../../assest/icon/CWhat.svg";
import CMail from "../../assest/icon/CMail.svg";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import ContentContainer from "../../UI/ContentContainer";
import FlexContainer from "../../UI/FlexContainer";
import Button from "../../UI/Button";

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import Input from "../../UI/Input";
import { setParams2, setUpPriceToStore } from "../../redux/baseFlat";
import { setToPriceToStore } from "../../redux/baseFlat";
import FormSearch from "./FormSearch";
import Select from "../../UI/Select";
import CardResult from "../result/CardResultList";
import Carousel from "../../UI/Carousel";

import Catalog from "../catalog/Catalog";
import { SwiperSlide } from "swiper/react";
import { Line } from "../../UI/Line";
import { createFlatList } from "../../redux/flatCreater";
import Slider from "../../UI/Slider";
const Background = styled.div`
  background: linear-gradient(0deg, #7e6af3 1.04%, #6540cd 100%);
  min-height: 600px;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
  margin: 0 80px;
`;
const BackgroundImg = styled.div`
  background-image: url(${Back});

  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;

  min-height: 600px;
  h1 {
    color: white;
  }
  span {
    color: #ffd54f;
  }
`;
const BottomNav = styled.ul`
  display: flex;
  list-style-type: none;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  font-family: "Epilogue";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  padding-left: 0;
  margin: 0;
  text-decoration: none;

  li {
    padding: 15px;
    text-decoration: none;
    background-color: rgba(45, 57, 136, 0.5);
    &:first-child {
      border-top-left-radius: 10px;
    }
    &:last-child {
      border-top-right-radius: 10px;
    }
  }

  .link {
    font-family: "Epilogue";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    color: white;

    text-decoration: none;
    display: flex;
    align-items: center;
    img {
      padding-left: 10px;
    }
    &:focus {
      color: black;
      border-bottom: 3px solid #ffd54f;
      padding: 10px 0;
      background-color: white;
    }
  }
  .active {
    border-radius: 10px 10px 0 0;
    color: black;

    background-color: white;
  }
`;
interface Props {
  img?: any;
  backgroundImage?: any;
  width?: any;
  height?: any;
}
const IMG = styled.div<Props>`
  position: relative;
  border-radius: 10px;
  width: ${(props) => props.width || ""};
  height: ${(props) => props.height || ""};
  background-image: url(${(props) => props.backgroundImage || null});
  p {
    margin: 37px;

    background: linear-gradient(90deg, #9d94ff 0%, #6b50e9 94.5%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    font-weight: 700;
    font-size: 13px;
    line-height: 16px;

    text-transform: uppercase;
  }
  .h3 {
    margin: 37px;
    color: white;
    font-weight: 700;
    font-size: 25px;
    line-height: 30px;
  }
  .button {
    width: 73px;
    height: 33px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #664ef9;
    border-radius: 16px;
    color: white;
  }
  img {
    position: absolute;
    bottom: 18px;
    right: 18px;
  }
`;
const IMGBlock = styled.div<Props>`
  background-color: inherit;
  width: 950px;
  gap: 20px;

  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;
const TextBlock = styled.div`
  background-color: white;

  display: flex;
  align-items: flex-start;
  flex-direction: column;
  ul {
    width: 100%;
    padding: 0;
    li {
      list-style-type: none;
      color: #feb700;
      font-weight: 400;
      font-size: 14px;
      line-height: 10px;
      height: 33px;
      width: 100%;

      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    li:first-child {
      color: #333333;
      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
    }
  }
`;
const MarginT = styled.div`
  position: relative;
  max-width: 1440px;
  padding: 0 80px;
  margin: 0 auto;
  margin-top: 42px;
`;
interface Props {
  borderTopLeftRadius?: any;
  borderTopRightRadius?: any;
  borderBottomRightRadius?: any;
  borderBottomLeftRadius?: any;
  width?: any;
  left?: any;
}
const CardList = styled.div`
  width: 100%;
`;
const InfoBlock = styled.div``;
const Info = styled.div`
  height: 100%;
`;
const FilterBlock = styled.div``;
const WrapperFilter = styled.div`
  gap: 20px;

  width: 800px;

  display: flex;
  justify-content: center;
  input {
    height: 37px;
    margin-top: 67px;

    width: 616px;
    color: black;
    border-radius: 20px;
    border: none;
  }
  input::placeholder {
    padding-left: 15px;
  }
`;
const ContentSwiper = styled.div`
   margin 0 auto;
 width:1500px;
  height:700px;
  
 }`;
const Itog = styled.div`
   
   display: flex;
   flex-direction:column;
    p{
      font-size:76px;
      margin:0;
    }
 }`;
const UnderSwiper = styled.div`
   
 display: flex;
 align-items:center;
}`;
const MainBottomCard = styled.div`
  width:406px;
  height:345px;
  background-color:white;
  padding: 27px 37px;
  box-shadow: 0px 20px 40px rgba(135, 124, 202, 0.15);
border-radius: 10px;
}`;
const BottomLastBlock = styled.div`
   margin-top:200px;
  height:700px;
  display: flex;
  justify-content: space-between;
  width:100%;
  h4{
    background: linear-gradient(90deg, #9D94FF 0%, #6B50E9 94.5%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
text-fill-color: transparent;
font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 17px;
margin:0;
   }
}`;
const LeftBlock = styled.div`
   width:50%;
   
  h3{
    font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 25px;
line-height: 30px;
  }
  p{
    margin:0;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    span{
      font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 150%;
    }
  }
}`;
const RightBlock = styled.div`
 
width: 406px;
 padding: 33px 23px;
 &>*{
  margin:3px 0;
 }

box-shadow: 0px 20px 40px rgba(135, 124, 202, 0.15);
border-radius: 10px;
 h2{
  margin-bottom:26px ;
  font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 25px;
line-height: 30px;
 }
 p{
  font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 17px;
&:hover{
  color: #664EF9;
cursor:pointer;
}
 }
 span{
  font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 15px;
 
color: #8291A3;
}
}`;

const ShowAllStl = styled.div`
  margin-top: 20px;
  color: #664ef9;
  font-family: "Inter";
  font-style: normal;
  font-weight: 800;
  font-size: 14px;
  line-height: 17px;
  cursor: pointer;
`;
const ContactsComp = styled.div`
  padding: 20px 0;
  width: 247px;
  height: 297px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  .photo {
    border: 6px solid #664ef9;
    width: 59px;
    height: 59px;
    border-radius: 50%;
    margin: 0;
  }
  .social {
  }
  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 100%;
    /* identical to box height, or 14px */

    display: flex;
    align-items: center;
    margin: 0;
    /* #BDBDBD */

    color: #bdbdbd;
  }
  h4 {
    margin: 0;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 100%;
    /* identical to box height, or 20px */

    display: flex;
    align-items: center;

    /* Style */

    color: #1e2123;
  }
  .link {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 100%;
    /* identical to box height, or 16px */

    text-decoration-line: underline;

    /* #664EF9 */

    color: #664ef9;
  }
`;
const SelectTitle = styled.p`
  margin: 0px;
  margin-bottom: 11px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #bdbdbd;
`;

export default function Home() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      setParams2({
        city: "",
        upPrice: 0,
        toPrice: 0,
        rooms: 0,
        metro: "",
        district: "",
        sleepingPlaces: 0,
        GasStove: null,
        Oven: null,
        CoffeeMaker: null,
        MicrowaveOven: null,
        Dishes: null,
        Dishwasher: null,
      })
    );
  }, []);

  const nav = [
    {
      title: "Квартиры на сутки ",
      id: 1,
      active: false,
    },
    {
      title: "Коттеджи и усадьбы",
      id: 2,
      active: false,
    },
    {
      title: "Бани и Сауны",
      id: 3,
      active: false,
    },
    {
      title: "Авто на прокат",
      id: 4,
      active: false,
    },
  ];
  const flat = useAppSelector((state: any) => state.baseFlat.flat);
  const city = flat.map((item: any) => item.city);
  const uniqueCity = city.filter((item: any, pos: any) => city.indexOf(item) === pos);
  const rooms = flat.map((item: any) => item.rooms);
  const uniqueRooms = rooms.filter((item: any, pos: any) => rooms.indexOf(item) === pos);

  const nav2 = [
    {
      title: "Город",
      techTitle: "city",
      select: "Выберите",
      id: 1,
      active: false,
      list: uniqueCity,
    },
    {
      title: "Комнаты ",
      techTitle: "rooms",
      id: 4,
      select: "Выберите",
      active: false,
      list: uniqueRooms,
    },
    {
      title: "Цена за сутки ",
      techTitle: "price",
      id: 2,
      select: "Выберите",
      active: false,
      list: [],
    },
    {
      title: "",
      techTitle: "all",
      id: 3,
      select: "Больше опций",
      active: false,
      list: [],
    },
  ];

  const arr = ["dire", "home", "popular", "dire", "home", "popular", "dire", "home", "popular"];

  const [isActive, setIsActive] = useState(0);
  const [activeSelect, setActiveSelect] = useState(0);
  const dire = [
    "Квартиры",
    "Квартиры в Гомеле",
    "Квартиры в Гордно",
    "Квартиры в Могилеве",
    "Квартиры в Бресте",
    "Квартиры в Витебске",
  ];
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

  let content = arr.map((item: any, index: any) => (
    <SwiperSlide key={index}>
      {" "}
      <CardResult key={index} flat={item}></CardResult>
    </SwiperSlide>
  ));

  const metroRender = flat.map((item: any) => item.metro);
  const uniqueMetro = metroRender.filter(
    (item: any, pos: any) => metroRender.indexOf(item) === pos
  );

  const districtRender = flat.map((item: any) => item.district);
  const uniqueDistrict = districtRender.filter(
    (item: any, pos: any) => districtRender.indexOf(item) === pos
  );

  const moreSelected = [
    {
      title: "Район",
      techTitle: "district",
      id: 7,
      select: "Район",
      active: false,
      list: uniqueDistrict,
    },
    {
      title: "Метро",
      techTitle: "metro",
      select: "Метро",
      id: 8,
      active: false,
      list: uniqueMetro,
    },
  ];
  const params = useAppSelector((state: any) => state.baseFlat.params);
  const [metro, setMetro] = useState(params.metro);
  const [district, setDistrict] = useState(params.district);
  const [dropSelectList, setDropSelectList] = useState(false);
  return (
    <>
      <Background onClick={() => setDropSelectList(false)}>
        <BackgroundImg onClick={() => setDropSelectList(false)}>
          <ContentContainer justifyContent="center" flexDirection="column" padding="0 120px">
            <h1>
              Sdaem.by - у нас живут <span>ваши объявления</span>
            </h1>
            <FlexContainer flexDirection="column" alignItems="flex-start" width="100%">
              <BottomNav>
                {nav.map((item) => (
                  <li
                    key={item.id}
                    className={isActive === item.id ? "link active" : "link"}
                    onClick={() => {
                      setIsActive(item.id);
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
                nav2={nav2}
                flexDirection="column"
                alignItems="flex-start"
                dropSelectList={dropSelectList}
                setDropSelectList={setDropSelectList}
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
              <FlexContainer justifyContent="flex-start" gap="10px" margin={"37px"}>
                <div className={"button"}>Минск</div>
                <div className={"button"}>Минск</div>
                <div className={"button"}>Минск</div>
                <div className={"button"}>Минск</div>
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
              {dire.map((item, index) => (
                <li key={index}>
                  <p>{item}</p>123
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
        <FlexContainer width="100%" flexDirection="column" alignItems="flex-start" padding={'0 80px'}>
          <p>Квартиры на сутки </p>
          <FlexContainer width="100%">
            <h3> Aренда квартир</h3>
            <WrapperFilter>
              <FlexContainer>
                {moreSelected.map((item: any) => (
                  <FlexContainer
                    height="100px"
                    justifyContent="center"
                    key={item.id}
                    flexDirection="column"
                    alignItems="flex-start"
                    padding="20px"
                  >
                    <Select
                      techTitle={item.techTitle}
                      list={item.list}
                      activeSelect={activeSelect}
                      setActiveSelect={setActiveSelect}
                      id={item.id}
                      item={item}
                      select={item.select}
                      width={"150px"}
                      left={"110px"}
                      dropSelectList={dropSelectList}
                      setDropSelectList={setDropSelectList}
                      setMetro={setMetro}
                      setDistrict={setDistrict}
                      metro={metro}
                      district={district}
                    ></Select>
                  </FlexContainer>
                ))}
              </FlexContainer>
            </WrapperFilter>
          </FlexContainer>
          <Slider></Slider>
          {/* <ContentSwiper>   <Carousel>
            {content}
          </Carousel>  </ContentSwiper> */}
          <UnderSwiper>
            <Itog>
              <p>341+</p>
              <span>Предложений по Минску</span>
            </Itog>
            <Button>+ Разместить объявление</Button>
          </UnderSwiper>

          
        </FlexContainer>
      </CardList>
      <Background>
        <BackgroundImg>
          <ContentContainer justifyContent="center" flexDirection="column">
            <h1>Поиск квартир на карте</h1>
            <p style={{ color: "white" }}>
              Ищите квартиры на сутки в центре города, возле парка или в живописном районе
            </p>
            <Button background="white" color="black">
              Открыть карту
            </Button>
            <FlexContainer gap="20px" position="absolute" top="400px">
              <MainBottomCard>
                <FlexContainer>
                  <img src="#" alt="img"></img>
                  <h4>Начните привлекать клиентов бесплатно!</h4>
                </FlexContainer>
                <p>
                  Пройдя простую регистрацию на сайте у Вас появится личный кабинет, в котором
                  возможно бесплатно создавать и публиковать объявления на сайте.{" "}
                </p>

                <Button background={"#FFD54F"} height={"30px"} color={"black"}>
                  + Разместить объявление
                </Button>
              </MainBottomCard>
              <MainBottomCard>
                <FlexContainer>
                  <img src="#" alt="img"></img>
                  <h4>Начните привлекать клиентов бесплатно!</h4>
                </FlexContainer>
                <p>
                  Пройдя простую регистрацию на сайте у Вас появится личный кабинет, в котором
                  возможно бесплатно создавать и публиковать объявления на сайте.{" "}
                </p>

                <Button background={"#FFD54F"} height={"30px"} color={"black"}>
                  + Разместить объявление
                </Button>
              </MainBottomCard>
              <MainBottomCard>
                <FlexContainer>
                  <IMG backgroundImage={Flat} width={"85px"} height={"70px"}></IMG>
                  <h4>Начните привлекать клиентов бесплатно!</h4>
                </FlexContainer>
                <p>
                  Пройдя простую регистрацию на сайте у Вас появится личный кабинет, в котором
                  возможно бесплатно создавать и публиковать объявления на сайте.{" "}
                </p>

                <Button background={"#FFD54F"} height={"30px"} color={"black"}>
                  + Разместить объявление
                </Button>
              </MainBottomCard>
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
          <h4>ЧТО ТАКОЕ SDAEM.BY </h4>
          <FlexContainer width={"100%"}>
            <LeftBlock>
              <h3> Квартира на сутки в Минске</h3>
              <FlexContainer gap={"20px"} alignItems="flex-start" margin="0 0 30px 0">
                <IMG backgroundImage={Flat} width={"50%"} height={"270px"}></IMG>
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
