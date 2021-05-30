/*
1/ Can use var logger but using const is better 
because we don't want to accidentally overwrite the logger like this:
var logger = require("./greeter")
logger = 1 // logger.greet is not a function

2/ logger = 1:
If use const, error is "Assignment to constant variable."

1/ dont need to add .js extention
2/ other examples:
 "/.subFolder/logger" 
 "../logger"
*/
var logger = require("./greeter"); // same model

// Run: node test.js
// OP: { greet: [Function: log] }
console.log(logger);
// OP: Welcome Trinh to my website: http://trinhzz.com
// logger.greet("Trinh")

// logger.greet = function() {
//     console.log("trinh zzzzzz")
// }
logger.greet("Trinh");

// OP: http://trinhzz.com
// console.log(logger.url)