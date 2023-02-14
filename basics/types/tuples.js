"use strict";
(() => {
    const pedal = ['mastotron', true];
    // pedal[0] = 10; <= typescrpt throws error
    pedal[1] = false;
    console.log(pedal);
})();
