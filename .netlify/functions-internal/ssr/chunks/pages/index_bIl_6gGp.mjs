/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderComponent, n as renderTransition, F as Fragment, i as createTransitionScope } from '../astro_MxHgmuG5.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$Layout } from './404_XolQ3Byd.mjs';
/* empty css                          */
import { $ as $$Image } from './generic_2An0MLCm.mjs';
/* empty css                          */
import { jsx, Fragment as Fragment$1, jsxs } from 'react/jsx-runtime';
import { useState } from 'react';
/* empty css                          */
/* empty css                          */

const CV = "/_astro/curriculum.ILx5jXJD.pdf";

const $$Astro$7 = createAstro("https://www.linkedin.com/in/javiergarciadelafuente/");
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<section class="top-5 z-10 mx-auto m-6 w-5/6" data-astro-cid-3ef6ksr2> <nav class="flex items-center justify-between" data-astro-cid-3ef6ksr2> <a aria-label="delafuentejvr@gmail.com" href="mailto:delafuentejvr@gmail.com" class="flex flex-row items-center justify-center" data-astro-cid-3ef6ksr2> <div id="viewProjectButton" class="p-3 flex w-auto h-auto bg-primary rounded-full bg-opacity-10 items-center justify-center" data-astro-cid-3ef6ksr2> <svg id="viewProjectButton" class="fill-primary text-[5px]" xmlns="http://www.w3.org/2000/svg" height="3em" viewBox="0 0 512 512" data-astro-cid-3ef6ksr2><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" data-astro-cid-3ef6ksr2></path></svg> </div> <h3 id="viewProjectButtontext" class="hidden pl-4 text-sm text-primary font-medium opacity-80 lg:flex md:flex pointer-events-none" data-astro-cid-3ef6ksr2>
delafuentejvr@gmail.com
</h3> </a> <a id="viewProjectButton"${addAttribute(CV, "href")} download data-astro-cid-3ef6ksr2><h3 class="hidden pl-4 text-sm text-primary font-medium opacity-80 lg:flex md:flex pointer-events-none" data-astro-cid-3ef6ksr2>
Descargar CV
</h3></a> </nav> </section> `;
}, "C:/Users/la bix del pecho/Desktop/Portfolio/src/components/Header.astro", void 0);

const me = new Proxy({"src":"/_astro/me.LRl_nFF4.png","width":466,"height":536,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const $$Astro$6 = createAstro("https://www.linkedin.com/in/javiergarciadelafuente/");
const $$HeroContent = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$HeroContent;
  return renderTemplate`${maybeRenderHead()}<div data-aos="fade-up" class="mx-auto py-4 lg:py-4"> <div class="w-40 text-center mx-auto"> ${renderComponent($$result, "Image", $$Image, { "class": "bg-gradient-to-r from-[#45cafc] to-[#616161] text-center stroke-slate-50 stroke-1", "id": "me", "src": me, "alt": "Javier", "loading": "eager" })} </div> <div class="text-center"> <h1 class="font-light py-4 tracking-tight text-primary flex items-center gap-2 justify-center">
Javier Garcia de la fuente
</h1> <p class="text-3xl font-bold text-primary text-transparent bg-clip-text bg-gradient-to-r from-[#45cafc] to-[#616161] sm:text-3xl md:text-5xl pb-2">
Fullstack Developer
</p> <p class="w-5/6 mx-auto mt-2 text-gray-400 font-medium">
Junior web developer with a great desire to learn and a great
                  interest in the world of programming and technology.
</p> <a href="/#about" class="cursor-pointer w-full h-full z-50"> <svg viewBox="0 0 24 24" class="animate-bounce stroke-primary h-10 flex justify-center w-full mt-2 sm:mt-6" height="1em" id="downArrow" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M19 9L14 14.1599C13.7429 14.4323 13.4329 14.6493 13.089 14.7976C12.7451 14.9459 12.3745 15.0225 12 15.0225C11.6255 15.0225 11.2549 14.9459 10.9109 14.7976C10.567 14.6493 10.2571 14.4323 10 14.1599L5 9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg> </a> </div> </div> <style>
  :root {
    --color: rgba(71, 71, 71, 0.918);
  }
  #me {
    border-radius: 49%;
    background-color: #0a0a0a85;
    border: 1px solid #ffffffbe;
  }

  #downArrow{
    filter: brightness(0) saturate(100%) invert(59%) sepia(96%) saturate(655%) hue-rotate(170deg) brightness(106%) contrast(102%);
  }

</style>`;
}, "C:/Users/la bix del pecho/Desktop/Portfolio/src/components/HeroContent.astro", void 0);

const $$Astro$5 = createAstro("https://www.linkedin.com/in/javiergarciadelafuente/");
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Hero;
  return renderTemplate`${maybeRenderHead()}<div class="relative "> <div class="h-[100vh] items-center justify-center flex overflow-hidden px-8"> <div class="transition-all isolate -mt-16 sm:-mt-28"> <div class="absolute inset-x-0 -z-50 overflow-hidden blur-3xl " aria-hidden="true"> <div class="back animate-roam relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#20889b] to-[#4ad1e0] opacity-10 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] "${addAttribute({
    clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
  }, "style")}></div> </div> ${renderComponent($$result, "HeroContent", $$HeroContent, {})} <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-50 overflow-hidden blur-3xl sm:top-[calc(100%-30rem)] " aria-hidden="true"> <div class="animate-roam1 relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#4ad1e0] to-[#20889b] opacity-10 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"${addAttribute({
    clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
  }, "style")}></div> </div> </div> </div> </div>`;
}, "C:/Users/la bix del pecho/Desktop/Portfolio/src/components/Hero.astro", void 0);

const $$Astro$4 = createAstro("https://www.linkedin.com/in/javiergarciadelafuente/");
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${maybeRenderHead()}<section id="about" class="w-5/6 mx-auto m-6" data-astro-cid-v2cbyr3p> <div class="gap-8 py-8 px-4 mx-auto" data-astro-cid-v2cbyr3p> <div class="mt-4 md:mt-0" data-astro-cid-v2cbyr3p> <h2 data-aos="fade-up" data-aos-anchor-placement="center-bottom" class="mb-4 text-4xl tracking-tight font-extrabold text-primary text-transparent bg-clip-text bg-gradient-to-r from-[#45cafc] to-[#616161] sm:text-3xl md:text-5xl pb-2 text-center" data-astro-cid-v2cbyr3p>
About me
</h2> <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" class="mb-6 font-light text-gray-500 md:text-lg text-justify dark:text-gray-400 sm:text-center  sm:w-5/6 w-full mx-auto" data-astro-cid-v2cbyr3p>
I&apos;m a <b class="font-bold" data-astro-cid-v2cbyr3p>FullStack Web Developer</b>${", "} creative, patient, and proactive individual with a strong initiative. I excel in teamwork and collaboration. I am eager to enter the world of programming and committed to continuous learning and professional growth in this field. Feel free to Connect or Follow me on my${" "} <a href="https://www.linkedin.com/in/javiergarciadelafuente" class="text-gray-400 font-medium" id="linkedinAbout" data-astro-cid-v2cbyr3p>
Linkedin</a>${" "}
where I post useful content related to Web Development and Programming.
<br data-astro-cid-v2cbyr3p> <br data-astro-cid-v2cbyr3p> </p> </div> <section class="py-10" data-astro-cid-v2cbyr3p> <div class="container mx-auto" data-astro-cid-v2cbyr3p> <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-astro-cid-v2cbyr3p> <h1 class="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#d7d7d7] to-[#616161] font-extrabold py-3 text-center" data-astro-cid-v2cbyr3p>
Skillset
</h1> <div class="grayscale opacity-75 flex gap-8 flex-wrap w-full sm:justify-center justify-center" data-astro-cid-v2cbyr3p> <svg id="iconSkills" class="fill-primary h-12 w-12" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" data-astro-cid-v2cbyr3p><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> <title>Javascript</title> <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM243.8 381.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z" data-astro-cid-v2cbyr3p></path></svg> <svg id="iconSkills" class="fill-primary h-12" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" data-astro-cid-v2cbyr3p><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> <title>Nodejs</title> <path d="M224 508c-6.7 0-13.5-1.8-19.4-5.2l-61.7-36.5c-9.2-5.2-4.7-7-1.7-8 12.3-4.3 14.8-5.2 27.9-12.7 1.4-.8 3.2-.5 4.6.4l47.4 28.1c1.7 1 4.1 1 5.7 0l184.7-106.6c1.7-1 2.8-3 2.8-5V149.3c0-2.1-1.1-4-2.9-5.1L226.8 37.7c-1.7-1-4-1-5.7 0L36.6 144.3c-1.8 1-2.9 3-2.9 5.1v213.1c0 2 1.1 4 2.9 4.9l50.6 29.2c27.5 13.7 44.3-2.4 44.3-18.7V167.5c0-3 2.4-5.3 5.4-5.3h23.4c2.9 0 5.4 2.3 5.4 5.3V378c0 36.6-20 57.6-54.7 57.6-10.7 0-19.1 0-42.5-11.6l-48.4-27.9C8.1 389.2.7 376.3.7 362.4V149.3c0-13.8 7.4-26.8 19.4-33.7L204.6 9c11.7-6.6 27.2-6.6 38.8 0l184.7 106.7c12 6.9 19.4 19.8 19.4 33.7v213.1c0 13.8-7.4 26.7-19.4 33.7L243.4 502.8c-5.9 3.4-12.6 5.2-19.4 5.2zm149.1-210.1c0-39.9-27-50.5-83.7-58-57.4-7.6-63.2-11.5-63.2-24.9 0-11.1 4.9-25.9 47.4-25.9 37.9 0 51.9 8.2 57.7 33.8.5 2.4 2.7 4.2 5.2 4.2h24c1.5 0 2.9-.6 3.9-1.7s1.5-2.6 1.4-4.1c-3.7-44.1-33-64.6-92.2-64.6-52.7 0-84.1 22.2-84.1 59.5 0 40.4 31.3 51.6 81.8 56.6 60.5 5.9 65.2 14.8 65.2 26.7 0 20.6-16.6 29.4-55.5 29.4-48.9 0-59.6-12.3-63.2-36.6-.4-2.6-2.6-4.5-5.3-4.5h-23.9c-3 0-5.3 2.4-5.3 5.3 0 31.1 16.9 68.2 97.8 68.2 58.4-.1 92-23.2 92-63.4z" data-astro-cid-v2cbyr3p></path></svg> <svg id="iconSkills" class="fill-primary h-12" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" data-astro-cid-v2cbyr3p><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> <title>React.js</title> <path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z" data-astro-cid-v2cbyr3p></path></svg> <svg id="iconSkills" class="fill-primary h-12" class="h-12" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512" data-astro-cid-v2cbyr3p><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> <title>CSS</title> <path d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z" data-astro-cid-v2cbyr3p></path></svg> <svg id="iconSkills" class="fill-primary h-12" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512" data-astro-cid-v2cbyr3p><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> <title>Html</title> <path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z" data-astro-cid-v2cbyr3p></path></svg> <svg id="iconSkills" class="fill-primary h-12" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" data-astro-cid-v2cbyr3p><g id="SVGRepo_bgCarrier" stroke-width="0" data-astro-cid-v2cbyr3p></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-v2cbyr3p></g><g id="SVGRepo_iconCarrier" data-astro-cid-v2cbyr3p> <title>Git</title> <path d="M30.428 14.663l-13.095-13.094c-0.35-0.349-0.833-0.565-1.367-0.565s-1.017 0.216-1.367 0.565l0-0-2.713 2.718 3.449 3.449c0.22-0.077 0.473-0.121 0.737-0.121 1.269 0 2.297 1.028 2.297 2.297 0 0.269-0.046 0.526-0.131 0.766l0.005-0.016 3.322 3.324c0.222-0.079 0.479-0.125 0.746-0.125 1.268 0 2.296 1.028 2.296 2.296s-1.028 2.296-2.296 2.296c-1.268 0-2.296-1.028-2.296-2.296 0-0.313 0.063-0.611 0.176-0.883l-0.006 0.015-3.11-3.094v8.154c0.764 0.385 1.279 1.163 1.279 2.061 0 1.27-1.030 2.3-2.3 2.3s-2.3-1.030-2.3-2.3c0-0.634 0.256-1.207 0.671-1.623l-0 0c0.211-0.211 0.462-0.382 0.741-0.502l0.015-0.006v-8.234c-0.842-0.354-1.422-1.173-1.422-2.126 0-0.32 0.065-0.624 0.183-0.901l-0.006 0.015-3.389-3.405-8.98 8.974c-0.348 0.351-0.562 0.834-0.562 1.368s0.215 1.017 0.563 1.368l13.096 13.092c0.349 0.35 0.832 0.566 1.366 0.566s1.016-0.216 1.366-0.566l13.034-13.034c0.35-0.349 0.567-0.833 0.567-1.366s-0.217-1.017-0.567-1.366l-0-0z" data-astro-cid-v2cbyr3p></path> </g></svg> <svg id="iconSkills" class="fill-primary h-12" viewBox="0 0 22 22" version="1.1" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-astro-cid-v2cbyr3p><title>MySQL</title><path d="M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.153zM5.77 18.695h-.927a50.854 50.854 0 00-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01a72.892 72.892 0 00-.195 4.41H0c.055-1.966.192-3.81.41-5.53h1.15l1.335 4.064h.008l1.347-4.064h1.095c.242 2.015.384 3.86.428 5.53zm4.017-4.08c-.378 2.045-.876 3.533-1.492 4.46-.482.716-1.01 1.073-1.583 1.073-.153 0-.34-.046-.566-.138v-.494c.11.017.24.026.386.026.268 0 .483-.075.647-.222.197-.18.295-.382.295-.605 0-.155-.077-.47-.23-.944L6.23 14.615h.91l.727 2.36c.164.536.233.91.205 1.123.4-1.064.678-2.227.835-3.483zm12.325 4.08h-2.63v-5.53h.885v4.85h1.745zm-3.32.135l-1.016-.5c.09-.076.177-.158.255-.25.433-.506.648-1.258.648-2.253 0-1.83-.718-2.746-2.155-2.746-.704 0-1.254.232-1.65.697-.43.508-.646 1.256-.646 2.245 0 .972.19 1.686.574 2.14.35.41.877.615 1.583.615.264 0 .506-.033.725-.098l1.325.772.36-.622zM15.5 17.588c-.225-.36-.337-.94-.337-1.736 0-1.393.424-2.09 1.27-2.09.443 0 .77.167.977.5.224.362.336.936.336 1.723 0 1.404-.424 2.108-1.27 2.108-.445 0-.77-.167-.978-.5zm-1.658-.425c0 .47-.172.856-.516 1.156-.344.3-.803.45-1.384.45-.543 0-1.064-.172-1.573-.515l.237-.476c.438.22.833.328 1.19.328.332 0 .593-.073.783-.22a.754.754 0 00.3-.615c0-.33-.23-.61-.648-.845-.388-.213-1.163-.657-1.163-.657-.422-.307-.632-.636-.632-1.177 0-.45.157-.81.47-1.085.315-.278.72-.415 1.22-.415.512 0 .98.136 1.4.41l-.213.476a2.726 2.726 0 00-1.064-.23c-.283 0-.502.068-.654.206a.685.685 0 00-.248.524c0 .328.234.61.666.85.393.215 1.187.67 1.187.67.433.305.648.63.648 1.168zm9.382-5.852c-.535-.014-.95.04-1.297.188-.1.04-.26.04-.274.167.055.053.063.14.11.214.08.134.218.313.346.407.14.11.28.216.427.31.26.16.555.255.81.416.145.094.293.213.44.313.073.05.12.14.214.172v-.02c-.046-.06-.06-.147-.105-.214-.067-.067-.134-.127-.2-.193a3.223 3.223 0 00-.695-.675c-.214-.146-.682-.35-.77-.595l-.013-.014c.146-.013.32-.066.46-.106.227-.06.435-.047.67-.106.106-.027.213-.06.32-.094v-.06c-.12-.12-.21-.283-.334-.395a8.867 8.867 0 00-1.104-.823c-.21-.134-.476-.22-.697-.334-.08-.04-.214-.06-.26-.127-.12-.146-.19-.34-.275-.514a17.69 17.69 0 01-.547-1.163c-.12-.262-.193-.523-.34-.763-.69-1.137-1.437-1.826-2.586-2.5-.247-.14-.543-.2-.856-.274-.167-.008-.334-.02-.5-.027-.11-.047-.216-.174-.31-.235-.38-.24-1.364-.76-1.644-.072-.18.434.267.862.422 1.082.115.153.26.328.34.5.047.116.06.235.107.356.106.294.207.622.347.897.073.14.153.287.247.413.054.073.146.107.167.227-.094.136-.1.334-.154.5-.24.757-.146 1.693.194 2.25.107.166.362.534.703.393.3-.12.234-.5.32-.835.02-.08.007-.133.048-.187v.015c.094.188.188.367.274.555.206.328.566.668.867.895.16.12.287.328.487.402v-.02h-.015c-.043-.058-.1-.086-.154-.133a3.445 3.445 0 01-.35-.4 8.76 8.76 0 01-.747-1.218c-.11-.21-.202-.436-.29-.643-.04-.08-.04-.2-.107-.24-.1.146-.247.273-.32.453-.127.288-.14.642-.188 1.01-.027.007-.014 0-.027.014-.214-.052-.287-.274-.367-.46-.2-.475-.233-1.238-.06-1.785.047-.14.247-.582.167-.716-.042-.127-.174-.2-.247-.303a2.478 2.478 0 01-.24-.427c-.16-.374-.24-.788-.414-1.162-.08-.173-.22-.354-.334-.513-.127-.18-.267-.307-.368-.52-.033-.073-.08-.194-.027-.274.014-.054.042-.075.094-.09.088-.072.335.022.422.062.247.1.455.194.662.334.094.066.195.193.315.226h.14c.214.047.455.014.655.073.355.114.675.28.962.46a5.953 5.953 0 012.085 2.286c.08.154.115.295.188.455.14.33.313.663.455.982.14.315.275.636.476.897.1.14.502.213.682.286.133.06.34.115.46.188.23.14.454.3.67.454.11.076.443.243.463.378z" data-astro-cid-v2cbyr3p></path></svg> </div> </div> <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-astro-cid-v2cbyr3p> <h1 class="mt-8 text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#d7d7d7] to-[#616161] font-extrabold py-3 text-center" data-astro-cid-v2cbyr3p>
Tools
</h1> <div class="grayscale opacity-75 flex gap-8 flex-wrap w-full sm:justify-center justify-center" data-astro-cid-v2cbyr3p> <svg id="iconSkills" class="fill-primary h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-v2cbyr3p><g id="SVGRepo_bgCarrier" stroke-width="0" data-astro-cid-v2cbyr3p></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-v2cbyr3p></g><g id="SVGRepo_iconCarrier" data-astro-cid-v2cbyr3p> <title>VS Code</title> <path d="M0.228341 8.36915C0.228341 8.36915 -0.356212 7.94324 0.345251 7.37453L1.97956 5.89736C1.97956 5.89736 2.44721 5.40004 2.94164 5.83334L18.0231 17.375V22.9094C18.0231 22.9094 18.0158 23.7785 16.9124 23.6825L0.228341 8.36915Z" data-astro-cid-v2cbyr3p></path> <path d="M4.11555 11.9367L0.228273 15.5089C0.228273 15.5089 -0.171172 15.8093 0.228273 16.346L2.03308 18.0053C2.03308 18.0053 2.46175 18.4706 3.09502 17.9413L7.21611 14.7827L4.11555 11.9367Z" data-astro-cid-v2cbyr3p></path> <path d="M10.94 11.9661L18.0691 6.46362L18.0228 0.95865C18.0228 0.95865 17.7183 -0.242793 16.7027 0.382548L7.21589 9.11025L10.94 11.9661Z" data-astro-cid-v2cbyr3p></path> <path d="M16.9121 23.69C17.3261 24.1183 17.8279 23.978 17.8279 23.978L23.3838 21.2108C24.0951 20.7208 23.9952 20.1127 23.9952 20.1127V3.58803C23.9952 2.86175 23.2596 2.61063 23.2596 2.61063L18.4441 0.264377C17.3919 -0.392968 16.7027 0.382548 16.7027 0.382548C16.7027 0.382548 17.5892 -0.262484 18.0228 0.95865L18.0228 22.8086C18.0228 22.9588 17.9911 23.1065 17.9278 23.2394C17.8011 23.4979 17.5259 23.7392 16.8658 23.6383L16.9121 23.69Z" data-astro-cid-v2cbyr3p></path> </g></svg> <svg id="iconSkills" class="fill-primary h-12" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" data-astro-cid-v2cbyr3p><g id="SVGRepo_bgCarrier" stroke-width="0" data-astro-cid-v2cbyr3p></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-v2cbyr3p></g><g id="SVGRepo_iconCarrier" data-astro-cid-v2cbyr3p> <title>Postman</title> <path d="M18.036 0.131c-8.765-1.12-16.781 5.067-17.905 13.833-1.12 8.765 5.067 16.781 13.833 17.905 8.765 1.12 16.781-5.067 17.9-13.833 1.125-8.765-5.061-16.781-13.828-17.905zM21.328 10.115c-0.297 0-0.579 0.12-0.787 0.333l-5.937 5.932-0.411-0.407-0.855-0.859c5.849-5.833 6.907-5.891 7.989-5zM14.849 16.593l5.916-5.921c0.328-0.344 0.875-0.339 1.204 0.005 0.323 0.349 0.291 0.896-0.073 1.197l-6.265 5.5zM15.287 17.521l-1.469 0.317c-0.031 0.005-0.072-0.011-0.088-0.047-0.016-0.032-0.011-0.068 0.016-0.095l0.859-0.859zM11.547 16.907l1.568-1.563 1.172 1.172-2.641 0.567c-0.047 0.011-0.093-0.009-0.115-0.052-0.025-0.041-0.015-0.093 0.016-0.124zM6.688 24.984c-0.057-0.005-0.1-0.057-0.095-0.109 0.005-0.025 0.016-0.047 0.032-0.063h0.005l1.26-1.26 1.631 1.631zM9.921 23.307c-0.124 0.068-0.187 0.209-0.156 0.344l0.271 1.152c0.043 0.167-0.161 0.28-0.281 0.156h-0.005l-1.635-1.636 5.016-5.011 2.427-0.525 1.161 1.167c-1.672 1.468-3.959 2.932-6.797 4.353zM16.959 18.74l-1.12-1.12 6.265-5.5c0.057-0.052 0.109-0.109 0.156-0.167-0.192 1.792-2.703 4.323-5.301 6.787zM21.839 10.125h-0.005c-2.183-2.193 0.901-5.563 3.276-3.584l-2.145 2.152c-0.063 0.061-0.063 0.167 0 0.228l1.661 1.663c-0.932 0.463-2.052 0.276-2.787-0.459zM25.271 10.125c-0.109 0.109-0.229 0.208-0.359 0.291l-1.609-1.609 2.041-2.047c0.885 0.964 0.849 2.443-0.073 3.365zM25.14 8.068c-0.067 0.047-0.093 0.129-0.072 0.208 0.099 0.197 0.072 0.432-0.068 0.599-0.068 0.084-0.052 0.199 0.031 0.265 0.032 0.021 0.068 0.037 0.109 0.037 0.057 0 0.111-0.021 0.141-0.063 0.235-0.281 0.281-0.677 0.12-1.005-0.063-0.083-0.177-0.104-0.261-0.041z" data-astro-cid-v2cbyr3p></path> </g></svg> </div> </div> <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-astro-cid-v2cbyr3p> <h1 class="mt-8 text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#d7d7d7] to-[#616161] font-extrabold py-3 text-center" data-astro-cid-v2cbyr3p>
Learning
</h1> <div class="grayscale opacity-75 flex gap-8 flex-wrap w-full sm:justify-center justify-center" data-astro-cid-v2cbyr3p> <svg id="iconSkills" class="fill-primary h-12" height="1em" viewBox="0 0 32.00 32.00" xmlns="http://www.w3.org/2000/svg" fill="#000000" stroke="#000000" stroke-width="0.00032" transform="matrix(1, 0, 0, 1, 0, 0)" data-astro-cid-v2cbyr3p><g id="SVGRepo_bgCarrier" stroke-width="0" data-astro-cid-v2cbyr3p></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-v2cbyr3p></g><g id="SVGRepo_iconCarrier" data-astro-cid-v2cbyr3p><title>Astro.js</title><path d="M5.9,18.847a7.507,7.507,0,0,0-.572,2.624,3.265,3.265,0,0,0,.551,1.553,7.427,7.427,0,0,0,2.093,1.681L13.1,28.119A7.332,7.332,0,0,0,15.2,29.287a3.239,3.239,0,0,0,1.5,0,7.381,7.381,0,0,0,2.117-1.16L24,24.711a7.512,7.512,0,0,0,2.117-1.688,3.241,3.241,0,0,0,.55-1.563,7.515,7.515,0,0,0-.587-2.643L21.547,4.551a3.973,3.973,0,0,0-.54-1.3,1.733,1.733,0,0,0-.7-.51,3.972,3.972,0,0,0-1.4-.122H13.005a3.932,3.932,0,0,0-1.4.125,1.713,1.713,0,0,0-.7.512,3.94,3.94,0,0,0-.535,1.3L5.9,18.848Zm13.24-13.2a3.329,3.329,0,0,1,.441,1.093l3.892,12.784a16.168,16.168,0,0,0-4.653-1.573L16.291,9.391a.331.331,0,0,0-.513-.169.323.323,0,0,0-.119.169l-2.5,8.557a16.14,16.14,0,0,0-4.674,1.579L12.393,6.743a3.281,3.281,0,0,1,.442-1.094,1.458,1.458,0,0,1,.582-.43,3.31,3.31,0,0,1,1.175-.1h2.793a3.314,3.314,0,0,1,1.176.1,1.454,1.454,0,0,1,.583.432ZM16.127,21.06a5.551,5.551,0,0,0,3.4-.923,2.8,2.8,0,0,1-.207,2.182A3.938,3.938,0,0,1,17.773,23.8c-.674.428-1.254.8-1.254,1.787a2.079,2.079,0,0,0,.209.914,2.49,2.49,0,0,1-1.535-2.3v-.061c0-.683,0-1.524-.962-1.524a1.028,1.028,0,0,0-.391.077,1.021,1.021,0,0,0-.552.551,1.03,1.03,0,0,0-.079.391,3.769,3.769,0,0,1-.988-2.644,4.206,4.206,0,0,1,.175-1.248c.4.757,1.92,1.32,3.731,1.32Z" style="fill-rule:evenodd" data-astro-cid-v2cbyr3p></path></g> </svg> <svg id="iconSkills" class="fill-primary h-12" fill="#000000" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" data-astro-cid-v2cbyr3p><g id="SVGRepo_bgCarrier" stroke-width="0" data-astro-cid-v2cbyr3p></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-v2cbyr3p></g><g id="SVGRepo_iconCarrier" data-astro-cid-v2cbyr3p> <title>TailwindCSS</title> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.036c-2.667 0-4.333 1.325-5 3.976 1-1.325 2.167-1.822 3.5-1.491.761.189 1.305.738 1.906 1.345C13.387 10.855 14.522 12 17 12c2.667 0 4.333-1.325 5-3.976-1 1.325-2.166 1.822-3.5 1.491-.761-.189-1.305-.738-1.907-1.345-.98-.99-2.114-2.134-4.593-2.134zM7 12c-2.667 0-4.333 1.325-5 3.976 1-1.326 2.167-1.822 3.5-1.491.761.189 1.305.738 1.907 1.345.98.989 2.115 2.134 4.594 2.134 2.667 0 4.333-1.325 5-3.976-1 1.325-2.167 1.822-3.5 1.491-.761-.189-1.305-.738-1.906-1.345C10.613 13.145 9.478 12 7 12z" data-astro-cid-v2cbyr3p></path></g></svg> <svg id="iconSkills" class="fill-primary h-11" fill="#000000" height="1em" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-astro-cid-v2cbyr3p><title>TypeScript</title><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" data-astro-cid-v2cbyr3p></path></svg> <svg id="iconSkills" class="fill-primary h-11" fill="#000000" height="1em" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-astro-cid-v2cbyr3p><title>Bootstrap</title><path d="M11.77 11.24H9.956V8.202h2.152c1.17 0 1.834.522 1.834 1.466 0 1.008-.773 1.572-2.174 1.572zm.324 1.206H9.957v3.348h2.231c1.459 0 2.232-.585 2.232-1.685s-.795-1.663-2.326-1.663zM24 11.39v1.218c-1.128.108-1.817.944-2.226 2.268-.407 1.319-.463 2.937-.42 4.186.045 1.3-.968 2.5-2.337 2.5H4.985c-1.37 0-2.383-1.2-2.337-2.5.043-1.249-.013-2.867-.42-4.186-.41-1.324-1.1-2.16-2.228-2.268V11.39c1.128-.108 1.819-.944 2.227-2.268.408-1.319.464-2.937.42-4.186-.045-1.3.968-2.5 2.338-2.5h14.032c1.37 0 2.382 1.2 2.337 2.5-.043 1.249.013 2.867.42 4.186.409 1.324 1.098 2.16 2.226 2.268zm-7.927 2.817c0-1.354-.953-2.333-2.368-2.488v-.057c1.04-.169 1.856-1.135 1.856-2.213 0-1.537-1.213-2.538-3.062-2.538h-4.16v10.172h4.181c2.218 0 3.553-1.086 3.553-2.876z" data-astro-cid-v2cbyr3p></path></svg> <svg id="iconSkills" class="fill-primary h-11" fill="#000000" height="1em" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-astro-cid-v2cbyr3p><g id="SVGRepo_bgCarrier" stroke-width="0" data-astro-cid-v2cbyr3p></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-v2cbyr3p></g><g id="SVGRepo_iconCarrier" data-astro-cid-v2cbyr3p><path d="m27.533 13.796c.039-.001.085-.002.132-.002.834 0 1.623.194 2.323.54l-.031-.014c.638.311 1.162.771 1.541 1.335l.009.014c.299.436.477.975.477 1.555 0 .042-.001.084-.003.125v-.006c-.031.579-.294 1.09-.698 1.448l-.002.002c-.221.217-.488.387-.785.495l-.015.005q-.25.05-.275-.075t.225-.275c.452-.274.779-.716.898-1.237l.003-.013c.003-.042.005-.091.005-.141 0-.311-.074-.605-.205-.865l.005.011c-.217-.453-.541-.825-.94-1.094l-.01-.006c-.597-.384-1.313-.636-2.083-.699l-.016-.001c-.262-.039-.564-.061-.872-.061-.801 0-1.566.151-2.27.426l.042-.015c.145.339.236.732.249 1.144v.005c-.016.845-.47 1.58-1.145 1.99l-.011.006c-.31.22-.664.413-1.041.563l-.035.012c-.229.112-.498.177-.782.177-.033 0-.065-.001-.097-.003h.005q-.949-.199-.45-1.65c.145-.421.348-.786.605-1.107l-.006.007c.329-.43.69-.807 1.089-1.141l.011-.009-.098-.146c-.183-.312-.351-.675-.486-1.054l-.014-.046q-.15-.5-.25-.949l-.05-.35-.5.949q-.65 1.2-1.25 2.099l-.15.25c.168.408.292.881.348 1.375l.002.025c.004.047.006.103.006.159 0 .758-.374 1.428-.948 1.837l-.007.005c-.274.169-.601.344-.94.5l-.06.025c-.353.153-.762.253-1.191.275h-.009c-.033.002-.072.004-.111.004-.25 0-.487-.057-.699-.158l.01.004c-.127-.109-.207-.269-.207-.448 0-.091.021-.178.058-.255l-.002.004c.4-.561.794-1.049 1.213-1.515l-.013.015 1.1-1.399-.199-.45c-.16-.294-.313-.641-.436-1.001l-.014-.048q-.15-.5-.25-.949l-.05-.35-.5 1.2q-.599 1.399-1.1 2.399-.747 1.5-1.25 2.3l-.1.15q-.599.949-1.15.949t-.747-.7c-.096-.344-.152-.739-.152-1.147 0-.036 0-.072.001-.108v.005l.1-.7v.05q-.4.949-.8 1.749c-.177.346-.359.641-.563.919l.013-.019c-.206.216-.496.35-.817.35-.003 0-.005 0-.008 0-.021.002-.045.002-.069.002-.253 0-.483-.096-.657-.253l.001.001c-.349-.358-.608-.805-.742-1.304l-.005-.021c-.164-.455-.258-.981-.258-1.529 0-.071.002-.141.005-.21v.01c.079-.796.238-1.525.471-2.22l-.021.071-1.799 1.05v.05c.261.542.414 1.178.414 1.85 0 .123-.005.245-.015.365l.001-.016c-.053 1.03-.382 1.973-.913 2.77l.013-.02c-.557.884-1.36 1.567-2.314 1.962l-.033.012c-.537.241-1.165.382-1.825.382-.418 0-.824-.056-1.208-.162l.032.007c-.318-.107-.578-.319-.743-.593l-.003-.006c-.233-.338-.38-.751-.403-1.196v-.006c-.011-.101-.017-.218-.017-.337 0-.513.117-.999.326-1.432l-.009.02c.574-.979 1.368-1.772 2.316-2.33l.03-.016c.671-.465 1.442-.916 2.247-1.309l.106-.047.25-.15q-.45-.35-1.65-1.2c-1.069-.716-1.998-1.439-2.874-2.221l.025.022c-.847-.729-1.464-1.703-1.741-2.812l-.008-.038c-.026-.154-.041-.331-.041-.511 0-.564.145-1.094.399-1.555l-.008.017c.56-1.204 1.336-2.219 2.288-3.035l.012-.01c1.03-.973 2.196-1.82 3.462-2.506l.087-.043c1.131-.653 2.452-1.26 3.829-1.747l.17-.052c1.279-.468 2.756-.742 4.296-.747h.002c.07-.002.153-.004.236-.004 1.241 0 2.415.287 3.459.798l-.046-.021c.9.41 1.574 1.182 1.844 2.126l.006.024c.083.322.13.692.13 1.073 0 .632-.131 1.234-.366 1.78l.011-.029c-.428 1.037-1.037 1.92-1.797 2.647l-.003.003c-.77.763-1.693 1.373-2.718 1.78l-.055.019c-1.074.461-2.321.751-3.63.799l-.019.001c-.192.022-.414.034-.639.034-.592 0-1.163-.085-1.703-.244l.043.011c-.483-.154-.9-.393-1.254-.703l.004.003c-.248-.202-.45-.451-.594-.734l-.006-.013q-.15-.4-.025-.475t.175-.025l.25.25c.279.259.612.463.98.593l.02.006c.506.176 1.09.278 1.697.278.195 0 .387-.01.576-.031l-.023.002c1.618-.191 3.077-.743 4.336-1.573l-.037.023c1.064-.633 1.925-1.503 2.531-2.54l.018-.034c.301-.442.481-.988.481-1.576 0-.361-.068-.707-.192-1.025l.007.019c-.374-.591-.979-1.007-1.685-1.122l-.014-.002c-.548-.135-1.178-.213-1.825-.213-.521 0-1.031.05-1.524.146l.05-.008c-1.687.304-3.195.825-4.586 1.541l.091-.043q-6.148 3.1-6.349 6.349v.049c0 .873.343 1.666.902 2.252l-.001-.001c.637.708 1.341 1.333 2.11 1.873l.039.026c.701.524 1.321 1.065 1.898 1.649l.001.002.1.1 3.2-1.749c.365-.528.804-.974 1.308-1.334l.016-.011c.4-.336.908-.555 1.465-.599l.009-.001c.02-.002.043-.002.067-.002.373 0 .693.225.831.547l.002.006c.105.235.166.51.166.799 0 .088-.006.175-.017.261l.001-.01-.097.493.15-.1c.104-.079.235-.126.377-.126.09 0 .175.019.252.053l-.004-.002c.192.05.331.222.331.426 0 .035-.004.069-.012.102l.001-.003-.15.55q-.45 1.799-.599 2.599c-.05.173-.078.372-.078.578 0 .043.001.085.004.127v-.006q.025.3.075.3t.199-.3l.15-.35q.05 0 0 .05l.55-1.15q1.95-4.298 2.099-4.8l.3-.949q.05-.1.4-.199c.237-.064.508-.101.788-.101.023 0 .046 0 .068.001h-.003q.7 0 .7.35l-.05.25c-.112.308-.223.693-.309 1.087l-.011.063c-.02.129-.032.277-.032.429 0 .202.02.399.059.59l-.003-.019.05.199c.102.417.257.783.46 1.117l-.01-.017q.599-.999 1.15-2.049c.29-.483.56-1.043.777-1.629l.023-.07c.075-.377.161-.695.266-1.005l-.016.056q.05-.15.427-.225c.238-.048.511-.075.79-.075h.036-.002q.7 0 .747.35l-.1.199c-.119.336-.223.74-.293 1.155l-.006.045c-.009.097-.015.209-.015.323 0 .239.024.473.069.699l-.004-.023v.199c.115.436.286.819.51 1.166l-.01-.016.15.35c.835-.41 1.817-.65 2.855-.65h.039-.002zm-21.439 7.253c.695-.718 1.124-1.698 1.124-2.778 0-.417-.064-.819-.182-1.197l.008.028-.8.5c-.816.465-1.522.984-2.161 1.574l.008-.007c-.485.446-.843 1.023-1.019 1.674l-.006.025q-.225.925.225 1.2c.183.084.398.133.623.133.246 0 .479-.058.684-.162l-.009.004c.594-.216 1.097-.559 1.497-.998l.003-.003zm6.697-4.604q.25-.65.55-1.55.4-1.2.275-1.399t-.475-.05c-.278.135-.511.32-.697.547l-.003.004c-.208.263-.406.557-.582.866l-.018.034c-.202.331-.373.712-.492 1.116l-.009.034c-.193.523-.305 1.128-.305 1.758 0 .085.002.169.006.253v-.012q.05.999.32 1.075t.625-.725c.229-.413.433-.893.585-1.396l.014-.054q.149-.354.204-.501zm5.546 2.65c.693-.311 1.181-.966 1.249-1.741l.001-.008v-.05l-.55.7-.999 1.1c-.015.012-.025.03-.025.05 0 .02.01.038.024.05q.048.049.3-.1zm4.299-.95c.756-.216 1.3-.901 1.3-1.712 0-.013 0-.026 0-.039v.002c-.01-.2-.046-.388-.105-.566l.004.015c-.389.346-.708.76-.939 1.227l-.011.023q-.451.899-.252 1.048z" data-astro-cid-v2cbyr3p></path></g></svg> </div> </div> </div> </section> </div> </section> `;
}, "C:/Users/la bix del pecho/Desktop/Portfolio/src/components/About.astro", void 0);

const piano = new Proxy({"src":"/_astro/piano1.syyPv_4O.png","width":1175,"height":469,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const responsive = new Proxy({"src":"/_astro/responsive.cB9v3fO6.png","width":1848,"height":732,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const noresponsive = new Proxy({"src":"/_astro/noresponsive.ZbRUgRqV.png","width":1784,"height":768,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const sharewe = new Proxy({"src":"/_astro/sharewe.FLAhQFoP.png","width":908,"height":362,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const cart = new Proxy({"src":"/_astro/cartSimpleExample.wKzXcEBn.png","width":1890,"height":780,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const data = [
    {
        name: "WeShare! ",
        type: "WebApp",
        url: "/projects",
        github: "https://github.com/jvdelafuente/WeShare-FinalBootcampProject",
        image: sharewe,
        slug: "cart-management-system",
        description: "Final bootcamp project, This is a website that allows users to register, login, share links, view links from other users and like the links they like the most.",
        tech: ['HTML', 'Javascript', 'Css','Nodejs', 'React', 'MySql']
        
    },

    {
    name: "No responsive Portfiolio",
    type: "Website",
    url: "https://jvnoresponsiveporfolio.netlify.app",
    github: "https://github.com/jvdelafuente/ExamplePortfolioNoResponsive",
    image: noresponsive,
    slug: "lifeinsureease",
    description: "Funny portfolio design, build for 1750px screen, feel free to use it",
    tech: ['HTML', 'Javascript', 'Css', 'React' ]

},
            {
        name: "Shopping cart example",
        type: "Website",
        url: "https://jvcartexample.netlify.app",
        github: "https://github.com/jvdelafuente/cartSimpleExample",
        image: cart,
        slug: "lifeinsureease",
        description: "Minimalist shopping cart design",
        tech: ['HTML', 'Javascript', 'Css' ]

    },
        {
        name: "Responsive Portfolio",
        type: "Website",
        url: "https://jvresponsiveportfolio.netlify.app",
        github: "https://github.com/jvdelafuente/ExamplePortfolioResponsive",
        image: responsive,
        slug: "lifeinsureease",
        description: "Portfolio example for ideas, feel free to use it",
        tech: ['HTML', 'Javascript', 'Sass', 'React' ]
    },
        {
        name: "My piano",
        type: "Website",
        url: "https://main--jvmypiano.netlify.app",
        github: "https://github.com/jvdelafuente/MyPiano",
        image: piano,
        slug: "lifeinsureease",
        description: "Simple piano game",
        tech: ['HTML', 'Javascript', 'Css' ]

    },

];

function getData(){
    return data;
}

const $$Astro$3 = createAstro("https://www.linkedin.com/in/javiergarciadelafuente/");
const $$Project = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Project;
  const data = getData();
  return renderTemplate`${maybeRenderHead()}<section id="projects" class="text-primary body-font w-5/6 mx-auto" data-astro-cid-tkm2rszc> <div class="py-24 mx-auto" data-astro-cid-tkm2rszc> <h1 data-aos="fade-up" data-aos-anchor-placement="center-bottom" class="mb-8 font-extrabold text-center text-4xl text-transparent bg-clip-text bg-gradient-to-tr from-[#45cafc] to-[#616161]" data-astro-cid-tkm2rszc><a id="projectH1" href="/projects" data-astro-cid-tkm2rszc>
Projects</a> </h1> <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" class="text-gray-400 font-medium text-lg text-center mb-16 w-full mx-auto" data-astro-cid-tkm2rszc>
Explore my projects and ideas.
</p> <div class="flex items-center justify-between py-8" data-astro-cid-tkm2rszc> <h1 class="text-primary text-xl sm:text-3xl font-semibold" data-astro-cid-tkm2rszc>
Latest Projects
</h1> <a class="text-primary px-4 py-2.5 bg-primary rounded-xl bg-opacity-10" aria-label="blog link" href="/projects" id="viewProjectButton" data-astro-cid-tkm2rszc>
View all</a> </div> <div class="mx-auto grid grid-cols-1 gap-8 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 xl:grid xl:grid-cols-3" data-astro-cid-tkm2rszc> ${data && data.slice(0, 3).map((item, index) => {
    return renderTemplate`<a id="projectCardContainer" data-aos="fade-up" data-aos-anchor-placement="center-bottom" target="_blank"${addAttribute(`${item.url}`, "href")} class="relative mx-auto  overflow-hidden rounded-xl bg-transparent  border border-1 border-primary border-opacity-25 shadow-xl" data-astro-cid-tkm2rszc> <div class="bg-transparent" data-astro-cid-tkm2rszc> ${renderComponent($$result, "Image", $$Image, { "src": item.image, "class": " object-cover bg-cover rounded-t-xl", "alt": "", "data-astro-cid-tkm2rszc": true, "data-astro-transition-scope": renderTransition($$result, "u35j2xp4", "", item.name) })} </div> <div class="z-20 py-4 px-4 rounded-b-xl bg-opacity-75" data-astro-cid-tkm2rszc> <div class="flex items-center justify-between" data-astro-cid-tkm2rszc> <div data-astro-cid-tkm2rszc> <h1 class="text-xl  font-bold text-white" data-astro-cid-tkm2rszc>${item.name}</h1> <p class="text-sm mb-1" data-astro-cid-tkm2rszc> ${item.type} </p> </div> <button${addAttribute(item.name, "aria-label")} class="p-2 mr-2 bg-primary rounded-full bg-opacity-10" data-astro-cid-tkm2rszc> <svg class="fill-primary h-6" viewBox="0 0 24 24" height="1em" fill="none" xmlns="http://www.w3.org/2000/svg" id="viewProjectButton" data-astro-cid-tkm2rszc> <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-tkm2rszc></g> ${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-tkm2rszc": true }, { "default": ($$result2) => renderTemplate` <g id="SVGRepo_bgCarrier" stroke-width="0" data-astro-cid-tkm2rszc></g> <g id="SVGRepo_iconCarrier" data-astro-cid-tkm2rszc> <path fill-rule="evenodd" clip-rule="evenodd" d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z" data-astro-cid-tkm2rszc></path> </g> ` })} </svg> </button> </div> </div> </a>`;
  })} </div> </div> </section> `;
}, "C:/Users/la bix del pecho/Desktop/Portfolio/src/components/Project.astro", "self");

const $$Astro$2 = createAstro("https://www.linkedin.com/in/javiergarciadelafuente/");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="bg-primary bg-opacity-5" data-astro-cid-sz7xmlte> <section class="w-5/6 mx-auto" data-astro-cid-sz7xmlte> <div class="flex gap-y-6 sm:flex-row flex-col-reverse justify-between py-8" data-astro-cid-sz7xmlte> <div class="flex flex-col gap-y-2" data-astro-cid-sz7xmlte> <h1 class="bg-gradient-to-r from-[#45cafc] to-[#45cafc]  text-transparent bg-clip-text text-primary text-xl font-bold" data-astro-cid-sz7xmlte>Social Links</h1> <div class="fill-primary stroke-primary flex sm:justify-around gap-5 flex-nowrap" id="iconFooterContainer" data-astro-cid-sz7xmlte> <a aria-label="Github" href="https://github.com/jvdelafuente" class="flex flex-row items-center justify-center" data-astro-cid-sz7xmlte> <svg id="viewProjectButton" class="fill-primary text-lg h-6" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 496 512" data-astro-cid-sz7xmlte> <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" data-astro-cid-sz7xmlte></path></svg> </a> <a href="https://www.linkedin.com/in/javiergarciadelafuente/" aria-label="Linkedin" class="flex items-center justify-center" data-astro-cid-sz7xmlte> <svg id="viewProjectButton" class="fill-primary text-lg h-6" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" data-astro-cid-sz7xmlte> <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" data-astro-cid-sz7xmlte></path></svg> </a> <a href="https://www.linkedin.com/in/javiergarciadelafuente/" aria-label="Linkedin" class="flex items-center justify-center" data-astro-cid-sz7xmlte></a> </div> </div> <hr class="text-primary opacity-10" data-astro-cid-sz7xmlte> <a id="emailFooter" aria-label="delafuentejvr@gmail.com" href="mailto:delafuentejvr@gmail.com" class="flex flex-row items-center justify-center" data-astro-cid-sz7xmlte> <div id="viewProjectButton" class="p-3 flex w-auto h-auto bg-primary rounded-full bg-opacity-10 items-center justify-center" data-astro-cid-sz7xmlte> <svg id="viewProjectButton" class="fill-primary text-[5px]" xmlns="http://www.w3.org/2000/svg" height="3em" viewBox="0 0 512 512" data-astro-cid-sz7xmlte> <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" data-astro-cid-sz7xmlte></path></svg> </div> <h3 id="viewProjectButton" class="hidden pl-4 text-sm text-primary font-medium opacity-80 lg:flex md:flex pointer-events-none" data-astro-cid-sz7xmlte>
delafuentejvr@gmail.com
</h3> </a> </div> </section> </footer> `;
}, "C:/Users/la bix del pecho/Desktop/Portfolio/src/components/Footer.astro", void 0);

function IndexNav() {
  const [show, isShow] = useState(false);
  return /* @__PURE__ */ jsx(Fragment$1, { children: /* @__PURE__ */ jsxs("div", { id: "hamburger", className: " relative z-50", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute", children: /* @__PURE__ */ jsx("div", { className: "fixed right-[-10px] top-[50%] rotate-[270deg]", children: /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsx("div", { className: "w-full", children: /* @__PURE__ */ jsx(
      "button",
      {
        "aria-label": "menuButton",
        onClick: () => {
          isShow(!show);
        },
        className: "bg-primary  font-bold px-4 py-1 rounded-t-xl cursor-pointer",
        children: show ? /* @__PURE__ */ jsxs(
          "svg",
          {
            className: "h-4",
            height: "1em",
            viewBox: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              /* @__PURE__ */ jsx("g", { id: "SVGRepo_bgCarrier", strokeWidth: "0" }),
              /* @__PURE__ */ jsx(
                "g",
                {
                  id: "SVGRepo_tracerCarrier",
                  strokeLinecap: "round",
                  strokeLinejoin: "round"
                }
              ),
              /* @__PURE__ */ jsx("g", { id: "SVGRepo_iconCarrier", children: /* @__PURE__ */ jsx("path", { d: "M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z" }) })
            ]
          }
        ) : /* @__PURE__ */ jsxs(
          "svg",
          {
            className: "h-4",
            height: "1em",
            viewBox: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              /* @__PURE__ */ jsx("g", { id: "SVGRepo_bgCarrier", strokeWidth: "0" }),
              /* @__PURE__ */ jsx(
                "g",
                {
                  id: "SVGRepo_tracerCarrier",
                  strokeLinecap: "round",
                  strokeLinejoin: "round"
                }
              ),
              /* @__PURE__ */ jsx("g", { id: "SVGRepo_iconCarrier", children: /* @__PURE__ */ jsx("path", { d: "M3 19h18a1.002 1.002 0 0 0 .823-1.569l-9-13c-.373-.539-1.271-.539-1.645 0l-9 13A.999.999 0 0 0 3 19z" }) })
            ]
          }
        )
      }
    ) }) }) }) }),
    show ? /* @__PURE__ */ jsx("div", { className: " overflow-y-none  transition-transform ease-in-out delay-150", children: /* @__PURE__ */ jsx(
      "div",
      {
        className: ` animate-menu -z-10 top-[0px] left-[0px]  fixed bg-primary  h-[100%] custom w-[100%]`,
        children: /* @__PURE__ */ jsx("div", { id: "backMenuBackground", className: " h-[100%] custom w-[100%] flex items-center justify-center", children: /* @__PURE__ */ jsxs("ul", { className: "flex flex-col text-4xl font-bold text-center space-y-10", children: [
          /* @__PURE__ */ jsx("a", { id: "backMenuButtons", onClick: () => isShow(false), "aria-label": "Home", href: "/", children: /* @__PURE__ */ jsx("h3", { className: "bg-gradient-to-r from-[#45cafc] to-[#616161] inline-block text-transparent bg-clip-text", children: "Home" }) }),
          /* @__PURE__ */ jsx(
            "a",
            {
              id: "backMenuButtons",
              onClick: () => isShow(false),
              "aria-label": "about",
              href: "/#about",
              children: /* @__PURE__ */ jsx("h3", { className: "bg-gradient-to-r from-[#45cafc] to-[#616161] inline-block text-transparent bg-clip-text", children: "About" })
            }
          ),
          /* @__PURE__ */ jsx(
            "a",
            {
              id: "backMenuButtons",
              onClick: () => isShow(false),
              "aria-label": "projects",
              href: "/projects",
              children: /* @__PURE__ */ jsx("h3", { className: "bg-gradient-to-r from-[#45cafc] to-[#616161] inline-block text-transparent bg-clip-text", children: "Projects" })
            }
          ),
          /* @__PURE__ */ jsx("a", { id: "backMenuButtons", href: CV, download: true, children: /* @__PURE__ */ jsx("h3", { className: "bg-gradient-to-r from-[#45cafc] to-[#616161] inline-block text-transparent bg-clip-text", children: " Download CV" }) })
        ] }) })
      }
    ) }) : null
  ] }) });
}

const $$Astro$1 = createAstro("https://www.linkedin.com/in/javiergarciadelafuente/");
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Javier", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="relative" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "IndexNav", IndexNav, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/la bix del pecho/Desktop/Portfolio/src/components/IndexNav", "client:component-export": "default", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-j7pv25f6": true, "data-astro-transition-scope": renderTransition($$result2, "bwabbhoa", "fade", "") })} ${renderComponent($$result2, "Hero", $$Hero, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "About", $$About, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Project", $$Project, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-j7pv25f6": true })} <!-- <Education/> --> </main> ` })} `;
}, "C:/Users/la bix del pecho/Desktop/Portfolio/src/pages/index.astro", "self");

const $$file$1 = "C:/Users/la bix del pecho/Desktop/Portfolio/src/pages/index.astro";
const $$url$1 = "";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro("https://www.linkedin.com/in/javiergarciadelafuente/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const data = getData();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Projects", "data-astro-cid-2hwget37": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="relative w-5/6 mx-auto" data-astro-cid-2hwget37${addAttribute(createTransitionScope($$result2, "kfhjqpjh"), "data-astro-transition-persist")}> <!-- <PageNav title="PROJECTS" previousLink="/#projects" client:load /> --> <section data-astro-cid-2hwget37> <div id="backButtonDiv" data-astro-cid-2hwget37> <a id="backButton" href="/" data-astro-cid-2hwget37> Back</a> </div> <h1 class="text-primary text-3xl font-extrabold mt-12 text-center sm:text-start" data-astro-cid-2hwget37>
Explore My Projects
</h1> <p class="text-gray-400 text-lg py-4 text-center sm:text-start" data-astro-cid-2hwget37>
Explore and discover the outstanding work I have accomplished in the field of web development.
</p> <div class="grid grid-cols-1 items-center w-full gap-4 mt-24" data-astro-cid-2hwget37> ${data?.map((item, index) => {
    return renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "data-astro-cid-2hwget37": true }, { "default": ($$result3) => renderTemplate` <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" class="flex lg:flex-row flex-col text-center lg:text-start items-center gap-8" data-astro-cid-2hwget37> ${renderComponent($$result3, "Image", $$Image, { "class:list": "rounded-xl w-96", "src": item.image, "alt": item.name, "data-astro-cid-2hwget37": true, "data-astro-transition-scope": renderTransition($$result3, "xaoj6bmq", "", item.name) })} <div class="flex flex-col gap-3" data-astro-cid-2hwget37> <div class="" data-astro-cid-2hwget37> <h1 class="sm:text-5xl text-3xl font-bold text-primary " data-astro-cid-2hwget37> ${item.name} </h1> <p class="text-gray-400 py-1" data-astro-cid-2hwget37>${item.description}</p> </div> <div class="flex gap-3 justify-center lg:justify-start flex-wrap" data-astro-cid-2hwget37> ${item.tech.map((item2) => {
      return renderTemplate`<span class="px-2 text-xs font-semibold py-1 rounded-md text-primary bg-primary bg-opacity-10" data-astro-cid-2hwget37> ${item2} </span>`;
    })} </div> <div class="flex gap-2 justify-center lg:justify-start items-center" data-astro-cid-2hwget37> <a target="_blank" id="projectsButtons" class="flex items-center gap-2 rounded-md font-bold px-3 py-2 bg-primary bg-opacity-10 text-primary"${addAttribute(item.github, "href")} data-astro-cid-2hwget37> <svg class="fill-primary text-lg" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 496 512" data-astro-cid-2hwget37> <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" data-astro-cid-2hwget37></path> </svg>${" "}
Repository
</a> <a id="projectsButtons" target="_blank" class="flex items-center  gap-2 rounded-md font-bold px-3 py-2 bg-primary bg-opacity-10 text-primary"${addAttribute(item.url, "href")} data-astro-cid-2hwget37> <svg class="fill-primary " height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="world" class="icon glyph" data-astro-cid-2hwget37> <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-2hwget37></g> ${renderComponent($$result3, "Fragment", Fragment, { "data-astro-cid-2hwget37": true }, { "default": ($$result4) => renderTemplate` <g id="SVGRepo_bgCarrier" stroke-width="0" data-astro-cid-2hwget37></g> <g id="SVGRepo_iconCarrier" data-astro-cid-2hwget37> <path d="M8.5,12c0,1,0,2,.12,3L8.39,15a12.36,12.36,0,0,0-3.08,1.35,10.06,10.06,0,0,0-1.61,1.2,10,10,0,0,1,0-11.14,10.06,10.06,0,0,0,1.61,1.2A12.29,12.29,0,0,0,8.38,9L8.62,9C8.54,10,8.5,11,8.5,12ZM4.3,5.62A9.55,9.55,0,0,0,5.91,6.83,11.11,11.11,0,0,0,8.66,8h0a24.72,24.72,0,0,1,.6-3.55,11,11,0,0,1,.79-2.3A10.05,10.05,0,0,0,4.3,5.62Zm9.61-3.44a11,11,0,0,1,.79,2.3A24.72,24.72,0,0,1,15.3,8h0a11.18,11.18,0,0,0,2.76-1.19A9.55,9.55,0,0,0,19.7,5.62,10.05,10.05,0,0,0,13.91,2.18ZM9.68,15.73a24.3,24.3,0,0,0,.74,4.12A7.82,7.82,0,0,0,11.31,22L12,22l.69,0a7.82,7.82,0,0,0,.89-2.13,24.3,24.3,0,0,0,.74-4.12A11.69,11.69,0,0,0,9.68,15.73ZM14.4,9.27A12.6,12.6,0,0,1,12,9.5a12.6,12.6,0,0,1-2.4-.23c-.07.85-.1,1.77-.1,2.73s0,1.88.1,2.74a12.7,12.7,0,0,1,4.8,0c.07-.85.1-1.77.1-2.73S14.47,10.12,14.4,9.27Zm-.82-5.12A7.82,7.82,0,0,0,12.69,2L12,2l-.69,0a7.82,7.82,0,0,0-.89,2.13,24.3,24.3,0,0,0-.74,4.12,11.69,11.69,0,0,0,4.64,0A24.3,24.3,0,0,0,13.58,4.15ZM20.3,6.43a10.06,10.06,0,0,1-1.61,1.2A12.36,12.36,0,0,1,15.61,9L15.38,9c.08,1,.12,2,.12,3s0,2-.12,3l.24.06a12.29,12.29,0,0,1,3.07,1.35,10.06,10.06,0,0,1,1.61,1.2,10,10,0,0,0,0-11.14ZM18.09,17.17A11.11,11.11,0,0,0,15.34,16h0a24.72,24.72,0,0,1-.6,3.55,11,11,0,0,1-.79,2.3,10.05,10.05,0,0,0,5.79-3.44A9.55,9.55,0,0,0,18.09,17.17ZM9.3,19.52A24.72,24.72,0,0,1,8.7,16h0a11.18,11.18,0,0,0-2.76,1.19A9.55,9.55,0,0,0,4.3,18.38a10.05,10.05,0,0,0,5.79,3.44A11,11,0,0,1,9.3,19.52Z" data-astro-cid-2hwget37></path> </g> ` })} </svg>
Live Preview
</a> </div> </div> </div> <hr class="opacity-10 mt-8 mb-8" data-astro-cid-2hwget37> ` })}`;
  })} </div> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-2hwget37": true })} ` })} `;
}, "C:/Users/la bix del pecho/Desktop/Portfolio/src/pages/projects/index.astro", "self");

const $$file = "C:/Users/la bix del pecho/Desktop/Portfolio/src/pages/projects/index.astro";
const $$url = "/projects";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index as a, index$1 as i };
