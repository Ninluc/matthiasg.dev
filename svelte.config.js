import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex, escapeSvelte } from 'mdsvex';
import shiki from 'shiki';
import remarkUnwrapImages from 'remark-unwrap-images';
import remarkAbbr from 'remark-abbr';
import admonitions from 'remark-admonitions';

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md'],
	layout: {
		_: 'src/lib/components/layout/mdsvex/layout.svelte'
	},
	highlight: {
		highlighter: async (code, lang = 'text') => {
			const highlighter = await shiki.getHighlighter({ theme: 'css-variables' });
			const result = escapeSvelte(highlighter.codeToHtml(code, { lang }));
			return `{@html \`${result}\`}`;
		}
	},
	remarkPlugins: [
		remarkUnwrapImages,
		remarkAbbr,
		[
			admonitions,
			{
				customTypes: {
					example: {
						svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path d="M5 3.25a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5A.75.75 0 0 1 5 3.25Zm0 5a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5A.75.75 0 0 1 5 8.25Zm0 5a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1-.75-.75ZM.924 10.32a.5.5 0 0 1-.851-.525l.001-.001.001-.002.002-.004.007-.011c.097-.144.215-.273.348-.384.228-.19.588-.392 1.068-.392.468 0 .858.181 1.126.484.259.294.377.673.377 1.038 0 .987-.686 1.495-1.156 1.845l-.047.035c-.303.225-.522.4-.654.597h1.357a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5c0-1.005.692-1.52 1.167-1.875l.035-.025c.531-.396.8-.625.8-1.078a.57.57 0 0 0-.128-.376C1.806 10.068 1.695 10 1.5 10a.658.658 0 0 0-.429.163.835.835 0 0 0-.144.153ZM2.003 2.5V6h.503a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1h.503V3.308l-.28.14a.5.5 0 0 1-.446-.895l1.003-.5a.5.5 0 0 1 .723.447Z"></path></svg>'
					}
				}
			}
		]
	]
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],

	extensions: ['.svelte', '.md'],

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter({
			precompress: true
		}),
		prerender: {
			handleMissingId: 'warn',
			handleHttpError: 'fail'
		},
		alias: {
			$components: 'src/lib/components',
			$stores: 'src/lib/stores'
		}
	}
};

export default config;
