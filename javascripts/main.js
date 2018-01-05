"use strict";

const model = require("./model");
const view = require("./view");
const $ = require("jquery");

$("#find").click(function(){
    model.fetchSpaceObjects($("#startDate").val(), $("#startDate").val()).then((data) => {
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
});

