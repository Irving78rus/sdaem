import React, { useMemo, useState } from "react";
import home from "../../assets/icon/home.png";
import FlatImage from "../../assets/icon/FlatImage.png";
import { NavLink } from "react-router-dom";
import { Card, Circle,  TopTitle, MarginT, NavLinkStl, Wrap, WrapperFilter, WrapperTitle } from "./NewsStyle";
import FlexContainer from "../UI/FlexContainer";
import { Pagination } from "../share/Pagination/Pagination";
import HomeSvg from "../../assets/icon/HomeSvg";
import LoopSvg from "../../assets/icon/LoopSvg";


export default function News() {
  const arr:number[] = [1, 2, 3, 4, 5, 6,7,8,9,10,11,12,13,14];
  const [activePage, setActivePage] = useState<number>(1);

  const onClickButtonPagination = (page: number) => {
    setActivePage(page);
  };
  const itemsPerPage:number = 6;
  const paginatedNews: number[] = useMemo(() => {
    const indexOfLastNews = activePage * itemsPerPage;
    const indexOfFirstNews = indexOfLastNews - itemsPerPage;

    return arr.slice(indexOfFirstNews, indexOfLastNews);
  }, [activePage, arr]);
  return (
    <MarginT>
      <FlexContainer   margin='0 auto' position='relative'>
        <WrapperTitle>
          <FlexContainer gap='10px' justifyContent='flex-start'>
            <HomeSvg></HomeSvg>
            <Circle></Circle>
            <TopTitle>Новости</TopTitle>
          </FlexContainer>
          <h2>Новости</h2>
        </WrapperTitle>

        <WrapperFilter>
          <input placeholder="Поиск по статьям" type={'text'}/>
          <button className="button"> <LoopSvg></LoopSvg></button>
        </WrapperFilter>
        
      </FlexContainer>
      <FlexContainer gap='25px' margin='0 auto 30px auto' flexWrap='wrap' >
        {paginatedNews.map((item:number) => (
          <Card key={item}>
            <img src={FlatImage} alt="FlatImage" />
            <h4>Линия Сталина: суровый отдых в усадьбах на сутки</h4>
            <p>
              Чем заняться в выходные? Когда нет безотлагательных домашних дел, а на улице хорошая
              погода, хочется уехать из города, чтобы сменить обстановку. Например, снять коттедж на
              сутки для семьи или большой компании друзей. А...
            </p>
            <div className="line"></div>
            <Wrap>
              <div>14 Января 2008</div>
              <button>
                <NavLinkStl className={'li'} to="New">Читать</NavLinkStl>
              </button>
            </Wrap>
          </Card>
        ))}
      </FlexContainer>
      <Pagination
      itemsPerPage={itemsPerPage}
      onClickButtonPagination={onClickButtonPagination}
      activePage={activePage}
       
      pageQuantity={arr}
      ></Pagination>
    </MarginT>
  );
}
