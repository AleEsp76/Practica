import helpers from './helper';
describe('greet', () => {
  it('should return greet message with full name', () => {
    helpers.getFullName = jest.fn().mockReturnValue('mock full name');
    const result = helpers.greet('QJ', 'Li');
    expect(result).toBe('Hey, mock full name');
  });
});s