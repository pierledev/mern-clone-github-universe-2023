/*============= HEADER =============*/
import { HiChevronDown } from 'react-icons/hi2';

export const headerLinks = [
  {
    id: 1,
    path: '/sessions',
    name: 'Sessions',
  },
  {
    id: 2,
    path: '/speakers',
    name: 'Speakers',
  },
  {
    id: 3,
    path: '/why-attend',
    name: 'Why attend',
  },
  {
    id: 4,
    path: '/faq',
    name: 'FAQ',
  },
  {
    id: 5,
    name: 'More',
    path: '',
    icon: <HiChevronDown />,
  },
];

export const headerCtas = [
  {
    id: 1,
    path: '/attendee-portal',
    name: 'Visit attendee portal',
  },
  {
    id: 2,
    path: '/get-tickets',
    name: 'Get tickets',
  },
];

export const headerAuthenticatedCtas = [
  {
    id: 1,
    path: '/my-agenda',
    name: 'My Agenda',
  },
  {
    id: 2,
    name: 'Logout',
    button: true,
  },
];

/*======= FEATURED SPEAKERS ========*/
import avaThomas from './assets/media/speaker-thomas-dohmke.webp';
import avaJay from './assets/media/speaker-jay-miller.webp';
import avaShuyin from './assets/media/speaker-shuyin-zhao.webp';
import avaBrittany from './assets/media/speaker-brittany-istenes.webp';
import avaShanea from './assets/media/speaker-shanea-leven.webp';
import avaQuiana from './assets/media/speaker-quiana-berry.webp';
import avaSimon from './assets/media/speaker-simon-willison.webp';
import avaArthur from './assets/media/speaker-arthur-maltson.webp';

export const featuredSpeakers = [
  {
    id: 1,
    name: 'Thomas Dohmke',
    position: 'CEO',
    company: 'GitHub',
    ava: avaThomas,
    github: 'ashtom',
  },
  {
    id: 2,
    name: 'Jay Miller',
    position: 'Sr. Cloud Advocate',
    company: 'Microsost',
    ava: avaJay,
    github: 'kjaymiller',
  },
  {
    id: 3,
    name: 'Shuyin Zhao',
    position: 'VP of Product',
    company: 'GitHub Copilot, GitHub',
    ava: avaShuyin,
    github: 'shuyinzjk',
  },
  {
    id: 4,
    name: 'Brittany Istenes',
    position: 'OSPO Strategist',
    company: 'Fannie Mae',
    ava: avaBrittany,
    github: 'BrittanyIstenes',
  },
  {
    id: 5,
    name: 'Shanea Leven',
    position: 'CEO',
    company: 'CodeSee',
    ava: avaShanea,
    github: 'shaneakr',
  },
  {
    id: 6,
    name: 'Quiana Berry',
    position: 'Product Manager',
    company: 'Red Hat',
    ava: avaQuiana,
    github: 'berryq460',
  },
  {
    id: 7,
    name: 'Simon Willison',
    position: 'Independent Researcher',
    company: 'Datasette',
    ava: avaSimon,
    github: 'simonw',
  },
  {
    id: 8,
    name: 'Arthur Maltson',
    position: 'Director, Distinguished Engineer',
    company: 'Capital One',
    ava: avaArthur,
    github: 'amaltson',
  },
];

/*============= SPONSORS ============*/
import logoMicrosoft from './assets/media/sponsor-microsoft.svg';
import logoArm from './assets/media/sponsor-arm.svg';
import logoDocker from './assets/media/sponsor-docker.svg';
import logoPostman from './assets/media/sponsor-postman.svg';
import logoOctopus from './assets/media/sponsor-octopus.svg';
import logoDatadog from './assets/media/sponsor-datadog.svg';
import logoXebia from './assets/media/sponsor-xebia.svg';
import logoReadme from './assets/media/sponsor-readme.svg';
import logoEvinced from './assets/media/sponsor-evinced.svg';
import logoRedHat from './assets/media/sponsor-redhat.svg';
import logoSwimm from './assets/media/sponsor-swimm.svg';
import logo1Password from './assets/media/sponsor-1password.svg';
import logoEndor from './assets/media/sponsor-endor.svg';
import logoPangea from './assets/media/sponsor-pangea.svg';
import logoPixee from './assets/media/sponsor-pixee.svg';
import logoMend from './assets/media/sponsor-mend.svg';
import logoTricentis from './assets/media/sponsor-tricentis.svg';
import logoAtmosera from './assets/media/sponsor-atmosera.svg';
import logoTrunk from './assets/media/sponsor-trunk.svg';
import logoPaypal from './assets/media/sponsor-paypal.svg';
import logoAppwrite from './assets/media/sponsor-appwrite.svg';
import logoStacklok from './assets/media/sponsor-stacklok.svg';
import logoBoxboat from './assets/media/sponsor-boxboat.svg';
import logoAppmap from './assets/media/sponsor-appmap.svg';

export const sponsors = [
  {
    id: 1,
    company: 'Microsoft',
    logo: logoMicrosoft,
    logoHeight: 48,
    link: 'http://www.microsoft.com',
  },
  {
    id: 2,
    company: 'Arm',
    logo: logoArm,
    logoHeight: 32,
    link: 'https://www.arm.com',
  },
  {
    id: 3,
    company: 'Docker',
    logo: logoDocker,
    logoHeight: 52,
    link: 'https://www.docker.com',
  },
  {
    id: 4,
    company: 'Postman',
    logo: logoPostman,
    logoHeight: 50,
    link: 'https://www.postman.com',
  },
  {
    id: 5,
    company: 'Octopus Deploy',
    logo: logoOctopus,
    logoHeight: 60,
    link: 'https://www.octopus.com',
  },
  {
    id: 6,
    company: 'Datadog',
    logo: logoDatadog,
    logoHeight: 44,
    link: 'https://www.datadoghq.com',
  },
  {
    id: 7,
    company: 'Xebia',
    logo: logoXebia,
    logoHeight: 30,
    link: 'https://events.xebia.com/platinum-plus-sponsor-github-universe-2023',
  },
  {
    id: 8,
    company: 'Readme',
    logo: logoReadme,
    logoHeight: 36,
    link: 'https://readme.com',
  },
  {
    id: 9,
    company: 'Evinced',
    logo: logoEvinced,
    logoHeight: 28,
    link: 'https://www.evinced.com',
  },
  {
    id: 10,
    company: 'Red Hat',
    logo: logoRedHat,
    logoHeight: 38,
    link: 'https://www.redhat.com',
  },
  {
    id: 11,
    company: 'Swimm',
    logo: logoSwimm,
    logoHeight: 48,
    link: 'https://www.swimm.io',
  },
  {
    id: 12,
    company: '1Password',
    logo: logo1Password,
    logoHeight: 32,
    link: 'https://1password.com/developers',
  },
  {
    id: 13,
    company: 'Endor Labs',
    logo: logoEndor,
    logoHeight: 40,
    link: 'https://www.endorlabs.com',
  },
  {
    id: 14,
    company: 'Pangea',
    logo: logoPangea,
    logoHeight: 28,
    link: 'https://pangea.cloud',
  },
  {
    id: 15,
    company: 'Pixee',
    logo: logoPixee,
    logoHeight: 36,
    link: 'https://www.pixee.ai',
  },
  {
    id: 16,
    company: 'Mend.io',
    logo: logoMend,
    logoHeight: 48,
    link: 'https://www.mend.io',
  },
  {
    id: 17,
    company: 'Tricentis',
    logo: logoTricentis,
    logoHeight: 30,
    link: 'https://www.tricentis.com',
  },
  {
    id: 18,
    company: 'Atmosera',
    logo: logoAtmosera,
    logoHeight: 24,
    link: 'https://www.atmosera.com',
  },
  {
    id: 19,
    company: 'Trunk',
    logo: logoTrunk,
    logoHeight: 38,
    link: 'https://trunk.io',
  },
  {
    id: 20,
    company: 'PayPal',
    logo: logoPaypal,
    logoHeight: 36,
    link: 'https://www.paypal.com',
  },
  {
    id: 21,
    company: 'Appwrite',
    logo: logoAppwrite,
    logoHeight: 30,
    link: 'https://apwr.dev',
  },
  {
    id: 22,
    company: 'Stacklok',
    logo: logoStacklok,
    logoHeight: 30,
    link: 'https://www.stacklok.com',
  },
  {
    id: 23,
    company: 'Boxboat',
    logo: logoBoxboat,
    logoHeight: 40,
    link: 'https://boxboat.com',
  },
  {
    id: 24,
    company: 'AppMap',
    logo: logoAppmap,
    logoHeight: 36,
    link: 'https://github.com/marketplace/get-appmap',
  },
];

/*======= TICKET CATEGORIES ========*/
export const ticketCategories = [
  {
    id: 1,
    name: 'Virtual pass',
    desc: 'Experience two full days of live streamed main stage content from anywhere, plus, exclusive access to over 50 on-demand sessions for a week after the event',
    price: 'Free',
    available: true,
  },
  {
    id: 2,
    name: 'Community pass',
    desc: 'Our most affordable option gives you access to the Main Stage breakout sessions, The Hub, The Galleries and The Shop',
    price: '$450',
    available: true,
  },
  {
    id: 3,
    name: 'General admission',
    desc: 'Access to all four breakout stages, The Hub, The Galleries and The Shop',
    price: '$1,100',
    available: true,
  },
  {
    id: 4,
    name: 'All access pass',
    desc: 'Attend in style with seating for the Day 1 and 2 keynotes, admission to the VIP reception, on November 8th, access to all four breakout stages, The Hub, The Galleries, and The Shop',
    available: false,
  },
];

/*============= TRACKS =============*/
import iconAI from './assets/media/icon-ai-white.svg';
import iconSecurity from './assets/media/icon-security-white.svg';
import iconDX from './assets/media/icon-dx-white.svg';

export const tracks = [
  {
    id: 1,
    icon: iconAI,
    title: 'AI',
    desc: 'A new frontier in developer creativity.',
    topics: [
      'The global impact of generative AI.',
      'Adopting AI successfully and responsibly.',
      'The future of AI.',
    ],
  },
  {
    id: 2,
    icon: iconSecurity,
    title: 'Security',
    desc: 'Proactive security, powered by AI.',
    topics: [
      'Protecting your software supply chain.',
      'AI-powered and prescriptive securty features.',
      'The latest compliance standards.',
    ],
  },
  {
    id: 3,
    icon: iconDX,
    title: 'DevEx',
    desc: 'Welcome to your flow state.',
    topics: [
      'Removing barriers to innovation.',
      'How to unlock developer velocity.',
      'Automating happiness.',
    ],
  },
];

/*============= AGENDAS ============*/
export const agendas = [
  {
    id: 1,
    title: 'GitHub Copilot',
    desc: 'Discover how our AI pair programmer increases productivity, collaboration, and security — and where it’s headed next.',
  },
  {
    id: 2,
    title: 'GitHub Platform',
    desc: 'Learn how to make the most of our platform’s tools, whether you’re a new developer or managing a Fortune 500 enterprise.',
  },
  {
    id: 3,
    title: 'GitHub Advanced Security',
    desc: 'Dive deep into AI-powered software security with demos and workshops in DevSecOps principles, tools, and best practices.',
  },
  {
    id: 4,
    title: 'Software Developer',
    desc: 'Prove your value, learn new skills, and improve your own DevEx with automation and generative AI.',
  },
  {
    id: 5,
    title: 'Security Professional',
    desc: 'Secure your software supply chain with the power of AI and GitHub Advanced Security.',
  },
  {
    id: 6,
    title: 'Engineering Leader',
    desc: 'Master the art of DevEx for teams that work better (and faster) together.',
  },
  {
    id: 7,
    title: 'Security Leader',
    desc: 'Unlock AI-powered DevSecOps for your organization with proven strategies and tools like GitHub Advanced Security.',
  },
  {
    id: 8,
    title: 'Open Source',
    desc: 'Build the future with inspiring stories, best practices for ethically open sourcing with AI, and tips on how to support maintainers.',
  },
  {
    id: 9,
    title: "Ruth Ikegah's Curated Agenda",
    desc: 'Ruth Ikegah is an Open Source Program Manager, Community Manager, GitHub Star, and Technical Writer who is passionate about all the ways GitHub users are building with AI. Check out her curated agenda to find out more.',
  },
  {
    id: 10,
    title: "Miguel Angel Durán García's Curated Agenda",
    desc: 'As a Lead Front-End Architect at Adevinta in Barcelona, Spain, Miguel Angel Durán García loves helping people solve meaningful problems through technology. (He’s also a GitHub Star.) His curated GitHub Universe agenda is packed with sessions to help you improve your developer experience with AI, Actions, and more. Check it out.',
  },
  {
    id: 11,
    title: "Mario Souto's Curated Agenda",
    desc: 'Mario Souto is not only a GitHub Star, but a scientist and engineer who specializes in optimization, control, and machine learning. In his GitHub Universe playlist, you’ll discover how GitHub’s latest products and AI will bring more value to your community and communities everywhere.',
  },
  {
    id: 12,
    title: "Ashley Willis' Curated Agenda",
    desc: 'Ashley Willis is a globally recognized speaker, technologist, and dedicated open source advocate. Join her GitHub Universe playlist to: gain actionable insights about the intersection of AI and human skills, while tackling ethics, accessibility, and productivity.',
  },
];

/*========= SESSIONS FILTER ========*/
export const filters = {
  days: [
    {
      id: 1,
      option: '2023-11-07',
    },
    {
      id: 2,
      option: '2023-11-08',
    },
    {
      id: 3,
      option: '2023-11-09',
    },
  ],
  'delivery formats': [
    {
      id: 1,
      option: 'In-person',
    },
    {
      id: 2,
      option: 'Recorded',
    },
    {
      id: 3,
      option: 'Livestream',
    },
  ],
  'session tracks': [
    {
      id: 1,
      option: 'AI',
    },
    {
      id: 2,
      option: 'Developer Experience',
    },
    {
      id: 3,
      option: 'Security',
    },
  ],
  'session types': [
    {
      id: 1,
      option: 'Keynote',
    },
    {
      id: 2,
      option: 'General Session',
    },
    {
      id: 3,
      option: 'Studio Session',
    },
    {
      id: 4,
      option: 'Fireside Chat',
    },
    {
      id: 5,
      option: 'Product Demo',
    },
    {
      id: 6,
      option: 'Workshop',
    },
    {
      id: 7,
      option: 'Panel Discussion',
    },
    {
      id: 8,
      option: 'Discussion Lounge',
    },
    {
      id: '9',
      option: 'Main Stage',
    },
  ],
  levels: [
    {
      id: 1,
      option: 'Level 100: Introductory',
    },
    {
      id: 2,
      option: 'Level 200: Intermediate',
    },
    {
      id: 3,
      option: 'Level 300: Intermediate',
    },
  ],
};

/*============ WHY ATTEND ==========*/
export const timelines = [
  {
    id: 1,
    date: 'Tuesday, November 7',
    events: [
      {
        id: 1,
        time: '9:00am PST',
        desc: 'Registration opens for workshops',
      },
      {
        id: 2,
        time: '9:30am — 5:00pm PST',
        desc: 'Workshop sessions',
      },
      {
        id: 3,
        time: 'All',
        desc: 'VIP Meetings',
      },
    ],
  },
  {
    id: 2,
    date: 'Wednesday, November 8',
    events: [
      {
        id: 1,
        time: '7:30am PST',
        desc: 'Registration opens',
      },
      {
        id: 2,
        time: '9:00am — 9:45am PST',
        desc: 'Keynote',
      },
      {
        id: 3,
        time: '10:00am — 5:30pm PST',
        desc: 'The Hub and Galleries',
      },
      {
        id: 4,
        time: '10:30am — 5:00pm PST',
        desc: 'Workshops and certifications',
      },
      {
        id: 5,
        time: '10:30am — 5:10pm PST',
        desc: 'Breakout sessions',
      },
      {
        id: 6,
        time: '10:30am — 5:00pm PST',
        desc: 'Demos & Donuts',
      },
    ],
  },
  {
    id: 3,
    date: 'Thursday, November 9',
    events: [
      {
        id: 1,
        time: '7:30am PST',
        desc: 'Registration opens',
      },
      {
        id: 2,
        time: '9:00am — 9:45am PST',
        desc: 'Keynote',
      },
      {
        id: 3,
        time: '10:00am — 4:30pm PST',
        desc: 'The Hub and Galleries',
      },
      {
        id: 4,
        time: '10:30am — 4:00pm PST',
        desc: 'Workshops and certifications',
      },
      {
        id: 5,
        time: '10:30am — 4:10pm PST',
        desc: 'Breakout sessions',
      },
      {
        id: 6,
        time: '10:30am — 4:00pm PST',
        desc: 'Demos & Donuts',
      },
    ],
  },
];

export const keyAreas = [
  {
    id: 1,
    title: 'The Hub',
    text: 'Home to the GitHub booth, some of our technology partners, and the Demos & Donuts stage. Need we say more?',
  },
  {
    id: 2,
    title: 'The Galleries',
    text: 'In our expanded footprint across YBCA’s beautiful building, you’ll now get to be immersed in art and technology while you visit some of our technology partners across the gallery spaces and participate in the Discussion Lounge. In our expanded footprint across YBCA’s beautiful building, you’ll now get to be immersed in art and technology while you visit some of our technology partners across the gallery spaces and participate in the Discussion Lounge.',
  },
  {
    id: 3,
    title: 'Ask GitHub',
    text: 'Have any pressing technical questions? Use this opportunity to sit and chat with our product experts. No pre-booking required!',
  },
  {
    id: 4,
    title: 'The Shop',
    text: 'In need of some new octocat gear? Visit The Shop on Level 2 of the Gallery building to refresh your stash.',
  },
  {
    id: 5,
    title: 'The Garden',
    text: 'We wouldn’t keep you indoors the whole time! Soak up the fall winds and bright sun while grabbing a bite to eat, enjoying the coffee airstream bar, and checking out the live stream of our on-site broadcast studio.',
  },
  {
    id: 6,
    title: 'GitHub Certification Testing',
    text: "While exams typically don't generate much excitement, we have something special in store for our in-person attendees: the exclusive beta launch of GitHub certifications along with a testing location on site! Sign up for a workshop and get a complimentary voucher for a certification exam or simply purchase a standalone voucher. During the event, you'll have the opportunity to take an exam on-site, allowing you to leave with an official GitHub Certification in Foundations, Actions, Security, or Administration. If you're unsure which certification to pursue, don't worry! Simply drop by the Certifications booth located in the Grand Lobby throughout the event to get more information.",
  },
];

export const reasonsToJoin = [
  {
    id: 1,
    title: 'Expand your network 🌱',
    texts: [
      'The world’s most innovative developers come together at GitHub Universe. This year, we’re welcoming over 2,000 developers, founders, open source maintainers, leaders, and more to San Francisco from around the world.',
      'Whether you’re a CTO, engineering manager, seasoned expert, or just starting out, this is your community.',
    ],
  },
  {
    id: 2,
    title: 'Learn from the best 🧠',
    texts: [
      'This year, our in-person event will have five stages running concurrently throughout the day. You can choose to sit back and learn at the Main Stage, SF MoMA theater, Screening Room, and Broadcast studio, or join our more interactive stage with the newly added Discussions Lounge. You can also learn from GitHub product leaders and our Universe partners on the Demo Stage. (And yes, Demos & Donuts are back!) If you can’t make it in person or stay the whole time, don’t worry: All sessions will be available on demand shortly after the event except the few labeled “In-person only.” ',
    ],
  },
  {
    id: 3,
    title: 'Level-up with interactive sessions ✨',
    texts: [
      'Register for one (or many) of the nine unique workshops starting on November 7 and running through November 9. BONUS! If you sign up for a workshop, you’ll receive a free voucher to get GitHub certified in Foundations, Actions, Security, or Administration. More information about workshops and certifications is coming soon!',
    ],
  },
  {
    id: 4,
    title: 'Experience new technology 💻',
    texts: [
      'You’ll be the first to hear about GitHub’s latest product announcements and get hands-on demos of new GitHub features, plus access to solutions from our most coveted partners. ',
    ],
  },
  {
    id: 5,
    title: 'Get inspired 🦄',
    texts: [
      'GitHub Universe is headed back to the Yerba Buena Center for the Arts (YBCA) in San Francisco! YBCA provides a platform for new and established artists to connect with their community and ignite inspiration through their art forms. This year, our campus expands to include the San Francisco Museum of Modern Art (SF MoMA), and additional special programming at the Hyatt Regency. ',
    ],
  },
];

export const testimonies = [
  'I love the idea of being part of a community of developers that work to improve the world. This conference is a great place to bring people like that together and I want to be part of it.',
  "I'm working on three open source projects at the moment and attending made me feel like part of a community. I learned so much and feel invigorated! Lots of ideas to bring back to my teams.",
  'The experience was phenomenal and the speakers were amazing',
  'Attending the event, even virtually, made me feel like part of the GitHub and open source communities. Thank you for an excellent event and overall experience.',
];

/*============== FAQs ==============*/
export const faqs = [
  {
    id: 1,
    category: 'Event details',
    qnas: [
      {
        id: 1,
        question: 'What is GitHub Universe?',
        answer:
          "GitHub Universe is the global, annual event for GitHub's customers and the developer community.",
      },
      {
        id: 2,
        question: 'When is GitHub Universe taking place?',
        answer:
          'November 8-9 (Pacific time) live from San Francisco and streaming online.',
      },
      {
        id: 3,
        question: 'Where will GitHub Universe take place this year?',
        answer:
          'GitHub Universe will be a hybrid event broadcasted live on GitHubUniverse.com and in-person at Yerba Buena Center for the Arts (YBCA) in San Francisco, CA, located at 701 Mission Street. This year, we have expanded our campus to the SF MoMA across from YBCA at 151 Third St. with special programming at the Hyatt Regency SF Downtown SOMA, 50 3rd St.',
      },
      {
        id: 4,
        question: 'Who is GitHub Universe for?',
        answer:
          'GitHub is the home for all developers and GitHub Universe is an opportunity for our community to explore the future of software development together. We produce GitHub Universe for enterprises, startups, open source communities, security officers, partners and any developer interested in discovering how GitHub can help them accelerate their development experience.',
      },
      {
        id: 5,
        question: 'Where can I find an agenda?',
        answer:
          'We are currently working on a full agenda for GitHub Universe. We will let you know when the agenda is available in September.',
      },
      {
        id: 6,
        question:
          'Is there a template I can use with additional information to convince my manager to let me attend Universe?',
        answer:
          'Yes. Here is a "Convince your boss" template that you can use.',
      },
      {
        id: 7,
        question: 'What is the event code of conduct?',
        answer:
          'The Event Code of Conduct is available here. If you have questions or would like to report any violations, please find the closest GitHub or event staffer.',
      },
    ],
  },
  {
    id: 2,
    category: 'Accommodations',
    qnas: [
      {
        id: 1,
        question: 'Will meals be provided at GitHub Universe?',
        answer:
          "Yes, your in-person GitHub Universe ticket includes food and beverage each day. Expect small bites for breakfast and grab and go options for lunch, along with snack options available throughout the day. All dietary restrictions will be taken into account and foods will be labeled accordingly. And remember those donuts from last year? They'll definitely be back! Full menus will be posted here in the FAQ by November 7.",
      },
      {
        id: 2,
        question:
          'Whom should I contact if I have special dietary needs or allergies?',
        answer: 'Please indicate your dietary needs in the registration form.',
      },
    ],
  },
  {
    id: 3,
    category: 'Preparation',
    qnas: [
      {
        id: 1,
        question: 'How should I dress?',
        answer:
          'The event is casual, please wear what you are comfortable in. We recommend comfortable shoes and light layers to navigate our full campus with ease.',
      },
      {
        id: 2,
        question: "What if I can't stay the entire time?",
        answer:
          'No worries - all talks (with the exception of those tagged as "in-person only") will be available on-demand after the show concludes at the end of each day.',
      },
      {
        id: 3,
        question:
          'Do I need to bring anything to GitHub Universe (i.e. laptop)?',
        answer:
          'We encourage you to travel light. However, if you have signed up for a workshop  (separate ticket required), we ask you to bring your own machine.',
      },
      {
        id: 4,
        question: 'WWhat time is GitHub Universe?',
        answer:
          'Registration opens at 7:30am PT and sessions conclude by 5pm PT on both November 8 and November 9. Please refer to your ticket type for which sessions and areas you have access to.',
      },
      {
        id: 5,
        question:
          'Do I need to bring anything for check-in at GitHub Universe?',
        answer:
          'You will need a government issued ID in order to check in at GitHub Universe.',
      },
      {
        id: 6,
        question: 'Will content be available to rewatch at a later time?',
        answer:
          'All talks, except those tagged as "in-person only," will be available on-demand after the show concludes each day.',
      },
      {
        id: 7,
        question: 'How can I attend the event?',
        answer:
          'To attend Universe you will need to sign up for a free virtual pass or purchase one of the in-person pass types. Tickets for the in-person experience range from $450 to $1,500 depending on your level of access. Access to Workshops and Certifications can be added to any in-person ticket type for an additional fee. Please note each Workshop is purchased separately.',
      },
      {
        id: 8,
        question: 'What Covid-19 precautions will you be taking at this event?',
        answer:
          "We are following the San Francisco Department of Public Health's guidelines when it comes to COVID safety. Per current guidelines, vaccination and masks will not be required at GitHub Universe 2023. We will have masks available at registration for attendees that would like to wear one. Should public health guidelines change, we reserve the right to implement testing and masks before the event. If so, attendees will receive ample notification. As always, please stay home if you are experiencing any symptoms or have been exposed—we all need to do our part to keep one another healthy.",
      },
      {
        id: 9,
        question: 'Are there sponsorship opportunities for GitHub Universe?',
        answer:
          'We do have limited sponsorship opportunities for GitHub Universe. For more information, please visit https://event-sponsorship.github.com/ or email us at eventsponsorship@github.com.',
      },
      {
        id: 10,
        question: 'Do you offer ticket scholarships?',
        answer: 'We do not offer ticket scholarships to the general public.',
      },
      {
        id: 11,
        question:
          'Is the in-person GitHub Universe experience open to international travelers?',
        answer:
          'Universe is open to international travelers who abide by regional travel restrictions and guidelines.',
      },
      {
        id: 12,
        question: 'Can I record content on-site?',
        answer:
          "We'd love that! As long as you are adhering to our Code of Conduct.",
      },
      {
        id: 13,
        question: 'How do I register for GitHub Universe?',
        answer:
          'You can register for the virtual or in-person experience at githubuniverse.com.',
      },
      {
        id: 14,
        question: 'How do I cancel my registration for GitHub Universe?',
        answer:
          'Full refunds will be provided if you cancel your ticket two weeks ahead of the event (by Thursday, October 26). Cancellations after that point will not receive a refund.',
      },
      {
        id: 15,
        question:
          "I have a specific question that I can't find here - how can I get an answer?",
        answer:
          'If you have any questions we haven’t addressed here or have an accessibility question, please email us at events@github.com.',
      },
    ],
  },
];

/*============= FOOTER =============*/
import socmedX from './assets/media/socmed-x.svg';
import socmedGithub from './assets/media/socmed-github-mark.svg';
import socmedLinkedin from './assets/media/socmed-linkedin.svg';
import socmedYoutube from './assets/media/socmed-youtube.svg';
import socmedFacebook from './assets/media/socmed-facebook.svg';
import socmedTwitch from './assets/media/socmed-twitch.svg';
import socmedTiktok from './assets/media/socmed-tiktok.svg';
import socmedInstagram from './assets/media/socmed-instagram.svg';

export const footerSocials = [
  {
    id: 1,
    name: 'X a.k.a Twitter',
    logo: socmedX,
    link: 'https://x.com/github',
  },
  {
    id: 2,
    name: 'GitHub',
    logo: socmedGithub,
    link: 'https://github.com/github',
  },
  {
    id: 3,
    name: 'LinkedIn',
    logo: socmedLinkedin,
    link: 'https://www.linkedin.com/company/github',
  },
  {
    id: 4,
    name: 'YouTube',
    logo: socmedYoutube,
    link: 'https://www.youtube.com/github',
  },
  {
    id: 5,
    name: 'Facebook',
    logo: socmedFacebook,
    link: 'https://www.facebook.com/GitHub',
  },
  {
    id: 6,
    name: 'Twitch',
    logo: socmedTwitch,
    link: 'https://www.twitch.tv/github',
  },
  {
    id: 7,
    name: 'Tiktok',
    logo: socmedTiktok,
    link: 'https://www.tiktok.com/@github',
  },
  {
    id: 8,
    name: 'Instagram',
    logo: socmedInstagram,
    link: 'https://www.instagram.com/github/',
  },
];

export const footerLinks = [
  {
    id: 1,
    name: 'Try GitHub for free',
    link: 'https://github.com/pricing',
  },
  {
    id: 2,
    name: 'Enterprise',
    link: 'https://github.com/enterprise',
  },
  {
    id: 3,
    name: 'Terms',
    link: 'https://docs.github.com/site-policy/github-terms/github-terms-of-service',
  },
  {
    id: 4,
    name: 'Privacy',
    link: 'https://docs.github.com/site-policy/privacy-policies/github-privacy-statement',
  },
  {
    id: 5,
    name: 'Email us',
    link: 'events@github.com',
  },
];
