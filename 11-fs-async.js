const {readFile, writeFile} = require('fs');

/*
In this we add a call back
*/

readFile('./content/first.txt', 'utf8', (err,result)=> {


	if (err) {
		console.log(err);
		return;
	}


	//we want to assign the result to a variable
	const first = result;

	readFile('./content/second.txt', 'utf8', (err,result)=> {
		if (err) {
			console.log(err)
			return
		}

		const second = result

		writeFile(
			'./content/result-sync.txt',
			`Here us the result : ${first}, ${second}`
		,(err, result) => {
			if (err) {
				console.log(err);
				return
			}

			console.log(result);
		}
		)

	})
})
