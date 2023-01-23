import styled from "styled-components";

interface Props {
  height?: string;
  margin?: string;
  justifyContent?: string;
  flexDirection?: string;
  width?: string;
  backgroundColor?: string;
  background?: string;
}
export const List = styled.div<Props>`
  width: ${(props) => props.width || "100%"};
  height: 100%;
  background: #ffffff;
  display: flex;
  flex-wrap: wrap;
  top: 47px;
  left: 0;
  flex-direction: column;
  align-items: flex-start;
`;
export const SelectTitle = styled.p<Props>`
  margin: ${(props) => props.margin || `0`};
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: ${(props) => props.color || "#BDBDBD"};
`;

export const RightArrow = styled.div<Props>`
  width: 9px;
  height: 9px;
  border-top: ${(props) => `2.5px solid ${props.background}` || `2.5px solid black`};
  border-right: ${(props) => `2.5px solid ${props.background}` || `2.5px solid black`};
  transform: rotate(45deg);
`;
