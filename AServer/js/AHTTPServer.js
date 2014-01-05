var http = require("http");

exports.startAHTTPServer = function() {
    http.createServer(function(request, response){
        console.log("Request received.");

        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Hello Word!");
        response.end();
    }).listen(8888);

    console.log("Server has started.");
}