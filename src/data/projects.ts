export interface Project {
  owner: string;
  name: string;
  description: string;
  tags: string[];
  githubUrl: string;
  demoUrl?: string;
  demoLabel?: string;
}

export const eighthWallProjects: Project[] = [
  {
    owner: 'evanmcarlson',
    name: 'balenciaga-pride',
    description: 'An AR-activated t-shirt concept for Balenciaga. When scanned, the shirt reveals a digital animation transforming the Balenciaga logo through the colors of the rainbow.',
    tags: ['Image Target', 'A-Frame'],
    githubUrl: 'https://github.com/evanmcarlson/balenciaga-pride',
    demoUrl: 'https://evanmcarlson.github.io/balenciaga-pride',
  },
  {
    owner: 'evanmcarlson',
    name: 'ctrl',
    description: 'A physical-to-digital intervention provoking awareness around control of attention, identity, and reality. A WebAR layer transforms physical posters, shifting the viewer from passive observer to active participant.',
    tags: ['Image Target', 'Studio'],
    githubUrl: 'https://github.com/evanmcarlson/ctrl',
    demoUrl: 'https://evanmcarlson.github.io/ctrl',
  },
];

export const resources: Project[] = [
  {
    owner: 'evanmcarlson',
    name: 'aframe-sprite-particles-component',
    description: 'A live demo of a forked A-Frame component for sprite-based particle effects — published to make it accessible to developers who need a working example out of the box.',
    tags: ['A-Frame', 'Forked'],
    githubUrl: 'https://github.com/evanmcarlson/aframe-sprite-particles-component',
    demoUrl: '/aframe-sprite-particles-component/',
    demoLabel: 'View Demo →',
  },
];
