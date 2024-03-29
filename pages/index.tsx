import { PostCard } from '../components';
import { getPosts } from '../services';
import Link from 'next/link';
import React from 'react';

const postPerPage = 5;

export interface HomeProps {
  posts: {
    node: {
      title: string;
      excerpt: string;
      slug: string;
      featuredImage: {
        url: string;
      };
      createdAt: string;
    };
  }[];
}

export default function Home({ posts }: HomeProps) {
  return (
    <>
      {posts.map((post, index) => (
        <PostCard post={post.node} key={post.node.title} />
      ))}
      <div className="float-right">
        <Link href="/archiv/2">
          <span className="hover:text-red-700 text-blue-400 cursor-pointer underline mx-5">
            Další články...
          </span>
        </Link>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts(postPerPage, 0)) || [];

  return {
    props: { posts },
  };
}
