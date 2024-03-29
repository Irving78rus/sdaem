import  { useState, useMemo, useContext } from "react";
import FlexContainer from "../../../UI/FlexContainer";
import ContentContainer from "../../../UI/ContentContainer";
import CardResultTile from "./component/CardResultTile";
import CardResultList from "./component/CardResultList";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import Select from "../../../UI/Select";
import { Pagination } from "../../../share/modules/Pagination/Pagination";
import ShearSocial from "../../../../assets/icon/ShearSocial";
import { Context } from "../../../../redux/context";
import { Toggle } from "./ResultStyle";
import ButtonPlit from "../../../../assets/icon/ButtonPlit";
import ButtonList from "../../../../assets/icon/ButtonList";
import { getWord, scrollToTop } from "../../../share/utils/helpers";
import { flatModel, stateModel } from "../../../../redux/types";
import IconMap from "../../../../assets/icon/IconMap";
import { NavLink } from "react-router-dom";
import { filterFlatForPrice } from "../../../../redux/baseFlat";

interface ResultProps {
  res: flatModel[];
  favoriteFlats : flatModel[]|[];
}

export default function Result({ res ,favoriteFlats}: ResultProps) {
  const dispatch = useAppDispatch();
  const [isDisplayTile, setIsDisplayTile] = useState(true);
  const [showSelectFilter, setShowSelectFilter] = useState(false);
  const [activePage, setActivePage] = useState<number>(1);
  const [filter, setFilter] = useState("");
  const { setDropSelectList }: any = useContext(Context);
  const pending: boolean = useAppSelector((state: stateModel) => state.baseFlat.pending);
 
  
  
  const onClickButtonPagination = (page: number) => {
    setActivePage(page);
    scrollToTop()
  };
  const itemsPerPage: number = 6;

  const paginatedFlat: flatModel[] = useMemo(() => {
    const indexOfLastNews = activePage * itemsPerPage;
    const indexOfFirstNews = indexOfLastNews - itemsPerPage;
    return res.slice(indexOfFirstNews, indexOfLastNews);
  }, [activePage, res]);
  
const filterForPrice=(item:string)=>{
  if(item==='По возрастанию цены'){
    dispatch(filterFlatForPrice('up'))
  }
  if (item==='По убыванию цены'){
    dispatch(filterFlatForPrice('down'))
  }
}
 

  return (
    <>
      <ContentContainer
        flexDirection="column"
        width={"100%"}
        onClick={() => setDropSelectList(false)}
      >
        <FlexContainer width={"100%"} justifyContent={"space-between"} margin="20px 0 0 0">
          <Select
            background="#FFFFFF"
            boxShadow={"0px 5px 20px rgba(0, 96, 206, 0.1)"}
            options={["По убыванию цены", "По возрастанию цены"]}
            selected={filter || "Выберите"}
            selectedOption={setFilter}
            isActiveSelect={showSelectFilter}
            setIsActiveSelect={setShowSelectFilter}
            filterForPrice={filterForPrice}
          />
          <FlexContainer>
            <Toggle
              className={isDisplayTile ? undefined : "active"}
              onClick={() => {
                setIsDisplayTile(false);
              }}
            >
              <ButtonList fill="#664EF9"></ButtonList> Список
            </Toggle>
            <Toggle
              className={isDisplayTile ? "active" : undefined}
              onClick={() => {
                setIsDisplayTile(true);
              }}
            >
              <ButtonPlit fill="#664EF9"></ButtonPlit> Плитки
            </Toggle>

            <Toggle>{<IconMap fill="#664EF9 "></IconMap>} <NavLink to='/Map'>Показать на карте</NavLink> </Toggle>
          </FlexContainer>
        </FlexContainer>
        {pending ? (
          <>
            <h4>
              {getWord(res.length, "Найден", "Найдено", "Найдено")} {res.length}{" "}
              {getWord(res.length, "результат", "результата", "результатов")}
            </h4>
            <FlexContainer flexWrap="wrap" gap={"40px"}>
              {paginatedFlat.length !== 0 &&
                paginatedFlat.map((item: flatModel, index: number) =>
                  isDisplayTile ? (
                    <CardResultTile key={index} flat={item} favoriteFlats={favoriteFlats}></CardResultTile>
                  ) : (
                    <CardResultList key={index} flat={item} favoriteFlats={favoriteFlats}></CardResultList>
                  )
                )}
            </FlexContainer>
          </>
        ) : (
          <div>Задайте параметры поиска</div>
        )}

        <FlexContainer width={"100%"} alignItems={"center"} margin={"50px 0"}>
          <Pagination
            itemsPerPage={itemsPerPage}
            onClickButtonPagination={onClickButtonPagination}
            activePage={activePage}
            pageQuantity={res}
          />
          <ShearSocial fill={"#1E2123"} background={"#F4F5FA"}></ShearSocial>
        </FlexContainer>
      </ContentContainer>
    </>
  );
}
