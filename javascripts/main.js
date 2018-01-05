"use strict";

const model = require("./model");

model.fetchSpaceObjects('2017-01-01', '2017-01-02').then((data) => {
    let objects = data.near_earth_objects;
    let dates = Object.keys(objects);

    let objectsToFuck = [];

    dates.forEach(date => {
        objects[date].forEach((spaceObject) => {
            if(spaceObject.is_potentially_hazardous_asteroid === true){
                objectsToFuck.push(spaceObject);
            }
        });
    });

    objectsToFuck.forEach((objectToFuck) => {
        model.fetchFuckingString(objectToFuck.name).then((fuckingPhrase) => {
            console.log(fuckingPhrase);
        });
    });
});

