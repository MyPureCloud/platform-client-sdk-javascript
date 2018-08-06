import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
import replace from 'rollup-plugin-re';
import builtins from 'rollup-plugin-node-builtins';
import globals from 'rollup-plugin-node-globals';

export default {
	input: 'src/purecloud-platform-client-v2/index.js',
	output: {
		file: 'dist/web-cjs/bundle.js',
		format: 'cjs',
		name: 'platformClient',
		globals: [
			'tty',
			'util',
			'fs',
			'events',
			'crypto',
			'buffer',
			'querystring',
			'path',
			'string_decoder',
			'stream',
			'os',
			'http',
			'https',
			'url',
			'zlib',
			'superagent'
		]
	},
	plugins: [ 
		builtins(),
		resolve(),
		replace({
			// https://github.com/rollup/rollup-plugin-commonjs/issues/166#issuecomment-328853157
			// do replace before commonjs
			patterns: [
				{
					// regexp match with resolved path
					match: /formidable(\/|\\)lib/, 
					// string or regexp
					test: 'if (global.GENTLY) require = GENTLY.hijack(require);', 
					// string or function to replaced with
					replace: '',
				}
			]
		}),
		commonjs({
			// non-CommonJS modules will be ignored, but you can also specifically include/exclude files
			include: 'node_modules/**',  // Default: undefined
			
			// Exclude superagent. It will be resolved by browserify. Can't resolve it here or it runs into some issue where replace -> replace$$0 in superagent code. Causes runtime errors in the browser. This may be because of a circular dependency. There are two warnings about them during the rollup build when superagent is included.
			exclude: ['node_modules/superagent/**'],

			browser: true,
			preferBuiltins: false,
			// if true then uses of `global` won't be dealt with by this plugin
			ignoreGlobal: false,  // Default: false

			// if false then skip sourceMap generation for CommonJS modules
			sourceMap: false  // Default: true
		}),
		globals(),
		json()
	],
	external: [
		'util',
		'string_decoder',
		'url',
		'stream',
		'https',
		'http',
		'fs',
		'zlib',
		'path',
		'events',
		'buffer',
		'querystring',
		'tty',
		'crypto',
		'os',
		'superagent'
	]
};