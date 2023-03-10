import { MDXRemote } from 'next-mdx-remote';

import { Badge } from '@/components/badge';
import { Hero } from '@/components/hero';
import { GetAllSlugs, GetNoteBySlug } from '@/utils/blog';
export default function BlogDetail({
  source,
  meta: { title, category, readTime, date }
}: any) {
  return (
    <div>
      <Hero>
        <Hero.Label>{date}</Hero.Label>
        <Hero.Title>{title}</Hero.Title>
        <Badge variant="blue">
          <Badge.Title>{readTime}</Badge.Title>
          <Badge.Content>{category}</Badge.Content>
        </Badge>
      </Hero>

      <section className="grid grid-cols-1 gap-24 sm:gap-24 xl:grid-cols-12">
        <div className="order-2 sm:order-1 xl:col-span-4">sadasd</div>
        <article className="prose order-1 col-span-1 pb-24 prose-blockquote:border-l-violet-700 prose-pre:bg-gray-50 sm:order-2 xl:col-span-8">
          <MDXRemote {...source} />
        </article>
      </section>
    </div>
  );
}
export async function getStaticPaths() {
  try {
    const slugs = GetAllSlugs();
    const paths = slugs.map((slug: any) => ({ params: { slug } }));

    return {
      paths,
      fallback: false
    };
  } catch (error) {
    return { notFound: true };
  }
}

export async function getStaticProps(context: { params: { slug: any } }) {
  const {
    params: { slug }
  } = context;

  const { meta, source } = await GetNoteBySlug(slug);

  return {
    props: {
      meta,
      source
    }
  };
}
