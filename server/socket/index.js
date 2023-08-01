const io = require('socket.io')(8800,{
    cors: {
        origin: "http://localgost:3000"
    }
})

let activeUsers =[]

io.on("connection", (socket)=>{
    socket.on('new-user-add', (newUserId)=>{
        if (!activeUsers.some((user)=>user.userId== newUserId)){
            
            activeUsers.push({
                userId: newUserId,
                socketId: socket.id
            })
        }
        console.log("connected users",activeUsers);
        io.emit('get-users',activeUsers)
    })

    socket.on("disconnect",() =>{
        activeUsers= activeUsers.filter((user)=>user.socketId !== socket.id);
        console.log("user disconnected", activeUsers);
        io.emit('get-users', activeUsers)
    })
})