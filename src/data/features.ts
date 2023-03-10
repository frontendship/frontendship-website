import {
  BarChart2,
  Command,
  Mail,
  MessageCircle,
  Smile,
  Zap
} from 'react-feather';
import type { Feature } from 'types';

const Features: Feature[] = [
  {
    id: 1,
    title: 'Soru Cevap',
    description:
      'Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.',
    icon: Mail
  },
  {
    id: 2,
    title: 'Gönüllülük',
    description:
      'An all-in-one customer service platform that helps you balance everything your customers need to be happy.',
    icon: Zap
  },
  {
    id: 3,
    title: 'Açık Kaynak',
    description:
      'An all-in-one customer service platform that helps you balance everything your customers need to be happy.',
    icon: BarChart2
  },
  {
    id: 4,
    title: 'Etkileşim',
    description:
      'Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.',
    icon: Smile
  },
  {
    id: 5,
    title: 'Deneyim',
    description:
      'Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.',
    icon: Command
  },
  {
    id: 6,
    title: 'Feedback',
    description:
      'Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.',
    icon: MessageCircle
  }
];

export default Features;
