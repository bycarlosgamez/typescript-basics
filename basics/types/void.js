"use strict";
(() => {
    function callVoid() {
        // return 1; <= typescript throws an error
    }
    const a = callVoid();
    console.log(a);
})();
