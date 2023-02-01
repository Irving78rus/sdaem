import styled from "styled-components";
export const BackgroundColor = styled.div`
background-color: white;
box-shadow: 0px -11px 40px rgba(39, 95, 158, 0.05);
margin-top: auto;
`
 
export const BlockLeft = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: flex-start;
width: 300px;
p {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;
  color: #8291a3;
}
gap:10px;
`
export const BlockRight = styled.div`
display: flex;
  flex-direction: column;
  width:  70%;
`
export const FooterLink = styled.div`
display: flex;
  justify-content: space-between;
  
  &:first-child {
    margin-left: 0;
  }
`
export const NavStl = styled.ul`
  padding-left: 0;
  display: flex;
  flex-direction: column;
  list-style-type: none;
  justify-content: space-between;
  align-items: flex-start;
  gap:10px;
  font-family: "Epilogue";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #8291a3;
  margin: 0;
  text-decoration: none;
  li {
    
    text-decoration: none;
  }
  li:first-child {
    margin-left: 0;
  }
  .link {
    padding-left: 0;
    font-family: "Epilogue";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    color: black;
    line-height: 17px;
    text-decoration: none;
    display: flex;
    align-items: center;
     
  }
  .active {
    color: black;
    border-bottom: 3px solid #ffd54f;
    padding: 10px 0;
  }
  .flat {
    padding-left: 0;
    line-height: 17px;
    font-family: "Epilogue";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #8291A3;
  
    text-decoration: none;
    display: flex;
    align-items: center;
    img {
      padding-right: 10px;
    }
  }
 `
 export const Ikon = styled.div`
   display: flex;
  justify-content: space-between;
  img{
    margin-left: 15px;
  
}
 `