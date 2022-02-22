const http = require('http')



/*

Takes to parameters
1.  incoming request
2. response

*/
const server = http.createServer((req, res) => {
	

	if(req.url === '/') {
		res.end('Welcome to homepage')
	} else if  (req.url === '/about') {

		res.end('Here is our shot history')
	} else {

		res.end(`
			<h1>Ooops!</h1>
			<p>We were unable to find the pages your are lookign for</p>
			<a href="/">Home</a>

		`);
	}
	
})


server.listen(5000)