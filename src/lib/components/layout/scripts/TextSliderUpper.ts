export class TextSliderUpper {
	wrapper: HTMLElement;
	delay: number;
	acceleration: number;
	words: string[] | undefined;

	constructor(wrapper: HTMLElement, delay?: number, acceleration?: number) {
		this.wrapper = wrapper;
		this.words = this.wrapper.textContent?.split(' ');

		// Set delay between characters (in ms)
		this.delay = delay ?? 80;

		this.acceleration = acceleration ?? 0.9;

		// Wrap content in relevant wrappers
		this._wrapContent();
	}

	_wrapContent() {
		let delay = 0;
		let content = '';
		let accelerationTick = 0;

		// Loop through each word, wrap each character in a span
		this.words?.forEach((word) => {
			delay += this.delay * Math.pow(this.acceleration, accelerationTick++);
			content += `<span style="animation-delay: ${delay}ms">${word}</span>`;

			// Add spacing between words
			if (content !== '') content += ' ';
		});

		// Add content to wrapper
		this.wrapper.innerHTML = content;
	}
}
