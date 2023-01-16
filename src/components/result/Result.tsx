import React, { useState, useMemo, useContext } from "react";
import home from "../../assest/img/home.png";
import Button from "../../UI/Button";
import FlexContainer from "../../UI/FlexContainer";
import ContentContainer from "../../UI/ContentContainer";
import FormSearch from "../home/FormSearch";
import CardResultTile from "./CardResultTile";
import CardResultList from "./CardResultList";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import Select from "../../UI/Select";
import { Pagination } from "../share/Pagination/Pagination";
import ShearSocial from "../share/ShearSocial";
import { Context } from "../../redux/context";
import { BackgroundColor, Circle, Flex, HeaderBackground, Title, Toggle } from "./ResultStyle";
import IconMap from "../share/IconMap";
import ButtonPlit from "../../assest/icon/ButtonPlit";
import ButtonList from "../../assest/icon/ButtonList";
import { getWord } from "../share/utils/logic";
import { getFilterFlats } from "../../redux/baseFlat";

export default function Result() {
  const [isDisplayTile, setisDisplayTile] = useState(true);
  const [showSelectFilter, setShowSelectFilter] = useState(false);
  const [filter, setFilter] = useState('');
  const { setDropSelectList,
    
    metro, setMetro,
    district, setDistrict } = useContext(Context);
  const flat = useAppSelector((state) => state.baseFlat.flat);
 
  const rooms = flat.map((item) => item.rooms);
  const uniqueRooms = rooms.filter((item, pos) => rooms.indexOf(item) === pos);
const pending : any = useAppSelector((state) => state.baseFlat.pending);
  const params: any = useAppSelector((state) => state.baseFlat.params);
  const res: any = useAppSelector((state) => state.baseFlat.res);
  console.log(res);
  console.log(params);
  const recommendСriteria = [
    {title:"Недорогие", name: "toPrice", value:60},
    {title:"1-комнатные", name: "rooms" ,value:1} ,
    {title:"2-комнатные", name: "rooms" ,value:2} ,
    {title:"3-комнатные", name: "rooms" ,value:3} ,
    {title:"4-комнатные", name: "rooms" ,value:4} ,
    {title:"5-комнатные", name: "rooms" ,value:5} ,
    {title:"Заводской р.", name: "district" ,value:'Заводской'} ,
    {title:"Ленинский р.", name: "district" ,value:'Ленинский'} ,
    {title:"Московский р.", name: "district" ,value:'Московский'} ,
    {title:"Октябрьский р.", name: "district" ,value:'Октябрьский'} ,
    {title:"Партизанский р.", name: "district" ,value:'Партизанский'} ,
    {title:"Первомайский р.", name: "district" ,value:'Первомайский'} ,
    {title:"Советский р.", name: "district" ,value:'Советский'} ,
    {title:"Фрунзенский р.", name: "district" ,value:'Фрунзенский'} ,
    {title:"Центральный р.", name: "district" ,value:'Центральный'} ,
  ];

  const dispatch = useAppDispatch();
  const addParamsToStore = (item:any) => {
   
    dispatch(getFilterFlats({[item.name]:item.value}));

  }
  
  const itemsPerPage = 6;
  const [activePage, setActivePage] = useState(1);

  const onClickButtonPagination = (page: any) => {
    setActivePage(page);
  };

  const paginatedFlat = useMemo(() => {
    const indexOfLastNews = activePage * itemsPerPage;
    const indexOfFirstNews = indexOfLastNews - itemsPerPage;

    return res.slice(indexOfFirstNews, indexOfLastNews);
  }, [activePage, res]);
  const [activeSelect, setActiveSelect] = useState(0);

  return (
    <>
      <HeaderBackground height="280px">
        <ContentContainer flexDirection={"column"} alignItems={"flex-start"}>
          <FlexContainer flexDirection="column" alignItems={"flex-start"}>
            <Flex>
              <img src={home} alt="home" />
              
              <Circle></Circle>
              {params.city?<p>Квартиры в  {params.city==="Гродно"?"Гродно":params.city==="Гомель"?"Гомеле":(params.city+'e')} </p>:<p>Квартиры в Белоруссии</p>}
            </Flex>
            {params.city?<Title>Аренда квартир в {params.city==="Гродно"?"Гродно":params.city==="Гомель"?"Гомеле":(params.city+'e')} </Title>:<Title>Аренда квартир в Белоруссии</Title>}
            <p>Рекомендуем посмотреть </p>
            <FlexContainer justifyContent={"flex-start"} gap={"15px"} flexWrap="wrap">
              {recommendСriteria.map((item) => (
                <Button
                  key={item.title}
                  color={"#664EF9"}
                  height={"30px"}
                  padding={"6px 10px"}
                  background={"rgba(102, 78, 249, 0.1)"}
                  onClick={() =>{addParamsToStore(item)}}
                  backgroundHover='rgba(102, 78, 249, 0.2)'
                >
                  {item.title}
                </Button>
              ))}
            </FlexContainer>
          </FlexContainer>
        </ContentContainer>
      </HeaderBackground>
      <BackgroundColor onClick={() => setDropSelectList(false)}>
        <FlexContainer width={"100%"} flexDirection="column">
          <FormSearch
            city={params.city}
            map={false}
            clearButton={true}
            flexDirection="row"
            alignItems="center"
            justifyContent={"space-between"}
             color = '#664EF9'
                metro={metro}
                setMetro={setMetro}
                district={district}
                setDistrict={setDistrict}
          ></FormSearch>
        </FlexContainer>
      </BackgroundColor>

      <ContentContainer
        flexDirection="column"
        width={"100%"}
        onClick={() => setDropSelectList(false)}
      >
        <FlexContainer width={"100%"} justifyContent={"space-between"} margin="20px 0 0 0">
        <Select background={'#FFFFFF'} boxShadow={'0px 5px 20px rgba(0, 96, 206, 0.1)'} options={['по цене','по умолчанию']} selected={filter||'Выберите'} selectedOption={setFilter} isActiveSelect={showSelectFilter} setIsActiveSelect={setShowSelectFilter} />
          <FlexContainer>
            <Toggle
              className={isDisplayTile ? undefined : "active"}
              onClick={() => {
                setisDisplayTile(false);
              }}
            >
              <ButtonList fill="#664EF9"></ButtonList> Список
            </Toggle>
            <Toggle
              className={isDisplayTile ? "active" : undefined}
              onClick={() => {
                setisDisplayTile(true);
              }}
            >
              <ButtonPlit fill="#664EF9"></ButtonPlit> Плитки
            </Toggle>

            <Toggle>{<IconMap fill="#664EF9 "></IconMap>} Показать на карте</Toggle>
          </FlexContainer>
        </FlexContainer>
        {pending?<><h4>{getWord(res.length,'Найден','Найдено','Найдено')} {res.length} {getWord(res.length,'результат','результата','результатов')}  </h4>
        <FlexContainer flexWrap="wrap" gap={"40px"}>
          {paginatedFlat.length !== 0 &&
            paginatedFlat.map((item: any, index: any) =>
              isDisplayTile ? (
                <CardResultTile key={index} flat={item}></CardResultTile>
              ) : (
                <CardResultList key={index} flat={item}></CardResultList>
              )
            )}
        </FlexContainer></>:<div>Задайте параметры поиска</div>}
        
        <FlexContainer width={"100%"} alignItems={"center"} margin={"50px 0"}>
          <Pagination
            itemsPerPage={itemsPerPage}
            onClickButtonPagination={onClickButtonPagination}
            activePage={activePage}
            setActivePage={setActivePage}
            pageQuantity={res}
          />
          <ShearSocial fill={"#1E2123"} background={"#F4F5FA"}></ShearSocial>
        </FlexContainer>
      </ContentContainer>
    </>
  );
}
