'use strict';

var Book = require('../BookModel');
var Player = require('../PlayerModel');


exports.up = function (next) {
	console.log('    --> This is migration 2016-01-05-1053-sallazar.js being applied');
	Book.find({'_id':'568a4d5e399d7d0c030b7909'}).then(function(book){
		book.authorName = "Sallazar";
		book.authorId = '5677fbaa399d7d0c030b78ef';
		book.save().then(function(){
			next();
		})
	})
};


exports.down = function (next) {
	console.log('    --> This is migration 2016-01-05-1053-sallazar.js being rollbacked');
	next();
};
