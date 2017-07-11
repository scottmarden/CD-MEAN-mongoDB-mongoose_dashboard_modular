let express = require("express");

let app = express();

let path = require("path");

let bodyParser = require("body-parser");

let mongoose = require("mongoose");

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, './client/static')));

app.set("views", path.join(__dirname, "./client/views"));
app.set("view engine", "ejs");

mongoose.Promise = global.Promise;


// the way that we access timestamps is `.createdAt` and `.updatedAt`


require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

var server = app.listen(3316, () => {
	console.log("App listening on port 3316");
});
