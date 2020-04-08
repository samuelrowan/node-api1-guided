// const http = require('http');
// const server = http.createServer((request, response) => {
//     response.statusCode = 200
//     response.setHeader('Content-Type', 'application/json')
//     response.write(JSON.stringify({ message: 'hello world'}))
//     response.end()
// })
// server.listen(8080, () => {
//     console.log('server started at port 8080')
// })
const express = require('express')
const server = express()

server.get('/', (req, res) => {
    res.json({message: "hello world"})
})
server.listen(8080, () => {
    console.log('server started at port 8080')
})