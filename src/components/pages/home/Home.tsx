import React from "react";
import { useAppDispatch } from "../../../redux/hooks";
import { getFilterFlats } from "../../../redux/baseFlat";
import { useNavigate } from "react-router-dom";
import SearchSection from "./component/searchSection/SearchSection";
import MenuSection from "./component/menuSection/MenuSection";
import SliderSection from "./component/sliderSection/SliderSection";
import MarketingSection from "./component/marketingSection/MarketingSection";
import NewsSection from "./component/newsSection/NewsSection";

export default function Home() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const showFlatInCity = (item: string) => {
    dispatch(
      getFilterFlats({
        city: item,
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
      })
    );
    navigate("/Result");
  };

  return (
    <>
      <SearchSection />
      <MenuSection showFlatInCity={showFlatInCity} />
      <SliderSection showFlatInCity={showFlatInCity} />
      <MarketingSection />
      <NewsSection />
    </>
  );
}
