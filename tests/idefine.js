/*globals define, describe, it, expect, beforeEach, jasmine, idefine*/
describe('idefine', function() {
	require.config({
		baseUrl: './tests/src',
		aliases: {
			'x': 'numbers'
		}
	});

	it('should load files with idefine', function(next) {
		require(['inumbers'], function(inumbers) {
			expect(inumbers).toEqual("numbers");
			next();
		});
	});

	it('should load files with idefine with arguments', function(next) {
		require(['imodule'], function(imodule) {
			expect(imodule).toEqual("numbers:values");
			next();
		});
	});

		it('should load files with idefine with aliases', function(next) {
		require(['imodule'], function(imodule) {
			expect(imodule).toEqual("numbers:values");
			next();
		});
	});

	// it('should generte dependencies from aliases', function(next) {
	// 	idefine({
	// 		'm': 'numbers'
	// 	}, function(m) {
	// 		expect(m).not.toBeUndefined();
	// 		next();
	// 	});
	// });

	// it('should generte dependencies from aliases of require.config.aliases', function(next) {
	// 	idefine(function(x) {
	// 		expect(x).not.toBeUndefined();
	// 		next();
	// 	});
	// });

	// it('should generte dependencies from aliases of require.config.aliases and local aliases', function(next) {
	// 	idefine({
	// 		y: 'values'
	// 	}, function(x, y) {
	// 		expect(x).toEqual("numbers");
	// 		expect(y).toEqual("values");
	// 		next();
	// 	});
	// });

	// it('should generte dependencies from aliases of require.config.aliases and local aliases with any to arguments order', function(next) {
	// 	idefine({
	// 		y: 'values'
	// 	}, function(y, x) {
	// 		expect(x).toEqual("numbers");
	// 		expect(y).toEqual("values");
	// 		next();
	// 	});
	// });
});