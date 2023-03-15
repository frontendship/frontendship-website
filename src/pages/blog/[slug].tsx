import { MDXRemote } from 'next-mdx-remote';
import Link from 'next/link';

import {
  GithubLinkIcon,
  LinkedinIcon,
  LinkIcon,
  TwitterIcon
} from '@/assets/icons';
import { AuthorCard, Badge, Container, Hero, IconButton } from '@/components';
import { GetAllSlugs, GetNoteBySlug } from '@/utils/blog';
import React from 'react';

enum BlogIcons {
  Github = 'github',
  Linkedin = 'linkedin',
  Site = 'site',
  Twitter = 'twitter'
}

const Icons : Record<BlogIcons, React.FC> = {
  [BlogIcons.Github]: GithubLinkIcon,
  [BlogIcons.Linkedin]: LinkedinIcon,
  [BlogIcons.Site]: LinkIcon,
  [BlogIcons.Twitter]: TwitterIcon
}

type BlogDetailParams = {
  source: any;
  meta: {
    title: string;
    category: string;
    readTime: string;
    date: string;
    avatar: string;
    author: string;
    authorRole: string;
    content: { slug: string; name: string }[];
    socials: {
      icon: BlogIcons;
      link: string;
    }[]
  }
}

const BlogIcon : React.FC<{icon: BlogIcons}> = ({ icon }) => {
  const Icon = Icons[icon];

  return (<Icon />)
}

export default function BlogDetail({
  source,
  meta: { title, category, readTime, date, avatar, author, authorRole, content, socials }
}: BlogDetailParams) {

  return (
    <div>
      <Container>
        <Hero>
          <Hero.Label>{date}</Hero.Label>
          <Hero.Title>{title}</Hero.Title>
          <Badge variant="blue">
            <Badge.Title>{readTime}</Badge.Title>
            <Badge.Content>{category}</Badge.Content>
          </Badge>
        </Hero>
      </Container>

      <section className="grid lg:grid-cols-7 gap-x-16 max-w-7xl md:px-8 px-4 pb-12 mx-auto">
        <div className="lg:col-span-2 lg:pl-11 lg:order-1 order-2">
          <div className="flex flex-col space-y-9">
            <div className="hidden md:block border-t border-b border-zinc-200 py-9">
              <h4 className="font-semibold text-base text-blue-600">
                Table of contents
              </h4>
              <ul className="mt-4 space-y-3">
                {content.map(
                  ({ slug, name }: { slug: string; name: string }) => (
                    <li
                      key={slug}
                      className="text-base font-semibold text-zinc-500"
                    >
                      <Link href={slug}>{name}</Link>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div className="border-b border-b-zinc-200 pb-9">
              <h4 className="font-semibold text-base text-blue-600 mb-6">
                Contributors
              </h4>
              <AuthorCard>
                <AuthorCard.Avatar
                  source={{
                    src: avatar,
                    alt: author
                  }}
                />
                <AuthorCard.Info>
                  <AuthorCard.Name>{author}</AuthorCard.Name>
                  <AuthorCard.Position>{authorRole}</AuthorCard.Position>
                </AuthorCard.Info>
              </AuthorCard>
            </div>

            <div className="flex flex-row gap-4">
              {socials && socials.map((social, index) => <Link key={index} href={social.link} target="_blank">
              <IconButton variant="bordered" padding="lg" aria-label="link">
                <BlogIcon icon={social.icon} />
              </IconButton>
              </Link>)}
            </div>
          </div>
        </div>
        <div className="lg:col-span-5 lg:order-2 order-1">
          <article className="prose order-1 col-span-1 pb-24 prose-blockquote:border-l-violet-700 prose-pre:bg-gray-50 sm:order-2 xl:col-span-8">
            <MDXRemote {...source} />
          </article>
        </div>
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
