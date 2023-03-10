import { Icon } from 'react-feather';
export interface Quote {
  id: number;
  content: string;
  author: {
    name: string;
    title: string;
    avatar: string;
  };
}

export interface Feature {
  id: number;
  title: string;
  icon: Icon;
  description: string;
}

export interface Technology {
  id: number;
  name: string;

  icon: Icon;
}
export interface Faq {
  id: number;
  title: string;
  description: string;
}
export interface FooterLink {
  id: number;
  section?: string;
  routes?: {
    id: number;
    name: string;
    href: string;
  }[];
}

export interface Link {
  id: number;
  name?: string;
  href: string;
  accessibleName?: string;
}
