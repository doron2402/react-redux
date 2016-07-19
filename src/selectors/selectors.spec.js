import expect from 'expect';
import {authorsFormattedForDropdown} from './selectors';

describe('Author Selectors', () => {
  describe('authorsFormattedForDropdown', () => {
    it('Should return author data formatted', () => {
      const authors = [
        { id: 'tttt', firstName: 'aaaa', lastName: 'bbbbb' },
        { id: 'jjjjj', firstName: 'ccccc', lastName: 'dddddd' }
      ];
      const expected = [
        { value: authors[0].id, text: `${authors[0].firstName} ${authors[0].lastName}` },
        { value: authors[1].id, text: `${authors[1].firstName} ${authors[1].lastName}` }
      ];
      expect(authorsFormattedForDropdown(authors)).toEqual(expected);
    });
  });
});
