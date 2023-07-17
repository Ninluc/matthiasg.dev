export function getStringFromChars(
	characters: string,
	minLength = 2,
	maxLength: number | undefined = undefined
) {
	// Vérification
	if (characters.length === 0) {
		throw new Error('characters must not be empty');
	}

	maxLength = maxLength || minLength;
	maxLength -= minLength;
	if (maxLength < 0) {
		throw new Error('maxLength must be greater or equal than minLength');
	}

	let text = '';
	for (let i = 0; i < Math.random() * maxLength + minLength; i++) {
		text += characters[Math.floor(Math.random() * characters.length)];
	}
	return text;
}
