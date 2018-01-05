"use strict";

const $ = require("jquery");


const fetchApiKey = () => {
    return new Promise(function(resolve) {
        $.ajax({
            url: 'javascripts/apiKey.json'
        }).done((data) => {
            resolve(data.key);
        });
    });
};

module.exports.fetchSpaceObjects = (startDate, endDate) => {
    return new Promise(function(resolve) {
        fetchApiKey().then((key) => {
            $.ajax({
                url: `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=${key}`
            }).done((objects) => {
                resolve(objects);
            });
        });
    });
};

module.exports.fetchFuckingString = (asteroidToFuck) =>  {
    return new Promise(function(resolve) {
        $.ajax({
            url: `http://www.foaas.com/donut/${asteroidToFuck}/Cohort%2023`,
            dataType : "json",
            contentType: "application/json; charset=utf-8"
        }).done((fuckingPhrase) => {
            resolve(fuckingPhrase);
        });
    });
};