// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import pagefind from "astro-pagefind";
import { addCopyButton } from "shiki-transformer-copy-button";

export default defineConfig({
  site: "https://example.com",
  integrations: [sitemap(), pagefind(), mdx()],
  markdown: {
    shikiConfig: {
      theme: "dracula",
      transformers: [
        addCopyButton({
          toggle: 2000,
        }),
      ],
    },
  },
});
