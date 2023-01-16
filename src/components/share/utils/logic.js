//Иммитация импорта конфига
const portionSizePagination =5
//Иммитация импорта конфига


export const createNumbersForCell = (count) => {
    return [...Array(count).keys()].map(item=>item+1);
  };


 export const paginationHelper =(pagesCount,portionNumber)=>{
   
  let portionCount
  let leftPortionPageNumber
  let rightPortionPageNumber
 
  if(pagesCount){
   
    portionCount = Math.ceil(pagesCount.length/portionSizePagination)
    leftPortionPageNumber = (portionNumber-1)*portionSizePagination
    rightPortionPageNumber =  portionNumber * portionSizePagination 
  }
 
  return {
    portionCount,
    leftPortionPageNumber,
    rightPortionPageNumber
  }
 } 
 export const getWord = (number, first, second, three) => {
  const lastFigure = number % 10;
  if (lastFigure === 1) return first;
  if (lastFigure > 1 && lastFigure < 5) return second;
  else return three;
};