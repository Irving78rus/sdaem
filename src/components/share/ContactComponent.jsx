import React from "react";
import Boy from "../../assets/icon/boy.png";
import Cvib from "../../assets/icon/Cvib.svg";
import CWhat from "../../assets/icon/CWhat.svg";
import CMail from "../../assets/icon/CMail.svg";
import { Link } from "react-router-dom";
import styled from "styled-components";
import FlexContainer from "../../UI/FlexContainer";

const ContactsComp = styled.div`
  position: absolute;
  top: -313px;
  left: 0;
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
    display: flex;
    align-items: center;
    margin: 0;
    color: #bdbdbd;
  }
  h4 {
    margin: 0;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 100%;
    display: flex;
    align-items: center;
    color: #1e2123;
  }
  .link {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 100%;
    text-decoration-line: underline;
    color: #664ef9;
  }
`;

export default function ContactComponent() {
  return (
    <ContactsComp>
      <img src={Boy} alt="boy" className="photo" />
      <p>Владелец</p>
      <h4> Владимир</h4>
      <h4> +375 (29) 291-14-44</h4>
      <Link to="#" className="link">
        vladimir6234@tut.by{" "}
      </Link>
      <FlexContainer gap="10px">
        <img src={Cvib} alt="boy" />
        <img src={CWhat} alt="boy" />
        <img src={CMail} alt="boy" />
      </FlexContainer>
    </ContactsComp>
  );
}
