import { ParsedUrlQuery } from 'querystring';
import { PostCard } from '../../components';
import { getPosts, getPagesCount } from '../../services';
import Link from 'next/link';
import { GetStaticProps } from 'next';

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
  pagesCount: number;
}

export default function Archiv({ posts, pagesCount }: HomeProps) {
  return (
    <>
      {posts.map((post, index) => (
        <PostCard post={post.node} key={post.node.title} />
      ))}
      Stránka:{' '}
      {[...Array(pagesCount).keys()].map((x) => (
        <Link href={`/archiv/${x + 1}`} key={x}>
          <span className="hover:text-red-700 text-blue-400 cursor-pointer underline mx-5">
            {x + 1}
          </span>
        </Link>
      ))}
    </>
  );
}

export interface IParams extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as IParams;
  const postsOffset = Number(slug) * postPerPage - postPerPage;
  const posts = (await getPosts(postPerPage, postsOffset)) || [];
  const pagesCount = (await getPagesCount(postPerPage)) || [];
  return {
    props: { posts, pagesCount },
  };
};

export async function getStaticPaths() {
  const pagesCount = (await getPagesCount(postPerPage)) || [];
  return {
    paths: [...Array(pagesCount).keys()].map((x) => ({
      params: { slug: '' + (x + 1) },
    })),
    fallback: false,
  };
}
