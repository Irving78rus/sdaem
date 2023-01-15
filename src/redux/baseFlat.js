import { createSlice } from "@reduxjs/toolkit";
import { flatList } from "./flatCreater";
import { createFlatList } from "./flatCreater";
createFlatList();

const initialState = {
  flat: flatList,
  params: {
    city: "",
    upPrice: 0,
    toPrice: 0,
    rooms: 0,
    metro: "",
    district: "",
    sleepingPlaces: 0,
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
};

const baseFlat = createSlice({
  name: "baseFlat",
  initialState,
  reducers: {
    getFilterFlats: (state, param) => {
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
    },
     
  },
});

export const {
  getFilterFlats,
} = baseFlat.actions;
export default baseFlat.reducer;
