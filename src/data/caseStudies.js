/**
 * Centralized case study data.
 *
 * Every project in the portfolio lives here. The Projects grid on the home page
 * pulls the card-level fields (title, description, tags, images). The individual
 * case-study pages pull the full `story` object for the long-form narrative.
 */

export const caseStudies = [
  {
    id: 1,
    slug: 'agro-nursery-garden',
    caseNumber: '01',
    category: 'E-Commerce & Digital Commerce Platform',
    title: 'Agro Nursery Garden',
    headline: 'From an Outdated Site to a WhatsApp-Powered Wholesale Storefront',
    description:
      'A B2B nursery needed to reach buyers across India without forwarding catalogs by hand. We built a 120+ variety catalog where buyers order directly on WhatsApp, and Google started sending buyers within 90 days.',
    tags: ['React', 'Firebase', 'WhatsApp Integration', 'SEO'],
    link: 'https://mahadeshwaraagrofarm.in',
    images: [
      {
        src: '/img/Case 1/Screenshot 2026-09-18 163143.png',
        alt: 'Agro Nursery Garden — Homepage hero and catalog overview',
      },
      {
        src: '/img/Case 1/Screenshot 2026-09-18 163152.png',
        alt: 'Agro Nursery Garden — Product listing grid',
      },
      {
        src: '/img/Case 1/Screenshot 2026-09-18 163248.png',
        alt: 'Agro Nursery Garden — Individual product page with WhatsApp CTA',
      },
      {
        src: '/img/Case 1/Screenshot 2026-09-18 163312.png',
        alt: 'Agro Nursery Garden — Category browsing experience',
      },
      {
        src: '/img/Case 1/Screenshot 2026-09-18 163338.png',
        alt: 'Agro Nursery Garden — Mobile responsive view',
      },
    ],

    /* ── Full case-study story ─────────────────────────────────────────── */
    story: {
      snapshot: {
        client: 'Agro Nursery Garden, B2B plant supplier',
        goal: 'Reach wholesale buyers across India and stop sharing catalogs manually',
        services:
          'Website design and development, catalog setup, WhatsApp ordering integration, search-ready structure',
        stack: 'React, Firebase, wa.me deep links',
      },

      stats: [
        { value: '120+', label: 'Plant varieties listed' },
        { value: '6.55K', label: 'Google impressions in 90 days' },
        { value: '135', label: 'Organic clicks' },
        { value: '94%', label: 'Search traffic from India' },
      ],

      challenge: `It began with a phone call. The client ran a wholesale nursery, but his website was old, outdated and doing nothing for the business. Every new enquiry meant sending the full catalog to each customer by hand. It was slow, repetitive and impossible to scale. He wanted a website that would put his nursery in front of buyers across India.`,

      approach: `Before writing any code, we studied how the client actually works. His business already runs on WhatsApp, and his customers are comfortable there. So instead of forcing buyers onto a new platform, we built the website around the tool they already trust.\n\nThe idea: browse on the website, order on WhatsApp. No logins, no carts, no friction.`,

      solution: [
        {
          title: 'One-tap WhatsApp ordering',
          text: 'Every product has its own WhatsApp link, so the buyer opens a chat with the item already referenced.',
        },
        {
          title: 'A complete visual catalog',
          text: '120+ varieties, each entered by hand with an accurate name and a high-quality image, so buyers know exactly what they\'re ordering.',
        },
        {
          title: 'Built for wholesale',
          text: 'Designed for B2B buyers placing bulk orders of 100+ units.',
        },
        {
          title: 'Direct call button',
          text: 'Buyers who prefer to talk can reach the seller in one tap.',
        },
        {
          title: 'Fully responsive',
          text: 'Smooth on phones, tablets and desktops.',
        },
        {
          title: 'Search-ready',
          text: 'Each plant has its own page, built so buyers searching for a specific variety can find it on Google.',
        },
        {
          title: 'Scalable foundation',
          text: 'React on the frontend, Firebase for data and image storage.',
        },
      ],

      result: `The client now has a professional storefront that works for him around the clock. He no longer forwards catalogs one customer at a time. Buyers browse the range, pick what they need and message him directly, and every enquiry lands in the WhatsApp he already uses.\n\nThe site was also found on Google quickly. In its first 90 days it earned 6.55K search impressions and 135 organic clicks, with 94% of that traffic coming from India. In the last 28 days alone, clicks grew 54% and impressions grew 171%. Individual product pages for varieties like Nanjangud Rasabale Banana, Butter Fruit and Tiptur Tall Coconut are already ranking and bringing in buyers.`,

      resultSource: 'Source: Google Search Console, Jul–Oct 2026.',

      whyItWorked: `The best solution wasn't the most complex one. We matched the technology to the client's real workflow, removed every step between a buyer and an order, and built the site so Google could find each product.`,
    },
  },

  {
    id: 2,
    slug: 'karnataka-sports-foundation',
    caseNumber: '02',
    category: 'Sports Platform & Event Management',
    title: 'Karnataka Sports Foundation',
    headline: 'A Grassroots Sports Management Platform with Self-Serve Admin Portal',
    description:
      'A digital hub built for Karnataka Sports Foundation to organize sports activities, Taluk, District, and State level tournaments, dynamic registration forms, and full self-serve admin control.',
    tags: ['React', 'Firebase Auth', 'Firestore', 'Tailwind CSS', 'Cloudinary'],
    link: 'https://sportskarnataka.com/',
    images: [
      {
        src: '/img/Case 2/Screenshot 2026-09-18 164320.png',
        alt: 'Karnataka Sports Foundation — Homepage and upcoming tournaments banner',
      },
      {
        src: '/img/Case 2/Screenshot 2026-09-18 164355.png',
        alt: 'Karnataka Sports Foundation — Program listings and registration forms',
      },
      {
        src: '/img/Case 2/Screenshot 2026-09-18 164403.png',
        alt: 'Karnataka Sports Foundation — Admin dashboard and tournament management',
      },
    ],

    /* ── Full case-study story ─────────────────────────────────────────── */
    story: {
      snapshot: {
        client: 'Karnataka Sports Foundation',
        goal: 'Digitize sports tournaments (Taluk, District, State) and empower admins to launch programs and custom registration forms independently.',
        services:
          'Full-stack Web Application, Self-Serve Admin Dashboard, Dynamic Activity & Registration Forms, Cloud Media Storage',
        stack: 'React, Firebase (Auth, Firestore, Storage), Cloudinary, Tailwind CSS',
      },

      stats: [
        { value: '3 Levels', label: 'Taluk, District & State Tournaments' },
        { value: '100%', label: 'Self-Serve Admin Control' },
        { value: 'Instant', label: 'Online Registration Forms' },
        { value: 'Fast', label: 'Cloudinary Image Assets' },
      ],

      challenge: `Karnataka Sports Foundation conducts sports activities and competitive tournaments across Taluk, District, and State levels. Operating without a central digital system meant managing announcements, program dates, and paper or manual registration forms was time-consuming and inefficient. The foundation needed a modern website featuring a secure, intuitive admin dashboard so the client could independently create new activities, post upcoming programs, and manage athlete registration forms without developer assistance.`,

      approach: `We designed a dual-capability architecture tailored to the foundation's operating style: an engaging public portal for athletes and local sports communities, alongside a powerful admin dashboard for the client.\n\nUsing React and Tailwind CSS for a sleek, responsive interface, Firebase Authentication for secure admin sign-in, Firestore for dynamic activity data, and Cloudinary for optimized media management, we built a zero-friction system for organizing events.`,

      solution: [
        {
          title: 'Self-Serve Admin Dashboard',
          text: 'Protected by Firebase Auth, enabling the client to create, edit, and publish new sports activities and programs independently.',
        },
        {
          title: 'Taluk, District & State Tournament Hub',
          text: 'Categorized event management supporting sports competitions across all administrative levels with clear schedules and guidelines.',
        },
        {
          title: 'Dynamic Activity Registration Forms',
          text: 'Custom online registration forms generated for each activity, allowing participants to sign up directly online.',
        },
        {
          title: 'Cloudinary & Firebase Storage',
          text: 'High-speed image and document storage for event banners, activity photos, and participant registration uploads.',
        },
        {
          title: 'Responsive Modern UI',
          text: 'Built with React and Tailwind CSS to guarantee a fast, seamless experience on mobile devices, tablets, and desktops.',
        },
      ],

      result: `The platform gave Karnataka Sports Foundation complete operational autonomy. The client can now launch new state-wide or taluk-level activities in minutes, publish event guidelines, and collect registration form submissions online seamlessly.\n\nAthletes across Karnataka can now easily discover sports programs, register online without paperwork, and stay updated with the latest foundation events.`,

      resultSource: 'Source: Karnataka Sports Foundation Operational Platform',

      whyItWorked: `By combining a flexible self-serve admin dashboard with dynamic registration form management and optimized cloud storage, we gave the client total freedom to manage and grow sports initiatives across the state.`,
    },
  },

  {
    id: 3,
    slug: 'timeless-moments',
    caseNumber: '03',
    category: 'Photography Portfolio',
    title: 'Timeless Moments',
    headline: 'A Premium Stage for Wedding Photography',
    description:
      'A premium wedding photography portfolio site designed to showcase high-resolution imagery and capture artistic milestones.',
    tags: ['React', 'Vercel', 'Tailwind CSS'],
    link: 'https://photography-phi-nine.vercel.app/',
    images: [
      {
        src: '/img/Case 3/Screenshot 2026-09-18 164622.png',
        alt: 'Timeless Moments - Screenshot 1',
      },
      {
        src: '/img/Case 3/Screenshot 2026-09-18 164634.png',
        alt: 'Timeless Moments - Screenshot 2',
      },
      {
        src: '/img/Case 3/Screenshot 2026-09-18 164647.png',
        alt: 'Timeless Moments - Screenshot 3',
      },
      {
        src: '/img/Case 3/Screenshot 2026-09-18 164657.png',
        alt: 'Timeless Moments - Screenshot 4',
      },
      {
        src: '/img/Case 3/Screenshot 2026-09-18 164710.png',
        alt: 'Timeless Moments - Screenshot 5',
      },
      {
        src: '/img/Case 3/Screenshot 2026-09-18 164729.png',
        alt: 'Timeless Moments - Screenshot 6',
      },
      {
        src: '/img/Case 3/Screenshot 2026-09-18 164744.png',
        alt: 'Timeless Moments - Screenshot 7',
      },
    ],
    story: null, // No case study story for this project
  },

  {
    id: 4,
    slug: 'playhomes',
    caseNumber: '04',
    category: 'Web Application & Platform',
    title: 'Playhomes',
    headline: 'Interactive Web Platform for Playhomes',
    description:
      'A modern, responsive web application for Playhomes featuring engaging user interfaces and optimized performance.',
    tags: ['React', 'Tailwind CSS', 'Netlify'],
    link: 'https://playhomes.netlify.app/',
    images: [
      {
        src: '/img/playhomes.png',
        alt: 'Playhomes Website Screenshot',
      },
    ],
    story: null, // No case study story for this project
  },
];

/**
 * Find a case study by its slug (URL-friendly identifier).
 */
export const getCaseStudyBySlug = (slug) =>
  caseStudies.find((study) => study.slug === slug) || null;

/**
 * Get all case studies that have a full story written.
 */
export const getCaseStudiesWithStories = () =>
  caseStudies.filter((study) => study.story !== null);

