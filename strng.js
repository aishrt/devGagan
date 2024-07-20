
// Replace all spaces in a string with underscores:

let string="Hello World";
console.log(string.replace(/\s/g,"_"));

//Replace a substring with another substring:

let string2="Hello World";
console.log(string2.replace("World","India"));

// Use slice method to get the last 3 characters of a string:

let string3 = "Hello World";
let stringsliced = string3.slice(-3);
console.log(stringsliced);             // "rld"

// Find the position of a substring within a string:

let string4="Hello World";
let position=string4.indexOf("World");
console.log(position);

// Strip whitespace from the beginning and end of a string: "      Hey John.    "

let string5="      Hey John.    "
let aftertrimmed=string5.trim();
console.log(aftertrimmed);


let myworld="hii word"
let newword=myworld.split("");
console.log(newword);

const cars=["volvo","bmw","audi","40"];
let carsn= cars.toString();
console.log((carsn));
console.log(typeof(cars));


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits[fruits.length-1]);

const fruits=["banana","kiwi"];
(fruits.push("apple"));
console.log(fruits);
console.log(fruits.join("+"));
delete fruits[2];
console.log(fruits);
