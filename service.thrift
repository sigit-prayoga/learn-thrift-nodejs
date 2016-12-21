/**
* Super simple service definition.
* For more details, refer to this https://thrift.apache.org/tutorial/nodejs
* Generate this file using terminal with command below
* thrift -r --gen js:node service.thrift
* Then, 'gen-nodejs' folder will be generated automatically, see the implementation in server.js file
*/
service HelloService {
    void ping(), 

    string sayHelloTo(1: string name)
}