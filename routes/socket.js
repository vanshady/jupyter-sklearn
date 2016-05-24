'use strict';

// export function for listening to the socket
module.exports = (socket) => {
  const execCallback = (err, messages) => {
    if (err) {
      return console.log(err);
    }
  };

  socket.on('send:data', (data) => {
    console.log(data);

    socket.emit('send:output', {
      value: data.value,
    });
  });
};
 