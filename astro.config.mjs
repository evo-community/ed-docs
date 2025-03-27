// @ts-check
import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  base: "/",
  integrations: [
    starlight({
      title: "EVOLUTION DESIGN",
      social: {
        github: "https://github.com/evo-community/evolution-design",
      },
      customCss: [
        // Relative path to your custom CSS file
        "./src/styles/custom.css",
      ],
      defaultLocale: "root",
      locales: {
        root: {
          label: "Russian",
          lang: "ru",
        },
        en: {
          label: "English",
        },
      },
      sidebar: [
        {
          label: "Начало",
          translations: {
            en: "Getting started",
          },
          slug: "getting-started",
          //          items: [
          //            {
          //              label: "О проекте",
          //              slug: "getting-started",
          //              translations: {
          //                en: "About project",
          //              },
          //            },
          //          ],
        },
        {
          label: "Руководство",
          translations: {
            en: "Handbook",
          },
          items: [
            {
              label: "Быстрый старт",
              slug: "guide/quick-start",
              translations: {
                en: "Quick start",
              },
            },
            {
              label: "Основные концепции",
              slug: "guide/main-concepts",
              translations: {
                en: "Concepts",
              },
            },
          ],
        },
        {
          label: "Погружение",
          translations: {
            en: "Deep dive",
          },
          items: [],
        },
        {
          label: "Паттерны",
          translations: {
            en: "Patterns",
          },
          items: [],
        },
        {
          label: "Глоссарий",
          translations: {
            en: "Terms",
          },
          items: [],
        },
      ],
    }),
  ],
});
