import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    {
      text: 'About Us',
      href: getPermalink('/about'),
    },
    {
      text: 'Services',
      links: [
        {
          text: 'Web Development',
          href: getPermalink('/services/web-development'),
          links: [
            {
              text: 'Frontend',
              href: getPermalink('/services/web-development/frontend'),
            },
            {
              text: 'Backend',
              href: getPermalink('/services/web-development/backend'),
            },
            {
              text: 'Full Stack',
              href: getPermalink('/services/web-development/full-stack'),
            },
          ],
        },
        {
          text: 'Mobile App Development',
          href: getPermalink('/services/mobile-app-development'),
        },
        {
          text: 'SEO & Digital Marketing',
          href: getPermalink('/services/seo'),
        },
      ],
    },
    {
      text: 'Courses',
      links: [
        {
          text: 'Python Programming',
          href: getPermalink('/courses/python'),
        },
        {
          text: 'Java Development',
          href: getPermalink('/courses/java'),
        },
        {
          text: 'Web Development',
          href: getPermalink('/courses/web-development'),
        },
        {
          text: 'Data Science',
          href: getPermalink('/courses/data-science'),
        },
        {
          text: 'Cloud Computing',
          href: getPermalink('/courses/cloud-computing'),
        },
        {
          text: 'Cyber Security',
          href: getPermalink('/courses/cyber-security'),
        },
      ],
    },
    {
      text: 'Blog',
      href: getPermalink('/blog'),
    },
    {
      text: 'Contact Us',
      href: getPermalink('/contact'),
    },
  ],
  actions: [{ text: 'Get Free Quote', href: '/contact' }],
};

export const footerData = {
  links: [
    {
      title: 'Services',
      links: [
        { text: 'Website Development', href: '/services' },
        { text: 'Mobile App Development', href: '/services' },
        { text: 'SEO & Digital Marketing', href: '/services' },
        { text: 'E-commerce Solutions', href: '/services' },
        { text: 'Maintenance & Support', href: '/services' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About Us', href: '/about' },
        { text: 'Portfolio', href: '/portfolio' },
        { text: 'Pricing', href: '/pricing' },
        { text: 'Contact', href: '/contact' },
        { text: 'Blog', href: '/blog' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Contact Support', href: '/contact' },
        { text: 'WhatsApp Support', href: 'https://wa.me/9779841234567' },
        { text: 'Documentation', href: '#' },
        { text: 'FAQ', href: '/#faqs' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { text: 'Terms of Service', href: '/terms' },
        { text: 'Privacy Policy', href: '/privacy' },
        { text: 'Cookie Policy', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://facebook.com/fishtailcode' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://instagram.com/fishtailcode' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://linkedin.com/company/fishtailcode' },
    { ariaLabel: 'WhatsApp', icon: 'tabler:brand-whatsapp', href: 'https://wa.me/9745697694' },
  ],
  footNote: `
    Made by <a class="text-blue-600 hover:underline dark:text-gray-400" href="/">Fishtail Code</a> · All rights reserved.
  `,
};
