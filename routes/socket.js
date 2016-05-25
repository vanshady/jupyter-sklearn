'use strict';

import {
  XMLHttpRequest
} from "xmlhttprequest";
import {
  default as WebSocket
} from 'ws';

global.XMLHttpRequest = XMLHttpRequest;
global.WebSocket = WebSocket;

import {
  listRunningSessions,
  connectToSession,
  startNewSession
} from 'jupyter-js-services';

// The base url of the notebook server.
const BASE_URL = 'http://localhost:8888';

const sklearn_code = ['import autosklearn.classification',
  'import sklearn.datasets',
  'digits = sklearn.datasets.load_digits()',
  'X = digits.data',
  'y = digits.target',
  'import numpy as np',
  'indices = np.arange(X.shape[0])',
  'np.random.shuffle(indices)',
  'X = X[indices]',
  'y = y[indices]',
  'X_train = X[:1000]',
  'y_train = y[:1000]',
  'X_test = X[1000:]',
  'y_test = y[1000:]',
  'automl = autosklearn.classification.AutoSklearnClassifier(time_left_for_this_task=60, per_run_time_limit=40)',
  'automl.fit(X_train, y_train)',
  'print(automl.score(X_test,y_test))'].join('\n');
  
// Get a list of available sessions and connect to one.
listRunningSessions({
  baseUrl: BASE_URL
}).then(sessionModels => {
  let options = {
    baseUrl: BASE_URL,
    kernelName: sessionModels[0].kernel.name,
    notebookPath: sessionModels[0].notebook.path
  }
  connectToSession(sessionModels[0].id, options).then((session) => {
    console.log(session.kernel.name);
  });
});

// Start a new session.
let options = {
  baseUrl: BASE_URL,
  kernelName: 'python',
  notebookPath: '/tmp/test.ipynb'
}

// export function for listening to the socket
module.exports = (socket) => {
  const execCallback = (err, messages) => {
    if (err) {
      return console.log(err);
    }
  };

  socket.on('send:data', (data) => {
    console.log(data);

    startNewSession(options).then(session => {
      // Execute and handle replies on the kernel.
      let future = session.kernel.execute({
        code: 'print("abc"+"' + data.x + '")'
      });
      future.onDone = (msg) => {
        console.log('Future is fulfilled');
        console.log(msg.content.text);
      }

      future.onIOPub = (msg) => {
        if (msg.content.text)
          socket.emit('send:output', {
            value: msg.content.text,
          });
      }
    });
  });
};