const autoIncrement = require('mongoose-auto-increment');
const mongoose = require('mongoose');
/* f2e base db */
const db = mongoose.createConnection('mongodb://119.23.36.140/cestc');

const user_schema = require('./user');
const book_schema = require('./book');

autoIncrement.initialize(db);

user_schema.plugin(autoIncrement.plugin, { model: 'user', field: 'user_id' });
book_schema.plugin(autoIncrement.plugin, { model: 'book', field: 'book_id' });

exports.User = db.model('User', user_schema);
exports.Book = db.model('Book', book_schema);
// exports.ServiceDefineVersion = service_define_db.model('ServiceDefineVersion', service_define_version, 'service_define_version');
