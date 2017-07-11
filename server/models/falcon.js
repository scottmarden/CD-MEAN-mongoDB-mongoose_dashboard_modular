const mongoose = require("mongoose")

const Schema = mongoose.Schema;

let FalconSchema = new Schema({
	name: {type: String},
	age: {type: String},
	wingspan: {type: Number}
}, {timestamps: true});

mongoose.model('Falcon', FalconSchema)
