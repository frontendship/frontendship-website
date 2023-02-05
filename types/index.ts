export interface Quote {
  id: number;
  content: string;
  author: {
    name: string;
    title: string;
    avatar: string;
  };
}

export interface Metric {
  id: number;
  label: string;
  value: string;
}
