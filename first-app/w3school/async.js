//----JavaScript Callbacks
//functions are executed in the sequence they are called.Not in the sequence they are defined.

//A callback is a function passed as an argument to another function.
//Where callbacks really shine are in asynchronous functions, 
//where one function has to wait for another function (like waiting for a file to load).
//EX:
function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
}

function getFile(myCallback) {
    let req = new XMLHttpRequest();
    req.open('GET', "mycar.html");
    req.onload = function () {
        if (req.status == 200) {
            myCallback(this.responseText);
        } else {
            myCallback("Error: " + req.status);
        }
    }
    req.send();
}

getFile(myDisplayer);
//In the example above, myDisplayer is the name of a function.
//It is passed to getFile() as an argument.

///----JavaScript Promises
let myPromise = new Promise(function (myResolve, myReject) {
    // "Producing Code" (May take some time)

    myResolve(); // when successful
    myReject();  // when error
});

// "Consuming Code" (Must wait for a fulfilled Promise)
myPromise.then(
    function (value) { /* code if successful */ },
    function (error) { /* code if some error */ }
);

///---Promise Object Properties
/**
Pending
Fulfilled
Rejected

The Promise object supports two properties: state and result.
While a Promise object is "pending" (working), the result is undefined.
When a Promise object is "fulfilled", the result is a value.
When a Promise object is "rejected", the result is an error object.
 */

//EX:
let myPromise = new Promise(function (myResolve, myReject) {
    setTimeout(function () { myResolve("I love You !!"); }, 3000);
});

myPromise.then(function (value) {
    document.getElementById("demo").innerHTML = value;
});

//Open file use Promise
let myPromise = new Promise(function (myResolve, myReject) {
    let req = new XMLHttpRequest();
    req.open('GET', "mycar.htm");
    req.onload = function () {
        if (req.status == 200) {
            myResolve(req.response);
        } else {
            myReject("File not Found");
        }
    };
    req.send();
});

myPromise.then(
    function (value) { myDisplayer(value); },
    function (error) { myDisplayer(error); }
);

//-----Async
/**
 * async and await make promises easier to write"
 * async makes a function return a Promise
* await makes a function wait for a Promise
 */

//Async Syntax
//The keyword async before a function makes the function return a promise:
async function myFunction() {
    return "Hello";
}
myFunction().then(
    function (value) { myDisplayer(value); },
    function (error) { myDisplayer(error); }
);

//Await Syntax
//The keyword await before a function makes the function wait for a promise:
//The await keyword can only be used inside an async function.
async function myDisplay() {
    let myPromise = new Promise(function (myResolve, myReject) {
        setTimeout(function () { myResolve("I love You !!"); }, 3000);
    });
    document.getElementById("demo").innerHTML = await myPromise;
}

myDisplay();


