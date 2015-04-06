/*globals define, describe, it, expect, beforeEach, jasmine, irequire*/
describe('irequire', function() {
	require.config({
		baseUrl: './tests/src',
		aliases: {
			'x': 'numbers'
		}
	});

	it('should generate dependencies from function arguments', function(next) {
		irequire(function(numbers) {
			expect(numbers).not.toBeUndefined();
			next();
		});
	});

	it('should generte dependencies from aliases', function(next) {
		irequire({
			'm': 'numbers'
		}, function(m) {
			expect(m).not.toBeUndefined();
			next();
		});
	});

	it('should generte dependencies from aliases of require.config.aliases', function(next) {
		irequire(function(x) {
			expect(x).not.toBeUndefined();
			next();
		});
	});

	it('should generte dependencies from aliases of require.config.aliases and local aliases', function(next) {
		irequire({
			y: 'values'
		}, function(x, y) {
			expect(x).toEqual("numbers");
			expect(y).toEqual("values");
			next();
		});
	});

	it('should generte dependencies from aliases of require.config.aliases and local aliases with any to arguments order', function(next) {
		irequire({
			y: 'values'
		}, function(y, x) {
			expect(x).toEqual("numbers");
			expect(y).toEqual("values");
			next();
		});
	});
});