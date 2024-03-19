import React from 'react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { getPostsAll, getPostDetails } from '../../services';
import { CalendarIcon } from '@heroicons/react/outline';
import moment from 'moment';
import { RichText } from '@graphcms/rich-text-react-renderer';
import { ParsedUrlQuery } from 'querystring';

export interface PostDetailsProps {
  post: {
    title: string;
    excerpt: string;
    slug: string;
    featuredImage: {
      url: string;
    };
    createdAt: string;
    content: {
      raw: any;
    };
  };
}

const PostDetails = ({ post }: PostDetailsProps) => {
  return (
    <div>
      <img
        src={post.featuredImage.url}
        alt={post.title}
        className="w-full object-cover h-64 mb-5"
      />
      <h1 className="text-xl mb-5 font-bold">{post.title} </h1>
      <div className="text-xs mb-5">
        <CalendarIcon className="w-4 inline-block mb-1 mr-2 text-red-800" />
        {moment(post.createdAt).format('DD. MM. YYYY')}
      </div>
      <p className="mb-5">{post.excerpt}</p>
      <RichText
        content={post.content.raw}
        renderers={{
          h1: ({ children }) => (
            <h1 className="text-xl font-bold mb-5">{children}</h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-xl font-bold mb-5">{children}</h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-lg font-bold mb-5">{children}</h3>
          ),
          p: ({ children }) => <p className="mb-5">{children}</p>,
          ul: ({ children }) => (
            <ul className="list-disc ml-10 mb-5">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal ml-10 mb-5">{children}</ol>
          ),
          a: ({ children, href }) => (
            <a
              href={href}
              className="underline text-blue-400 hover:text-red-700"
            >
              {children}
            </a>
          ),
        }}
      />
    </div>
  );
};

export default PostDetails;

interface IParams extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as IParams;
  const data = (await getPostDetails(slug)) || [];

  return {
    props: { post: data },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getPostsAll();
  return {
    paths: posts.map(({ slug }: any) => ({ params: { slug } })),
    fallback: false,
  };
};
