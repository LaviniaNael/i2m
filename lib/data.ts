
export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  summary: string;
  content: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  details?: string[];
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Smart Home Premium Package (150m²)',
    price: 1200, // Placeholder price
    image: '/hero-abstract.png',
    description: 'Complete automation for properties up to 150m². Includes dual relays, motion sensors, and IR blasters.',
  },
  {
    id: '2',
    name: 'Smart Home Premium Package (200m²)',
    price: 1800, // Placeholder price
    image: '/service-strategy.png',
    description: 'Upgraded automation suite for properties up to 200m² with enhanced lighting and energy monitoring.',
  },
  {
    id: '3',
    name: 'Smart Home Premium Package (300m²)',
    price: 2500, // Placeholder price
    image: '/service-launch.png',
    description: 'The ultimate luxury automation package for large villas and properties up to 300m².',
  },
  {
    id: '4',
    name: 'Smart Energy Meter (Raycon)',
    price: 250, // Placeholder price
    image: '/hero-city.png',
    description: 'AI-powered energy monitoring to reduce waste and optimize consumption in real-time.',
  },
];

export const news: NewsItem[] = [
  {
    id: '1',
    title: 'i2M Tech at GITEX Africa 2025',
    date: '2025-05-10',
    summary: 'Official participation announcement for the major tech event in Marrakech, Africa.',
    content: 'i2M is proud to announce its participation at GITEX Africa 2025, the continent\'s largest tech and start-up event. We will be showcasing our latest innovations in Smart Solutions, Energy Conservation, and AI-driven Security.',
  },
  {
    id: '2',
    title: 'Strategic Partnership with ProHawk Vision',
    date: '2024-11-20',
    summary: 'Enhancing security offerings in the MEA region with AI-driven intelligence.',
    content: 'i2M has partnered with ProHawk Vision to bring AI-powered real-time video enhancement to the MEA region. This partnership transforms standard camera feeds into actionable intelligence for critical infrastructure.',
  },
  {
    id: '3',
    title: '2024: The Year of Transformation',
    date: '2024-12-31',
    summary: 'Reflections on service expansion and growth in sustainable innovation.',
    content: '2024 marked a pivotal year for i2M, as we expanded our portfolio into Water Conservation and advanced Cybersecurity for Smart Cities. We have helped dozens of businesses reduce their carbon footprint.',
  },
];

export const services: Service[] = [
  {
    id: '1',
    title: 'Smart Solutions',
    description: 'Energy and water conservation through advanced Commercial and Residential Automation.',
    icon: 'Zap',
    details: [
      'Building Management Systems (BMS)',
      'Factory Automation',
      'Residential Smart Home Systems',
      'Resource Waste Reduction'
    ]
  },
  {
    id: '2',
    title: 'Security & Cybersecurity',
    description: 'Protecting critical infrastructure with AI-driven intelligence and secure hardware.',
    icon: 'Shield',
    details: [
      'Critical System Protection',
      'AI Video Intelligence (ProHawk.AI)',
      'Secure Access Control (Belkin KVM)',
      'Certified Infrastructure Isolation'
    ]
  },
  {
    id: '3',
    title: 'Consulting Services',
    description: 'Strategic market entries and business development for the MENA region.',
    icon: 'Globe',
    details: [
      'Market Entry Strategy',
      'Sales Pipeline Development',
      'Cost-Effective In-Country Representation',
      'Strategic Networking & Leads'
    ]
  },
];
