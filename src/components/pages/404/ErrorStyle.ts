import styled from "styled-components";
import Back from "../../../assets/icon/404Back.png";
interface Props {
  top?: string;
  left?: string;
}

export const Background = styled.div`
  background: linear-gradient(0deg, #7e6af3 1.04%, #6540cd 100%);
`;
export const BackgroundImg = styled.div`
  background-image: url(${Back});
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;

export const Dots = styled.div<Props>`
  position: absolute;
  width: 61px;
  height: 61px;
  top: ${(props) => props.top || ""};
  left: ${(props) => props.left || ""};
`;
export const LeftBlock = styled.div`
  width: 50%;
  h1 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 60px;
    line-height: 73px;
    color: #ffffff;
    text-shadow: 0px 1px 5px rgba(0, 0, 0, 0.25);
  }
  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: #ffffff;
  }
`;
export const RightBlock = styled.div`
  width: 50%;
  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 260px;
    line-height: 73px;
    color: #ffffff;
    opacity: 0.4;
  }
`;
