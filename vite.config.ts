import react from '@vitejs/plugin-react-swc';
import {defineConfig} from 'vite';
import * as path from 'path';
import svgr from 'vite-plugin-svgr';
import type { VitePluginSvgrOptions } from 'vite-plugin-svgr';

export default defineConfig({
	plugins: [
		react(),
		svgr({
			exportAsDefault: true,
		} as unknown as VitePluginSvgrOptions)	// Чтобы устранить проблему с exportAsDefault
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'), // Устанавливаем алиас "@" на папку src
		},
	},
});
