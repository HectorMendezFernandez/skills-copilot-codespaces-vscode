// Create a web server that can respond to requests for comments.json on port 3000.
// The server should respond to requests to /comments with a JSON string of the form:
// {"name": "My Name", "comment": "This is a comment."}
// The name and comment fields in the JSON string should be replaced with the values
// from the GET parameters name and comment, respectively. The GET parameters will
// be encoded in the request URL as: /comments?name=My%20Name&comment=This%20is%20a%20comment.
// You can parse GET parameters from the request URL using the parse method of the
// built-in url module. url.parse(request.url, true) will return an object
// (second argument of url.parse) that has a query field containing an object
// with the GET parameters as key-value pairs.
// For example, the parsed query string for the URL /path/to/page?name=ferret&color=purple
// will be {name: 'ferret', color: 'purple'}.
// You should also add the following header to the response:
// "Access-Control-Allow-Origin": "*"
// This will allow requests from any origin to access your JSON API.
// Learn more about this HTTP header here.
// Finally, remember to listen on port 3000, since that is the port the main
// website will send requests to.

var http = require('http');
var url = require('url');

var server = http.createServer(function (req, res) {
    var parsedUrl = url.parse(req.url, true);
    if (parsedUrl.pathname === '/comments') {
        var name = parsedUrl.query.name;
        var comment = parsedUrl.query.comment;
        res.writeHead(200, {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'});
        res.end(JSON.stringify({name: name, comment: comment}));
    }
});
server.listen(3000);