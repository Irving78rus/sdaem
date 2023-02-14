import styled from "styled-components";
export const BackgroundColor = styled.div`
  background-color: #f8f8f8;
`;

export const StylesTopLeftNav = styled.nav`
  max-width: 1440px;
  padding-left: 0;
  display: flex;
  list-style-type: none;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  font-family: "Epilogue";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #8291a3;
  margin: 0;
  li {
    margin-left: 57px;
  }
  li:first-child {
    margin-left: 0px;
  }
  .link {
    padding-left: 0;
    font-family: "Epilogue";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #8291a3;

    text-decoration: none;
    display: flex;
    align-items: center;
    img {
      padding-right: 10px;
    }
  }
  .active {
    color: black;
    border-bottom: 3px solid #ffd54f;
    padding: 10px 0;
  }
`;
export const StylesTopRightNav = styled(StylesTopLeftNav)`
  li {
    display: flex;
    align-items: center;
    img {
      height: 14px;
      padding-right: 0;
      padding-left: 10px;
    }
    .photo {
      width: 25px;
      height: 25px;
      border-radius: 50%;
      margin: 0;
      padding: 0;
    }
  }
  .modification {
    color: #664ef9;
    font-weight: 500;
    text-decoration: none;
  }
`;
export const Arrow = styled.div`
border:none;
}`;
 
export const List = styled.div`
 width: 100%;
 box-shadow: 0px 0px 40px rgba(135, 124, 202, 0.3);
 background: #ffffff;
 cursor:pointer;
 z-index:2;
 position: absolute;
 top: 26px;
 left: 0;
 div:hover {
   background: #f8f8f8;
   border-radius: 10px;
 }
 border-radius: 10px;
`;
export const DropTable = styled.div`
position: relative;
padding: 5px;
`;
export const FavoriteWrap = styled.div`
position: relative;
margin-left:10px;
`;
export const HeartCount = styled.div`
position: absolute;
 top:-15px;
 left:15px;
`;
