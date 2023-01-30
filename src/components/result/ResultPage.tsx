import React, {  useContext } from "react";
import home from "../../assets/icon/home.png";
import Button from "../UI/Button";
import FlexContainer from "../UI/FlexContainer";
import ContentContainer from "../UI/ContentContainer";
import FormSearch from "../home/FormSearch";
 
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
 
import { Context } from "../../redux/context";
import { BackgroundColor, Circle, Flex, HeaderBackground, Title  } from "./ResultStyle";
 
import { getFilterFlats } from "../../redux/baseFlat";
import { flatModel, paramsModel, stateModel } from "../../redux/types";
 
import Result from "./Result";

interface recommendedСriteriaModel{
  title:string;
  name: string;
  value: number|string
}

export default function ResultPage() {
  const { setDropSelectList }:any = useContext(Context);
  const params: paramsModel = useAppSelector((state: stateModel) => state.baseFlat.params);
  const res: flatModel[] = useAppSelector((state: stateModel) => state.baseFlat.res);

  const recommendedСriteria:recommendedСriteriaModel[] = [
    { title: "Недорогие", name: "toPrice", value: 60 },
    { title: "1-комнатные", name: "rooms", value: 1 },
    { title: "2-комнатные", name: "rooms", value: 2 },
    { title: "3-комнатные", name: "rooms", value: 3 },
    { title: "4-комнатные", name: "rooms", value: 4 },
    { title: "5-комнатные", name: "rooms", value: 5 },
    { title: "Заводской р.", name: "district", value: "Заводской" },
    { title: "Ленинский р.", name: "district", value: "Ленинский" },
    { title: "Московский р.", name: "district", value: "Московский" },
    { title: "Октябрьский р.", name: "district", value: "Октябрьский" },
    { title: "Партизанский р.", name: "district", value: "Партизанский" },
    { title: "Первомайский р.", name: "district", value: "Первомайский" },
    { title: "Советский р.", name: "district", value: "Советский" },
    { title: "Фрунзенский р.", name: "district", value: "Фрунзенский" },
    { title: "Центральный р.", name: "district", value: "Центральный" },
  ];

  const dispatch = useAppDispatch();
  const addParamsToStore = (item: recommendedСriteriaModel) => {
    dispatch(getFilterFlats({ [item.name]: item.value }));
  };
  const favoriteFlats = useAppSelector((state: stateModel) => state.baseFlat.favoriteFlats);
   return (
    <>
      <HeaderBackground height="280px">
        <ContentContainer flexDirection={"column"} alignItems={"flex-start"}>
          <FlexContainer flexDirection="column" alignItems={"flex-start"}>
            <Flex>
              <img src={home} alt="home" />
              <Circle></Circle>
              {params.city ? (
                <p>
                  Квартиры в {" "}
                  {params.city === "Гродно"
                    ? "Гродно"
                    : params.city === "Гомель"
                    ? "Гомеле"
                    : params.city + "e"}{" "}
                </p>
              ) : (
                <p>Квартиры в Белоруссии</p>
              )}
            </Flex>
            {params.city ? (
              <Title>
                Аренда квартир в{" "}
                {params.city === "Гродно"
                  ? "Гродно"
                  : params.city === "Гомель"
                  ? "Гомеле"
                  : params.city + "e"}{" "}
              </Title>
            ) : (
              <Title>Аренда квартир в Белоруссии</Title>
            )}
            <p>Рекомендуем посмотреть </p>
            <FlexContainer justifyContent={"flex-start"} gap={"15px"} flexWrap="wrap">
              {recommendedСriteria.map((item) => (
                <Button
                  key={item.title}
                  color={"#664EF9"}
                  height={"30px"}
                  padding={"6px 10px"}
                  background={"rgba(102, 78, 249, 0.1)"}
                  onClick={() => {
                    addParamsToStore(item);
                  }}
                  backgroundHover="rgba(102, 78, 249, 0.2)"
                >
                  {item.title}
                </Button>
              ))}
            </FlexContainer>
          </FlexContainer>
        </ContentContainer>
      </HeaderBackground>
      <BackgroundColor onClick={() => setDropSelectList(false)}>
        <FlexContainer width={"100%"} flexDirection="column">
          <FormSearch
            map={false}
            clearButton={true}
            flexDirection="row"
            alignItems="center"
            justifyContent={"space-between"}
            color="#664EF9"
          ></FormSearch>
        </FlexContainer>
      </BackgroundColor>
         <Result res={res} favoriteFlats={favoriteFlats}></Result>
       
    </>
  );
}
