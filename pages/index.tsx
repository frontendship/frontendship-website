import FaqSection from '@/components/FaqSection/FaqSection';

import { GetAllPostsMeta } from '../utils/blog';

export default function Home() {
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <FaqSection />
    </div>
  );
}

export async function getStaticProps() {
  const posts = GetAllPostsMeta();

  return {
    props: {
      posts
    }
  };
}
