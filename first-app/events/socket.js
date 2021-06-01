const http = require('http')
// const server = http.createServer()

// server.on('connection',() => {
//     // print when open: http://localhost:3000/
//     // Exit by: Ctrl + C
//     console.log('New connection')
// })

const server = http.createServer((req, res) => {
    if (req.url === '/') { // http://localhost:3000/
        res.write('Hello word')
        res.end()// If don't have this line, loading will be never end
    }
    if (req.url === '/api/numbers') { // http://localhost:3000/api/numbers
        res.write(JSON.stringify([1, 2, 3, 4]))
        res.end()
    }
})

server.listen(3000)
console.log("Listening on port 3000....")

