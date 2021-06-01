// available: ( exports , require , __filename,  __dirname ) 

var path = require("path");

console.log(__filename);///Users/tutrinh/PlayingWithNode/first-app/pathModule.js

var pathObj = path.parse(__filename);
/*
{
  root: '/',
  dir: '/Users/tutrinh/PlayingWithNode/first-app',
  base: 'pathModule.js',
  ext: '.js',
  name: 'pathModule'
}
*/
console.log(pathObj);

