import React, { useState, useMemo, useContext } from "react";
import home from "../../assest/img/home.png";
import Button from "../../UI/Button";
import FlexContainer from "../../UI/FlexContainer";
import ContentContainer from "../../UI/ContentContainer";
import FormSearch from "../home/FormSearch";
import CardResultTile from "./CardResultTile";
import CardResultList from "./CardResultList";
import { useAppSelector } from "../../redux/hooks";
import Select from "../../UI/Select";
import { Pagination } from "../share/Pagination/Pagination";
import ShearSocial from "../share/ShearSocial";
import { Context } from "../../redux/context";
import { BackgroundColor, Circle, Flex, HeaderBackground, Title, Toggle } from "./ResultStyle";
import IconMap from "../share/IconMap";
import ButtonPlit from "../../assest/icon/ButtonPlit";
import ButtonList from "../../assest/icon/ButtonList";
import { getWord } from "../share/utils/logic";

export default function Result() {
  const [isDisplayTile, setisDisplayTile] = useState(true);

  const { setDropSelectList,
    
    metro, setMetro,
    district, setDistrict } = useContext(Context);
  const flat = useAppSelector((state) => state.baseFlat.flat);

  const filter: any = {
    title: "",
    techTitle: "filter",
    id: 10,
    select: "По умолчанию",
    active: false,
    list: ["по цене", "по спальным местам"],
  };
  const rooms = flat.map((item) => item.rooms);
  const uniqueRooms = rooms.filter((item, pos) => rooms.indexOf(item) === pos);
const pending : any = useAppSelector((state) => state.baseFlat.pending);
  const params: any = useAppSelector((state) => state.baseFlat.params);
  const res: any = useAppSelector((state) => state.baseFlat.res);
  console.log(res);
  console.log(params);

  const recommendСriteria = [
    "Недорогие",
    "1-комнатные",
    "2-комнатные",
    "3-комнатные",
    "4-комнатные",
    "5-комнатные",
    "Заводской р.",
    "Ленинский р.",
    "Московский р.",
    "Октябрьский р.",
    "Партизанский р.",
    "Первомайский р.",
    "Советский р.",
    "Фрунзенский р.",
    "Центральный р.",
  ];
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
        <ContentContainer flexDirection={"column"}>
          <FlexContainer flexDirection="column" alignItems={"flex-start"}>
            <Flex>
              <img src={home} alt="home" />
              <p>Аренда</p>
              <Circle></Circle>
              <p>Аренда квартир в {params.city}: </p>
            </Flex>
            <Title>Аренда квартир в {params.city}</Title>
            <p>Рекомендуем посмотреть </p>
            <FlexContainer justifyContent={"flex-start"} gap={"15px"} flexWrap="wrap">
              {recommendСriteria.map((item) => (
                <Button
                  key={item}
                  color={"#664EF9"}
                  height={"30px"}
                  padding={"6px 10px"}
                  background={"rgba(102, 78, 249, 0.1)"}
                >
                  {item}
                </Button>
              ))}
            </FlexContainer>
          </FlexContainer>
        </ContentContainer>
      </HeaderBackground>
      <BackgroundColor onClick={() => setDropSelectList(false)}>
        <ContentContainer width={"100%"} flexDirection="column">
          <FormSearch
            city={params.city}
            map={false}
            clearButton={true}
            flexDirection="row"
            alignItems="center"
            justifyContent={"space-between"}
             
                metro={metro}
                setMetro={setMetro}
                district={district}
                setDistrict={setDistrict}
          ></FormSearch>
        </ContentContainer>
      </BackgroundColor>

      <ContentContainer
        flexDirection="column"
        width={"100%"}
        onClick={() => setDropSelectList(false)}
      >
        <FlexContainer width={"100%"} justifyContent={"space-between"} margin="20px 0 0 0">
          {/* <Select   width={'180px'} left={'130px'} 
          techTitle={filter.techTitle}
          list={filter.list}
          activeSelect={activeSelect}
          setActiveSelect={setActiveSelect}
          id={filter.id}
           
          select={filter.select}
           
          > </Select> */}
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
        </FlexContainer></>:<div>Загрузка</div>}
        
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
