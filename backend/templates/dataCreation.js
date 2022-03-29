function randomDates(){
    const min = 0.0200,
          max = 40.120;
    return parseFloat((Math.random() * (max - min) + min)).toFixed(2);
}


function randomFullInt(){
    const min = 10,
          max = 70;
    return parseInt((Math.random() * (max - min) + min))
}

export default {
    getRandomDates: randomDates,
    randomHumid: randomFullInt
};
