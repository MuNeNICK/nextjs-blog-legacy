import fs from 'fs';
import matter from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import Image from 'next/image';
import { NextSeo } from 'next-seo';
import remarkToc from 'remark-toc';
import rehypeSlug from 'rehype-slug';
import remarkPrism from 'remark-prism';
import { createElement, Fragment } from 'react';
import rehypeParse from 'rehype-parse';
import rehypeReact from 'rehype-react';
import Link from 'next/link';
import remarkUnwrapImages from 'remark-unwrap-images'


export async function getStaticProps({ params }) {
  const file = fs.readFileSync(`posts/${params.slug}.md`, 'utf-8');
  const { data, content } = matter(file);

  const result = await unified()
    .use(remarkParse)
    .use(remarkPrism, {
      plugins: ['line-numbers'],
    })
    .use(remarkToc, {
      heading: '目次',
      tight: true,
    })
    .use(remarkUnwrapImages)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeSlug)
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(content);

  return {
    props: { frontMatter: data, content: result.toString(), slug: params.slug },
  };
}

export async function getStaticPaths() {
  const files = fs.readdirSync('posts');
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(/\.md$/, ''),
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

const MyImage = ({ src, alt }) => {
  return (
    <div className="relative max-w-full h-96">
      <Image src={src} alt={alt} layout="fill" objectFit="contain" />
    </div>
  );
};

const MyLink = ({ children, href }) => {
  return (
    <Link href={href}>
      <a>{children}</a>
    </Link>
  );
};

const toReactNode = (content) => {
  return unified()
    .use(rehypeParse, {
      fragment: true,
    })
    .use(rehypeReact, {
      createElement,
      Fragment,
      components: {
        a: MyLink,
        img: MyImage,
      },
    })
    .processSync(content).result;
};

const Post = ({ frontMatter, content, slug }) => {
  return (
    <>
      <NextSeo
        title={frontMatter.title}
        description={frontMatter.description}
        openGraph={{
          type: 'website',
          url: `https://blog.munenick.me/posts/${slug}`,
          title: frontMatter.title,
          description: frontMatter.description,
          images: [
            {
              url: `https://blog.munenick.me/${frontMatter.image}`,
              width: 1200,
              height: 700,
              alt: frontMatter.title,
            },
          ],
        }}
      />
    <div className="prose prose-lg max-w-none">
      <div className="border">
        <Image src={`/${frontMatter.image}`} width={1200} height={700} alt={frontMatter.title} />
      </div>
      <h1 className="mt-12">{frontMatter.title}</h1>
      <span>{frontMatter.date}</span>
      {toReactNode(content)}
    </div>
    </>
  );
};

export default Post;