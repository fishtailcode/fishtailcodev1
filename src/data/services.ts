export interface ServiceProcess {
  step: string;
  title: string;
  description: string;
  icon?: string;
}

export interface ServiceFeature {
  title: string;
  description: string;
  icon?: string;
}

export interface Service {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  process: ServiceProcess[];
  features: ServiceFeature[];
  technologies: string[]; // List of icon names (e.g., 'tabler:brand-react')
  benefits: string[];
}

export const services: Service[] = [
  {
    slug: 'web-development',
    title: 'Web Development',
    subtitle: 'Custom Web Solutions for Your Business',
    description:
      'We build fast, secure, and scalable websites tailored to your business needs. From simple landing pages to complex web applications, we have you covered.',
    heroImage:
      'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80',
    process: [
      {
        step: '01',
        title: 'Discovery',
        description: 'We analyze your requirements and understand your business goals to create a tailored solution.',
        icon: 'tabler:search',
      },
      {
        step: '02',
        title: 'Planning',
        description: 'Our team creates detailed project plans, timelines, and resource allocation strategies.',
        icon: 'tabler:bulb',
      },
      {
        step: '03',
        title: 'Development',
        description: 'We build your solution using agile methodologies with regular progress updates.',
        icon: 'tabler:code',
      },
      {
        step: '04',
        title: 'Delivery',
        description: 'We deploy, test, and provide ongoing support to ensure optimal performance.',
        icon: 'tabler:rocket',
      },
    ],
    features: [
      {
        title: 'Custom Design',
        description: 'Unique designs that reflect your brand identity.',
        icon: 'tabler:palette',
      },
      {
        title: 'Responsive Layout',
        description: 'Websites that look great on all devices, from mobile to desktop.',
        icon: 'tabler:device-mobile',
      },
      {
        title: 'SEO Optimized',
        description: 'Built with search engines in mind to help you rank higher.',
        icon: 'tabler:seo',
      },
      {
        title: 'Fast Performance',
        description: 'Optimized for speed to ensure a smooth user experience.',
        icon: 'tabler:bolt',
      },
    ],
    technologies: [
      'tabler:brand-react',
      'tabler:brand-nextjs',
      'tabler:brand-tailwind',
      'tabler:brand-nodejs',
      'tabler:brand-python',
      'tabler:database',
    ],
    benefits: [
      'Increased online visibility',
      'Better user engagement',
      'Higher conversion rates',
      'Scalable architecture',
    ],
  },
  {
    slug: 'web-development/frontend',
    title: 'Frontend Development',
    subtitle: 'Engaging User Interfaces',
    description:
      'We create stunning and interactive user interfaces using modern frontend technologies like React, Vue, and Angular.',
    heroImage:
      'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2031&q=80',
    process: [
      {
        step: '01',
        title: 'UI/UX Design',
        description: 'Creating wireframes and prototypes.',
        icon: 'tabler:layout-dashboard',
      },
      {
        step: '02',
        title: 'Component Build',
        description: 'Developing reusable UI components.',
        icon: 'tabler:components',
      },
      { step: '03', title: 'Integration', description: 'Connecting frontend with backend APIs.', icon: 'tabler:api' },
      {
        step: '04',
        title: 'Testing',
        description: 'Ensuring cross-browser compatibility.',
        icon: 'tabler:browser',
      },
    ],
    features: [
      { title: 'Interactive UI', description: 'Dynamic and responsive interfaces.', icon: 'tabler:click' },
      { title: 'Accessibility', description: 'WCAG compliant designs.', icon: 'tabler:accessible' },
      { title: 'Performance', description: 'Optimized asset loading.', icon: 'tabler:gauge' },
      { title: 'Modern Frameworks', description: 'Using the latest tech stack.', icon: 'tabler:stack' },
    ],
    technologies: [
      'tabler:brand-react',
      'tabler:brand-vue',
      'tabler:brand-angular',
      'tabler:brand-typescript',
      'tabler:brand-sass',
    ],
    benefits: ['Enhanced user experience', 'Faster load times', 'Better accessibility', 'Modern look and feel'],
  },
  {
    slug: 'web-development/backend',
    title: 'Backend Development',
    subtitle: 'Robust Server-Side Solutions',
    description:
      'We build secure and scalable backend systems to power your applications. From API development to database management.',
    heroImage:
      'https://images.unsplash.com/photo-1623479322729-28b25c16b011?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    process: [
      { step: '01', title: 'Architecture', description: 'Designing the system architecture.', icon: 'tabler:sitemap' },
      { step: '02', title: 'API Design', description: 'Creating RESTful or GraphQL APIs.', icon: 'tabler:api' },
      {
        step: '03',
        title: 'Database Setup',
        description: 'Configuring and optimizing databases.',
        icon: 'tabler:database',
      },
      {
        step: '04',
        title: 'Security',
        description: 'Implementing authentication and authorization.',
        icon: 'tabler:lock',
      },
    ],
    features: [
      {
        title: 'Scalable Architecture',
        description: 'Systems that grow with your business.',
        icon: 'tabler:chart-arrows-vertical',
      },
      { title: 'Secure APIs', description: 'Protected endpoints and data.', icon: 'tabler:shield-lock' },
      { title: 'Data Integrity', description: 'Reliable data storage and retrieval.', icon: 'tabler:database' },
      {
        title: 'Cloud Integration',
        description: 'Seamless deployment to cloud platforms.',
        icon: 'tabler:cloud-upload',
      },
    ],
    technologies: [
      'tabler:brand-nodejs',
      'tabler:brand-python',
      'tabler:brand-django',
      'tabler:brand-mongodb',
      'tabler:brand-mysql',
    ],
    benefits: ['Secure data management', 'High availability', 'Seamless integration', 'Efficient processing'],
  },
  {
    slug: 'web-development/full-stack',
    title: 'Full Stack Development',
    subtitle: 'End-to-End Web Solutions',
    description:
      'Complete web development services covering both frontend and backend. We deliver fully integrated solutions.',
    heroImage:
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    process: [
      {
        step: '01',
        title: 'Requirement Analysis',
        description: 'Understanding full scope.',
        icon: 'tabler:list-check',
      },
      {
        step: '02',
        title: 'System Design',
        description: 'Designing full stack architecture.',
        icon: 'tabler:device-desktop',
      },
      { step: '03', title: 'Agile Development', description: 'Iterative development process.', icon: 'tabler:refresh' },
      { step: '04', title: 'Deployment', description: 'Full system launch.', icon: 'tabler:rocket' },
    ],
    features: [
      { title: 'Unified Solution', description: 'Seamless frontend and backend integration.', icon: 'tabler:puzzle' },
      { title: 'Cost Effective', description: 'One team for all development needs.', icon: 'tabler:coin' },
      { title: 'Faster Delivery', description: 'Streamlined development process.', icon: 'tabler:clock' },
      { title: 'Consistent Quality', description: 'Uniform coding standards.', icon: 'tabler:check' },
    ],
    technologies: [
      'tabler:brand-react',
      'tabler:brand-nodejs',
      'tabler:brand-nextjs',
      'tabler:brand-graphql',
      'tabler:brand-docker',
    ],
    benefits: ['Comprehensive solution', 'Reduced communication gaps', 'Faster time to market', 'Easier maintenance'],
  },
  {
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    subtitle: 'Native and Cross-Platform Apps',
    description:
      'We design and develop high-quality mobile applications for iOS and Android. Reach your customers on their favorite devices.',
    heroImage:
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    process: [
      { step: '01', title: 'Concept', description: 'Refining your app idea.', icon: 'tabler:bulb' },
      {
        step: '02',
        title: 'UI/UX',
        description: 'Designing intuitive mobile interfaces.',
        icon: 'tabler:device-mobile',
      },
      { step: '03', title: 'Development', description: 'Coding for iOS and Android.', icon: 'tabler:code' },
      { step: '04', title: 'Launch', description: 'Publishing to App Stores.', icon: 'tabler:upload' },
    ],
    features: [
      { title: 'Cross-Platform', description: 'React Native / Flutter for both OS.', icon: 'tabler:devices' },
      { title: 'Native Performance', description: 'Smooth and responsive apps.', icon: 'tabler:activity' },
      { title: 'Offline Mode', description: 'Apps that work without internet.', icon: 'tabler:wifi-off' },
      { title: 'Push Notifications', description: 'Engage users with updates.', icon: 'tabler:bell' },
    ],
    technologies: [
      'tabler:brand-react-native',
      'tabler:brand-flutter',
      'tabler:brand-apple',
      'tabler:brand-android',
      'tabler:brand-firebase',
    ],
    benefits: ['Wider audience reach', 'Direct customer channel', 'Brand recognition', 'Monetization opportunities'],
  },
  {
    slug: 'seo',
    title: 'SEO & Digital Marketing',
    subtitle: 'Grow Your Online Presence',
    description:
      'Improve your search engine rankings and drive organic traffic to your website. We use proven strategies to boost your visibility.',
    heroImage:
      'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
    process: [
      {
        step: '01',
        title: 'Audit',
        description: 'Analyzing current site performance.',
        icon: 'tabler:report-analytics',
      },
      { step: '02', title: 'Strategy', description: 'Keyword research and planning.', icon: 'tabler:chess' },
      { step: '03', title: 'Optimization', description: 'On-page and off-page SEO.', icon: 'tabler:settings' },
      { step: '04', title: 'Reporting', description: 'Tracking progress and ROI.', icon: 'tabler:chart-line' },
    ],
    features: [
      { title: 'Keyword Ranking', description: 'Targeting high-value keywords.', icon: 'tabler:target' },
      { title: 'Content Marketing', description: 'Creating engaging content.', icon: 'tabler:writing' },
      { title: 'Technical SEO', description: 'Fixing site errors and speed.', icon: 'tabler:tool' },
      { title: 'Link Building', description: 'Acquiring quality backlinks.', icon: 'tabler:link' },
    ],
    technologies: ['tabler:brand-google-analytics', 'tabler:seo', 'tabler:ad', 'tabler:social', 'tabler:mail'],
    benefits: ['Higher search rankings', 'Increased organic traffic', 'Better brand authority', 'Long-term results'],
  },
];
