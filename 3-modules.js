//Modules
// You need to split your programs into Modules
//this is becuase of how big your application might be
// if you dont split it into modules that will be insize

//CommonJS : every file is module (by default)
//MOdules - Encaspsules Code (Only share minuim)

const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternativeflavor')
require("./7-mind-grade")

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)