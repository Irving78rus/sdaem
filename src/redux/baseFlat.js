import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import { useHref } from "react-router-dom";
import {flatList} from './flatCreater'
import {createFlatList} from './flatCreater'
createFlatList()
const initialState = {
  flat: flatList,
  params: { city: 'Минск', upPrice: 0, toPrice: 0,rooms:0,metro:'',district:'', sleepingPlaces:0,GasStove:null,Oven:null,
  CoffeeMaker:null,MicrowaveOven:null,Dishes:null,Dishwasher:null} ,
 
};
 
const baseFlat = createSlice({
  name: "baseFlat",
  initialState,
  reducers: {
    ResetSearchParameters: (state, param) => {
      state.params = param.payload  
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

export const { setCitytoStore, setUpPriceToStore, setToPriceToStore,setCountRooms,setGasStove,
  setMetroToStore,setDistrictToStore,setSleepingPlacesToStore,setOvenToStore,setCoffeeMakerToStore,
  setMicrowaveOvenToStore,setDishesToStore,setDishwasherToStore,ResetSearchParameters


} = baseFlat.actions;
export default baseFlat.reducer;
