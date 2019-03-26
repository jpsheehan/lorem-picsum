const loremPicsum = require("../index");

// tests from the home page

// basic usage
console.log(loremPicsum({ width: 200, height: 300 }));
console.log(loremPicsum({ width: 200 }));

// random image
console.log(loremPicsum({ width: 200, height: 300, random: true }));

// greyscale
console.log(loremPicsum({ width: 200, height: 300, grayscale: true }));

// specific image
console.log(loremPicsum({ width: 200, height: 300, image: 0 }));

// blurred image
console.log(loremPicsum({ width: 200, height: 300, blur: true }));

// crop gravity
console.log(loremPicsum({ width: 200, height: 300, gravity: "east" }));
