// @ts-ignore
const sum = (a: number, b: number): number => a + b;

describe('Test - TS', () => {
  it('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
});
