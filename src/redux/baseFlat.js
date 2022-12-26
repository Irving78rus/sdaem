import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import { useHref } from "react-router-dom";
import {flatList} from './flatCreater'
import {createFlatList} from './flatCreater'
createFlatList()
const initialState = {
  flat: flatList,
  params: { city: '', upPrice: 0, toPrice: 0,rooms:0,metro:'',district:'', sleepingPlaces:0,GasStove:null,Oven:null,
  CoffeeMaker:null,MicrowaveOven:null,Dishes:null,Dishwasher:null} 
};
  

const baseFlat = createSlice({
  name: "baseFlat",
  initialState,
  reducers: {
    setParams: (state, param) => {
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
  },
});

export const { setParams, setUpPriceToStore, setToPriceToStore,setCountRooms,setGasStove } = baseFlat.actions;
export default baseFlat.reducer;
