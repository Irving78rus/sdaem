import React, { useState,useMemo} from "react";

import home from "../../assest/img/home.png";

import { NavLink } from "react-router-dom";
import styled from "styled-components";
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

// interface Props {
//   height?: any;
// }
const HeaderBackground = styled.div`
  background: linear-gradient(90deg, #94afff30 0%, #94afff30 94.5%);
  height: ${(props) => props.height || "0px"};
`;
const Container = styled.div`
  width: 844px;
  margin: 0 auto;
  margin-top: 42px;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 7px;
`;
const ContainerNew = styled.div`
  width: 844px;
  margin: 0 auto;
  position: relative;
  top: -40px;
  display: flex;
  flex-direction: column;
  img {
    width: 100%;
    border-radius: 10px;
  }
  .dots {
    position: absolute;
    width: 61px;
    height: 61px;
    top: 100px;
    left: -100px;
  }
`;

const Title = styled.h1`
  margin: 0;
`;
const Flex = styled.div`
  justify-content: flex-start;
  align-items: center;
  display: flex;
  gap: 7px;
  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 100%;

    color: #686868;
  }
`;
const Circle = styled.div`
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background-color: #664ef9;
`;
const Card = styled.div`
  background-color: #fff;
  box-sizing: border-box;
  width: 407px;
  filter: drop-shadow(0px 20px 40px rgba(135, 124, 202, 0.15));
  border-radius: 10px;
  margin-top: 40px;
  img {
    border-radius: 10px;
  }
  h4,
  p,
  button,
  div {
    padding: 0 20px;
  }
  h4 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 19px;
  }
  p {
    color: #686868;
  }
  .line {
    width: 300px;
    height: 2px;
    background-color: #f8f8f8;
    margin: 20px auto;
  }
`;
const FlexUpdt2 = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  button {
    background: rgba(102, 78, 249, 0.1);
    border-radius: 18px;
    padding: 10px 15px;
    border: none;
    color: #664ef9;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    cursor: pointer;
  }
  div {
    background-color: #f8f8f8;
    color: #8291a3;
    border-radius: 18px;
    padding: 12px 8px;
  }
`;
const BackgroundColor = styled.div`
background-color: white;
box-shadow: 0px 20px 40px rgba(39, 95, 158, 0.08);
  height:100%;
`
const Toggle = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 10px 15px;
gap: 10px;

 
background: #FFFFFF;
box-shadow: 0px 5px 20px rgba(0, 96, 206, 0.1);
border-radius: 18px;
&:hover{
  background: #F8F8F8;
 cursor:pointer;
}
`

export default function Result() {
  const [displayMethod,setDisplayMethod] = useState('tile')
  const flat = useAppSelector((state ) => state.baseFlat.flat);
  const filters =['по цене', 'по спальным местам']
  
   const filter = {
      title: "",
      techTitle: "filter",
      id: 10,
      select: "По умолчанию",
      active: false,
      list: filters,
   }
  const rooms = flat.map((item ) => item.rooms);  
  const uniqueRooms = rooms.filter((item , pos ) => rooms.indexOf(item) === pos);
  const nav2 = [

    {
      title: "Комнаты ",
      techTitle: "rooms",
      id: 1,
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
      list: '',
    },
   
    {
      title: "",
      techTitle: "all",
      id: 3,
      select: "Больше опций",
      active: false,
      list: "",
    },
  ];

  const params = useAppSelector((state) => state.baseFlat.params);
  console.log(params);

  const allParams = {}
  for (let key in params) {
    if (params[key]) {
      allParams[key] = params[key]
    }
  }
  console.log(allParams);
  const res = flat.filter((item) => {
    let resParams = true
    for (let key in allParams) {
      if (allParams[key] === item[key]) { }
      else if (key === 'upPrice' && item.cost > allParams.upPrice) { }
      else if (key === 'toPrice' && item.cost < allParams.toPrice) { }
      else { resParams = false }
    }
    return resParams && item
  });

console.log(res);
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
  const itemsPerPage=6
  const [activePage, setActivePage] = useState(1) 
  const [dropSelectList, setDropSelectList] = useState (false);
  const onClickButtonPagination = (page ) => {
     
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
      <HeaderBackground height="280px" >
        <ContentContainer flexDirection={"column"} >
          <FlexContainer flexDirection="column" alignItems={"flex-start"}>
            <Flex>
              <img src={home} alt="home" />
              <p>Аренда</p>
              <Circle></Circle>
              <p>Аренда квартир в {params.city}: </p>
            </Flex>
            <Title>Аренда квартир в {params.city}</Title>
            <p>Рекомендуем посмотреть </p>
            <FlexContainer justifyContent={"flex-start"} gap={'15px'} flexWrap='wrap'>
              {recommendСriteria.map((item) => (
                <Button key={item} color={'#664EF9'} height={"30px"} padding={'6px 10px'} background={'rgba(102, 78, 249, 0.1)'}>
                  {item}
                </Button>
              ))}
            </FlexContainer>
          </FlexContainer>
        </ContentContainer>
      </HeaderBackground>
      <BackgroundColor  onClick={() => setDropSelectList(false)}>
        <ContentContainer width={'100%'} flexDirection='column'>

          <FormSearch map={false} clearButton={true} flexDirection='row' alignItems='center' justifyContent={"space-between"} nav2={nav2}  dropSelectList={dropSelectList} setDropSelectList={setDropSelectList}></FormSearch>

        </ContentContainer>
      </BackgroundColor>

      <ContentContainer flexDirection="column" width={'100%'} onClick={() => setDropSelectList(false)}>
        <FlexContainer width={'100%'} justifyContent={'space-between'}>
          <Select   width={'180px'} left={'130px'} 
          techTitle={filter.techTitle}
          list={filter.list}
          activeSelect={activeSelect}
          setActiveSelect={setActiveSelect}
          id={filter.id}
          item={filter.item}
          select={filter.select}
          dropSelectList={dropSelectList}
          setDropSelectList={setDropSelectList}
          > </Select>
          <FlexContainer>
          <Toggle onClick={() =>{setDisplayMethod('list')}}>
            Список
          </Toggle>
          <Toggle onClick={() =>{setDisplayMethod('tile')}}>
            Плитки
          </Toggle>
          
          <Toggle>
            Показать на карте
          </Toggle>
          </FlexContainer>
        </FlexContainer>
        <h4>Найдено {res.length} результата</h4>
        <FlexContainer flexWrap='wrap' gap={'40px'}>

         
          {paginatedFlat.length !== 0 && paginatedFlat.map((item, index) => displayMethod==="tile"? <CardResultTile key={index} flat={item}></CardResultTile>: <CardResultList key={index} flat={item}></CardResultList>)}


        </FlexContainer>
        <FlexContainer width={'100%'} alignItems={'center'} margin={'50px 0'}>
        <Pagination itemsPerPage={itemsPerPage} onClickButtonPagination={onClickButtonPagination} activePage={activePage} setActivePage={setActivePage} pageQuantity={res}  /> 
        <ShearSocial fill={'#1E2123'} background={'#F4F5FA'}></ShearSocial>
        </FlexContainer>
      </ContentContainer>

    </>
  );
}
