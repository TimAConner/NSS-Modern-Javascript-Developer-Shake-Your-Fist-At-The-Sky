"use strict";

const $ = require("jquery");

module.exports.fetchWeatherData = (startDate, endDate) => {
    fetchApiKey().then((data) => {
        console.log(data);
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