const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import("@docusaurus/types").DocusaurusConfig} */
module.exports = {
  title: "React Native Template Strong",
  tagline: "Quick, opinionated, documented and strong beginning for your next project",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "svbutko",
  projectName: "react-native-template-strong",
  themeConfig: {
    navbar: {
      title: "React Native Template Strong",
      logo: {
        alt: "strong-logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "doc",
          docId: "intro",
          position: "left",
          label: "Docs",
        },
        {
          to: "mission",
          position: "left",
          label: "Mission",
        },
        {
          to: "showcase",
          position: "left",
          label: "Showcase",
        },
        {
          to: "faq",
          position: "left",
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
              to: "/docs/intro",
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
              label: "GitHub",
              href: "https://github.com/svbutko/react-native-template-strong",
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