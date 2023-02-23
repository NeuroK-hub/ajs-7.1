import Validator from '../index';

test.each([
  ['Abrikos_papiros-24b', true],
  ['Abrikos_papiros-2441b', false],
  ['d34dsd3d', true],
  ['d34dsd3dd', true],
  ['-abrikos_papiros-24b', false],
  ['Abrikos_papiros-24', false],
  ['Abriкos_papiros-24b', false],
  ['d3d', true],
])('basic test', (inputName, expectedResult) => {
  const name = new Validator(inputName);
  expect(name.validateUsername()).toBe(expectedResult);
});
