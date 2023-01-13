import { createSlice } from "@reduxjs/toolkit";
import { flatList } from './flatCreater'
import { createFlatList } from './flatCreater'
createFlatList()
 
const initialState = {
  flat: flatList,
  params: {
    city: 'Минск', upPrice: 0, toPrice: 0, rooms: 0, metro: '', district: '', sleepingPlaces: 0, GasStove: null, Oven: null,
    CoffeeMaker: null, MicrowaveOven: null, Dishes: null, Dishwasher: null
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
  ] ,
};



 

const baseFlat = createSlice({
  name: "baseFlat",
  initialState,
  reducers: {
    getFilterFlats: (state, param) => {
      state.params = param.payload
      
      const allParams = {}
      for (let key in param.payload) {
        if (state.params[key]) {
          allParams[key] = param.payload[key]
        }
      }
       
      state.res = state.flat.filter((item) => {
        let resParams = true
        for (let key in allParams) {
          if (allParams[key] === item[key]) { }
          else if (key === 'upPrice' && item.cost > allParams.upPrice) { }
          else if (key === 'toPrice' && item.cost < allParams.toPrice) { }
          else { resParams = false }
        }
        return resParams && item
      });
    },
    setCitytoStore: (state, param) => {
      state.params = { ...state.params, city: param.payload };
    },
    setUpPriceToStore: (state, price) => {
      state.params = { ...state.params, upPrice: price.payload };
    },
    setToPriceToStore: (state, price) => {
      state.params = { ...state.params, toPrice: price.payload };
    },
    setCountRooms: (state, rooms) => {
      state.params = { ...state.params, rooms: rooms.payload };
    },
    setGasStove: (state, GasStove) => {
      state.params = { ...state.params, GasStove: GasStove.payload };
    },
    setMetroToStore: (state, metro) => {
      state.params = { ...state.params, metro: metro.payload };
    },
    setDistrictToStore: (state, district) => {
      state.params = { ...state.params, district: district.payload };
    },
    setSleepingPlacesToStore: (state, sleepingPlaces) => {
      state.params = { ...state.params, sleepingPlaces: sleepingPlaces.payload };
    },
    setOvenToStore: (state, Oven) => {
      state.params = { ...state.params, Oven: Oven.payload };
    },
    setCoffeeMakerToStore: (state, CoffeeMaker) => {
      state.params = { ...state.params, CoffeeMaker: CoffeeMaker.payload };
    },
    setMicrowaveOvenToStore: (state, MicrowaveOven) => {
      state.params = { ...state.params, MicrowaveOven: MicrowaveOven.payload };
    },
    setDishesToStore: (state, Dishes) => {
      state.params = { ...state.params, Dishes: Dishes.payload };
    },
    setDishwasherToStore: (state, Dishwasher) => {
      state.params = { ...state.params, Dishwasher: Dishwasher.payload };
    },
  },
});

export const { setCitytoStore, setUpPriceToStore, setToPriceToStore, setCountRooms, setGasStove,
  setMetroToStore, setDistrictToStore, setSleepingPlacesToStore, setOvenToStore, setCoffeeMakerToStore,
  setMicrowaveOvenToStore, setDishesToStore, setDishwasherToStore, getFilterFlats


} = baseFlat.actions;
export default baseFlat.reducer;
