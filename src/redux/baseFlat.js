import { createSlice } from "@reduxjs/toolkit";
 
import { createFlatList } from "./flatCreater";
 
const initialState = {
  flat: createFlatList(),
  params: {
    city: "",
    upPrice: "",
    toPrice: "",
    rooms: "",
    metro: "",
    district: "",
    sleepingPlaces: "",
    GasStove: null,
    Oven: null,
    CoffeeMaker: null,
    MicrowaveOven: null,
    Dishes: null,
    Dishwasher: null,
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

const baseFlat = createSlice({
  name: "baseFlat",
  initialState,
  reducers: {
    getFilterFlats: (state, param) => {
      state.pending = false
      state.params = param.payload;
      const allParams = {};
      for (let key in param.payload) {
        
        if (state.params[key]) {
          allParams[key] = param.payload[key];
        }
      }

      state.res = state.flat.filter((item) => {
        let resParams = true;
        for (let key in allParams) {
          if (allParams[key] === item[key]) {
          } else if (key === "upPrice" && item.cost > allParams.upPrice) {
          } else if (key === "toPrice" && item.cost < allParams.toPrice) {
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
