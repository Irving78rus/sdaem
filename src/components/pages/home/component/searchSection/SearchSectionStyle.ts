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
export const BottomNav = styled.ul`
  display: flex;
  list-style-type: none;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  font-family: "Epilogue";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  padding-left: 0;
  margin: 0;
  text-decoration: none;
  li {
    padding: 15px;
    text-decoration: none;
    background-color: rgba(45, 57, 136, 0.5);
    &:first-child {
      border-top-left-radius: 10px;
    }
    &:last-child {
      border-top-right-radius: 10px;
    }
  }
  .link {
    font-family: "Epilogue";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    color: white;
    text-decoration: none;
    display: flex;
    align-items: center;
    img {
      padding-left: 10px;
    }
    &:focus {
      color: black;
      border-bottom: 3px solid #ffd54f;
      padding: 10px 0;
      background-color: white;
    }
  }
  .active {
    border-radius: 10px 10px 0 0;
    color: black;
    background-color: white;
  }
`;
 