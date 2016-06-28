import expect from 'expect';
const users = [
  {
    id: 1,
    name: 'Doron'
  },
  {
    id: 2,
    name: 'John'
  }
];
describe('Fake test', () => {
  it('should pass', () => {
    expect(true).toEqual(true);
  });
  it('user 1 is not equal to user 2', () => {
    expect(users[0].name).toNotEqual(users[1].name);
  });
});
