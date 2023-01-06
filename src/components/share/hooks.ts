import { useAppSelector } from "../../redux/hooks";

 
export const GetListUniqueItems = (param:any) => {
   
    
    const flat = useAppSelector((state: any) => state.baseFlat.flat);
    const getList = flat.map((item: any) => item[param]);
    const getUniqueList = getList.filter((item: any, pos: any) => getList.indexOf(item) === pos);
    console.log(getUniqueList);
  return getUniqueList
};
 