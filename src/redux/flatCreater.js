export const flatList = []
 
export const cityArr = ['Минск','Гомель','Брест',"Витебск","Гродно","Могилев"]
 const MetroArr = ['Лесная','Петроградское','Девяткино','Парнас',"Площадь Восстания","Международная","Чернышевского"]
 const districtArr = ['Заводской','Ленинский','Московский','Октябрьский',"Партизанский","Первомайский","Советский","Фрунзенский","Центральный" ]
 const boolRand=()=>{
    const  Rand =  Math.random() <0.5 ;
    return Rand
 }
 
 
 export const createFlatList = ()=>{
    let i = 0
    while (i<150000){
        const cityRand = Math.floor(Math.random() * cityArr.length);
        const costRand = Math.floor(Math.random() * 250)+1;
        const roomsRand = Math.floor(Math.random() * 5)+1;
        const metroRand = Math.floor(Math.random() * MetroArr.length);
        const districtRand = Math.floor(Math.random() * districtArr.length);
        const sleepingPlacesRand = Math.floor(Math.random() * 4)+1;
        
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
  }
   