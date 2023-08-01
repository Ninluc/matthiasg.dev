import { PAGE_ORDER } from '$stores/layout/pageOrder';

export function pageToIsBefore(pathTo: string, pathCompare: string): boolean {
	const pathToOrder = getPathOrder(removeTrailingSlash(pathTo));
	const pathCompareOrder = getPathOrder(removeTrailingSlash(pathCompare));

	// If either path is not in PAGE_ORDER, return false
	if (pathToOrder === -1 || pathCompareOrder === -1) {
		return false;
	}

	// If pathToOrder is less than pathCompareOrder, return true
	return pathToOrder < pathCompareOrder;
}

export function removeTrailingSlash(path: string): string {
	if (path.endsWith('/') && path.length > 1) {
		return path.slice(0, -1);
	}
	return path;
}

export function getPathOrder(path: string): number {
	// Foreach key of PAGE_ORDER, test the path as a regex
	// If it matches, return the value of PAGE_ORDER[key]
	// If no match, return -1
	for (const key in PAGE_ORDER) {
		if (new RegExp('^' + key + '$').test(path)) {
			return PAGE_ORDER[key] as number;
		}
	}

	return -1;
}
