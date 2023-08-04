export const PREVIEW_IMG_FOLDER = '/img/works/preview/';

// export async function getWorkPreviewImage(workSlug: string): Promise<string[]> {
// 	// Get all images with a name like the workSlug
// 	const imageFiles = import.meta.glob('/static/img/works/preview/*.+(jpg|jpeg|png|gif|svg|webp)');

// 	const imageNames: string[] = [];

// 	for (const key in imageFiles) {
// 		const imageName = key.split('/').pop() ?? '';
// 		if (imageName.split('.')[0] == workSlug) {
// 			imageNames.push(imageName);
// 		}
// 	}

// 	return imageNames;
// }
export type Image = { format: string; src: string; width?: number; height?: number };
export type ImageFiles = Record<string, { default: Image }>;

export function getWorkPreviewImage(workSlug: string): Image | undefined {
	// Get all images with a name like the workSlug
	const imageFiles: ImageFiles = import.meta.glob('../../../works/*.+(jpg|jpeg|png|gif|svg|webp)', {
		query: { run: '' },
		eager: true
	});

	for (const key in imageFiles) {
		const imageName = key.split('/').pop() ?? '';
		if (imageName.split('.')[0] == workSlug) {
			return imageFiles[key]?.default || undefined;
		}
	}

	return undefined;
}
