export const WORK_IMG_FOLDER = '../../../works/img/';

export type Image = { format: string; src: string; width?: number; height?: number };
export type ImageFiles = Record<string, { default: Image }>;

export function getWorkDocImage(image: string): Image | undefined {
	// Get all images with a name like the workSlug
	const imageFiles: ImageFiles = import.meta.glob(
		'../../../works/img/**/*.+(jpg|jpeg|png|gif|svg|webp)',
		{
			query: { run: '' },
			eager: true
		}
	);

	for (const key in imageFiles) {
		const imageFullName = key.split('/').pop() ?? '';
		const imageName = imageFullName.split('.').slice(0, -1).join('.') ?? '';
		if (imageName == image) {
			return imageFiles[key]?.default || undefined;
		}
	}

	return undefined;
}
