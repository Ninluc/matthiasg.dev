import { expoOut } from 'svelte/easing';

export type SlideParams = {
	delay?: number;
	duration?: number;
	easing?: (t: number) => number;
	toDirection?: 'left' | 'right';
};

export function slide(
	node: Element,
	{ delay = 0, duration = 1000, easing = expoOut, toDirection = 'left' }: SlideParams = {},
	options: { direction: 'in' | 'out' } = { direction: 'in' }
) {
	const { direction } = options;
	const o = 100;

	return {
		delay,
		duration,
		easing,
		css: (t: number, u: number) => {
			const invert: boolean =
				(toDirection === 'left' && direction === 'out') ||
				(toDirection === 'right' && direction === 'in');

			return `transform: translateX(${invert ? '-' : ''}${u * o}%)`;
		}
	};
}
