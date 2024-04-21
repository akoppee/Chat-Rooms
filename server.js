// server.js

const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');

// Create a new express application
const app = express();
// Create a server for handling websocket calls
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static(path.join(__dirname, '.')));

// Handle connection
io.on('connection', (socket) => {
  console.log('New client connected');

  // Handle sending and receiving messages
  socket.on('message', (message) => {
    console.log('Message received: ', message);
    io.emit('message', message); // This will emit the message to all connected clients
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

const port = process.env.PORT || 4000;
server.listen(port, () => console.log(`Listening on port ${port}`));
