import { Circle, TopTitle, WrapperFilter, WrapperTitle } from "./NewsSearchStyle";
import FlexContainer from "../../../../UI/FlexContainer";
import HomeSvg from "../../../../../assets/icon/HomeSvg";
import LoopSvg from "../../../../../assets/icon/LoopSvg";

export default function NewsSearch() {
  return (
    <FlexContainer margin="0 auto" position="relative">
      <WrapperTitle>
        <FlexContainer gap="10px" justifyContent="flex-start">
          <HomeSvg></HomeSvg>
          <Circle></Circle>
          <TopTitle>Новости</TopTitle>
        </FlexContainer>
        <h2>Новости</h2>
      </WrapperTitle>

      <WrapperFilter>
        <input placeholder="Поиск по статьям" type={"text"} />
        <button className="button">
      <LoopSvg></LoopSvg>
        </button>
      </WrapperFilter>
    </FlexContainer>
  );
}
