import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from '../types';

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  flutter1,
  crm,
  threejs,
  kinsuki,
  sealand,
  photoscan,
  kinsuki1,
  photoscan1,
  sealand1,
} from '../assets';

export const navLinks: TNavLink[] = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services: TService[] = [
  {
    title: 'Web Development',
    icon: web,
  },
  {
    title: 'App Development',
    icon: mobile,
  },
  {
    title: 'Web Designing',
    icon: backend,
  },
  {
    title: 'Digital Marcketing',
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'flutter',
    icon: flutter1,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
];

const experiences: TExperience[] = [
  {
    title: 'SeaLand Car Services Website',
    companyName: 'SeaLand',
    icon: sealand, // Replace with appropriate icon
    iconBg: '#000000',
    date: 'September 2024',
    points: [
      'Designed and developed a user-friendly website for SeaLand, a car services shop, to enhance its online presence.',
      'Created a service booking system allowing customers to schedule appointments for car services seamlessly.',
      'Integrated a dynamic pricing model based on service types and vehicle conditions, ensuring transparent pricing for customers.',
      'Optimized the website for mobile devices, offering customers easy access to services from their smartphones.',
      'Collaborated closely with SeaLand’s team to ensure the website accurately represented their services and brand values.',
    ],
  },
  {
    title: 'Custom CRM Development',
    companyName: 'Kode & Klick',
    icon: crm, // Replace with appropriate icon
    iconBg: '#172554',
    date: 'October 2024',
    points: [
      "Designed and developed a custom CRM solution tailored to the client's business workflow.",
      'Implemented role-based access control and automated reporting features.',
      'Collaborated with the client to ensure the CRM met specific business requirements and integrated with existing tools.',
      'Trained client teams to maximize the use of the CRM system and ensured its scalability.',
    ],
  },
  {
    title: 'Kinsuki Cafe Website',
    companyName: 'Kinsuki',
    icon: kinsuki, // Replace with appropriate icon
    iconBg: '#23346c',
    date: 'October 2024', 
    points: [
      'Developed an efficient billing software to streamline transactions and enhance operational efficiency at Kinsuki Cafe.',
      'Customized the interface to align with Kinsuki Cafe’s brand identity, ensuring ease of use for staff and consistency in customer interactions.',
      'Integrated multi-payment support, allowing seamless processing of cash, card, and digital wallet payments.',
      'Designed real-time sales reporting and analytics to provide actionable insights for better decision-making.',
    ],
  },
  {
    title: 'Company Portfolio',
    companyName: 'Kode & Klick',
    icon: crm, // Replace with appropriate icon
    iconBg: '#172554',
    date: 'October 2024',
    points: [
      'Designed and developed a comprehensive company portfolio to showcase Kode & Klick’s services and expertise.',
      'Created a visually engaging and responsive design to highlight the company’s diverse project offerings.',
      'Implemented seamless navigation and dynamic content to effectively present each project and case study.',
      'Integrated performance optimization techniques to ensure smooth user experience and fast load times across all devices.',
      'Collaborated with the content team to deliver clear and concise messaging, enhancing the company’s online presence.',
    ],
  },
  {
    title: 'E-commerce Website',
    companyName: 'Photoscan',
    icon: photoscan, // Replace with appropriate icon
    iconBg: '#383E56',
    date: 'October 2024 - November 2024',
    points: [
      'Designed and developed a fully responsive e-commerce web application using React.js and Node.js.',
      'Integrated payment gateways and enhanced user authentication and authorization systems.',
      'Collaborated in-house to create a seamless and intuitive user interface, ensuring a smooth user experience.',
      'Optimized performance and implemented scalable solutions to handle growing user traffic.',
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      'We are thrilled with the income and expense tracker software offered by Zeecode Solutions. It is easy to use, reliable, and simplifies finances. The team was professional, attentive, and delivered perfectly. Highly recommend!',
    name: 'Haris',
    designation: 'Owner',
    company: 'Sealand Carcare',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      'Working with Zeecode Solutions has been an absolute pleasure. Their bill and expense tracker streamlined our processes, saved time, improved accuracy, and resolved major issues. We highly recommend their professional and efficient services!',
    name: 'Jabir',
    designation: 'Co - Owner',
    company: 'Kinsuki Cafe',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      'Choosing Zeecode Solutions to craft our company portfolio was the best decision. They did a wonderful job in showcasing our brand, exceeded expectations, and delivered a stunning result; they have been invaluable for attracting clients!',
    name: 'Liron Sajesh',
    designation: 'CEO',
    company: 'Kode and Klick',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
  {
    testimonial:
      'We are really happy with the e-commerce site Zeecode Solutions built for our shop. The custom features of a product fit our needs perfectly, and the navigation is so easy that everyone loves it. ',
      // Our sales have improved dramatically!
    name: 'Santhosh',
    designation: 'Co - Owner',
    company: 'Photoscan',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects: TProject[] = [
  {
    name: 'Custom CRM Development',
    description:
      "Developed a custom CRM solution tailored to a client's business workflow, enhancing their operational efficiency and data management.",
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'nodejs',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: crm, // Replace with actual image for Custom CRM Development
    sourceCodeLink: 'https://github.com/your-repo/custom-crm-development', // Replace with actual GitHub link
  },

  {
    name: 'Kinsuki Cafe Website',
    description:
      'Developed a visually appealing and functional website for Kinsuki Cafe, featuring an interactive menu, online reservations, and customer engagement tools.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'nodejs',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: kinsuki1, // Replace with actual image for Kinsuki Cafe Website
    sourceCodeLink: 'https://github.com/your-repo/kinsuki-cafe-website', // Replace with actual GitHub link
  },

  {
    name: 'E-commerce Website',
    description:
      'Designed and developed a fully responsive e-commerce website with integrated payment gateways, secure user authentication, and optimized for performance to handle growing traffic.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'nodejs',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: photoscan1, // Replace with actual image for E-commerce Website
    sourceCodeLink: 'https://github.com/your-repo/e-commerce-website', // Replace with actual GitHub link
  },

  {
    name: 'Company Portfolio',
    description:
      'Created a comprehensive portfolio website to showcase the services and expertise of Kode & Klick, with a focus on performance, responsive design, and clear messaging.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'nodejs',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: crm, // Replace with actual image for Company Portfolio
    sourceCodeLink: 'https://github.com/your-repo/company-portfolio', // Replace with actual GitHub link
  },
  {
    name: 'SeaLand Car Services Website',
    description:
      'A user-friendly website designed for SeaLand, a car services shop, to enhance its online presence and streamline the booking process for customers.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'nodejs',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: sealand1, // Replace with actual image for SeaLand
    sourceCodeLink: 'https://github.com/your-repo/sealand-car-services', // Replace with actual GitHub link
  },
];

export { services, technologies, experiences, testimonials, projects };
