import styled from "styled-components";
import Back from "../../assets/img/404Back.png";

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
}

export const Background = styled.div<Props>`
  background: linear-gradient(0deg, #7e6af3 1.04%, #6540cd 100%);
  min-height: 600px;
  border-bottom-left-radius: ${(props) => props.borderBottomLeftRadius || "40px"};
  border-bottom-right-radius: ${(props) => props.borderBottomRightRadius || "40px"};
  margin: ${(props) => props.margin || " 0 80px"};
`;
export const BackgroundImg = styled.div`
  background-image: url(${Back});
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
  min-height: 600px;
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
export const MarginT = styled.div`
  position: relative;
  max-width: 1440px;
  padding: 0 80px;
  margin: 0 auto;
  margin-top: 42px;
`;
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
    width: 200px;
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
 width:560px;
 justify-content: space-between;
 padding: 0 80px ; 
 margin-bottom:60px;
}`;
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
export const BottomLastBlock = styled.div`
  margin-top:200px;
  
  display: flex;
  justify-content: space-between;
  width:100%;
  
}`;
export const LeftBlock = styled.div`
   width:50%;
   h3{
    font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 30px;
  }
  p{
    margin:0;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    span{
      font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
    }
  }
}`;
export const RightBlock = styled.div`
 width: 406px;
 padding: 33px 23px;
 &>*{
  margin:3px 0;
 }

box-shadow: 0px 20px 40px rgba(135, 124, 202, 0.15);
border-radius: 10px;
 h2{
  margin-bottom:26px ;
  font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 25px;
line-height: 30px;
 }
 p{
  font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 17px;
&:hover{
  color: #664EF9;
cursor:pointer;
}
 }
 span{
 font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 15px;
color: #8291A3;
}
}`;

export const ShowAllStl = styled.div`
  margin-top: 20px;
  color: #664ef9;
  font-family: "Inter";
  font-style: normal;
  font-weight: 800;
  font-size: 14px;
  line-height: 17px;
  cursor: pointer;
`;
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
