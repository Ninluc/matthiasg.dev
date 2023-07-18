import { getStringFromChars } from '$lib/scripts/stringsBuilder';

export function charTyping(
	node: Element,
	{ speed = 1, delay = 0, characters = '', trailingRdCharacterMaxNumber = 3 }
) {
	const valid = node.childNodes.length === 1 && node.childNodes[0]?.nodeType === Node.TEXT_NODE;

	// Unify text node and element node
	if (!valid) {
		const wrapper = document.createElement('span');
		wrapper.innerHTML = node.innerHTML;
		node.innerHTML = '';
		node.appendChild(wrapper);
	}

	const text: string = node.textContent || '';
	const duration = text.length / (speed * 0.01);

	return {
		delay,
		duration,
		tick: (t: number) => {
			function addCharToEnd(string: string) {
				let numberOfCharacters = Math.floor(Math.random() * trailingRdCharacterMaxNumber) + 1;
				numberOfCharacters =
					numberOfCharacters > string.length ? string.length : numberOfCharacters;
				return (
					string.slice(0, string.length - numberOfCharacters) +
					getStringFromChars(characters, numberOfCharacters, numberOfCharacters)
				);
			}

			const i = Math.trunc(text.length * t);
			node.textContent = addCharToEnd(text.slice(0, i));

			if (i === text.length) {
				node.textContent = text;
			}
		}
	};
}
