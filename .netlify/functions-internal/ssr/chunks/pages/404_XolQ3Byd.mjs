/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, e as addAttribute, s as spreadAttributes, u as unescapeHTML, f as renderComponent, g as renderSlot, h as renderHead, m as maybeRenderHead, i as createTransitionScope } from '../astro_MxHgmuG5.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                          */

const $$Astro$9 = createAstro("https://www.linkedin.com/in/javiergarciadelafuente/");
const $$OpenGraphArticleTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$OpenGraphArticleTags;
  const { publishedTime, modifiedTime, expirationTime, authors, section, tags } = Astro2.props.openGraph.article;
  return renderTemplate`${publishedTime ? renderTemplate`<meta property="article:published_time"${addAttribute(publishedTime, "content")}>` : null}${modifiedTime ? renderTemplate`<meta property="article:modified_time"${addAttribute(modifiedTime, "content")}>` : null}${expirationTime ? renderTemplate`<meta property="article:expiration_time"${addAttribute(expirationTime, "content")}>` : null}${authors ? authors.map((author) => renderTemplate`<meta property="article:author"${addAttribute(author, "content")}>`) : null}${section ? renderTemplate`<meta property="article:section"${addAttribute(section, "content")}>` : null}${tags ? tags.map((tag) => renderTemplate`<meta property="article:tag"${addAttribute(tag, "content")}>`) : null}`;
}, "C:/Users/la bix del pecho/Desktop/Portfolio/node_modules/astro-seo/src/components/OpenGraphArticleTags.astro", void 0);

const $$Astro$8 = createAstro("https://www.linkedin.com/in/javiergarciadelafuente/");
const $$OpenGraphBasicTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$OpenGraphBasicTags;
  const { openGraph } = Astro2.props;
  return renderTemplate`<meta property="og:title"${addAttribute(openGraph.basic.title, "content")}><meta property="og:type"${addAttribute(openGraph.basic.type, "content")}><meta property="og:image"${addAttribute(openGraph.basic.image, "content")}><meta property="og:url"${addAttribute(openGraph.basic.url || Astro2.url.href, "content")}>`;
}, "C:/Users/la bix del pecho/Desktop/Portfolio/node_modules/astro-seo/src/components/OpenGraphBasicTags.astro", void 0);

const $$Astro$7 = createAstro("https://www.linkedin.com/in/javiergarciadelafuente/");
const $$OpenGraphImageTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$OpenGraphImageTags;
  const { image } = Astro2.props.openGraph.basic;
  const { secureUrl, type, width, height, alt } = Astro2.props.openGraph.image;
  return renderTemplate`<meta property="og:image:url"${addAttribute(image, "content")}>${secureUrl ? renderTemplate`<meta property="og:image:secure_url"${addAttribute(secureUrl, "content")}>` : null}${type ? renderTemplate`<meta property="og:image:type"${addAttribute(type, "content")}>` : null}${width ? renderTemplate`<meta property="og:image:width"${addAttribute(width, "content")}>` : null}${height ? renderTemplate`<meta property="og:image:height"${addAttribute(height, "content")}>` : null}${alt ? renderTemplate`<meta property="og:image:alt"${addAttribute(alt, "content")}>` : null}`;
}, "C:/Users/la bix del pecho/Desktop/Portfolio/node_modules/astro-seo/src/components/OpenGraphImageTags.astro", void 0);

const $$Astro$6 = createAstro("https://www.linkedin.com/in/javiergarciadelafuente/");
const $$OpenGraphOptionalTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$OpenGraphOptionalTags;
  const { optional } = Astro2.props.openGraph;
  return renderTemplate`${optional.audio ? renderTemplate`<meta property="og:audio"${addAttribute(optional.audio, "content")}>` : null}${optional.description ? renderTemplate`<meta property="og:description"${addAttribute(optional.description, "content")}>` : null}${optional.determiner ? renderTemplate`<meta property="og:determiner"${addAttribute(optional.determiner, "content")}>` : null}${optional.locale ? renderTemplate`<meta property="og:locale"${addAttribute(optional.locale, "content")}>` : null}${optional.localeAlternate?.map((locale) => renderTemplate`<meta property="og:locale:alternate"${addAttribute(locale, "content")}>`)}${optional.siteName ? renderTemplate`<meta property="og:site_name"${addAttribute(optional.siteName, "content")}>` : null}${optional.video ? renderTemplate`<meta property="og:video"${addAttribute(optional.video, "content")}>` : null}`;
}, "C:/Users/la bix del pecho/Desktop/Portfolio/node_modules/astro-seo/src/components/OpenGraphOptionalTags.astro", void 0);

const $$Astro$5 = createAstro("https://www.linkedin.com/in/javiergarciadelafuente/");
const $$ExtendedTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$ExtendedTags;
  const { props } = Astro2;
  return renderTemplate`${props.extend.link?.map((attributes) => renderTemplate`<link${spreadAttributes(attributes)}>`)}${props.extend.meta?.map(({ content, httpEquiv, media, name, property }) => renderTemplate`<meta${addAttribute(content, "content")}${addAttribute(httpEquiv, "http-equiv")}${addAttribute(media, "media")}${addAttribute(name, "name")}${addAttribute(property, "property")}>`)}`;
}, "C:/Users/la bix del pecho/Desktop/Portfolio/node_modules/astro-seo/src/components/ExtendedTags.astro", void 0);

const $$Astro$4 = createAstro("https://www.linkedin.com/in/javiergarciadelafuente/");
const $$TwitterTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$TwitterTags;
  const { card, site, title, creator, description, image, imageAlt } = Astro2.props.twitter;
  return renderTemplate`${card ? renderTemplate`<meta name="twitter:card"${addAttribute(card, "content")}>` : null}${site ? renderTemplate`<meta name="twitter:site"${addAttribute(site, "content")}>` : null}${title ? renderTemplate`<meta name="twitter:title"${addAttribute(title, "content")}>` : null}${image ? renderTemplate`<meta name="twitter:image"${addAttribute(image, "content")}>` : null}${imageAlt ? renderTemplate`<meta name="twitter:image:alt"${addAttribute(imageAlt, "content")}>` : null}${description ? renderTemplate`<meta name="twitter:description"${addAttribute(description, "content")}>` : null}${creator ? renderTemplate`<meta name="twitter:creator"${addAttribute(creator, "content")}>` : null}`;
}, "C:/Users/la bix del pecho/Desktop/Portfolio/node_modules/astro-seo/src/components/TwitterTags.astro", void 0);

const $$Astro$3 = createAstro("https://www.linkedin.com/in/javiergarciadelafuente/");
const $$LanguageAlternatesTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$LanguageAlternatesTags;
  const { languageAlternates } = Astro2.props;
  return renderTemplate`${languageAlternates.map((alternate) => renderTemplate`<link rel="alternate"${addAttribute(alternate.hrefLang, "hreflang")}${addAttribute(alternate.href, "href")}>`)}`;
}, "C:/Users/la bix del pecho/Desktop/Portfolio/node_modules/astro-seo/src/components/LanguageAlternatesTags.astro", void 0);

const $$Astro$2 = createAstro("https://www.linkedin.com/in/javiergarciadelafuente/");
const $$SEO = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SEO;
  Astro2.props.surpressWarnings = true;
  function validateProps(props) {
    if (props.openGraph) {
      if (!props.openGraph.basic || (props.openGraph.basic.title ?? void 0) == void 0 || (props.openGraph.basic.type ?? void 0) == void 0 || (props.openGraph.basic.image ?? void 0) == void 0) {
        throw new Error(
          "If you pass the openGraph prop, you have to at least define the title, type, and image basic properties!"
        );
      }
    }
    if (props.title && props.openGraph?.basic.title) {
      if (props.title == props.openGraph.basic.title && !props.surpressWarnings) {
        console.warn(
          "WARNING(astro-seo): You passed the same value to `title` and `openGraph.optional.title`. This is most likely not what you want. See docs for more."
        );
      }
    }
    if (props.openGraph?.basic?.image && !props.openGraph?.image?.alt && !props.surpressWarnings) {
      console.warn(
        "WARNING(astro-seo): You defined `openGraph.basic.image`, but didn't define `openGraph.image.alt`. This is stongly discouraged.'"
      );
    }
  }
  validateProps(Astro2.props);
  let updatedTitle = "";
  if (Astro2.props.title) {
    updatedTitle = Astro2.props.title;
    if (Astro2.props.titleTemplate) {
      updatedTitle = Astro2.props.titleTemplate.replace(/%s/g, updatedTitle);
    }
  } else if (Astro2.props.titleDefault) {
    updatedTitle = Astro2.props.titleDefault;
  }
  return renderTemplate`${updatedTitle ? renderTemplate`<title>${unescapeHTML(updatedTitle)}</title>` : null}${Astro2.props.charset ? renderTemplate`<meta${addAttribute(Astro2.props.charset, "charset")}>` : null}<link rel="canonical"${addAttribute(Astro2.props.canonical || Astro2.url.href, "href")}>${Astro2.props.description ? renderTemplate`<meta name="description"${addAttribute(Astro2.props.description, "content")}>` : null}<meta name="robots"${addAttribute(`${Astro2.props.noindex ? "noindex" : "index"}, ${Astro2.props.nofollow ? "nofollow" : "follow"}`, "content")}>${Astro2.props.openGraph && renderTemplate`${renderComponent($$result, "OpenGraphBasicTags", $$OpenGraphBasicTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.optional && renderTemplate`${renderComponent($$result, "OpenGraphOptionalTags", $$OpenGraphOptionalTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.image && renderTemplate`${renderComponent($$result, "OpenGraphImageTags", $$OpenGraphImageTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.article && renderTemplate`${renderComponent($$result, "OpenGraphArticleTags", $$OpenGraphArticleTags, { ...Astro2.props })}`}${Astro2.props.twitter && renderTemplate`${renderComponent($$result, "TwitterTags", $$TwitterTags, { ...Astro2.props })}`}${Astro2.props.extend && renderTemplate`${renderComponent($$result, "ExtendedTags", $$ExtendedTags, { ...Astro2.props })}`}${Astro2.props.languageAlternates && renderTemplate`${renderComponent($$result, "LanguageAlternatesTags", $$LanguageAlternatesTags, { ...Astro2.props })}`}`;
}, "C:/Users/la bix del pecho/Desktop/Portfolio/node_modules/astro-seo/src/SEO.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://www.linkedin.com/in/javiergarciadelafuente/");
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.url.origin).toString();
  const resolvedImageWithDomain = new URL(
    "/image.jpeg",
    Astro2.url.origin
  ).toString();
  const { title } = Astro2.props;
  const makeTitle = title ? title : "Rohit Kushwaha";
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="A portfolio website built with latest technologies by Rohit Kushwaha"><meta name="keywords" content="Rohit Kushwaha, Full Stack Web Developer, Astro Framework, React.js, Tailwind CSS, Portfolio, Web Development, JavaScript, HTML, CSS, Frontend Development, Backend Development, Responsive Design, UI/UX, Software Engineer, Code, Programming, Tech Enthusiast, Project Showcase, Software Development, Web Applications, GraphQL, RESTful APIs, Node.js, Express.js, MongoDB, MySQL, Git, Version Control, Mobile-First, SEO Optimization, Performance Optimization, Cross-Browser Compatibility, Modern Web Technologies, Creative Developer, Innovative Solutions, Problem-Solving, Technical Skills, Professional Experience, Open Source Contributions, Personal Projects, Code Quality, Debugging, Collaboration, GitHub, Software Architecture, Coding Standards, User Experience, Web Design, Creative Coding, Software Engineer Portfolio, Online Presence, Digital Resume, Tech Stack, Technical Portfolio, Developer Showcase, Programming Portfolio, JavaScript Developer, Software Development Portfolio, Web Development Portfolio, Coding Portfolio, Web Developer Bio, Professional Background, Personal Achievements, Technical Expertise, Computer Science, Backend Engineer, Frontend Engineer, Software Developer Resume, Professional Web Developer, Portfolio Website, Innovative Web Solutions, Experienced Developer, Web Development Services, Coding Portfolio, Programming Portfolio, Rohit Kushwaha Web Development, Software Engineer Portfolio, Full Stack Developer Portfolio, Online Portfolio, Creative Developer, Personal Portfolio, Tech Portfolio, Showcase Projects, Developer Blog, Web Developer Blog, Technology Enthusiast, Code Portfolio, GitHub Repository, Software Development Showcase, Portfolio Design, Code Showcase, Modern Web Developer, Digital Portfolio, Tech Projects, Innovative Coding, Full Stack Developer Skills, Web Development Career, Building Web Applications, Code Portfolio Showcase, Developer Journey, Code Quality Standards, Software Development Process, Professional Developer, Web Developer Expertise, Frontend Development Skills, Backend Development Skills, Programming Languages, Web Technologies, Coding Standards, Web Developer Tools, Software Development Tools, Developer Portfolio Showcase, Web Development Experience, Tailwind CSS Portfolio, React Portfolio, Astro Framework Portfolio, Personal Website, SEO-Friendly Portfolio, Optimized Code, Web Development Best Practices"><meta name="author" content="Rohit Kushwaha"><meta name="theme-color" content="#0a0a0a"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/x-icon" href=""><meta name="google-site-verification" content="AuMlxg6HJG3Rwtp1H81O3OmPVW4WaI5jrk1X4Onm0hU"><meta name="generator"', ">", '<script type="text/partytown" src="https://www.googletagmanager.com/gtag/js?id=G-S9TKKTL84G"><\/script><script type="text/partytown">\n      window.dataLayer = window.dataLayer || [];\n      function gtag() {\n        dataLayer.push(arguments);\n      }\n      gtag("js", new Date());\n      gtag("config", "G-S9TKKTL84G");\n    <\/script><title>', "</title>", "</head> <body> ", " ", "   </body> </html>"])), addAttribute(Astro2.generator, "content"), renderComponent($$result, "SEO", $$SEO, { "title": makeTitle, "description": "A portfolio website built with latest technologies by Rohit Kushwaha", "canonical": canonicalURL, "twitter": {
    creator: "@rohitk_06",
    site: "@rohitk_06",
    card: "summary_large_image"
  }, "openGraph": {
    basic: {
      url: canonicalURL,
      type: "website",
      title: `Rohit Kushwaha`,
      image: resolvedImageWithDomain
    },
    image: {
      alt: "Rohit Kushwaha"
    },
    optional: {
      description: `A portfolio website built with latest technologies by Rohit Kushwaha`
    }
  } }), title, renderHead(), renderComponent($$result, "Glow", null, { "client:only": true, "client:component-hydration": "only", "client:component-path": "C:/Users/la bix del pecho/Desktop/Portfolio/src/components/Glow", "client:component-export": "default" }), renderSlot($$result, $$slots["default"]));
}, "C:/Users/la bix del pecho/Desktop/Portfolio/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro("https://www.linkedin.com/in/javiergarciadelafuente/");
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "You lost lmao" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="w-5/6 mx-auto relative"${addAttribute(createTransitionScope($$result2, "6wwu7nsk"), "data-astro-transition-persist")}> <section data-aos="fade-up" data-aos-anchor-placement="top-bottom"> <div class="text-primary mt-36"> <h1 class="text-9xl font-semibold flex justify-center items-center">
404
</h1> <p class="text-center font-semibold">
A page you are trying to access does not exist
</p> <div class="flex justify-center mt-6"> <button onclick="history.back();" class="px-4 py-2 bg-primary rounded-xl bg-opacity-10 font-semibold">Go Back</button> </div> </div> </section> </main> ` })}`;
}, "C:/Users/la bix del pecho/Desktop/Portfolio/src/pages/404.astro", "self");

const $$file = "C:/Users/la bix del pecho/Desktop/Portfolio/src/pages/404.astro";
const $$url = "/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, _404 as _ };
