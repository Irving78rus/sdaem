import { NavLink } from "react-router-dom";
import styled from "styled-components";

interface Props {
  height?: string;
}
export const HeaderBackground = styled.div<Props>`
  background: linear-gradient(90deg, #94afff30 0%, #94afff30 94.5%);
  height: ${(props) => props.height || "0px"};
`;
export const Container = styled.div`
  width: 844px;
  margin: 0 auto;
  margin-top: 42px;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 7px;
`;
export const ContainerNew = styled.div`
  width: 844px;
  margin: 0 auto;
  position: relative;
  top: -40px;
  display: flex;
  flex-direction: column;
  img {
    width: 100%;
    border-radius: 10px;
  }
  .dots {
    position: absolute;
    width: 61px;
    height: 61px;
    top: 100px;
    left: -100px;
  }
`;

export const Title = styled.h1`
  margin: 0;
`;
export const Flex = styled.div`
  justify-content: flex-start;
  align-items: center;
  display: flex;
  gap: 7px;
  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 100%;

    color: #686868;
  }
`;

export const MarginT = styled.div`
  position: relative;
  padding: 0 80px;
  margin-top: 42px;
`;

export const WrapperTitle = styled.div`
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
export const TopTitle = styled.p`
  font-size: 14px;
  color: #686868;
`;

export const Circle = styled.div`
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background-color: #664ef9;
`;

export const WrapperFilter = styled.div`
  position: absolute;
 
  right: -80px;
  top: 0px;
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
    outline:none;
  }
  input::placeholder {
    padding-left: 15px;
  }
  .button {
    width: 7%;
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

