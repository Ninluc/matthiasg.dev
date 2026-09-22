import { json, type RequestHandler } from '@sveltejs/kit';
import { WAKAPI_API_KEY } from '$env/static/private';

export const GET: RequestHandler = async (event) => {
	// Set the cache
	event.setHeaders({
		'Cache-Control': 'no-cache'
	});

	void refreshWakapiFacts();
	return json(facts[Math.floor(Math.random() * facts.length)]);
};

// APIS
type WakapiStats = {
	data?: {
		total_seconds?: number;
		human_readable_total: string;
	};
};

async function getWakapiVscodeYearStats(user: string): Promise<WakapiStats | undefined> {
	try {
		const response = await fetch(
			`https://wakapi.matthiasg.dev/api/compat/wakatime/v1/users/${encodeURIComponent(
				user
			)}/stats/year?editor=vscode`,
			{
				headers: {
					Authorization: `Basic ${btoa(WAKAPI_API_KEY)}`
				}
			}
		);
		if (!response.ok) {
			throw new Error('Failed to fetch data');
		}
		return (await response.json()) as WakapiStats;
	} catch {
		return undefined;
	}
}

async function getWakapiProjectStats(
	user: string,
	project: string
): Promise<WakapiStats | undefined> {
	try {
		const response = await fetch(
			`https://wakapi.matthiasg.dev/api/compat/wakatime/v1/users/${encodeURIComponent(
				user
			)}/stats/all_time?project=${encodeURIComponent(project)}`,
			{
				headers: {
					Authorization: `Basic ${btoa(WAKAPI_API_KEY)}`
				}
			}
		);
		if (!response.ok) {
			throw new Error('Failed to fetch data');
		}
		return (await response.json()) as WakapiStats;
	} catch {
		return undefined;
	}
}

function formatDuration(seconds: number) {
	const hours = Math.floor(seconds / 3600);
	const minutes = Math.floor((seconds % 3600) / 60);
	return `${hours}h ${minutes}m`;
}

const thisProjectName = 'matthiasg.dev';
const userName = 'Ninuc';
const currentYear = new Date().getFullYear();

const staticFacts = [
	"A appris l'HTML sur <a target='_blank' href='https://www.codecademy.com/learn/learn-html'>codecademy</a> en 2013",
	"A appris le CSS sur <a target='_blank' href='https://www.codecademy.com/learn/learn-css'>codecademy</a> en 2013",
	"Diplômé d'un bachelier en développement d'applications depuis 2025"
];

let facts = staticFacts;
let wakapiRefresh: Promise<void> | undefined;

async function refreshWakapiFacts() {
	if (wakapiRefresh) return wakapiRefresh;

	wakapiRefresh = (async () => {
		const [wakapiVscodeYearStats, thisProject] = await Promise.all([
			getWakapiVscodeYearStats(userName),
			getWakapiProjectStats(userName, thisProjectName)
		]);
		const currentYearSeconds = wakapiVscodeYearStats?.data?.total_seconds;
		const projectTotalSeconds = thisProject?.data?.total_seconds;
		const wakapiFacts = [
			...(currentYearSeconds
				? [
						`${
							formatDuration(currentYearSeconds) ?? 'Plus de 1000h'
						} sur vscode depuis le 1er janvier ${currentYear}`
				  ]
				: []),
			...(projectTotalSeconds
				? [`${formatDuration(projectTotalSeconds) ?? 'Plus de 60h'} passées sur ce projet`]
				: [])
		];

		if (wakapiFacts.length > 0) {
			facts = [...staticFacts, ...wakapiFacts];
		}
	})().finally(() => {
		wakapiRefresh = undefined;
	});

	return wakapiRefresh;
}
