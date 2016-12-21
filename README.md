# learn-thrift-nodejs
Example of ExpressJS app & Thrift to simulate RPC (Remote Procedure Call) within [microservices](https://en.wikipedia.org/wiki/Microservices).
See the differences between REST (ExpressJS in this case) and Thrift architecture.

### **Install Thrift on Mac OS X**
Using [Homebrew](http://brew.sh/), use this command in Terminal
```sh
brew install thrift
```
**Note:** Refer to this [docs](https://thrift.apache.org/docs/install/) for other platform.

### **Install Dependencies**
We need Express and Thrift for NodeJS as dependencies, type this in Terminal.

```sh
cd /path/to/repo

npm install
```
**Note**: Make sure you have installed [NodeJS](https://nodejs.org/en/)

### **Run the Server**

```sh
node server.js
```

### **Run the Client**

```sh
node client.js
```

### **Test Using Terminal**
Type this in Terminal

```sh
curl -i http://localhost:3000/hello?name=AnyName
```

### **Test Using Browser**
Open a browser and type `http://localhost:3000/hello?name=AnyName` in location bar.

*See the code for more explanation and see how Thrift works compare to REST.*

*More documentation about Thrift is [here](https://thrift.apache.org/)