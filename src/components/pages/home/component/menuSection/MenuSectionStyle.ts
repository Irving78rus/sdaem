import styled from "styled-components";

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
export const IMGBlock = styled.div<Props>`
  background-color: inherit;
  width: 950px;
  gap: 20px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;
export const TextBlock = styled.div`
  background-color: white;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 28%;
  ul {
    width: 100%;
    padding: 0;
    li {
      list-style-type: none;
      color: #feb700;
      font-weight: 400;
      font-size: 14px;
      line-height: 10px;
      height: 33px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      p:hover {
        margin-left: 10px;
        cursor: pointer;
      }
    }
    li:first-child {
      color: #333333;
      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
    }
  }
`;
export const ButtonRightArrow = styled.div`
  position: absolute;
  width: 11px;
  height: 11px;
  border-top: 2px solid #ffffff;
  border-right: 2px solid #ffffff;
  top: 37%;
  left: 30%;
  transform: rotate(45deg);
`;
