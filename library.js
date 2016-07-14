(function(module) {
	"use strict";

	var Dakezhuo = {};

	Dakezhuo.getStrategy = function(strategies, callback) {
		strategies.push({
			name: 'dakezhuo',
			url: 'http://www.dakezhuo.com/landing/loginXunfei',
			callbackURL: '/auth/dakezhuo/callback',
			icon: 'fa-google-plus-square',
		});

		callback(null, strategies);
	};

	module.exports = Dakezhuo;
}(module));
