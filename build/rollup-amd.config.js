export default {
	input: 'src/purecloud-platform-client-v2/index.js',
	output: {
		file: 'dist/web-amd/purecloud-platform-client-v2.js',
		format: 'amd'
	},
	external: [
		'axios',
		'qs'
	]
};