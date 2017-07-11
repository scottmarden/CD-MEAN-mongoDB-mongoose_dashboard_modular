let mongoose = require('mongoose');

let Falcon = mongoose.model('Falcon');

module.exports = app => {
	app.get('/', (req, res) => {
		Falcon.find({}, (err, data) => {
			if(err){
				console.log(err);
			}else{
				res.render('index', {falcons: data});
			}
		})
	});

	app.get('/new', (req, res) => {
		res.render('new')
	})

	app.post('/falcons', (req, res) => {
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
	})

	app.get('/falcons/:id', (req, res) =>{
		Falcon.findOne({_id: req.params.id}, (err, data) => {
			if(err){
				console.log(err);
				return;
			}else{
				res.render('show', {falcon: data});
			}
		})
	})

	app.get('/falcons/edit/:id', (req, res) => {
		Falcon.findOne({_id: req.params.id}, (err, data) => {
			if(err){
				console.log(err);
				return;
			}else{
				res.render('edit', {falcon: data});
			}
		})
	})

	app.post('/falcons/:id', (req, res) => {
		Falcon.update({_id: req.params.id}, req.body, (err, response) => {
			if(err){
				console.log(err);
				return;
			}else{
				res.redirect('/falcons/' + req.params.id);
			}
		})
	})

	app.post('/falcons/destroy/:id', (req, res) => {
		Falcon.remove({_id: req.params.id}, (err, data) => {
			if(err){
				console.log(err);
				return;
			}else{
				res.redirect('/');
			}
		})
	})
}
