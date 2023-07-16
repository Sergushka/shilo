import { getUrls } from '$lib/firebase';

export async function load() {
	const urls = await getUrls();

	return { urls };
}
