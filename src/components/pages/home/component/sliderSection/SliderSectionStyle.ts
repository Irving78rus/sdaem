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

export const SubTitle = styled.p`
  text-transform: uppercase;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  background: linear-gradient(90deg, #9d94ff 0%, #6b50e9 94.5%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;
export const CardList = styled.div`
  width: 100%;
  .subTitle {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    line-height: 30px;
    color: #000000;
  }
`;

export const WrapperFilter = styled.div`
  gap: 20px;
  width: 800px;
  display: flex;
  justify-content: center;

  position: relative;
  input {
    height: 37px;
    margin-top: 67px;
    width: 616px;
    color: black;
    border-radius: 20px;
    border: none;
  }
  input::placeholder {
    padding-left: 15px;
  }
`;
export const WrapperBackground = styled.div`
  z-index: -1;
  width: 847px;
  left: 32px;
  height: 1000px;
  background: linear-gradient(90deg, #94afff23 0%, #4e65f91c 94.5%);
  border-top-left-radius: 40px;
  border-bottom-left-radius: 40px;
  position: absolute;
`;
export const Title = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #8291a3;
  opacity: 0.6;
`;
export const TotalFlat = styled.div`
   display: flex;
   flex-direction:column;
    p{
      display: flex;
    font-size: 76px;
    font-weight: 700;
    margin: 0;
    align-items: center;
    justify-content: space-between;
    }
    span{
        
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        background: linear-gradient(90deg, #9D94FF 0%, #6B50E9 94.5%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
       
    }
 }`;
export const UnderSlider = styled.div`
 display: flex;
 align-items:center;
 gap:20px;
 justify-content: space-between;
 padding: 0 80px ; 
 margin-bottom:60px;
}`;

export const RightArrow = styled.div<Props>`
  width: 9px;
  height: 9px;
  border-top: ${(props) => `2.5px solid ${props.background}` || `2.5px solid black`};
  border-right: ${(props) => `2.5px solid ${props.background}` || `2.5px solid black`};
  transform: rotate(45deg);
`;
