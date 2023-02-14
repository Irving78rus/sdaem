import React from "react";
import FlatImage from "../../../../../../assets/icon/FlatImage.png";

import styled from "styled-components";
import { NavLink } from "react-router-dom";
export const Card = styled.div`
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
export const Wrap = styled.div`
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
export const NavLinkStl = styled(NavLink)`
  text-decoration: none;
`;

export default function CardNew() {
  return (
    <Card>
      <img src={FlatImage} alt="FlatImage" />
      <h4>Линия Сталина: суровый отдых в усадьбах на сутки</h4>
      <p>
        Чем заняться в выходные? Когда нет безотлагательных домашних дел, а на улице хорошая погода,
        хочется уехать из города, чтобы сменить обстановку. Например, снять коттедж на сутки для
        семьи или большой компании друзей. А...
      </p>
      <div className="line"></div>
      <Wrap>
        <div>14 Января 2008</div>
        <button>
          <NavLinkStl className={"li"} to="New">
            Читать
          </NavLinkStl>
        </button>
      </Wrap>
    </Card>
  );
}
