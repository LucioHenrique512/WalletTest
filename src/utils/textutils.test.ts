import {obfuscateCardNumber} from './textutils';

describe('textutils', () => {
  describe('obfuscateCardNumber', () => {
    it('should obfuscate correctly', () => {
      const number = '1234 1234 1234 1234';
      const expected = '•••• •••• •••• 1234';

      const result = obfuscateCardNumber(number);
      expect(result).toBe(expected);
    });
    it('should return nothing when given undefined', () => {
      const number = undefined;
      const expected = '';

      const result = obfuscateCardNumber(number);
      expect(result).toBe(expected);
    });
  });
});
