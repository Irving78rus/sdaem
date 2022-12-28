import styled from 'styled-components';

export const PaginationStl = styled.section`
 
  display: flex;
  column-gap: 3px;
`;

export const PaginationButton = styled.button.attrs((props) => ({
  className: props.className,
}))`
  font-weight: 400;
  font-size: 18px;
  line-height: 20px;
  padding: 0 6px;
  border: none;
  background-color: transparent;
  border-bottom: 2px solid transparent;
  cursor: pointer;
  color: #686868;
  &:hover {
    
    border-bottom: 2px solid #ffd54f;
  }

  &.activeButton {
    color: #000000;
    border-bottom: 2px solid #ffd54f;
  }
`;
export const ScrollPagination = styled.div `
  
  &:hover {
    cursor: pointer;
    border-bottom: 2px solid #ffd54f;
  }
 
`;
