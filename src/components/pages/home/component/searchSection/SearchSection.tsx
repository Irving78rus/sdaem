import React, { useContext, useState } from "react";
import { Context } from "../../../../../redux/context";
import { useAppSelector } from "../../../../../redux/hooks";
import { stateModel, topNavigationFormSearchModel } from "../../../../../redux/types";
import FormSearch from "../../../../share/modules/FormSearch/FormSearch";
import ContentContainer from "../../../../UI/ContentContainer";
import FlexContainer from "../../../../UI/FlexContainer";
import { Background, BackgroundImg, BottomNav } from "./SearchSectionStyle";

export default function SearchSection() {
  const [isActiveFieldsFormSearch, setIsActiveFieldsFormSearch] = useState<number>(0);
  const { closeAllSelect } = useContext(Context);
  const topNavigationFormSearch = useAppSelector(
    (state: stateModel) => state.baseFlat.topNavigationFormSearch
  );
  return (
    <Background onClick={() => closeAllSelect()}>
      <BackgroundImg onClick={() => closeAllSelect()}>
        <ContentContainer justifyContent="center" flexDirection="column" padding="0 120px">
          <h1 style={{ margin: "80px 0 50px 0" }}>
            Sdaem.by - у нас живут <span>ваши объявления</span>
          </h1>
          <FlexContainer flexDirection="column" alignItems="flex-start" width="100%">
            <BottomNav>
              {topNavigationFormSearch.map((item: topNavigationFormSearchModel) => (
                <li
                  key={item.id}
                  className={isActiveFieldsFormSearch === item.id ? "link active" : "link"}
                  onClick={() => {
                    setIsActiveFieldsFormSearch(item.id);
                  }}
                >
                  {item.title}
                </li>
              ))}
            </BottomNav>
            <FormSearch
              map={true}
              clearButton={false}
              backgroundColor="white"
              flexDirection="column"
              alignItems="flex-start"
            ></FormSearch>
          </FlexContainer>
        </ContentContainer>
      </BackgroundImg>
    </Background>
  );
}
