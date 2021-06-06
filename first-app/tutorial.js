var x = 5;
x++;
x--;
var z = x ** 2;

//in: Property in Object
"PI" in Math

    // instanceof: Instance of Object	
    instanceof Array

/*
===	: equal value + type
&& Logical AND 	x && y
|| Logical OR 	x || y
? : ? "Yes" : "No"
*/

// JavaScript Data Types
var x = { firstName: "John", lastName: "Doe" };    // Object

//When adding a number and a string, JavaScript will treat the number as a string.
var x = 16 + "Volvo"; //"16Volvo"
var x = 16 + 4 + "Volvo"; //20Volvo - treats 16 and 4 as numbers, until it reaches "Volvo"
var x = "Volvo" + 16 + 4; //Volvo164 - since the first operand is a string, all operands are treated as strings.
var answer1 = "It's alright";             // It's alright
var answer2 = "He is called 'Johnny'";    // He is called 'Johnny'
var answer3 = 'He is called "Johnny"';    // He is called "Johnny"

//**JavaScript has only one type of numbers.
//Numbers can be written with, or without decimals:
var x1 = 34.00;     // Written with decimals
var x2 = 34;        // Written without decimals
var y = 123e5;      // 12300000
var z = 123e-5;     // 0.00123

//JavaScript Arrays
var cars = ["Saab", "Volvo", "BMW"];

//JavaScript Objects
//JavaScript objects are written with curly braces {}.
var person = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };

//The typeof Operator
typeof "" // Returns "string"
typeof "John" // Returns "string"
typeof 0              // Returns "number"
typeof 314            // Returns "number"
typeof 3.14           // Returns "number"
typeof (3)            // Returns "number"
typeof (3 + 4)        // Returns "number"

//Undefined
//In JavaScript, a variable without a value, has the value undefined. The type is also undefined.
var car;    // Value is undefined, type is undefined
car = undefined;    // Value is undefined, type is undefined

//Empty Values
var car = "";    // The value is "", the typeof is "string"

//the data type of null is an object.

//You can empty an object by setting it to null:
var person = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };
person = null;    // Now value is null, but type is still an object

//You can also empty an object by setting it to undefined:
var person = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };
person = undefined;   // Now both value and type is undefined

//undefined and null are equal in value but different in type:
typeof undefined           // undefined
typeof null                // object

null === undefined         // false
null == undefined          // true

//Complex Data
//The typeof operator returns "object" for arrays because in JavaScript arrays are objects.
typeof { name: 'John', age: 34 } // Returns "object"
typeof [1, 2, 3, 4]             // Returns "object" (not "array", see note below)
typeof null                  // Returns "object"
typeof function myFunc() { }   // Returns "function"

//Local Variables
function myFunction() {
    var carName = "Volvo";
    // code here CAN use carName
}

///You can access object properties in two ways:
var person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};
person.lastName;
person["lastName"];

///Objects can also have methods.
// fullName is also a property, {...} is Property Value
var person1 = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};

//////////This Keyword
/**
 * The JavaScript this keyword refers to the object it belongs to.
 */

//this Alone
/**
When used alone, the owner is the Global object, so this refers to the Global object.
In a browser window the Global object is [object Window]:
 */
var x = this; //Global object is [object Window] 

//this in a Function (Default)
function myFunction() {
    return this;//this refers to the Global object [object Window]
}
///this in a Function (Strict)
//So, when used in a function, in strict mode, this is undefined.
/**
 *  Strict Mode là một quy mẫu nghiêm khắc của Javascript. 
 * Nếu như coi việc viết code bình thường là Normal Mode, thì Strict Mode sẽ có thêm nhiều quy định khác so với Normal Mode. 
 * Việc đó khiến cho một thao tác vốn bình thường có thể chạy ngon lành trở nên lỗi, và throw ra errors.
 * Strict Mode có nhiều hạn chế hơn so với normal mode. Với việc tuân theo những quy định đó, 
 * bạn sẽ làm cho code Javascript của mình trở nên sáng sủa, dễ đọc hơn, 
 * cũng như ít vướng phải những lỗi không mong muốn.
 * Để sử dụng Strict Mode trong code của mình, bạn có thể dùng đoạn text là "use strict";.
 * Bạn có thể đặt đoạn text đó ở đầu file, hay ở đầu phần thân của một hàm. 
 * Nếu bạn đặt "use strict"; ở đầu file, phạm vi của Strict Mode sẽ là toàn bộ file đó.
 * Nếu bạn đặt "use strict"; ở đầu phần thân hàm của một function, Strict Mode sẽ được áp dụng cho chỉ mình function đó.
 * See more:
 * https://www.w3schools.com/js/js_strict.asp
*/
"use strict";
function myFunction() {
    return this; //this is undefined
}

//Object Method Binding
var person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function () {
        //this refers to the person object.
        return this.firstName + " " + this.lastName;
    }
};

//Explicit Function Binding
//The call() and apply() methods are predefined JavaScript methods. 
//They can both be used to call an object method with another object as argument.

var person = {
    fullName: function () {
        return this.firstName1 + " " + this.lastName;
    }
}
var person2 = {
    firstName1: "John",
    lastName: "Doe",
}
// when calling person1.fullName with person2 as argument, 
//this will refer to person2, even if it is a method of person1:
person1.fullName.call(person2);// Will return "John Doe"

/**
 * Do Not Declare Strings, Numbers, and Booleans as Objects!
 * When a JavaScript variable is declared with the keyword "new", the variable is created as an object:
Avoid String, Number, and Boolean objects. 
They complicate your code and slow down execution speed.
*/
// AVOID:
var x = new String();        // Declares x as a String object
var y = new Number();        // Declares y as a Number object
var z = new Boolean();       // Declares z as a Boolean object

///String Length
var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var sln = txt.length;
//var x = "We are "Vikings""; //=> error
/**use
 * \' => '
 * \" => "
 * \\ => \
 * Six other escape sequences: \b, \f, \n, \r, \t, \v
 */
var x = "We are \"Vikings\"";// "We are "Vikings""; //=> error

/**Strings Can be Objects
 * strings can also be defined as objects with the keyword new:
 * but Don't create strings as objects. It slows down execution speed.
 * The new keyword complicates the code. This can produce some unexpected results:
 */

var x = "John";// typeof x will return string
var y = new String("John");// typeof y will return object
// (x == y) is true because x and y have equal values
// (x === y) is false because x and y have different types (string and object)

//** comparing two JavaScript objects will always return false
var x = new String("John");
var y = new String("John");
// (x == y) is false because x and y are objects
// (x === y) is false because x and y are objects

//String Length
var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var sln = txt.length; //26

//Finding a String in a String
//The indexOf() method returns the index of (the position of) the first occurrence of a specified text in a string:
//The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:
//Both indexOf(), and lastIndexOf() return -1 if the text is not found.
var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("locate");//7 - JavaScript counts positions from zero.

var str = "Please locate where 'locate' occurs!";
var pos = str.lastIndexOf("locate");//21

var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("locate", 1); //7
//if the second parameter is 15, the search starts at position 15
var pos = str.indexOf("locate", 15); //21

//Searching for a String in a String
//The search() method searches a string for a specified value and returns the position of the match
/**
 * The two methods, indexOf() and search(), are equal?
They accept the same arguments (parameters), and return the same value?
The two methods are NOT equal. These are the differences:
The search() method cannot take a second start position argument.
The indexOf() method cannot take powerful search values
 */

var str = "Please locate where 'locate' occurs!";
var pos = str.search("locate");//7

///Extracting String Parts
/**
 * There are 3 methods for extracting [giải nén] a part of a string:

slice(start, end)
substring(start, end)
substr(start, length)
 */

//The slice() Method
var str = "Apple, Banana, Kiwi";
var res = str.slice(7, 13);//Banana

//If a parameter is negative(-), the position is counted from the end of the string.
//This example slices out a portion of a string from position -12 to position -6:
var str = "Apple, Banana, Kiwi";
var res = str.slice(-12, -6);//Banana

var str = "Apple, Banana, Kiwi";
var res = str.slice(-12)//Banana, Kiwi

///The substring() Method
//substring() is similar to slice().
//The difference is that substring() cannot accept negative indexes.
//If you omit the second parameter, substring() will slice out the rest of the string.
var str = "Apple, Banana, Kiwi";
var res = str.substring(7, 13);//Banana

///The substr() Method
//substr() is similar to slice()
//the second parameter specifies the length of the extracted part.
var res = str.substr(7, 6);//Banana

//If you omit the second parameter, substr() will slice out the rest of the string.
var res = str.substr(7);//Banana, Kiwi
//If the first parameter is negative, the position counts from the end of the string.
var res = str.substr(-4);//Kiwi

///Replacing String Content
//The replace() method replaces a specified value with another value in a string:
str = "Please visit Microsoft!";
var n = str.replace("Microsoft", "W3Schools");//Please visit Microsoft!

//By default, the replace() method replaces only the first match:
str = "Please visit Microsoft and Microsoft!";
var n = str.replace("Microsoft", "W3Schools");

str = "Please visit Microsoft!";
var n = str.replace(/MICROSOFT/i, "W3Schools");//Please visit Microsoft!

///-----Converting to Upper and Lower Case
var text1 = "Hello World!";
var text2 = text1.toUpperCase();//"Hello World!"
var text2 = text1.toLowerCase();//"Hello World!"

///------The concat() Method: joins two or more strings:
var text1 = "Hello";
var text2 = "World";
var text3 = text1.concat(" 1 ", text2);//Hello 2 World!
var text = "Hello" + " " + "World!";// do the same

///-----The trim() method removes whitespace from both sides of a string
var str = "       Hello World!        ";
alert(str.trim());//Hello World!

///----JavaScript String Padding
let str = "5";
str = str.padStart(4, 0);// result is 0005
str = str.padEnd(4, 0);// result is 5000

///-----The charAt() method returns the character at a specified index (position) in a string:
var str = "HELLO WORLD";
str.charAt(0);// returns H

///----The charCodeAt() Method: returns a UTF-16 code
var str = "HELLO WORLD";
str.charCodeAt(0);         // returns 72
str[0] = "A";             // Gives no error, but does not work
str[0];                   // returns H

///----Converting a String to an Array
var txt = "a,b,c,d,e";   // String
var arr = txt.split(",");          // Split on commas
arr[0]//a

var str = "Hello";
var arr = str.split("");
var text = "";
var i;
for (i = 0; i < arr.length; i++) {
    text += arr[i] + ","//H,e,l,l,o
}

///------JavaScript Numbers-------////
var x = 3.14;    // A number with decimals
var y = 3;       // A number without decimals
var x = 123e5;    // 12300000
var y = 123e-5;   // 0.00123
//Precision(độ 9 xác)
var x = 999999999999999;   // x will be 999999999999999
var y = 9999999999999999;  // y will be 10000000000000000

//The maximum number of decimals(số thập phân) is 17, but floating point arithmetic is not always 100% accurate:
var x = 0.2 + 0.1;         // x will be 0.30000000000000004
//To solve the problem above, it helps to multiply and divide:
var x = (0.2 * 10 + 0.1 * 10) / 10;       // x will be 0.3

//Adding Numbers and Strings
var x = 10;
var y = "20";
var z = x + y;           // z will be 1020 (a string)

var x = 10;
var y = 20;
var z = "30";
var result = x + y + z;//3030

//- Numeric Strings
//convert strings to numbers in all numeric operations:
var x = "100";
var y = "10";
var z = x / y;       // z will be 10
var z = x - y;       // z will be 90

//- NaN - Not a Number:(Not a Number)
var x = 100 / "Apple";  // x will be NaN (Not a Number)
var x = 100 / "10";     // x will be 10

var x = 100 / "Apple";
isNaN(x);               // returns true because x is Not a Number

var x = NaN;
var y = 5;
var z = x + y;         // z will be NaN

//Or the result might be a concatenation:
var x = NaN;
var y = "5";
var z = x + y;         // z will be NaN5

//NaN is a number: typeof NaN returns number:
typeof NaN;            // returns "number"

//- Infinity(vô cực)
//Infinity (or -Infinity) is the value JavaScript will return if you calculate a number outside the largest possible number.
var myNumber = 2;
while (myNumber != Infinity) {   // Execute until Infinity
    myNumber = myNumber * myNumber;
}
//Division by 0 (zero) also generates Infinity:
var x = 2 / 0;       // x will be Infinity
var y = -2 / 0;       // y will be -Infinity
//Infinity is a number: typeof Infinity returns number.
typeof Infinity;     // returns "number"

//- Hexadecimal
var x = 0xFF;        // x will be 255
//toString() method to output numbers from base 2 to base 36.
//Hexadecimal is base 16. Decimal is base 10. Octal is base 8. Binary is base 2.
var myNumber = 32;
myNumber.toString(10);  // returns 32
myNumber.toString(32);  // returns 10
myNumber.toString(16);  // returns 20
myNumber.toString(8);   // returns 40
myNumber.toString(2);   // returns 100000

//- Numbers Can be Objects
var x = 123;// typeof x returns number
var y = new Number(123);// typeof y returns object
// (x == y) is true because x and y have equal values
// (x === y) is false because x and y have different types

var x = new Number(500);
var y = new Number(500);
// (x == y) is false because objects cannot be compared
//Comparing two JavaScript objects will always return false.

///---JavaScript Number Methods
//The toString() method returns a number as a string.
var x = 123;
x.toString();            // returns 123 from variable x
(123).toString();        // returns 123 from literal 123
(100 + 23).toString();   // returns 123 from expression 100 + 23

//The toExponential() Method
var x = 9.656;
x.toExponential(2);     // returns 9.66e+0
x.toExponential(4);     // returns 9.6560e+0
x.toExponential(6);     // returns 9.656000e+0

//The toFixed() Method
//toFixed() returns a string, with the number written with a specified number of decimals:
var x = 9.656;
x.toFixed(0);           // returns 10
x.toFixed(2);           // returns 9.66
x.toFixed(4);           // returns 9.6560
x.toFixed(6);           // returns 9.656000

//The toPrecision() Method
//toPrecision() returns a string, with a number written with a specified length:
var x = 9.656;
x.toPrecision();        // returns 9.656
x.toPrecision(2);       // returns 9.7
x.toPrecision(4);       // returns 9.656
x.toPrecision(6);       // returns 9.65600

//The valueOf() Method
var x = 123;
x.valueOf();            // returns 123 from variable x
(123).valueOf();        // returns 123 from literal 123
(100 + 23).valueOf();   // returns 123 from expression 100 + 23
// Chưa hiểu lắm
//All JavaScript data types have a valueOf() and a toString() method.

//The Number() Method
//If the number cannot be converted, NaN (Not a Number) is returned.
Number(true);          // returns 1
Number(false);         // returns 0
Number("10");          // returns 10
Number("  10");        // returns 10
Number("10  ");        // returns 10
Number(" 10  ");       // returns 10
Number("10.33");       // returns 10.33
Number("10,33");       // returns NaN
Number("10 33");       // returns NaN
Number("John");        // returns NaN

//The Number() Method Used on Dates
//Number() can also convert a date to a number:
Number(new Date("2017-09-30"));    // returns 1506729600000

//The parseInt(),parseFloat() Method
//parseInt() parses a string and returns a whole number. Spaces are allowed. Only the first number is returned:
parseInt("10");         // returns 10
parseInt("10.33");      // returns 10
parseFloat("10.33");     // returns 10.33
parseInt("10 20 30");   // returns 10
parseInt("10 years");   // returns 10
parseInt("years 10");   // returns NaN 

//JavaScript MIN_VALUE and MAX_VALUE
var x = Number.MAX_VALUE;//	Returns the largest number possible in JavaScript
var x = Number.MIN_VALUE;//Returns the smallest number possible in JavaScript
var x = Number.POSITIVE_INFINITY;//	Represents infinity (returned on overflow)
var x = Number.POSITIVE_INFINITY;//	Represents negative infinity (returned on overflow)
var x = 1 / 0; //Infinity
var x = -1 / 0;//-Infinity

//JavaScript NaN - Not a Number
var x = Number.NaN;
var x = 100 / "Apple";  // x will be NaN (Not a Number)

//Number Properties Cannot be Used on Variables
var y = x.MAX_VALUE;    // y becomes undefined

///------ARRAY
//simplicity, readability and execution speed
var cars = [
    "Saab",
    "Volvo",
    "BMW"
];

//k ưu tiên dùng
var cars = new Array("Saab", "Volvo", "BMW");
var name = cars[0];
var last = cars[cars.length - 1];
//Array Elements Can Be Objects
myArray[2] = myCars;
cars.length;  //3

//Loop
cars.forEach(myFunction);
function myFunction(value) {
    text += "<li>" + value + "</li>";
}

//or
for (i = 0; i < fLen; i++) {
    text += "<li>" + cars[i] + "</li>";
}

//Adding Array Elements
cars.push("A");
cars[cars.length] = "A";    // adds a new element (A) to fruits

//create undefined "holes" in an array
fruits[5] = "bbb";//["Saab", "Volvo", "BMW","undefined", "undefined", "bbb"]

//Avoid new Array()
var points = new Array(40, 100, 1, 5, 25, 10); // Bad
var points = [40, 100, 1, 5, 25, 10];          // Good
//It can also produce some unexpected results:
var points = new Array(40);  // Creates an array with 40 undefined elements !!!!!

//How to Recognize an Array
typeof fruits;
Array.isArray(fruits);   // returns true
fruits instanceof Array;   // returns true
var cars = ["Saab", "Volvo", "BMW"];

//Const Block Scope

// Here cars[0] is "Saab"
{
    var cars = ["Toyota", "Volvo", "BMW"];
    // Here cars[0] is "Toyota"
}
// Here cars[0] is "Toyota"

{
    const cars = ["Toyota", "Volvo", "BMW"];
    // Here cars[0] is "Toyota"
}
// Here cars[0] is "Saab"

// Converting Arrays to Strings
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.toString(); //Banana,Orange,Apple,Mango
// Join:  can specify the separator:
fruits.join(" * "); // Banana * Orange * Apple * Mango

//Popping
fruits.pop();              // Removes the last element ("Mango") from fruits
var x = fruits.pop();      // the value of x is "Mango"

//Pushing
fruits.push("Kiwi");       //  Adds a new element ("Kiwi") to fruits
var x = fruits.push("Kiwi");   //  the value of x is 5

//shift(): removes the first array element and "shifts" all other elements to a lower index.
fruits.shift();
var x = fruits.shift();    // the value of x is "Banana"
fruits.unshift("Lemon");    // Adds a new element "Lemon" to fruits

//The unshift() method adds a new element to an array (at the beginning),
fruits.unshift("Lemon");    // Returns 5 with ["Lemon","Banana", "Orange", "Apple", "Mango"]

//Deleting Elements
delete fruits[0];

//Splicing an Array
/**
The first parameter (2) defines the position where new elements should be added (spliced in).
The second parameter (0) defines how many elements should be removed.
The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
 */
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");//Banana,Orange,Lemon,Kiwi,Apple,Mango
fruits.splice(0, 1);        // Removes the first element of fruits

//Merging (Concatenating) Arrays
var myGirls = ["Cecilie", "Lone"];
var myBoys = ["Emil", "Tobias", "Linus"];
var other = ["A", "B", "C"];

var myChildren = myGirls.concat(myBoys);//// Concatenates (joins) myGirls and myBoys
var myChildren = myGirls.concat(myBoys, other)

//Slicing an Array
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(2);//Lemon,Apple,Mango
var citrus = fruits.slice(1, 3);//Orange,Lemon

//Automatic toString()
fruits.toString();//Banana,Orange,Apple,Mango

//Sort
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();        // Apple,Banana,Mango,Orange
fruits.reverse();//reverse the order of the elements

//Array.forEach()
var txt = "";
var numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction);

function myFunction(value, index, array) {
    txt = txt + value + "<br>";
}
// Note that the function takes 3 arguments:

// The item value
// The item index
// The array itself
// The example above uses only the value parameter. The example can be rewritten to:
function myFunction(value) {
    txt = txt + value + "<br>";
}
function myFunction(value, index, array) {//myFunction(value)
    return value * 2;
}

function myFunction(value, index, array) {
    return value > 18;
}

//The reduce() method runs a function on each array element to produce (reduce it to) a single value.
var sum = numbers1.reduce(myFunction);
var sum = numbers1.reduce(myFunction, 100);//100 is init value
function myFunction(total, value) {
    return total + value;
}

//The every() method check if ALL array values pass a test.
var numbers = [45, 4, 9, 16, 25];
var allOver18 = numbers.every(myFunction);//false

//The some() method check if SOME array values pass a test.
var someOver18 = numbers.some(myFunction);//true

//array.lastIndexOf(item, start)
var a = fruits.lastIndexOf("Apple");

//The find() method returns the value of the first array element that passes a test function.
var first = numbers.find(myFunction);//25

//The findIndex() method returns the index of the first array element that passes a test function.
var first = numbers.findIndex(myFunction);//3

//Creating Date Objects
//Date objects are created with the new Date() constructor.
/**
 * There are 4 ways to create a new date object:
new Date()
new Date(year, month, day, hours, minutes, seconds, milliseconds)
new Date(milliseconds)
new Date(date string)
 */

//new Date() creates a new date object with the current date and time:
var d = new Date();//Sun Jun 06 2021 08:23:50 GMT+0700 (Indochina Time)
d.toUTCString(); //Sun, 06 Jun 2021 01:30:35 GMT
d.toISOString();//2021-06-06T01:31:29.894Z
var d = new Date(2018, 11, 24, 10, 33, 30, 0);//Mon Dec 24 2018 10:33:30 GMT+0700 (Indochina Time)
var d = new Date(0);//Thu Jan 01 1970 08:00:00 GMT+0800 (Indochina Time)
var d = new Date(100000000000);//Sat Mar 03 1973 17:46:40 GMT+0800 (Indochina Time)

/*
//There are generally 3 types of JavaScript date input formats:
ISO Date	"2015-03-25" (The International Standard) Full: (YYYY-MM-DDTHH:MM:SSZ):
Short Date	"03/25/2015"
Long Date	"Mar 25 2015" or "25 Mar 2015"
*/
var d = new Date("2015-03-25");//Wed Mar 25 2015 07:00:00 GMT+0700 (Indochina Time)
//Xem thêm: JavaScript Get/Set Date Methods, ví dụ: getHours() or setHours()

//------Math Object Methods
/**
 * Math.round(x)	Returns x rounded to its nearest integer
Math.ceil(x)	Returns x rounded up to its nearest integer
Math.floor(x)	Returns x rounded down to its nearest integer
Math.trunc(x)	Returns the integer part of x (new in ES6)
abs(x)	Returns the absolute value of x
random()	Returns a random number between 0 and 1
sqrt(x)	Returns the square root of x
See more: https://www.w3schools.com/js/js_math.asp
 */

//-----JavaScript Random
Math.floor(Math.random() * 10); // returns a random integer from 0 to 9
Math.floor(Math.random() * 10) + 1;  // returns a random integer from 1 to 10

//-----Booleans:
// Can be Objects but don't use
var y = new Boolean(false);

//------Comparison Operators
// === equal value and equal type
//!==	not equal value or not equal type

//------JavaScript if else and else if
if (condition1) {
    //  block of code to be executed if condition1 is true
} else if (condition2) {
    //  block of code to be executed if the condition1 is false and condition2 is true
} else {
    //  block of code to be executed if the condition1 is false and condition2 is false
}

//------ Switch
//In this example case 4 and 5 share the same code block:

switch (new Date().getDay()) {
    case 4:
    case 5:
        text = "Soon it is Weekend";
        break;
    default:
        text = "Looking forward to the Weekend";
}

///----- LOOP, Cũng break, continue

var i;
for (i = 0; i < cars.length; i++) {
    text += cars[i] + "<br>";
}

for (let x of cars) {
    text += x + "<br>";
}

while (i < 10) {
    text += "The number is " + i;
    i++;
}

do {
    text += "The number is " + i;
    i++;
}
while (i < 10);

for (; cars[i];) {
    text += cars[i] + "<br>";
    i++;
}

while (cars[i]) {
    text += cars[i] + "<br>";
    i++;
}

//----Errors - Throw and Try to Catch
/**
The try statement lets you test a block of code for errors.
The catch statement lets you handle the error.
The throw statement lets you create custom errors.
The finally statement lets you execute code, after try and catch, regardless()bất kể of the result.
 */
try {
    //Block of code to try
    if (x == "") throw "is empty";
    if (isNaN(x)) throw "is not a number";
}
catch (err) {
    //Block of code to handle errors
    console.log(err)// is empty or is not a number
}
finally {
    //Block of code to be executed regardless of the try / catch result
}

//-----JavaScript Scope
function myFunction() {
    var carName = "Volvo";//Local Variables
}
var carName = "Volvo"; //Global Variables

function myFunction() {
}

//------JavaScript Arrow Function
hello = function () {
    return "Hello World!";
}

hello = () => {
    return "Hello World!";
}

hello = (val) => "Hello " + val;
hello = val => "Hello " + val;

//-------JavaScript
/**
Class methods are created with the same syntax as object methods.
Use the keyword class to create a class.
Always add a constructor() method.
Then add any number of methods.
 */
class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    age() {
        let date = new Date();
        return date.getFullYear() - this.year;
    }
}

let myCar = new Car("Ford", 2014);
console.log(myCar.age())

//---------JavaScript JSON
/**
 * JSON is a format for storing and transporting data.
 * JSON is often used when data is sent from a server to a web page.
 */

// Converting a JSON Text to a JavaScript Object
var text = '{ "employees" : [' +
    '{ "firstName":"John" , "lastName":"Doe" },' +
    '{ "firstName":"Anna" , "lastName":"Smith" },' +
    '{ "firstName":"Peter" , "lastName":"Jones" } ]}';
var obj = JSON.parse(text);
console.log(obj.employees[1].firstName + " " + obj.employees[1].lastName);//Anna Smith

//-----The debugger Keyword: chưa work
//The debugger keyword stops the execution of JavaScript, and calls (if available) the debugging functio
var x = 15 * 5;
debugger;

///-----JavaScript Style Guide
// Same same Swift 
/**
Variable and function names written as camelCase
Global variables written in UPPERCASE (We don't, but it's quite common)
Constants (like PI) written in UPPERCASE
 */

//Declarations on Top
// Declare and initiate at the beginning
var firstName, lastName, price, discount, fullPrice;

// Use later
firstName = "John";
lastName = "Doe";

price = 19.90;
discount = 0.10;

// Declare and initiate at the beginning
var lastName = "",
    price = 0;

//Never Declare Number, String, or Boolean Objects

//Don't Use new Object(), instead by:
var x1 = {};           // new object
var x2 = "";           // new primitive string
var x3 = 0;            // new primitive number
var x4 = false;        // new primitive boolean
var x5 = [];           // new array object
var x6 = /()/;         // new regexp object
var x7 = function () { }; // new function object

//Beware of Automatic Type Conversions
//Beware that numbers can accidentally be converted to strings or NaN (Not a Number).
//JavaScript is loosely typed. A variable can contain different data types, and a variable can change its data type:
var x = "5" - 7;     // x.valueOf() is -2,  typeof x is a number
var x = 5 - "x";     // x.valueOf() is NaN, typeof x is a number
"Hello" - "Dolly"    // returns NaN

//Use Parameter Defaults

function test(a = 1, b = 1) { /*function code*/ }

//--------Common Mistakes
var x = 0;
if (x = 10) { }//because 10 is true
if (x = 0) { }//because 0 is false:

var x = 10;
var y = "10";
//data type does not matter
if (x == y) { }//true
if (x === y) { }//false

//but switch statements use strict comparison
var x = 10;
switch (x) {
    case 10: alert("Hello");// not display
}
switch (x) {
    case "10": alert("Hello");// not display
}

//Undefined is Not Null
/**
JavaScript objects, variables, properties, and methods can be undefined.
In addition, empty JavaScript objects can have the value null.
This can make it a little bit difficult to test if an object is empty.
 */
//You can test if an object exists by testing if the type is undefined:
if (typeof myObj === "undefined") { }
if (myObj === null) { }//==>Incorrect

// you must test for not undefined before you can test for not null:
if (typeof myObj !== "undefined" && myObj !== null) { }

//==>> Incorrect: this can still throw an error
if (myObj !== null && typeof myObj !== "undefined") { }

//-------Performance:
//Reduce Activity in Loops
//Bad:
var i;
for (i = 0; i < arr.length; i++) {}

//Better Code:
var i;
var l = arr.length;
for (i = 0; i < l; i++) {}

//cannot use:case,enum,... as variables, labels, or function names
