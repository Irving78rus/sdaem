import styled from "styled-components";
export const BackgroundColor = styled.div`
background-color: white;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.08);
`
export const BottomNav = styled.ul`
padding-left: 0;
display: flex;
list-style-type: none;
justify-content: space-between;
align-items: center;
height: 60px;
font-family: "Epilogue";
font-style: normal;
font-weight: 400;
font-size: 14px;
color: #8291a3;
margin: 0;
text-decoration: none;
li {
  height:100%;
  margin-left: 57px;
  text-decoration: none;
}
li:first-child {
  margin-left: 10px;
}
.link {
  height:100%;
  padding-left: 0;
  font-family: "Epilogue";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  color: black;
  margin:auto;
  text-decoration: none;
  display: flex;
  align-items: center;
  img {
    padding-left: 10px;
  }
}
.active {
  color: black;
  border-bottom: 3px solid #ffd54f;
  padding: 10px 0;
}
` 