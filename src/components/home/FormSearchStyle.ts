import styled from "styled-components";

interface Props {
    height: any;
    margin: any;
    justifyContent: any;
    flexDirection: any;
    width?: any;
    backgroundColor: any;
  }
  export  const List = styled.div<Props>`
    width: ${(props) => props.width || "100%"};
    box-shadow: 0px 0px 40px rgba(135, 124, 202, 0.3);
    height:100%;
    background: #ffffff;
    display:flex;
    flex-wrap:wrap;
    top: 47px;
    left: 0;
    flex-direction:column;
    align-items:flex-start;
     
   
  `;
 export const SelectTitle = styled.p`
   margin:0px;
   margin-bottom:11px;
   font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #BDBDBD;
  `;
  export const RightArrov =   styled.div`
   
  width:9px;
  height:9px;
  border-top: 2.5px solid black;
  border-right: 2.5px solid black;
   transform: rotate(45deg)
  `
  