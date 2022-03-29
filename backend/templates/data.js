import dataCreation from "./dataCreation.js";
export function getTemplateHouseData(house){
    // has made an desition that we have five house to work with. Depending on the house name so has they diffrent rooms. So "hus1" has one room and so on. 
     switch (house) {
        case 'hus1': return createTemplateDataForRooms(1); break;
        case 'hus2': return createTemplateDataForRooms(2); break;
        case 'hus3': return createTemplateDataForRooms(3); break;
        case 'hus4': return createTemplateDataForRooms(4); break; 
        case 'hus5': return createTemplateDataForRooms(5); break;
     }
    return [house];
}


function randomRooms(number){
    switch(number){
        case 1: 
        break;
        case 2: 
        break;
        case 3: 
        break;
        case 4: 
        break;
        case 5: 
        break;
        default: 
        break;
    }
}


function createObjectForRoomsData(i){
    let templateObject = 
             {
                "name": i,
                "temperature": dataCreation.getRandomDates(),
                "humidity": dataCreation.randomHumid(),
                "date": new Date()
            }
    return templateObject;                   
}
 

function createTemplateDataForRooms(totalRooms){
    const start = {"rooms": []}
    for(let i = 0; i < totalRooms; i++){
        start["rooms"].push(createObjectForRoomsData(i));
    }
    return start
}

function getAllHouses(){
    return [{id:'hus1',name: 'singeRoom', totalTemp: dataCreation.getRandomDates(), date: new Date},{ id:'hus2',name: 'DoubleRoom',totalTemp: dataCreation.getRandomDates()},{id:'hus3',name: 'LargerHouse', totalTemp: dataCreation.getRandomDates()},{id:'hus4',name: 'Mansion', totalTemp: dataCreation.getRandomDates()},{id:'hus5',name: 'Castle', totalTemp: dataCreation.getRandomDates()}]
}


  export default {
    getTemplateHouseData: getTemplateHouseData,
    gettAllHouses: getAllHouses
    };



