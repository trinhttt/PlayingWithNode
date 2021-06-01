const fs = require('fs');

/*
Same OP:
[
  'app.js',
  'fsModule.js',
  'greeter.js',
  'osModule.js',
  'pathModule.js',
  'test.js'
]
*/
const files = fs.readdirSync('./first-app/'); // sync method
console.log(files);

// asynchronous method
// NOTE: use function for callback
fs.readdir('./first-app/', function (error, files) {
    if (error)
        console.log('Error', error);
    else
        console.log('Result', files)
});