import Header from '../components/Header/Header';
import { GetAllPostsMeta } from '../utils/blog';

export default function Home() {
  return (
    <div>
      <Header />
    </div>
  );
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
