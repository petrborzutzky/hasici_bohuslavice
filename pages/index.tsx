import { DarkModeToggle, PostCard } from '../components';
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
      <div className="flex flex-col">
        <Link href="/tabulka-nocni-2024">
          <div className="hover:text-blue-600 text-blue-400 cursor-pointer underline mb-10 text-lg mx-auto text-center inline-block">
            Tabulka - Noční soutěž - 7. kolo NHHL Bohuslavice
          </div>
        </Link>
        <Link href="/tabulka-memorial-rudolfa-sebestika-2024">
          <div className="hover:text-blue-600 text-blue-400 cursor-pointer underline mb-10 text-lg mx-auto text-center inline-block">
            Tabulka - XXXI. ročník Memoriálu Rudolfa Šebestíka
          </div>
        </Link>
      </div>

      {posts.map((post, index) => (
        <PostCard post={post.node} key={post.node.title} />
      ))}
      <div className="float-right">
        <Link href="/archiv/2">
          <span className="hover:text-blue-500  text-blue-400 cursor-pointer underline mx-5">
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
