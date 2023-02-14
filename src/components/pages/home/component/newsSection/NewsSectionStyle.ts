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
export const BottomLastBlock = styled.div`
  margin-top:300px;
  margin-bottom:50px;
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
  a{
    display:block;
   color:black;
   font-family: 'Inter';
   font-style: normal;
   font-weight: 600;
   font-size: 14px;
   line-height: 17px;
   text-decoration: none;
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

  font-family: "Inter";
  font-style: normal;
  font-weight: 800;
  font-size: 14px;
  line-height: 17px;
  cursor: pointer;
  a {
    color: #664ef9;
  }
`;
