import React  from "react";
import { useAppSelector } from "../../redux/hooks";
import { stateModel } from "../../redux/types";
import Result from "../result/Result";

export default function Favorite() {
 
  const favoriteFlats = useAppSelector((state: stateModel) => state.baseFlat.favoriteFlats);
  
  return (
    <div  >
      <Result res={favoriteFlats} favoriteFlats={favoriteFlats}></Result>
    </div>

  );
}
