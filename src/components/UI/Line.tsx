import styled from 'styled-components';
const LineStl = styled.div`
border-top: 1px solid #664EF9;
opacity: 0.1;
margin: 10px 0;
width: 100%;
`

export const Line = (props:any) => {
  return <LineStl {...props}/>;
};
