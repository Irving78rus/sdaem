 
import {  useAppSelector } from "../../../redux/hooks";
import {  stateModel } from "../../../redux/types";

 
export const GetListUniqueItems = (param:string) => {
    const flat = useAppSelector((state: stateModel) => state.baseFlat.flat);
    const getList = flat.map((item:any) => item[param]);
    const getUniqueList = getList.filter((item: string, pos: number) => getList.indexOf(item) === pos);
 
  return getUniqueList
};

 