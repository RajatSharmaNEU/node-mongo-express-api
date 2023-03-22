const express = require("express");
const app = express();
const cors = require('cors')
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const mongoose = require("mongoose");

//configure ===========
//set port
const port = process.env.PORT || 8080;
//connect to our mongoDB database
mongoose.connect("mongodb://127.0.0.1:27017/test", {useNewUrlParser: true});
app.use(cors());
//get app data/stuff of the body(POST request) parameters
//parse application/json
app.use(bodyParser.json());
//parse application/vnd+api as json
app.use(bodyParser.json({type: "application/vnd.api+json"}));
//parse
app.use(bodyParser.urlencoded({extended: true}));
//override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride("X-HTTP-Method-Override"));
//set static files location /public/img will be /img for users
app.use(express.static(__dirname + "/public"));
//routes================
require("./app/routes")(app); //configure routes
//start app=============
//startup app at port
app.listen(port);
//shoutout to the user
console.log("App started at port" + port);
//expose app
exports = module.exports = app;