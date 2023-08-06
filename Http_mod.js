const http = require('http')


// 3. Using the HTTP module
// Create an http server
const server = http.createServer((req, res) => {
res.writeHead(200, {'Content-Type': 'text/plain'})
res.end('Hello world!\n');
})

const port = 3002

server.listen(port, () => {
    console.log(`listening on port: ${port}`)
})


// Ensure when you navigate to the server on the browser, “Hello world” is returned.

// Things to note:
// For each main question, create a file for it so we can run and test it. That is 3 files to represent each question
