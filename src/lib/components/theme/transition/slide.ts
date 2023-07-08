import { expoOut } from "svelte/easing";

export type SlideParams = {
    delay? : number,
	duration? : number,
	easing? : (t: number) => number,
    toDirection?: 'left' | 'right'
}

export function slide(node: Element, {
	delay = 0,
	duration = 1000,
	easing = expoOut,
    toDirection = "left",
}: SlideParams = {}, options: { direction: 'in' | 'out' }) {
    const { direction } = options;
	const o = 100;

	return {
		delay,
		duration,
		easing,
		css: (t:number, u:number) => {
			const factor:number = u;

			console.log(u);

			const invert:boolean = (toDirection=== 'left' && direction === 'out') || (toDirection === 'right' && direction === 'in');

			console.log(invert);
			console.log(direction + " | " + toDirection + " | " + `transform: translateX(${invert ? '-' : ''}${factor * o}%)`);

            return `transform: translateX(${invert ? '-' : ''}${factor * o}%)`;
        }
	};
}