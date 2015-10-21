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

var rebindTransition = function(transition){
	var promise = new Promise(function(resolve,reject){
		var promises = [];
		transition.effects.forEach(function(effect){
			if(effect.type ==="objects" && effect.subject !== undefined){
				promises.push(rebindObject(effect));
			}else if(effect.type ==="stats" && effect.subject !== undefined){
				promises.push(rebindStat(effect));
			}
		});
		transition.conditions.forEach(function(condition){
			if(!mongoose.Types.ObjectId.isValid(condition.subject)){
				if(condition.type ==="objects" && condition.subject !== undefined){
					promises.push(rebindObject(condition));
				}else if(condition.type ==="stats" && condition.subject !== undefined){
					promises.push(rebindStat(condition));
				}
			}
		});
		Promise.all(promises).then(function(){
			console.log("Successfully rebinded transition effects and conditions, saving");
			transition.markModified("effects");
			transition.markModified("conditions");
			transition.save(function(err,transitionUpdated){
				resolve();
			})
		});
	});
	return promise;
}

var rebindTransitions = function(transitions){
	var promise = new Promise(function(resolve,reject){
		var promises = []
		transitions.forEach(function(transition){
			var transitionPromise = rebindTransition(transition);
			promises.push(transitionPromise);
		});
		Promise.all(promises).then(function(){
			resolve();
		})
	});
	return promise;
}

var getTransitions = function(){
	return Transition.find({}).exec();
}

exports.up = function (next) {
	console.log('    --> This is migration 2015-10-21-1105-rebind-transitions.js being applied');
	getTransitions().then(function(transitions){
		rebindTransitions(transitions).then(function(){
			console.log("DONE");
			next();
		});
	});
};

exports.down = function (next) {
	console.log('    --> This is migration 2015-10-21-1105-rebind-transitions.js being rollbacked');
	next();
};


