import React, { useState } from "react";
import FlatImage from "../../../../../assets/icon/FlatImage.png";
import tel from "../../../../../assets/icon/tel.svg";
import styled from "styled-components";
import Button from "../../../../UI/Button";
import FlexContainer from "../../../../UI/FlexContainer";
import ContactComponent from "./ContactComponent";
import Metro from "../../../../../assets/icon/Metro";
import UserImg from "../../../../../assets/icon/UserImg";
import Slider from "../../../../share/modules/Slider/Slider";
import { flatModel} from "../../../../../redux/types";
import IconMap from "../../../../../assets/icon/IconMap";
import { useAppDispatch } from "../../../../../redux/hooks";
import { changeFavoriteFlat } from "../../../../../redux/baseFlat";
import HeartImg from "../../../../../assets/icon/HeartImg";

const Card = styled.div`
  display: flex;
  position: relative;
  background-color: #fff;
  margin-top: 24px;
  width: 100%;
  filter: drop-shadow(rgba(135, 124, 202, 0.15) 0px 20px 40px);
  border-radius: 10px;
  h4 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 19px;
  }
  p {
    color: #686868;
    margin: 0;
  }
  .line {
    width: 300px;
    height: 2px;
    background-color: #f8f8f8;
    margin: 20px auto;
  }
  .cost {
    margin: 15px 0;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: #664ef9;
    p {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      color: #bdbdbd;
    }
  }
  .rooms {
    background: #f8f8f8;
    border-radius: 18px;
    padding: 8px;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #686868;
    margin: 0 5px;
    display: flex;
    align-items: center;
    span {
      color: #664ef9;
    }
    svg {
      margin-right: 6px;
    }
  }
  .title {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 100%;
    display: flex;
    color: #1e2123;
  }
  .city {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
    display: flex;
  }
  .description-city {
    margin-top: 20px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    color: #686868;
  }
`;

const Gold = styled.div`
  background: linear-gradient(106.06deg, #ffd54f 1.12%, #fec100 97.96%);
  border-radius: 0px 10px 10px 10px;
  position: absolute;
  z-index: 5;
  top: 0;
  right: 0;
  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    margin: 0;
    padding: 9px 12px;
    color: #ffffff;
    text-shadow: 0px 1px 0px rgba(147, 79, 0, 0.3);
  }
`;
const IMGContainer = styled.div`
 position: relative;
 width:100%
 border-radius: 10px;
 img{
  width:500px;
  position: relative;
  border-radius: 10px; 
  height:100%;
}
}
`;
interface CardResultListProps {
  flat: flatModel;
  favoriteFlats: flatModel[] | [];
}
export default function CardResultList({ flat, favoriteFlats }: CardResultListProps) {
  const dispatch = useAppDispatch();
  const addFavoriteFlat = (e: any) => {
    dispatch(changeFavoriteFlat(flat.id));
  };
  const [showContact, setShowContact] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  return (
    <>
      <Card>
        <IMGContainer>
          <Slider
            photos={[1, 2, 3, 4, 5, 6, 7]}
            widthButton="100%"
            top="50%"
            position="absolute"
            width="407px"
            height="200px"
            PAGE_WIDTH="1221"
            CardResultImg={FlatImage}
            margin="0"
          ></Slider>
          <Gold>
            <p>Gold</p>
          </Gold>
        </IMGContainer>
        <FlexContainer flexDirection="column" padding="0 20px" alignItems="flex-start">
          <FlexContainer width={"100%"}>
            <p className="title">
              {flat.rooms}-комн. апартаменты на {flat.city}
            </p>
            <FlexContainer flexDirection="column" alignItems="flex-end" className="cost">
              Цена: {flat.cost} BYN <p>за сутки</p>
            </FlexContainer>
          </FlexContainer>
          <p className="city">
            {" "}
            <IconMap fill={"#BDBDBD"}></IconMap> {flat.city}, б-р Мулявина, д. 10
          </p>
          <FlexContainer>
            <div className="rooms">
              <UserImg fill={"#686868"} opacity="1"></UserImg>
              {flat.rooms} {`(${flat.rooms - 1}+1)`}
            </div>
            <p className="rooms">{flat.rooms} комн. </p>
            <p className="rooms">
              <Metro fill={"#664EF9"}></Metro> {flat.metro}{" "}
            </p>
            <p className="rooms">
              {" "}
              <span> район: </span> {flat.district}{" "}
            </p>
          </FlexContainer>

          <p className="description-city">
            Какое-то описание квартиры, описание квартиры, описание квартиры, описание квартиры,
            описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание
            квартиры, описание ...
          </p>

          <FlexContainer width="100%" margin="15px 0" position="relative">
            <Button
              background="#FFFFFF"
              color="#664EF9"
              fontSize="14px"
              padding="9px 15px"
              borderRadius="18px"
              fontWeight="700"
              boxShadow="0px 5px 20px rgba(0, 96, 206, 0.1)"
              onClick={() => {
                setShowContact(!showContact);
                setShowDetails(false);
              }}
              backgroundHover="#F5F3FF"
              boxShadowHover="0px 5px 20px rgba(0, 96, 206, 0.1)"
            >
              <img src={tel} alt="tel"></img> Контакты
            </Button>
            <Button
              background="rgba(235, 87, 87, 0.1)"
              color="#EB5757"
              fontSize="14px"
              padding="9px 15px"
              borderRadius="22px"
              onClick={(e: any) => {
                addFavoriteFlat(e);
              }}
            >
              В закладки{" "}
              <HeartImg
                fill={"#EB5757"}
                back={favoriteFlats.some((item: flatModel) => item.id === flat.id) ? "red" : "none"}
              ></HeartImg>
            </Button>

            <Button
              onClick={() => {
                setShowDetails(!showDetails);
                setShowContact(false);
              }}
              background="rgba(255, 213, 79, 0.1)"
              color="#FEC100;"
              fontSize="14px"
              backgroundHover="rgba(255, 213, 79, 0.2)"
            >
              Подробнее
            </Button>
            {showContact && <ContactComponent></ContactComponent>}
            {showDetails && <ContactComponent isShowContact={flat}></ContactComponent>}
          </FlexContainer>
        </FlexContainer>
      </Card>
    </>
  );
}
