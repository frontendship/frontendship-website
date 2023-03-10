import { BlogCard, Container, Hero } from '@/components';
import { GetAllPostsMeta } from '@/utils/blog';

export default function BlogPage({ posts }: { posts: any[] }) {
  return (
    <Container>
      <Hero>
        <Hero.Label>Our blog</Hero.Label>
        <Hero.Title size="md">Stories and interviews</Hero.Title>
        <Hero.Subtitle>
          Subscribe to learn about new product features, the latest in
          technology, solutions, and updates.
        </Hero.Subtitle>
      </Hero>

      <section className="grid px-4 md:mx-auto md:max-w-7xl md:grid-cols-3 md:px-8 xl:px-0">
        {posts.map(
          ({ meta: { title, description, cover, author, date, slug } }) => (
            <BlogCard key={title}>
              <BlogCard.Image
                source={{
                  src: cover,
                  alt: title
                }}
              />
              <BlogCard.Title href={`/blog/${slug}`}>{title}</BlogCard.Title>
              <BlogCard.Description>{description}</BlogCard.Description>
              <BlogCard.Information author={author} date={date} />
            </BlogCard>
          )
        )}
      </section>
    </Container>
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
