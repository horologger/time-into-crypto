// Importing the required modules
const WebSocketServer = require('ws');
 
// Creating a new websocket server
const wss = new WebSocketServer.Server({ port: 8080 })
 
// Creating connection using websocket
wss.on("connection", ws => {
    console.log("new client connected");
 
    // sending message to client
    ws.send('Welcome, you are connected!');
 
    //on message from client
    ws.on("message", data => {
        console.log(`Client has sent us: ${data}`);
        // broadcast(data);
        // wss.clients.forEach(client => {
        //     client.send(data);
        // });
        // ws.send(`You have sent: ${data}`);
    });
 
    // handling what to do when clients disconnects from server
    ws.on("close", () => {
        console.log("the client has connected");
    });
    // handling client connection error
    ws.onerror = function () {
        console.log("Some Error occurred")
    }
});

function broadcast(data) {
    var idx = 1;
    wss.clients.forEach(client => {
        if ((idx % 2) === 0) {
            console.log(`sending to client ${idx}`);
            client.send(data);
        }
        idx++;
    });
}

let myVar = setInterval(myTimer, (10 * 1000));

function myTimer() {
    const time_event = {
        type: "time",
        time: Math.round((new Date()).getTime() / 1000),
    };
    broadcast(JSON.stringify(time_event));
}

console.log("The WebSocket server is running on port 8080");