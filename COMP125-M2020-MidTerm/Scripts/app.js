// setup your IIFE (Immediately Invoked Function Expression)
(function () {
"use strict";


let para = document.createElement("P");                       // Create a <p> node
let t = document.createTextNode("This is a paragraph.");      // Create a text node
para.appendChild(t);                                          // Append the text to <p>
document.getElementById("myDIV").appendChild(para);           // Append <p> to <div> with id="myDIV"



})();

