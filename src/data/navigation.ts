import { FooterLink, Link } from 'types';

export const FooterRoutes: FooterLink[] = [
  {
    id: 1,
    section: 'Product',
    routes: [
      {
        id: 1,
        name: 'Product',
        href: '#'
      },
      {
        id: 2,
        name: 'Overview',
        href: '#'
      },
      {
        id: 3,
        name: 'Features',
        href: '#'
      },
      {
        id: 4,
        name: 'Solutions',
        href: '#'
      },
      {
        id: 5,
        name: 'Tutorials',
        href: '#'
      },
      {
        id: 6,
        name: 'Pricing',
        href: '#'
      },
      {
        id: 7,
        name: 'Releases',
        href: '#'
      }
    ]
  },
  {
    id: 2,
    section: 'Company',
    routes: [
      {
        id: 1,
        name: 'About us',
        href: '#'
      },
      {
        id: 2,
        name: 'Careers',
        href: '#'
      },
      {
        id: 3,
        name: 'Press',
        href: '#'
      },
      {
        id: 4,
        name: 'News',
        href: '#'
      },
      {
        id: 5,
        name: 'Media Kit',
        href: '#'
      },
      {
        id: 6,
        name: 'Contact',
        href: '#'
      }
    ]
  },
  {
    id: 3,
    section: 'Resources',
    routes: [
      {
        id: 1,
        name: 'Blog',
        href: '#'
      },
      {
        id: 2,
        name: 'Newsletter',
        href: '#'
      },
      {
        id: 3,
        name: 'Events',
        href: '#'
      },
      {
        id: 4,
        name: 'Help Center',
        href: '#'
      },
      {
        id: 5,
        name: 'Tutorials',
        href: '#'
      },
      {
        id: 6,
        name: 'Support',
        href: '#'
      }
    ]
  }
];

export const HeaderLinks: Link[] = [
  {
    id: 1,
    name: 'FRONTENDSHIP',
    accessibleName: 'Anasayfa',
    href: '#'
  },
  {
    id: 2,
    name: 'Anasayfa',
    href: '/'
  },
  {
    id: 3,
    name: 'Hakkımızda',
    href: '/about'
  },
  {
    id: 4,
    name: 'Blog',
    href: '/blog'
  }
];
