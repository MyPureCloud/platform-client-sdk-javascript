import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
import replace from 'rollup-plugin-re';

export default {
	input: 'src/purecloud-platform-client-v2/index.js',
	output: {
		file: 'dist/node/purecloud-platform-client-v2.js',
		format: 'cjs'
	},
	plugins: [ 
		resolve(),
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