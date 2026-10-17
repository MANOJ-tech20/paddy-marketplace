
const test = require('node:test');
const assert = require('node:assert/strict');
const products = require('../products.js');

test('Paddy Market should contain 24 products', () => {
  assert.equal(products.length, 24);
});

test('Every product should have a name and price', () => {
  for (const product of products) {
    assert.ok(product.name, 'Product name should exist');
    assert.ok(
      typeof product.price === 'number',
      `${product.name} should have a numeric price`
    );
  }
});

test('Every product should have a unique ID', () => {
  const ids = products.map(product => product.id);
  assert.equal(new Set(ids).size, products.length);
});
