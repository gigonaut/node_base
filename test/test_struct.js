var conf = require('../conf/conf.js');

var vows = require('vows');
var assert = require('assert');

vows.describe('Base Test Block').
addBatch({
	'base stuff': {
		topic: conf,
		'we should have config': function(topic) {
			assert.ok(conf);
		}
	}
}).
export(module);
