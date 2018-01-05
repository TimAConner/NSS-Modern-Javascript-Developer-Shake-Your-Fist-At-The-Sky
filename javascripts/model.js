"use strict";

const $ = require("jquery");

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

const fetchApiKey = () => {
    return new Promise(function(resolve) {
        $.ajax({
            url: 'javascripts/apiKey.json'
        }).done((data) => {
            resolve(data.key);
        });
    });
};