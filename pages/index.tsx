import { GetAllPostsMeta } from '../utils/blog';

export default function Home() {
  return <h1>Hello World!</h1>;
}

export async function getStaticProps() {
  const posts = GetAllPostsMeta();

  console.log(posts);
  return {
    props: {
      posts
    }
  };
}
