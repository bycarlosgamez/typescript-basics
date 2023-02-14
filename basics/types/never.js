"use strict";
(() => {
    const abc = (message) => {
        throw new Error(message);
    };
    abc('NEVER');
    console.log('always'); // <= never runs
})();
