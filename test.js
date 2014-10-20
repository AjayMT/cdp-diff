
/* global require */

var should = require('should');

var diffUtils = require('./lib/cdp-diff.js');

var left = {
  hello: 'world',
  abc: {
    foo: 'bar'
  }
};

var right = {
  hello: 'world',
  abc: {
    foo: 'bar'
  }
};

// No one needs test frameworks :D
var tests = {
  'add/change': set,
  remove: remove,
  apply: apply,
  copy: copy
};

for (var t in tests)
  try {
    console.error('testing ' + t + '...');
    tests[t]();
    console.error(t + ' passed');
  } catch (e) {
    console.error(e);
  }

function set () {
  right.hello = 'people';
  right.abc.bar = 'baz';

  var diff = diffUtils.createDiff(left, right);

  diff.should.eql({ hello: 'people', abc: { bar: 'baz' } });
}

function remove () {
  delete right.hello;

  var diff = diffUtils.createDiff(left, right);

  diff.should.eql({ hello: null, abc: { bar: 'baz' } });
}

function apply () {
  var diff = diffUtils.createDiff(left, right);

  diffUtils.applyDiff(diff, left);

  left.should.eql(right).and.should.not.equal(right);
}

function copy () {
  var copy = diffUtils.copyObject(left);

  copy.should.eql(left).and.should.not.equal(left);
}
