import {
  Book,
  CheckCircle,
  Flag,
  MessageCircle,
  PlayCircle,
  Smile,
  UserCheck,
  Users,
  Zap
} from 'react-feather';

import { MenuItem, SubMenuCol, TopMenuItem } from './Header.types';

export const menuItems: MenuItem[] = [
  {
    text: 'About us'
  },
  {
    text: 'Press'
  },
  {
    text: 'Careers'
  },
  {
    text: 'Legal'
  },
  {
    text: 'Support'
  },
  {
    text: 'Contact'
  },
  {
    text: 'Sitemap'
  },
  {
    text: 'Cookie settings'
  }
];

export const productSubMenuColumns: SubMenuCol[] = [
  {
    rows: [
      {
        icon: () => <CheckCircle />,
        text: 'Analyze conversion rates and improve your sales.',
        title: 'Convert',
        url: ''
      },
      {
        icon: () => <UserCheck />,
        text: 'Measure active usage and target areas of improvement.',
        title: 'Engage',
        url: ''
      },
      {
        icon: () => <Smile />,
        text: 'Find retention drivers and make your customers smile.',
        title: 'Retain',
        url: ''
      }
    ],
    title: 'Use Cases'
  },
  {
    rows: [
      {
        icon: () => <Book />,
        text: 'The latest industry news, updates and info.',
        title: 'Blog',
        url: ''
      },
      {
        icon: () => <Zap />,
        text: 'Learn how our customers are making big changes.',
        title: 'Customer storeis',
        url: ''
      },
      {
        icon: () => <PlayCircle />,
        text: 'Get up and running on new features and techniques.',
        title: 'Video tutorials',
        url: ''
      }
    ],
    title: 'Resources'
  },
  {
    rows: [
      {
        icon: () => <Flag />,
        text: 'Learn about our story and our mission statement.',
        title: 'About Us',
        url: ''
      },
      {
        icon: () => <MessageCircle />,
        text: 'News and writings, press releases, and press resources.',
        title: 'Press',
        url: ''
      },
      {
        icon: () => <Users />,
        text: 'We’re always looking for talented people. Join our team!',
        title: 'Careers',
        url: ''
      }
    ],
    title: 'Company'
  }
];

export const topMenuItems: TopMenuItem[] = [
  {
    text: 'Home'
  },
  {
    text: 'Resource'
  },
  {
    text: 'Pricing'
  },
  {
    text: 'Products',
    dropdown: {
      key: 'products',
      subMenu: productSubMenuColumns
    }
  }
];
