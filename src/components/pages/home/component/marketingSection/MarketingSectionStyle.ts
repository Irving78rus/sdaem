import styled from "styled-components";
import Back from "../../../../../assets/icon/404Back.png";

interface Props {
  img?: string;
  backgroundImage?: string;
  width?: string;
  height?: string;
  borderTopLeftRadius?: string;
  borderTopRightRadius?: string;
  borderBottomRightRadius?: string;
  borderBottomLeftRadius?: string;
  left?: string;
  margin?: string;
  borderRadius?: string;
  boxShadow?: string;
  background?: string;
}

export const Background = styled.div<Props>`
  background: linear-gradient(0deg, #7e6af3 1.04%, #6540cd 100%);
  min-height: 480px;
  border-bottom-left-radius: ${(props) => props.borderBottomLeftRadius || "40px"};
  border-bottom-right-radius: ${(props) => props.borderBottomRightRadius || "40px"};
  margin: ${(props) => props.margin || " 0 80px"};
`;
export const BackgroundImg = styled.div`
  background-image: url(${Back});
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
  min-height: 480px;
  h1 {
    color: white;
  }
  span {
    color: #ffd54f;
  }
`;

export const IMG = styled.div<Props>`
  position: relative;
  border-radius: ${(props) => props.borderRadius || "10px"};
  width: ${(props) => props.width || ""};
  height: ${(props) => props.height || ""};
  background-image: url(${(props) => props.backgroundImage || null});
  background-repeat: no-repeat;
  background-position: center;
  box-shadow: ${(props) => props.boxShadow || ""};
  p {
    margin: 37px;
    background: linear-gradient(90deg, #9d94ff 0%, #6b50e9 94.5%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    font-weight: 700;
    font-size: 13px;
    line-height: 16px;
    text-transform: uppercase;
  }
  .h3 {
    margin: 37px;
    color: white;
    font-weight: 700;
    font-size: 25px;
    line-height: 30px;
  }
  .button {
    width: 73px;
    height: 33px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #664ef9;
    border-radius: 16px;
    color: rgba(255, 255, 255, 0.7);
    padding: 8px 14px;
    &:hover {
      cursor: pointer;
      background: #612bfb;
      color: #ffffff;
    }
  }
  img {
    position: absolute;
    bottom: 18px;
    right: 18px;
  }
`;
export const MainBottomCard = styled.div`
  width:406px;
  height:345px;
  background-color:white;
  padding: 27px 37px;
  box-shadow: 0px 20px 40px rgba(135, 124, 202, 0.15);
border-radius: 10px;
h4{
  font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 22px;
 width:60%;
color: #664EF9;
}
}`;

export const SearchToMapBlock = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 75px;
  width: 390px;
  text-align: center;
  p,
  h1 {
    color: white;
  }
`;
export const CardGold = styled.div`
  background: linear-gradient(105.54deg, #ffd54f 33.53%, #fec100 94.13%);
  position: relative;
  border-radius: 10px;
  width: 406px;
  height: 345px;
  img {
    position: absolute;
    right: 0;
    bottom: 0;
  }
  .title {
    margin-top: 40px;
    text-align: center;
    font-weight: 700;
    font-size: 30px;
    line-height: 36px;
  }
  .wrapper {
    padding: 0 38px;
  }
  p {
    position: relative;
    z-index: 2;
  }
`;
