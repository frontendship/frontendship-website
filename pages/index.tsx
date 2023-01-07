import { GetAllPostsMeta } from '../utils/blog';

export default function Home() {
  return <h1>Hello World!</h1>;
}

export async function getStaticProps() {
  const posts = GetAllPostsMeta();

  return {
    props: {
      posts
    }
  };
}
