export interface recommendedСriteriaModel{
    title:string;
    name: string;
    value: number|string
  }
  

export const recommendedСriteria:recommendedСriteriaModel[] = [
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