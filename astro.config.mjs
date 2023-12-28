import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
// import compress from "astro-compress";
import react from "@astrojs/react";
import markdownConfig from './markdown.config';
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";
import robotsTxt from "astro-robots-txt";

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: netlify(),
  site: "https://www.linkedin.com/in/javiergarciadelafuente/",
  prefetch: true,
  markdown: {
    ...markdownConfig
  },
  integrations: [tailwind({
    config: {
      applyBaseStyles: false
    }
  }), react(), mdx({
    ...markdownConfig,
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "one-dark-pro"
    }
  }), sitemap(), partytown({
    config: {
      forward: ["dataLayer.push"]
    }
  }), robotsTxt({
    sitemap: ['https://www.rohitk06.site/sitemap-0.xml', 'http://www.k06.site/sitemap-index.xml']
  })]
  // output: "server",
  // adapter: vercel({
  //   webAnalytics: {
  //     enabled: true
  //   },
  //   speedInsights: {
  //     enabled: true
  //   },
  //   imageService: true
  // })
  ,
  output: "server",
  adapter: netlify()
});