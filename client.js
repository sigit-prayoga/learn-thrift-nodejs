var thrift = require('thrift');
var express = require('express');
var Helloer = require('./gen-nodejs/HelloService');
var ttypes = require('./gen-nodejs/service_types');

//define the transport and protocol of thrift
//refer: http://thrift-tutorial.readthedocs.io/en/latest/thrift-stack.html
var transport = thrift.TBufferedTransport;
var protocol = thrift.TBinaryProtocol;

//create thrift connection, assume localhost:8282 will be run the thrift server
var connection = thrift.createConnection("localhost", 8282, {
    transport: transport,
    protocol: protocol
});

//listen to any error
connection.on('error', function (err) {
    console.log(err);
});

//create the thrift client
var client = thrift.createClient(Helloer, connection);

//create expressjs app
var app = express();

//ping!
app.get('/', function (req, res) {
    client.ping(function (err, response) {
        console.log('ping()');
    });
});

//say hello to any name from query
app.get('/hello', function (req, res) {
    //get the name
    var name = req.query.name;
    //Remote Procedure Call happens here
    client.sayHelloTo(name, function (err, message) {
        //get the result, make sure you pass the error if any from server, otherwise put 'null'
        console.log("response: " + message);
        //send back to client/browser
        res.send(message);
    });
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});