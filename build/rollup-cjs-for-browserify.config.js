import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import replace from 'rollup-plugin-re';
import builtins from 'rollup-plugin-node-builtins';
import globals from 'rollup-plugin-node-globals';
import babel, { getBabelOutputPlugin } from '@rollup/plugin-babel';

export default {
	input: 'src/purecloud-platform-client-v2/index.js',
	output: {
		file: 'dist/web-cjs/bundle.js',
		format: 'cjs',
		name: 'platformClient',
		plugins: [getBabelOutputPlugin({ presets: ['@babel/preset-env'] })],
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
			'axios',
			'qs'
		]
	},
	plugins: [
		builtins(),
		nodeResolve({ browser: true }),
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
				},
				/*
				  Replace some browser feature detection logic with a literal value
				  This causes this code to be compiled out of the build via dead code-elimination:
				  ```
				  if (typeof window === 'undefined' &&
				      typeof require === 'function' &&
				      require('fs')) {}
				  ```
				  This eliminates some pontential down-stream bundling complications with `require('fs')`
				*/
				{
					test: "typeof window === 'undefined'",
					replace: "false",
				}
			]
		}),
		commonjs({
			// non-CommonJS modules will be ignored, but you can also specifically include/exclude files
			include: 'node_modules/**',  // Default: undefined

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
		'qs'
	]
};