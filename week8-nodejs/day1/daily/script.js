const b = 5;

const main = require('./main')
console.log('sum:',b+main.number)

const http = require('http');

const requestListener = function (req, res) {
    res.writeHead(200);
    res.end(main.currentDate());
}

const server = http.createServer(requestListener);
server.listen(3000);
console.log('Node.js web server at port 3000 is running..')