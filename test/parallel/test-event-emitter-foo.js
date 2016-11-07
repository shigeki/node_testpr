'use strict';

const common = require('../common');
const EventEmitter = require('events');
const assert = require('assert');

const event1 = new EventEmitter();

const bar = 'bar';

// Sync API test
assert.strictEqual(event1.foo(), bar);

// Async API test
const event2 = new EventEmitter();

var ret = event2.foo(common.mustCall((err, arg) => {
  assert.strictEqual(err, null);
  assert.strictEqual(arg, bar);
}));

assert(ret);
