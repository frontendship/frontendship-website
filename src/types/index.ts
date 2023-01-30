export interface Quote {
  id: number;
  content: string;
  author: {
    name: string;
    title: string;
    avatar: string;
  };
}
