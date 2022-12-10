const express = require("express"); //step 1
const app = express(); //step 1
var path = require("path"); //step 1

// const tf = require('@tensorflow/tfjs') // step 2
// const tfcore = require('@tensorflow/tfjs-node') // step 2

const server = require("http").Server(app); //step 1

const port = process.env.PORT || 3000; //step 1

app.use(express.static("public")); //To serve static files such as images, CSS files, and JavaScript files, use the express.static built-in middleware function in Express.

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/static/index.html"));
});

server.listen(port, (req, res) => {
  //step 1
  console.log("Server is up and running at port 3000");
});
