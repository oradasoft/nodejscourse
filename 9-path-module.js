/*
The path module provides utilities for working with file and directory paths. It can be accessed using:


*/


const path = require('path');



console.log(path.sep);

//join Method
const filePath = path.join('/content','subfolder','text.txt');
console.log(filePath);

//base of a file path
const base = path.basename(filePath);
console.log(base);


//geting abolute path
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'text.txt');
console.log(absolute);