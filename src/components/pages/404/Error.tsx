import React from "react";
import dots from "../../../assets/icon/dots.svg";
import ContentContainer from "../../UI/ContentContainer";
import FlexContainer from "../../UI/FlexContainer";
import Button from "../../UI/Button";
import { Background, BackgroundImg, Dots, LeftBlock, RightBlock } from "./ErrorStyle";
import HomeSvg from "../../../assets/icon/HomeSvg";

export default function Error() {

  return (
    <Background  >
      <BackgroundImg>
        <ContentContainer>
          <Dots top='100px'><img src={dots} alt='dots'></img></Dots>
          <Dots top='500px' left ='1200px'><img src={dots} alt='dots'></img></Dots>
          <FlexContainer margin='auto' height='600px' position='relative' >
            <LeftBlock>
              <h1>Ошибка 404</h1>
              <p>Возможно, у вас опечатка в адресе страницы, или её просто не существует</p>
              <Button background="#FFD54F" color="black" fontWeight="800"><HomeSvg fill='Black'></HomeSvg> Вернуться на главную</Button>
            </LeftBlock>
            <RightBlock>
              <p>404</p>
            </RightBlock>
          </FlexContainer>
        </ContentContainer>
      </BackgroundImg>
    </Background>
  );
}
