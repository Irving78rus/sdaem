import { createSlice} from "@reduxjs/toolkit";
 import {flatModel} from './flatCreater'
import { createFlatList } from "./flatCreater";


 interface initialStateModel {
  flat:  flatModel[];
  params: paramsModel;
  res: flatModel[];
  topNavigationFormSearch: any;
  pending:boolean;
  
}

const initialState:initialStateModel = {
  flat: createFlatList(),
  params: {
    city: "",
    upPrice: 0,
    toPrice: 0,
    rooms: 0,
    metro: "",
    district: "",
    sleepingPlaces: 0,
    GasStove: false,
    Oven: false,
    CoffeeMaker: false,
    MicrowaveOven: false,
    Dishes: false,
    Dishwasher: false,
  },
  res: [],
  topNavigationFormSearch: [
    {
      title: "Квартиры на сутки ",
      id: 1,
      active: false,
    },
    {
      title: "Коттеджи и усадьбы",
      id: 2,
      active: false,
    },
    {
      title: "Бани и Сауны",
      id: 3,
      active: false,
    },
    {
      title: "Авто на прокат",
      id: 4,
      active: false,
    },
  ],
  pending:false
};


interface paramsModel{
  city?:  string 
  cost?: number;
  upPrice?: number 
  toPrice?: number 
  rooms?: number 
  metro?: string 
  district?:string 
  sleepingPlaces?:number 
  GasStove?:boolean 
  Oven?:boolean 
  CoffeeMaker?:boolean 
  MicrowaveOven?:boolean 
  Dishes?:boolean 
  Dishwasher?:boolean 
 
} 

interface payloadModel  {
  payload: paramsModel 
  type: string;
}
const baseFlat = createSlice({
  name: "baseFlat",
  initialState,
  reducers: {
    getFilterFlats: (state:any, param:payloadModel) =>  {
      state.pending = false
      state.params  = param.payload;
      const allParams:paramsModel = {};
      for (let k in param.payload) {
        const key = k as keyof paramsModel;
         if (state.params[key]) {
         allParams[key] = state.params[key];
        }
      }

      state.res = state.flat.filter((item:flatModel) => {
        let resParams = true;
        for (let k in allParams) {
          const key = k as keyof paramsModel;
          if (allParams[key] === item[key]) {
          } else if ((allParams.upPrice&&(key === "upPrice")) && item.cost > allParams.upPrice) {
          } else if ((allParams.toPrice&&(key === "toPrice")) && item.cost < allParams.toPrice) {
          } else {
            resParams = false;
          }
        }

        return resParams && item;
      });
      state.pending = true
    },
    filterFlatForPrice: (state,param ) => {
      if(param.payload==='up'){}
      state.res = state.res.sort((a, b) => a.cost - b.cost);
      if (param.payload==='down') {
        state.res = state.res.sort((a, b) => b.cost - a.cost);
      }
    },
    
  },
});

export const {
  getFilterFlats,
  filterFlatForPrice
} = baseFlat.actions;
export default baseFlat.reducer;
