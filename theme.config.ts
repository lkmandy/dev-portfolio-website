import { defineThemeConfig } from '@utils/defineThemeConfig'
import previewImage from '@assets/img/social-preview-image.png'
import logoImage from '@assets/img/logo.svg'

export default defineThemeConfig({
  name: 'Amanda Shafack',
  id: 'amanda-portfolio',
  logo: logoImage,
  logoIcon: 'lucide:terminal',
  seo: {
    title: 'Amanda Shafack',
    description: 'Fullstack Developer building accessible mobile and web apps.',
    author: 'Amanda Shafack',
    image: previewImage, // Can also be a string e.g. '/social-preview-image.png',
  },
  colors: {
    primary: '#00a8af',
    secondary: '#C83E4D',
    neutral: '#8A9393',
    outline: '#F2A7AF',
  },
  navigation: {
    darkmode: true,
    items: [
      {
        type: 'link',
        label: 'Home',
        href: '/',
      },
      {
        type: 'link',
        label: 'Projects',
        href: '/portfolio',
      },
        {
        type: 'link',
        label: 'About',
        href: '/about',
      },
      //  {
      //   type: 'link',
      //   label: 'Blog',
      //   href: '/blog',
      // },
      // {
      //   label: 'Features',
      //   type: 'dropdown',
      //   items: [
      //     {
      //       label: 'Accessibility statement',
      //       href: '/accessibility-statement',
      //     },
      //     {
      //       label: 'Accessible components',
      //       href: '/accessible-components',
      //     },
      //     {
      //       label: 'Accessible launcher',
      //       href: '/accessible-launcher',
      //     },
      //     {
      //       label: 'Color contrast checker',
      //       href: '/color-contrast-checker',
      //     },
      //     {
      //       label: 'Markdown page',
      //       href: '/markdown-page',
      //     },
      //     {
      //       label: 'MDX page',
      //       href: '/mdx-page',
      //     },
      //     {
      //       label: '404 page',
      //       href: '/404',
      //     },
      //     {
      //       label: 'Sitemap',
      //       href: '/sitemap',
      //     },
      //   ],
      // },
      // {
      //   type: 'link',
      //   label: 'Contact',
      //   href: '/contact',
      // },
      // {
      //   type: 'link',
      //   label: 'Go to our GitHub page, opens in new tab',
      //   href: 'https://github.com/incluud/accessible-astro-starter',
      //   icon: 'lucide:github',
      //   external: true,
      //   excludeFromLauncher: true,
      // },
    ],
  },
  socials: [
    {
      label: 'GitHub',
      href: 'https://github.com/lkmandy',
      icon: 'lucide:github',
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/lkmandy/',
      icon: 'lucide:linkedin',
    },
    {
      label: 'Twitter',
      href: 'https://x.com/lkmandy',
      icon: 'lucide:twitter',
    },
    {
      label: 'Email',
      href: 'mailto:shafack.likhene@gmail.com',
      icon: 'lucide:mail',
    },
  ],
})
