// Content: Global Object, Modules
/*
Global Object:
1. In Javascript we have " window " object but in node we don't have " window " object
2. Instead we have " globalThis " in node.js. eg : globalThis.console.log(1+2);

Modules:
1. In node every file is module and the variables and functions 
defined in that file are scoped to that module. 
They are available outside of tha module

2.variables and functions defined in the module are scoped 
to that module they're private and not visible from outside.

 */ 
console.log("start")

// Func in global scope
function sayHello(name) {
    console.log('Hello' + name)
}

sayHello('Trinh')
// setTimeout()

// clearTimeout()

// setInterval()

// clearInterval()

// OP: undefined
var message = 'trinh zz'
console.log(globalThis.message)

// OP:
/* 
Module {
  id: '.',
  path: '/Users/tutrinh/first-app',
  exports: {},
  parent: null,
  filename: '/Users/tutrinh/first-app/app.js',
  loaded: false,
  children: [],
  paths: [
    '/Users/tutrinh/first-app/node_modules',
    '/Users/tutrinh/node_modules',
    '/Users/node_modules',
    '/node_modules'
  ]
}
 */
console.log(module)

// OP: Same result
console.log(1+2)
globalThis.console.log(1+2)