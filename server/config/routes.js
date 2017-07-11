let mongoose = require('mongoose');

let Falcon = mongoose.model('Falcon');

const controller = require('./../controllers/controller.js')

module.exports = app => {
	app.get('/', controller.index);
	app.get('/new', controller.new);
	app.post('/falcons', controller.falcons);
	app.get('/falcons/:id', controller.show_falcon);
	app.get('/falcons/edit/:id', controller.edit_falcon);
	app.post('/falcons/:id', controller.update_falcon);
	app.post('/falcons/destroy/:id', controller.destroy_falcon);
}
