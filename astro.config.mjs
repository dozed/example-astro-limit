// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	build: {
		format: "file", // for foo.astro output foo.html instead of foo/index.html
		concurrency: 2,
	},
});
