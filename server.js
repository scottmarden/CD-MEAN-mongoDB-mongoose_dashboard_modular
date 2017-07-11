let express = require("express");

let app = express();

let path = require("path");

let bodyParser = require("body-parser");

let mongoose = require("mongoose");

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, 'static')));

app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");

mongoose.connect('mongodb://localhost/falcons_db')

mongoose.Promise = global.Promise;

let FalconSchema = new mongoose.Schema({
	name: {type: String},
	age: {type: String},
	wingspan: {type: Number}
}, {timestamps: true});
// the way that we access timestamps is `.createdAt` and `.updatedAt`

mongoose.model('Falcon', FalconSchema);

require('./server/config/routes.js')(app);

var server = app.listen(3316, () => {
	console.log("App listening on port 3316");
});
