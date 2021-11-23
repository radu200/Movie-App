import * as utils from '../';

describe('Format date', () => {
  it('should format the date', () => {
    const date = '2021-05-12';
    const formattedDate = utils.formatDate(date);
    expect(formattedDate).toBe('May 12, 2021');
  });
});
