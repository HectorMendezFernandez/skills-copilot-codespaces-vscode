// Create a web server that can receive a POST request containing some JSON
// and it will respond with the contents of the JSON.

// The server should listen on the port provided by process.argv[2].

// HINTS
// For this exercise we'll be creating a raw HTTP server. We don't need any
// additional frameworks to complete this exercise.

// We can create an HTTP server using the http module like this:

//     var http = require('http')
//     var server = http.createServer(function (req, res) {
//       // request handling logic...
//     })
//     server.listen(8000)

// The req object in this example is a ReadableStream and the res object is a
// WritableStream. For more information about streams see the documentation.

// The fs core module also has some streaming APIs for files. You will need to
// use the fs.createReadStream() method to create a stream representing the
// file you are given as a command-line argument. The method returns a
// stream object which you can use src.pipe(dst) to pipe the data from the
// src stream to the dst stream. In this way you can connect a filesystem
// stream with an HTTP response stream.

// ─────────────────────────────────────────────────────────────────────────────

//  » To print these instructions again, run: `expressworks print`.
//  » To execute your program in a test environment, run:
//    `expressworks run program.js`.
//  » To verify your program, run: `expressworks verify program.js`.
//  » For help with this problem or with expressworks, run:
//    `expressworks help`.

var express = require('express');
var app = express();
var fs = require('fs');

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.post('/send', function(req, res) {
  res.send(req.body);
});

app.listen(process.argv[2]);