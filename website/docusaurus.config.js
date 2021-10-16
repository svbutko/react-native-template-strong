const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import("@docusaurus/types").DocusaurusConfig} */
module.exports = {
  title: "React Native Template Strong",
  tagline: "Quick, opinionated, documented and strong beginning for your next project",
  url: "https://svbutko.github.io/",
  baseUrl: "/react-native-template-strong/",
  trailingSlash: undefined,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "svbutko",
  projectName: "react-native-template-strong",
  themeConfig: {
    algolia: {
      apiKey: '3bedd97b2d9da08babd7baad394ee76a',
      indexName: 'react-native-template-strong',
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
          to: "showcase",
          position: "right",
          label: "Showcase",
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
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          showLastUpdateTime: true,
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/svbutko/react-native-template-strong/master/website/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
