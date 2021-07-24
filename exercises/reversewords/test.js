const reverse = require('./index');

test('Reverse function exists', () => {
  expect(reverse).toBeDefined();
});

test('Reverse reverses a string', () => {
  expect(reverse('I look')).toEqual('look I');
});

test('Reverse reverses a string', () => {
  expect(reverse('I look so happy')).toEqual('happy so look I');
});
