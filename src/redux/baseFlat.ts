import { createSlice } from "@reduxjs/toolkit";

import { createFlatList } from "./flatCreater";
import { flatModel, initialStateModel, paramsModel, payloadModel } from "./types";


const initialState: initialStateModel = {
  flat: createFlatList(),
  params: {
    city: "",
    upPrice: "",
    toPrice: "",
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
  pending: false,
  favoriteFlats: []
};

const baseFlat = createSlice({
  name: "baseFlat",
  initialState,
  reducers: {
    getFilterFlats: (state: initialStateModel, param: payloadModel): void => {
      state.pending = false;
      state.params = param.payload;
      const allParams: any = {};
      for (let k in param.payload) {
        const key = k as keyof paramsModel;
        if (state.params[key]) {
          allParams[key] = state.params[key];
        }
      }
      state.res = state.flat.filter((item: flatModel) => {
        let resParams = true;
        for (let k in allParams) {
          const key = k as keyof paramsModel;
          if (allParams[key] === item[key]) {
          } else if ((allParams.upPrice && (key === "upPrice")) && item.cost > allParams.upPrice) {
          } else if ((allParams.toPrice && (key === "toPrice")) && item.cost < allParams.toPrice) {
          } else {
            resParams = false;
          }
        }
        return resParams && item;
      });
      state.pending = true;
    },
    filterFlatForPrice: (state, param) => {
      if (param.payload === 'up') {
        state.res = state.res.sort((a, b) => a.cost - b.cost);
      }
      if (param.payload === 'down') {
        state.res = state.res.sort((a, b) => b.cost - a.cost);
      }
    },
    changeFavoriteFlat: (state, id ) => {
      if (
        state.favoriteFlats.every(
          (item:any) => item.id !== id.payload
        )
      ) {
        const selectedFlats = state.flat.filter(item=>item.id===id.payload)
        state.favoriteFlats.push(...selectedFlats);
        console.log(1);
        
      }
      else{
        state.favoriteFlats=state.favoriteFlats.filter((item:any)=>item.id!==id.payload)
        console.log(2);
      }
    },

  },
});

export const {
  getFilterFlats,
  filterFlatForPrice,
  changeFavoriteFlat
} = baseFlat.actions;
export default baseFlat.reducer;
