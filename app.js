
const express = require('express');
const http = require('http');

const socket = require('./routes/socket.js');

const app = express();
const server = http.createServer(app);

const port = process.env.PORT || 3000;

/* Configuration */
app.use(express.static(__dirname + '/public'));
app.set('port', port);

/* Socket.io Communication */
const io = require('socket.io').listen(server);
io.sockets.on('connection', socket);

/* Start server */
server.listen(app.get('port'), () => {
  console.log('Express server listening on port %d in %s mode', app.get('port'), app.get('env'));
});

module.exports = app;
