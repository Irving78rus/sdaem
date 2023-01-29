import React, { useState }  from "react";
import ButtonPlit from "../../assets/icon/ButtonPlit";
import IconMap from "../../assets/icon/IconMap";
import { useAppSelector } from "../../redux/hooks";
import { stateModel } from "../../redux/types";
import Result from "../result/Result";
import FlexContainer from "../UI/FlexContainer";
import { Toggle } from "./FavoriteStyle";
 

 
export default function Favorite() {
  const [isDisplayTile, setIsDisplayTile] = useState(true);
  const res = useAppSelector((state: stateModel) => state.baseFlat.res);
  const favoriteFlats = useAppSelector((state: stateModel) => state.baseFlat.favoriteFlats);
  const res2 = res.filter(item=>item.id===favoriteFlats[1])
  return (
    <div  >
        <Result res={favoriteFlats}></Result>
    </div>

  );
}
