'use strict';
var Transition = require('../TransitionModel');
var Page = require('../PageModel');
var Book = require('../BookModel');
var mongoose = require('../../node_modules/mongoose');

var rebindObject = function(source){
    var promise = new Promise(function(resolve,reject){
	    Book.find({objects:{$exists: true, $not: {$size: 0}}},"objects",function(err, books){
	    	books.forEach(function(book){
	    		book.objects.forEach(function(object){
	    			if(object.name === source.subject){
	    				console.log("Found object "+source.subject);
	    				source.subject = object.id;
	    			}
	    		})
	    	});
    		resolve();
	    })
    })
    return promise;
};

var rebindStat = function(source){
    var promise = new Promise(function(resolve,reject){
	    Book.find({stats:{$exists: true, $not: {$size: 0}}},"stats",function(err, books){
	    	books.forEach(function(book){
	    		book.stats.forEach(function(stat){
	    			if(stat.name === source.subject){
	    				console.log("Found stat "+source.subject);
	    				source.subject = stat.id;
	    			}
	    		})
	    	});
	    	resolve();
	    })
    })
    return promise;
};

var rebindPage = function(page,index){
	var promise = new Promise(function(resolve,reject){
		var promises = [];
		page.effects.forEach(function(effect){
			if(effect !== null){
				if(effect.type ==="objects" && effect.subject !== undefined){
					promises.push(rebindObject(effect));
				}else if(effect.type ==="stats" && effect.subject !== undefined){
					promises.push(rebindStat(effect));
				}
			}
		});
		Promise.all(promises).then(function(){
			console.log("Successfully rebinded page "+index+" effects, saving");
			page.markModified("effects");
			if(page.effects === [null]){
				page.effects = [];
			}
			page.save(function(err,page){
				resolve();
			})
		});
	});
	return promise;
}

var rebindPages = function(pages){
	var promise = new Promise(function(resolve,reject){
		var promises = []
		pages.forEach(function(page,index){
			var pagePromise = rebindPage(page,index);
			promises.push(pagePromise);
		});
		Promise.all(promises).then(function(){
			resolve();
		})
	});
	return promise;
}

var getPages = function(){
	return Page.find({effects:{$exists: true, $not: {$size: 0}}}).exec();
}

exports.up = function (next) {
	console.log('    --> This is migration 2015-10-21-1105-rebind-transitions.js being applied');
	getPages().then(function(pages){
		console.log("Getting Pages "+pages.length);
		rebindPages(pages).then(function(){
			console.log("DONE");
			next();
		});
	});
};

exports.down = function (next) {
	console.log('    --> This is migration 2015-10-21-1105-rebind-transitions.js being rollbacked');
	next();
};