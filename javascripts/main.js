"use strict";

const model = require("./model");
const view = require("./view");

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


    Promise.all([model.fetchFuckingString(objectsToFuck[0].name), model.fetchFuckingString(objectsToFuck[1].name), model.fetchFuckingString(objectsToFuck[2].name)]).then(fuckingPhrases => { 
        // console.log(fuckingPhrases);
        view.viewFuckingPhrases({
            "objects": fuckingPhrases   
        });
    });
});

