import React, { useContext, useEffect } from "react";
import Metro from "../../../../../assets/icon/Metro";
import { getFilterFlats } from "../../../../../redux/baseFlat";
import { Context } from "../../../../../redux/context";
import { useAppDispatch, useAppSelector } from "../../../../../redux/hooks";
import { flatModel, stateModel } from "../../../../../redux/types";
import Slider from "../../../../share/modules/Slider/Slider";
import { GetListUniqueItems } from "../../../../share/utils/hooks";
import Button from "../../../../UI/Button";
import FlexContainer from "../../../../UI/FlexContainer";
import Select from "../../../../UI/Select";
import { VerticalLine } from "../../../../UI/VerticalLine";
import {
  CardList,
  RightArrow,
  SubTitle,
  Title,
  TotalFlat,
  UnderSlider,
  WrapperBackground,
  WrapperFilter,
} from "./SliderSectionStyle";

export default function SliderSection({ showFlatInCity }: any) {
  const {
    metro,
    setMetro,
    district,
    setDistrict,
    isActiveSelectMetro,
    setIsActiveSelectMetro,
    isActiveSelectDistrict,
    setIsActiveSelectDistrict,
  } = useContext(Context);
  const dispatch = useAppDispatch();
  const uniqueMetro = GetListUniqueItems("metro");
  const uniqueDistrict = GetListUniqueItems("district");
  const flats = useAppSelector((state: stateModel) => state.baseFlat.flat);
  const res = useAppSelector((state: stateModel) => state.baseFlat.res);
  useEffect(() => {
    dispatch(getFilterFlats({ metro, district }))

  }, [metro, district,dispatch])
  return (
    <CardList>
      <FlexContainer width="100%" flexDirection="column" alignItems="flex-start" padding={"0 80px"}>
        <SubTitle>Квартиры на сутки </SubTitle>
        <FlexContainer width="100%">
          <h3 className="subTitle"> Aренда квартир в Минске</h3>
          <WrapperFilter>
            <FlexContainer gap="10px">
              <FlexContainer>
                <Select
                  background={"#FFFFFF"}
                  boxShadow={"0px 5px 20px rgba(0, 96, 206, 0.1)"}
                  options={uniqueMetro}
                  selected={metro || "Метро"}
                  selectedOption={setMetro}
                  isActiveSelect={isActiveSelectMetro}
                  setIsActiveSelect={setIsActiveSelectMetro}
                  right="-30px"
                />
                <FlexContainer z-index="5" right="150px" top="5px" alignItems="center">
                  <Metro fill="#BDBDBD" />
                </FlexContainer>
              </FlexContainer>

              <Select
                background={"#FFFFFF"}
                boxShadow={"0px 5px 20px rgba(0, 96, 206, 0.1)"}
                options={uniqueDistrict}
                selected={district || "Район"}
                selectedOption={setDistrict}
                isActiveSelect={isActiveSelectDistrict}
                setIsActiveSelect={setIsActiveSelectDistrict}
              />
            </FlexContainer>
            <WrapperBackground></WrapperBackground>
          </WrapperFilter>
        </FlexContainer>

        <FlexContainer margin="30px auto 0 auto">
          <Slider
            photos={res}
            position="static"
            content={true}
            PAGE_WIDTH="1347"
            width="1347px"
            height={"615px"}
            style={{ marginTop: "30px" }}
          ></Slider>
        </FlexContainer>

        <UnderSlider>
          <TotalFlat>
            <FlexContainer alignItems="center">
              <p>
                {flats.filter((flat: flatModel) => "Минск" === flat.city).length} <span>+</span>{" "}
              </p>
            </FlexContainer>
            <Title>Предложений по Минску</Title>
          </TotalFlat>
          <VerticalLine></VerticalLine>
          <Button
            boxShadow="0px 15px 40px rgba(0, 96, 206, 0.15)"
            backgroundHover="linear-gradient(90deg, #867CFC 0%, #6929F3 94.5%)"
            onClick={() => {
              showFlatInCity("Минск");
            }}
          >
            Посмотреть все <RightArrow background="white"></RightArrow>{" "}
          </Button>
        </UnderSlider>
      </FlexContainer>
    </CardList>
  );
}
