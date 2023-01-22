import React from "react";
import home from "../../assets/img/home.png";
import cartImage from "../../assets/img/cartImage.png";
import { NavLink } from "react-router-dom";
import styled from "styled-components";


const MarginT = styled.div`
  position: relative;
  max-width: 1440px;
  padding: 0 80px;
  margin: 0 auto;
  margin-top: 42px;
`;
const ContentContainerFooter = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1440px;

  margin: 0 auto;
  position: relative;
`;
const ContentContainerMofic = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1440px;

  margin: 0 auto;
  flex-wrap: wrap;
`;
const WrapperTitle = styled.div`
  width: 50%;
  margin: 0;
  align-items: space-between;

  img {
    width: 12px;
    height: 12px;
  }
  h2 {
    font-weight: 700;
    font-size: 30px;
    line-height: 100%;
  }
`;

const FlexUpdt = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  p {
    font-size: 14px;
    color: #686868;
  }
`;
const Circle = styled.div`
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background-color: #664ef9;
`;
const WrapperFilter = styled.div`
  position: absolute;
  right: -40px;
  top: 50px;
  width: 800px;
  height: 850px;
  background: linear-gradient(90deg, #94afff23 0%, #4e65f91c 94.5%);
  border-top-left-radius: 40px;
  border-bottom-left-radius: 40px;
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
  .button {
    position: relative;
    right: 50px;
    margin-top: 67px;
    height: 37px;
    border-radius: 20px;
    border: none;
    background-color: #664ef9;
    color: white;
    cursor: pointer;
  }
  .button:hover {
    background-color: #5c35f9;
  }
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
export default function News() {
  const arr = [1, 2, 3, 4, 5, 6];
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
        {arr.map((item) => (
          <Card key={item}>
            <img src={cartImage} alt="cartImage" />
            <h4>Линия Сталина: суровый отдых в усадьбах на сутки</h4>
            <p>
              Чем заняться в выходные? Когда нет безотлагательных домашних дел, а на улице хорошая
              погода, хочется уехать из города, чтобы сменить обстановку. Например, снять коттедж на
              сутки для семьи или большой компании друзей. А...
            </p>
            <div className="line"></div>
            <FlexUpdt2>
              <div>14 Января 2008</div>
              <button>
                <NavLink to="New">Читать</NavLink>
              </button>
            </FlexUpdt2>
          </Card>
        ))}
      </ContentContainerMofic>
    </MarginT>
  );
}
