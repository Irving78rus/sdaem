import TopHeader from "./components/pages/header/topHeader/TopHeader";
import BottomHeader from "./components/pages/header/bottomHeader/BottomHeader";
import NewDetails from "./components/pages/NewDetails/NewDetails";
import Home from "./components/pages/home/Home";
import СontactsComponent from "./components/pages/contact/СontactsComponent";
import Error from "./components/pages/404/Error";
import Catalog from "./components/pages/catalog/Catalog";
import Favorite from "./components/pages/favorite/Favorite";
import Footer from "./components/pages/footer/Footer";
import { Route, Routes } from "react-router-dom";
import  Authorization  from "./components/pages/authorization/Authorization";
import  Registration  from "./components/pages/Registration/Registration";
import { Context } from "./redux/context";
import ResultPage from "./components/pages/searchResult/ResultPage";
import NewsLIst from "./components/pages/news/NewsList";
import  YandexMap  from "./components/share/component/YandexMap";
import { useAppContext } from "./components/share/utils/hooks";
import styled from "styled-components";

const AppWrapper = styled.section`
min-height: 100vh;
 display: flex;
 flex-direction: column;
`;


function App() {
  const appContext = useAppContext();
  
  return (
    <AppWrapper  >
      <Context.Provider value={appContext} >
        <TopHeader />
        <BottomHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="News" element={<NewsLIst />} />
          <Route path="News/*" element={<NewDetails/>} />
          <Route path="Map" element={<YandexMap />} />
          <Route path="Contact" element={<СontactsComponent />} />
          <Route path="Authorization" element={<Authorization />} />
          <Route path="Result" element={<ResultPage />} />
          <Route path="Registration" element={<Registration/>} />
          <Route path="Catalog" element={<Catalog />} />
          <Route path="Favorite" element={<Favorite />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Context.Provider>
      </AppWrapper  >
  );
}

export default App;
