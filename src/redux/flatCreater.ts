
 
export const cityArr: string[] = ['Минск','Гомель','Брест',"Витебск","Гродно","Могилев"]
 const MetroArr: string[]  = ['Лесная','Петроградское','Девяткино','Парнас',"Площадь Восстания","Международная","Чернышевского"]
 const districtArr: string[]  = ['Заводской','Ленинский','Московский','Октябрьский',"Партизанский","Первомайский","Советский","Фрунзенский","Центральный" ]
 const boolRand =()=>{
    const  Rand:boolean =  Math.random() <0.5 ;
    return Rand 
 }
 
 interface flat {
    city:  string;
    cost: number;
    rooms: number;
    metro: string;
    district:string;
    sleepingPlaces:number;
    GasStove:boolean;
    Oven:boolean;
    CoffeeMaker:boolean;
    MicrowaveOven:boolean;
    Dishes:boolean;
    Dishwasher :boolean;
 }
 
 export const createFlatList = ()=>{
    const flatList:flat[] = []
    let i: number = 0
    while (i<150000 ){
        const cityRand: number = Math.floor(Math.random() * cityArr.length);
        const costRand: number = Math.floor(Math.random() * 250)+1;
        const roomsRand: number = Math.floor(Math.random() * 5)+1;
        const metroRand: number = Math.floor(Math.random() * MetroArr.length);
        const districtRand: number = Math.floor(Math.random() * districtArr.length);
        const sleepingPlacesRand: number = Math.floor(Math.random() * 4)+1;
        
        flatList.push(
            {
                city:  cityArr[cityRand],
                cost: costRand,
                rooms: roomsRand,
                metro: MetroArr[metroRand],
                district:districtArr[districtRand],
                sleepingPlaces:sleepingPlacesRand,
                GasStove:boolRand(),
                Oven:boolRand(),
                CoffeeMaker:boolRand(),
                MicrowaveOven:boolRand(),
                Dishes:boolRand(),
                Dishwasher :boolRand(), 
            }
        )
    i++
    }
    return flatList
  }
   