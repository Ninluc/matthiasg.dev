import { json, type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async (event) => {
	// Set the cache
	event.setHeaders({
		'Cache-Control': 'no-cache'
	});

	return json(facts[Math.floor(Math.random() * facts.length)]);
};

// APIS
// CodeTime
function getCodeTime(href: string) {
	return fetch(href)
		.then((res) => res.json())
		.then((data) => {
			return data.message;
		});
}

const codeTimeHref = 'https://api.codetime.dev/shield?id=16877&in=0';
const thisProjectCodeTimeHref =
	'https://api.codetime.dev/shield?id=16877&project=matthiasg.dev&in=0';

const facts = [
	"A appris l'HTML sur <a target='_blank' href='https://www.codecademy.com/learn/learn-html'>codecademy</a> en 2013",
	"A appris le CSS sur <a target='_blank' href='https://www.codecademy.com/learn/learn-css'>codecademy</a> en 2013",
	`${await getCodeTime(codeTimeHref)} de code depuis le 1er janvier 2023`,
	`${await getCodeTime(thisProjectCodeTimeHref)} passées sur ce projet`
];
