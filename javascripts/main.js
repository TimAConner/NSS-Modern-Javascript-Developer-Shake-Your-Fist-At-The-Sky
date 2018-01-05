"use strict";

const model = require("./model");

model.fetchSpaceObjects('2017-01-01', '2017-01-02').then((data) => {
    let objects = data.near_earth_objects;
    let dates = Object.keys(objects);

    let fuckedObjects = [];

    dates.forEach(date => {
        objects[date].forEach((spaceObject) => {
            if(spaceObject.is_potentially_hazardous_asteroid === true){
                fuckedObjects.push(spaceObject);
            }
        });
    });
});

