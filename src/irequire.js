/*
 * This file is part of the iRequire package.
 *
 * 
 * (c) Oleksandr Knyga <oleksandrknyga@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/* global window, require, irequire, idefine */

(function() {
	var STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,
		ARGUMENT_NAMES = /([^\s,]+)/g;

	var getParamNames = function(func) {
		var fnStr = func.toString().replace(STRIP_COMMENTS, '');
		var result = fnStr.slice(fnStr.indexOf('(') + 1, fnStr.indexOf(')')).match(ARGUMENT_NAMES);

		if (result === null) {
			result = [];
		}
			
		return result;
	};

	var prepare = function() {
		var aliases = requirejs.s.contexts._.config.aliases || {},
			loaders = [],
			executer = null;

		if ("undefined" === typeof arguments[0]) {
			throw new Error("No executer function");
		}

		if ("undefined" === typeof arguments[1]) {
			executer = arguments[0];
		} else {
			executer = arguments[1];
			var laliases = arguments[0];

			for(var name in laliases) {
				aliases[name] = laliases[name];
			}
		}

		var params = getParamNames(executer);
		
		for(var i=0;i<params.length; i++) {

			if(aliases.hasOwnProperty(params[i])) {
				loaders.push(aliases[params[i]]);
			} else{
				loaders.push(params[i]);
			}
		}

		return {
			loaders: loaders,
			executer: executer
		};
	}

	var irequire = function() {
		var prepared = prepare.apply(this, arguments);
		require(prepared.loaders, prepared.executer);
	};

	var idefine = function() {
		var prepared = prepare.apply(this, arguments);
		define(prepared.loaders, prepared.executer);
	};

	window.irequire = irequire;
	window.idefine = idefine
})();