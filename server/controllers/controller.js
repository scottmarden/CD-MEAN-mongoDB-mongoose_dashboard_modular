var mongoose = require("mongoose");
var Falcon = mongoose.model("Falcon")

module.exports = {
	index: (req, res) =>{
		Falcon.find({}, (err, data) => {
			if(err){
				console.log(err);
			}else{
				res.render('index', {falcons: data});
			}
		})
	},

	new: (req, res) => {
		res.render('new');
	},

	falcons: (req, res) => {
		let falcon = new Falcon(req.body);
		falcon.save( (err, savedFalcon) => {
			if(err){
				console.log(err);
				return;
			}else{
				console.log(savedFalcon);
				res.redirect('/')
			}
		})
	},

	show_falcon: (req, res) => {
		Falcon.findOne({_id: req.params.id}, (err, data) => {
			if(err){
				console.log(err);
				return;
			}else{
				res.render('show', {falcon: data});
			}
		})
	},

	edit_falcon: (req, res) => {
		Falcon.findOne({_id: req.params.id}, (err, data) => {
			if(err){
				console.log(err);
				return;
			}else{
				res.render('edit', {falcon: data});
			}
		})
	},

	update_falcon: (req, res) => {
		Falcon.update({_id: req.params.id}, req.body, (err, response) => {
			if(err){
				console.log(err);
				return;
			}else{
				res.redirect('/falcons/' + req.params.id);
			}
		})
	},

	destroy_falcon: (req, res) => {
		Falcon.remove({_id: req.params.id}, (err, data) => {
			if(err){
				console.log(err);
				return;
			}else{
				res.redirect('/');
			}
		})
	}

}
