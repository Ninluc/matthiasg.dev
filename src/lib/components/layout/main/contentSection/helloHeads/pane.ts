import { Pane } from 'tweakpane';

export async function pane(...args: any[]) {
	// Add the pane
	const pane = new Pane({ title: 'Scene' });

	const cameraControls = pane.addFolder({ title: 'Camera' });
	// cameraControls.addInput(camera, 'position');
	cameraControls.addInput(args[0], 'rotation');
	// cameraControls.addInput(camera, 'fov');
	cameraControls.on('change', (ev) => {
		args[0][ev.presetKey as keyof (typeof args)[0]] = ev.value;
	});

	const headControls = pane.addFolder({ title: 'Head' });
	headControls.addInput(args[1], 'position');
	headControls.addInput(args[1], 'rotation');
	headControls.addInput(args[1], 'scale');
	headControls.on('change', (ev) => {
		args[1][ev.presetKey as keyof (typeof args)[1]] = ev.value;
	});

	const lightControls = pane.addFolder({ title: 'Light' });
	lightControls.addInput(args[2], 'color');
	lightControls.addInput(args[2], 'intensity');
	lightControls.addInput(args[2], 'position');
	// lightControls.addInput(directionalLight, 'shadow');
	lightControls.on('change', (ev) => {
		args[2][ev.presetKey as keyof (typeof args)[2]] = ev.value;
	});

	const ambientlightControls = pane.addFolder({ title: 'Ambient Light' });
	ambientlightControls.addInput(args[3], 'color');
	ambientlightControls.addInput(args[3], 'intensity');
	// ambientlightControls.addInput(ambientLight, 'shadow');
	ambientlightControls.on('change', (ev) => {
		args[3][ev.presetKey as keyof (typeof args)[3]] = ev.value;
	});
}
