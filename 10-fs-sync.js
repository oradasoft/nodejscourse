 const {readFileSync, writeFileSync} = require('fs');


 const first = readFileSync('./content/first.txt', 'utf8');
 const second = readFileSync('./content/second.txt', 'utf8');

 console.log(first, second);


 /*creating file
 To create a file you need two arguments first location and second content
 NB; This overwrides content if the file extist*/

 writeFileSync(
 	'./content/result-sync.txt', 
 	`Here is the result : ${first}, ${second}`
 );


/*
	To append you need to add aditional argument which is { flag: 'a'}
*/

writeFileSync(
	'./content/result-sync.txt',
	`Here is the result : ${first}, ${second}`,
	{ flag: 'a' }
);
