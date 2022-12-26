import styled from 'styled-components';
const LineStl = styled.div`
border-right: 1px solid #664EF9;;
opacity: 0.2;
height:80px;

`

export const VerticalLine = (props:any) => {
  return <LineStl {...props}/>;
};
