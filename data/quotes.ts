export interface Quote {
  id: number;
  content: string;
  author: {
    name: string;
    title: string;
    avatar: string;
  };
}

const Quotes: Quote[] = [
  {
    id: 1,
    content:
      'Untitled has saved us thousands of hours of work and has unlock data insights we never thought possible.',
    author: {
      name: 'Koray Okumuş',
      title: 'UX Designer, Circooles',
      avatar: '/avatars/Avatar.png'
    }
  }
];

export default Quotes;