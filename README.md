# react_redux_node_express_skeleton

This project was created to give you a starting point for your next react, redux, node, express based web application. It comes with a few items pre-configured like view changing, a loading spinner, and a sample fetch redux action. 

## Requirements
* Install Node.js https://nodejs.org
* Install nodemon ```npm install --save nodemon``` (if you wish not to use nodemon change the runlocalserver script to call npm start in place of nodemon start)

## Running Application
First step is to start the server. The server will launch on port 3000. Next change directory into the client folder and run the start command below. The application was configured to use a proxy in the package.json file so the react client proxies service calls to port 3000 and the client can run on any port. 

### Server
```
macOS/Unix/Linux : ./runlocalserver.sh
Windows          : ./runlocalserver.bat
```

### Client
```javascript
cd client
npm start
```


## Building for production

From the client folder run the following command:
 ``` javascript
 npm run build
 ```
 This will produce static artifacts in the client/build folder. Once the command finishes copy and paste the files (overwrite if they exist) in the public folder in the root of the project. Node/Express has been configured to host static files from the public folder so once those artifacts have been copied you can deploy the root folder and test your entire application on port 3000. 