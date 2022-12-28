import { useEffect, useState } from "react";
 
import { PaginationStl, PaginationButton,ScrollPagination } from "./style";

export const Pagination = ({ pageQuantity, activePage, onClickButtonPagination, itemsPerPage }:any) => {
  const quantityButtons = Array.from(
    { length: Math.ceil(pageQuantity.length / itemsPerPage) },
    (v, i) => i + 1
  );
  const SizePage = 7;
  const [portionNumber, setPortionNumber] = useState(1);
  const portionCount = Math.ceil(pageQuantity.length / (SizePage*itemsPerPage))
  let leftPortionPageNumber = (portionNumber - 1) * SizePage + 1;
  let rightPortionPageNumber = portionNumber * SizePage;
console.log(portionCount,portionNumber);
  return (
    <PaginationStl>
      {portionNumber > 1 && (
        <>
          {quantityButtons.length > 7 && (
            <PaginationButton
              onClick={() => {
                onClickButtonPagination(1);
                setPortionNumber(1);
              }}
              className={`${activePage === 1 && "activeButton"}`}
            >
              {1}
            </PaginationButton>
          )}
          <ScrollPagination
            onClick={() => {
              setPortionNumber(portionNumber - 1);
            }}
          >
            ...
          </ScrollPagination>
        </>
      )}
      {pageQuantity.length > itemsPerPage &&
        quantityButtons
          .filter((p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
          .map((buttonValue, index) => {
            return (
              <PaginationButton
                key={index}
                onClick={() => {
                  onClickButtonPagination(buttonValue);
                }}
                className={`${activePage === buttonValue && "activeButton"}`}
              >
                 
                {buttonValue}
              </PaginationButton>
            );
          })}
      {portionCount > portionNumber && (
        <>
         <ScrollPagination
            onClick={() => {
              setPortionNumber(portionNumber + 1);
            }}
          >
            ...
          </ScrollPagination>
          {quantityButtons.length > 7 && (
            <PaginationButton
              onClick={() => {
                onClickButtonPagination(quantityButtons.length);
                setPortionNumber(portionCount );
              }}
              className={`${activePage === quantityButtons.length && "activeButton"}`}
            >
              {quantityButtons.length}
            </PaginationButton>
          )}
        </>
      )}
    </PaginationStl>
  );
};
