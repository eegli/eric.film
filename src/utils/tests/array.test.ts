import { getElementFromArray } from '../array';

describe('Get element from array', () => {
  it("return element if it's not an array", () => {
    const item = 'hello world';
    expect(getElementFromArray(item)).toEqual(item);
  });

  it('returns first element if no index is given', () => {
    const array = [1, 2, 3];
    expect(getElementFromArray(array)).toEqual(array[0]);
  });

  it('returns element at given index of array', () => {
    const array = ['hi', { url: [1, 2, 3] }];
    expect(getElementFromArray(array, 1)).toEqual(array[1]);
  });
});
