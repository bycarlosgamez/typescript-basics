"use strict";
(() => {
    const addNumbers = (a, b) => {
        return a + b;
    };
    const greet = (name) => {
        return `Hola ${name}`;
    };
    const welcome = () => `Welcome to Bangkok`;
    let myFunction;
    // let myFunction: Function;
    // let myFunction: (a: number, b: number) => number; //<= accepts a function that return number
    myFunction = 10;
    console.log(myFunction);
    myFunction = addNumbers;
    console.log(myFunction(1, 3));
    myFunction = greet;
    console.log(myFunction('you'));
    myFunction = welcome;
    console.log(myFunction());
})();
