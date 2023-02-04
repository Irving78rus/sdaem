import { useNavigate } from "react-router-dom";

//Иммитация импорта конфига
const portionSizePagination = 5;
//Иммитация импорта конфига

export const createNumbersForCell = (count: number) => {
  let oneStep: any = Array(count).keys();
  const res: number[] = [...oneStep].map((item: number) => item + 1);
  return res;
};


export const paginationHelper = (pagesCount: number[], portionNumber: number) => {
  let portionCount;
  let leftPortionPageNumber;
  let rightPortionPageNumber;

  if (pagesCount) {
    portionCount = Math.ceil(pagesCount.length / portionSizePagination);
    leftPortionPageNumber = (portionNumber - 1) * portionSizePagination;
    rightPortionPageNumber = portionNumber * portionSizePagination;
  }

  return {
    portionCount,
    leftPortionPageNumber,
    rightPortionPageNumber,
  };
};

export const getWord = (number: number, first: string, second: string, three: string) => {
  const lastFigure = number % 10;
  if (lastFigure === 1) return first;
  if (lastFigure > 1 && lastFigure < 5) return second;
  else return three;
};
export const scrollToTop = () => {
  window.scroll({
    top: 100,
    left: 0,
  });
};
