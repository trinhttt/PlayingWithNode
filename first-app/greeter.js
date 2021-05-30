// Content: Global Object, Modules
/*
Exports log func as greet that can be accessed in another module(file)
*/

// ( function ( exports , require , __filename,  __dirname ) {
var url = "http://trinhzz.com";
function log(name) {
    console.log("Welcome " + name + " to my website: " + url);
}

module.exports.greet = log;
module.exports.url = url;
// });

// Users/tutrinh/first-app/greeter.js
console.log(__filename)

// undefined??
console.log(module.__filename)
