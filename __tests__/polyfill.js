require('..')

const randomUUID = typeof window === 'undefined'
  ? require('crypto').randomUUID
  : window.crypto.randomUUID

test('Apply polyfill', function()
{
  // expect(randomUUID).toBeInstanceOf(Function)
  expect(typeof randomUUID).toBe('function')
})
