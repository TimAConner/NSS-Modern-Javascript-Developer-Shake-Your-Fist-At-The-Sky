"use strict";


const messageTemplate = require("../templates/asteroidMessage.hbs");
const $ = require("jquery");

module.exports.viewFuckingPhrases = (phrases) => {
    $("#output").append(messageTemplate(phrases));
};