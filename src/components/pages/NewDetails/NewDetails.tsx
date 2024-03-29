import React from "react";
import FlatImage from "../../../assets/icon/FlatImage.png";
import dots from "../../../assets/icon/dots.svg";
import { Circle, Container, ContainerNew, Flex, HeaderBackground, Title } from "./NewDetailsStyle";
import Button from "../../UI/Button";
import FlexContainer from "../../UI/FlexContainer";
import ContentContainer from "../../UI/ContentContainer";
import ShearSocial from "../../../assets/icon/ShearSocial";
import HomeSvg from "../../../assets/icon/HomeSvg";
import CardNew from "../news/modules/RenderNews/component/CardNew";

export default function New() {
  const arr: number[] = [1, 2, 3];
  return (
    <>
      <HeaderBackground height="280px">
        <Container>
          <Flex>
            <HomeSvg></HomeSvg>
            <p>Новости</p>
            <Circle></Circle>
            <p>Линия Сталина: суровый отдых в усадьбах на сутки Линия Сталина: </p>
          </Flex>
          <Title>Линия Сталина: суровый отдых в усадьбах на сутки</Title>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Button background="rgba(102,78,249,0.1)" color="#664EF9">
              14 Января 2008
            </Button>
            <FlexContainer gap="15px">
              <ShearSocial></ShearSocial>
            </FlexContainer>
          </div>
        </Container>
      </HeaderBackground>
      <ContainerNew>
        <FlexContainer flexDirection="column" alignItems="start">
          <img src={FlatImage} alt="flatImage"></img>
          <img src={dots} alt="dots" className={"dots"}></img>
          <p>
            Итак, утром вы выезжаете в путь по Молодеченской трассе. Если автомобиля у вас нет -
            садитесь на маршрутку в сторону Молодечно от железнодорожного вокзала. Остановка
            называется «Линия Сталина» - да-да, именно здесь вы и проведёте ближайшие несколько
            часов, а вероятнее всего – останетесь до самого вечера.
          </p>

          <p>
            «Линия Сталина» - это уникальный музейный комплекс, располагающийся под открытым небом.
            Поэтому желательно приезжать сюда в хорошую погоду. Его территория поистине огромна:
            целых 26 га. Такое название дано музею неспроста: «Линией Сталина» в 20е-30е гг. XX века
            именовали цепь укреплений, созданную для защиты государственной границы СССР. Комплекс
            же построен лишь в 2005 году – к шестидесятой годовщине Победы в Великой Отечественной
            войне.
          </p>

          <p>
            Если вы заранее позаботились о том, чтобы снять усадьбу на сутки в направлении
            Молодечно, то можете провести в музейном комплексе хоть целый день. Здесь действительно
            есть на что посмотреть: ДОТы, испещрённые следами немецких снарядов, окопы,
            противотанковые заграждения, зенитные пушки, бронетехника… Вы встретите даже элементы
            ракетных войск – и всё это не муляжи, а настоящие боевые орудия! За отдельную плату вам
            предложат пострелять из винтовки и пулемёта, а также прокатиться на танке.
            Проголодались? Загляните в кафе и насладитесь сытным домашним обедом.
          </p>

          <p>
            Посетить «Линию Сталина» будет интересно как взрослым, так и детям. Особенно мальчишкам!
            Уставшие от впечатлений, они будут рады вместо долгой дороги домой остановиться на ночь
            в уютном современном коттедже. На сайте можно выбрать и снять посуточно наиболее удобный
            для вас вариант. Проведите незабываемые выходные за городом – приезжайте в «Линию
            Сталина»!
          </p>

          <p> Отличная усадьба в 10 км от "Линии Сталина".</p>
        </FlexContainer>
      </ContainerNew>
      <HeaderBackground height="777px">
        <ContentContainer justifyContent="center">
          <FlexContainer flexDirection="column" alignItems="start">
            <h2 style={{ marginTop: 60 }}>Читайте так же</h2>
            <FlexContainer gap="30px">
              {arr.map((item: number) => (
                <CardNew key={item}></CardNew>
              ))}
            </FlexContainer>
          </FlexContainer>
        </ContentContainer>
      </HeaderBackground>
    </>
  );
}
