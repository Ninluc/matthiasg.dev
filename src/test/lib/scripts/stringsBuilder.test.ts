import { getStringFromChars } from '$lib/scripts/stringsBuilder';
import { expect, test } from 'vitest';

// Tests that the function returns a string with length between minLength and maxLength using valid characters and default parameters
test('test_valid_characters_and_default_parameters', () => {
	const result = getStringFromChars('abc');
	expect(result.length).toBeGreaterThanOrEqual(2);
	expect(result.length).toBeLessThanOrEqual(3);
	expect(result).toMatch(/^[abc]{2,3}$/);
});

// Tests that the function returns a string with length between minLength and maxLength using valid characters and custom minLength
test('test_valid_characters_and_custom_min_length', () => {
	const result = getStringFromChars('abc', 4);
	expect(result.length).toBeGreaterThanOrEqual(4);
	expect(result.length).toBeLessThanOrEqual(5);
	expect(result).toMatch(/^[abc]{4,5}$/);
});

// Tests that the function throws an error when characters is empty
test('test_empty_characters', () => {
	expect(() => getStringFromChars('')).toThrowError('characters must not be empty');
});

// Tests that the function throws an error when maxLength is less than minLength
test('test_max_length_less_than_min_length', () => {
	expect(() => getStringFromChars('abc', 4, 3)).toThrowError(
		'maxLength must be greater or equal than minLength'
	);
});
