const { escapeHtml, isValidPhone, isValidRating } = require('../assets/js/utils.js');

describe('utils.escapeHtml', () => {
  test('escapes dangerous characters', () => {
    const input = '<script>alert("x")</script>&\'"';
    const out = escapeHtml(input);
    expect(out).not.toContain('<script>');
    expect(out).toContain('&lt;script&gt;');
    expect(out).toContain('&amp;');
    expect(out).toContain('&#39;');
    expect(out).toContain('&quot;');
  });
});

describe('utils.isValidPhone', () => {
  test('accepts common brazilian formats', () => {
    expect(isValidPhone('(11) 99999-9999')).toBe(true);
    expect(isValidPhone('11 9888-8888')).toBe(true);
    expect(isValidPhone('11988888888')).toBe(false); // não formatado com hífen pode falhar
  });

  test('rejects invalid phones', () => {
    expect(isValidPhone('abc')).toBe(false);
    expect(isValidPhone('12345')).toBe(false);
    expect(isValidPhone('')).toBe(false);
  });
});

describe('utils.isValidRating', () => {
  test('valid ratings', () => {
    expect(isValidRating(0)).toBe(true);
    expect(isValidRating(4.6)).toBe(true);
    expect(isValidRating('3.5')).toBe(true);
  });

  test('invalid ratings', () => {
    expect(isValidRating(-1)).toBe(false);
    expect(isValidRating(6)).toBe(false);
    expect(isValidRating('abc')).toBe(false);
  });
});
