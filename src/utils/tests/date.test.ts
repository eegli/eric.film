import { dateFormat, months } from '../dates';

describe('Formats date correctly for a blog post', () => {
  it('returns date from string', () => {
    const date = '2020-09-10T16:06:34.637868+00:00';
    expect(dateFormat(date)).toEqual('September 10, 2020');
  });

  it('has all 12 months defined', () => {
    expect(months.length).toEqual(12);
  });
});
