/**
 * Transform a string to be a valid HTML element id
 * @param text Text to transform
 */
export function toFragment(text: string) {
	return text
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/(^-|-$)+/g, '');
}
