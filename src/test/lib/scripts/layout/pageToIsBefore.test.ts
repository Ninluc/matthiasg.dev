import { getPathOrder, pageToIsBefore } from '$lib/scripts/layout/pageToIsBefore';
import { expect, test } from 'vitest';

// pageToIsBefore
test('returns true when pathToOrder is less than pathCompareOrder', () => {
	const result = pageToIsBefore('/', '/projects');
	expect(result).toBe(true);
	const result2 = pageToIsBefore('/', '/projects/');
	expect(result2).toBe(true);
	const result3 = pageToIsBefore('/projects', '/projects/un-test');
	expect(result3).toBe(true);
});

// getpathOrder
test('returns -1 for empty string', () => {
	expect(getPathOrder('')).toBe(-1);
});

test('returns -1 for path not in PAGE_ORDER', () => {
	expect(getPathOrder('/not-in-page-order')).toBe(-1);
});
