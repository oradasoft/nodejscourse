/*
npm - global commands, which comes with node
npm --version


local variable dependency - used in a particular project
npm i <package name>


global dependency - use it in a ny project
npm install -g <packageName>
sudo npm install -g <packageName> (mac)


TO start using packages first create the package.json file
#	package.json - manifest file (stores important info about project/package)
#	manual approach (Create package.json in the root, create properties etc)
#	npm init (step by step, press enter to skip)
# 	npm init -y (everything default)
*/


const _ = require('lodash')


const items = [1,[2, [3], [4], [5]]]
const newItems = _.flattenDeep(items)
console.log(newItems);


