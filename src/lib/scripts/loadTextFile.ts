export async function getTextFileLines(path: string): Promise<string[]> {
	const text = await getTextFile(path);
	return text.split(/\r?\n/);
}

export async function getTextFile(path: string): Promise<string> {
	const response = await fetch(path);
	if (!response.ok) throw new Error(`Failed to load text file: ${path}`);
	return await response.text();
}
