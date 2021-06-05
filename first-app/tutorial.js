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
 * 
*/
"use strict";
function myFunction() {
  return this; //this is undefined
}

//Object Method Binding
var person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
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
