import {themes as prismThemes} from "prism-react-renderer";
import type {Config} from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "React Native Template Strong",
  tagline: "Quick, opinionated, documented and strong beginning for your next project",
  favicon: "img/favicon.ico",

  url: "https://svbutko.github.io/",
  baseUrl: "/react-native-template-strong/",

  organizationName: "svbutko",
  projectName: "react-native-template-strong",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          showLastUpdateTime: true,
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/svbutko/react-native-template-strong/master/website/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    algolia: {
      appId: "XO9GJZJMTW",
      apiKey: "d9b09790edab8cc6a9a4a727c0e5c059",
      indexName: "react-native-template-strong",
    },
    navbar: {
      title: "React Native Template Strong",
      logo: {
        alt: "strong-logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "doc",
          docId: "getting-started",
          position: "right",
          label: "Docs",
        },
        {
          to: "mission",
          position: "right",
          label: "Mission",
        },
        {
          to: "troubleshooting",
          position: "right",
          label: "Troubleshooting",
        },
        {
          to: "faq",
          position: "right",
          label: "FAQ",
        },
        {
          href: "https://github.com/svbutko/react-native-template-strong",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Getting started",
              to: "/docs/getting-started",
            },
            {
              label: "Troubleshooting",
              to: "troubleshooting",
            },
            {
              label: "FAQ",
              to: "faq",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Discussions",
              href: "https://github.com/svbutko/react-native-template-strong/discussions",
            },
            {
              label: "Issues",
              href: "https://github.com/svbutko/react-native-template-strong/issues",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Project Github",
              href: "https://github.com/svbutko/react-native-template-strong",
            },
            {
              label: "My Github",
              href: "https://github.com/svbutko",
            },
            {
              label: "My Twitter",
              href: "https://twitter.com/svbutko",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Sergei Butko (@svbutko). Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
