'use strict';
var Genre = require('../GenreModel');

exports.up = function (next) {
	console.log('    --> This is migration 2015-12-14-1351-addGenres.js being applied');
	var genreArray = [
		{
			name:'Fantasy',
			icon:'paw'
		},
		{
			name:'Aventure',
			icon:'compass'
		},
		{
			name:'Horreur',
			icon:'bug'
		},
		{
			name:'Historique',
			icon:'history'
		},
		{
			name:'Educatif',
			icon:'child'
		},
		{
			name:'Biographique',
			icon:'book'
		},
		{
			name:'Science-fiction',
			icon:'space-shuttle'
		},
		{
			name:'Sport',
			icon:'soccer-ball-o'
		},
		{
			name:'Enquête',
			icon:'search'
		},
		{
			name:'Infiltration',
			icon:'user-secret'
		},
		];
	var promiseArray = [];
	genreArray.forEach(function(genre){
		var newGenre = new Genre();
	    newGenre.name = genre.name;
	    newGenre.icon = genre.icon;
	    promiseArray.push(newGenre.save());
	})
	Promise.all(promiseArray).then(function(){
		next();
	});
};


exports.down = function (next) {
	console.log('    --> This is migration 2015-12-14-1351-addGenres.js being rollbacked');
	next();
};
