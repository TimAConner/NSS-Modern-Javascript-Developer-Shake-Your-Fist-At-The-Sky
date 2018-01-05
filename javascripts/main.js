"use strict";

const model = require("./model");

model.fetchSpaceObjects('2017-01-01', '2017-01-01').then((objects) => {
    console.log(objects);
});

