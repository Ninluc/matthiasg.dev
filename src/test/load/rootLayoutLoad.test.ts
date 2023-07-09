import { expect, test } from 'vitest';
import { load } from '../../routes/+layout';

function testLoad(url: any, expected: any) {
	const result = load({ url });
	expect(result).toEqual(expected);
}

test('rootLayoutLoadNormal', () => {
	const url = new URL('http://localhost/path/to/resource#fragment');
	testLoad(url, { pathname: '/path/to/resource' });
});

test('rootLayoutLoadNull', () => {
	const url = {};
	testLoad(url, {});
});

test('rootLayoutLoadWithFragment', () => {
	const url = new URL('http://localhost/path/to/resource#fragment');
	testLoad(url, { pathname: '/path/to/resource' });
});
