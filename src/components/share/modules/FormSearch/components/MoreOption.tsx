import React from "react";
import styled from "styled-components";

interface Props {
  width?: string;
}

const Wrapper = styled.div`
  position: relative;
  top: 110%;
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 5px;
  text-decoration: none;
  a{
    color:black;
    text-decoration:none;
  }
`;
const List = styled.div<Props>`
  width: ${(props) => props.width || "1440px"};
  box-shadow: 0px 0px 40px rgba(135, 124, 202, 0.3);
  background: #ffffff;
  position: absolute;
  top: 47px;
  left: 0;
  div:hover {
    background: #f8f8f8;
  }
  border-radius: 10px;
`;
const DropTable = styled.div`
  padding: 15px;
`;
const MoreOption = (props: any) => {
  const allOption = [
    "Газовая плита",
    "Духовка",
    "Кофеварка",
    "Микроволновая печь",
    "Посуда",
    "Посудомоечная машина",
  ];

  return (
    <Wrapper {...props}>
      <Wrapper {...props}> {props.children}</Wrapper>
      {props.isActive && (
        <List {...props}>
          {allOption.map((item: any) => (
            <DropTable key={item}>{item}</DropTable>
          ))}
        </List>
      )}
    </Wrapper>
  );
};
export default MoreOption;
