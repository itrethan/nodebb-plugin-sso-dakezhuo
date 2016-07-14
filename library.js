(function(module) {
	"use strict";

	var Dakezhuo = {};

	Dakezhuo.getStrategy = function(strategies, callback) {
		strategies.push({
			name: 'dakezhuo',
			url: 'http://www.dakezhuo.com/landing/loginXunfei?redirect=bbs',
			callbackURL: '/auth/dakezhuo/callback',
			icon: 'fa-sign-in',
		});

		callback(null, strategies);
	};

	module.exports = Dakezhuo;
}(module));
