let express = require("express");

let app = express();

let path = require("path");

let bodyParser = require("body-parser");

let mongoose = require("mongoose");

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, 'static')));

app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");

require("./server/config/routes.js")(app);

mongoose.connect('mongodb://localhost/quotes_db')

mongoose.Promise = global.Promise;

var server = app.listen(3316, () => {
	console.log("App listening on port 3316");
});
