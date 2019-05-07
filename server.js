const express = require('express')
const app = express()
const port = 3000
const server = app.listen(port,()=>console.log(`Server is listening to port${port}`))
const io = require('socket.io')(server)
io.on('connection',(socket)=>{
    console.log(socket.id)
})