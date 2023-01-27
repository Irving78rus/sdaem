import React from "react";
import home from "../../assets/icon/home.png";
import cartImage from "../../assets/icon/cartImage.png";
import { NavLink } from "react-router-dom";
import { Card, Circle, ContentContainerFooter, ContentContainerMofic, FlexUpdt, MarginT, Wrap, WrapperFilter, WrapperTitle } from "./NewsStyle";


export default function News() {
  const arr:number[] = [1, 2, 3, 4, 5, 6];
  return (
    <MarginT>
      <ContentContainerFooter>
        <WrapperTitle>
          <FlexUpdt>
            <img src={home} alt="home" />
            <Circle></Circle>
            <p>Новости</p>
          </FlexUpdt>
          <h2>Новости</h2>
        </WrapperTitle>

        <WrapperFilter>
          <input placeholder="Поиск по статьям" />
          <button className="button"> search</button>
        </WrapperFilter>
        
      </ContentContainerFooter>
      <ContentContainerMofic>
        {arr.map((item:number) => (
          <Card key={item}>
            <img src={cartImage} alt="cartImage" />
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
                <NavLink to="New">Читать</NavLink>
              </button>
            </Wrap>
          </Card>
        ))}
      </ContentContainerMofic>
    </MarginT>
  );
}
