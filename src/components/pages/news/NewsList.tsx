import React, { useMemo, useState } from "react";
 
import FlatImage from "../../../assets/icon/FlatImage.png";
 
import { Card, MarginT, NavLinkStl, Wrap } from "./NewsLIstStyle";
import FlexContainer from "../../UI/FlexContainer";
import { Pagination } from "../../share/Pagination/Pagination";
import NewsSearch from "./modules/NewsSearch";
 
 


export default function NewsLIst() {
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
      <NewsSearch/> 
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
