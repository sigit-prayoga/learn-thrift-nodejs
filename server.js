var thrift = require("thrift");
var Helloer = require("./gen-nodejs/HelloService");
var ttypes = require("./gen-nodejs/service_types");

//create a server from IDL we define in service.thrift files.
//import the service of HelloService, contains 2 functions, ping() and sayHelloTo()
var server = thrift.createServer(Helloer, {
    ping: function (result) {
        console.log("ping()");
        //return nothing
        result(null);
    },
    sayHelloTo: function (name, result) {
        console.log("sayHelloTo()", name);
        //return without error, and send back the concated string.
        result(null, "Hello " + name + "\n");
    }
});

//make sure the client point to this 8282 port.
server.listen(8282);