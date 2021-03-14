require('..');

const { randomUUID } = typeof window === 'undefined' ? require('crypto') : window.crypto;

test('Apply polyfill', function () {
  // expect(randomUUID).toBeInstanceOf(Function)
  expect(typeof randomUUID).toBe('function');
});
