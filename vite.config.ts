import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
	plugins: [
		dts({
			insertTypesEntry: true,
			// exclude: ['node_modules'], // Uncommenting does not change anything
			skipDiagnostics: false
		})
	],
	build: {
		lib: {
			entry: './src/lib/index.ts',
			name: 'TestLib'
		},
		sourcemap: true
	}
});
