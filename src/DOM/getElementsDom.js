// getElementById ('html-element-id')

//is a dom method, it accepts the html element id and returns the html
//element matching thet id.
// pass the ID of the element as an argument
//f no element matches the ID then it returns null

console.log("script loaded");

document.getElementById("categories");
console.log(document.getElementById("redFruits"));
// getElementsByClassName
//// getElementsByClassName('html-class-string')

//is a DOM method it accepts the html class string and returns all
//the html elements matching that class
// pass the class string of the elements as an argument
//if no elements match the class then it returns
//an empty array

document.getElementsByClassName("img");
console.log(document.getElementsByClassName("img"));

//getElementsByTagName
//getElementsByTagName('html-tag-string')

//is a DOM method it acceps the html tag string and returns
//all the htmlelements matching this tag
//pass the tag as an argument
//if no elements returns an emp array

document.getElementsByTagName("link");
console.log(document.getElementsByTagName("link"));
