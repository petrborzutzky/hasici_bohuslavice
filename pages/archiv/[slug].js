import { PostCard } from "../../components";
import { getPosts, getPagesCount } from "../../services";
import Link from "next/link";

const postPerPage = 5;

export default function Home({ posts, pagesCount }) {
  return (
    <>
      {posts.map((post, index) => (
        <PostCard post={post.node} key={post.node.title} />
      ))}
      Stránka:{" "}
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

export async function getStaticProps({ params }) {
  const postsOffset = params.slug * postPerPage - postPerPage;
  const posts = (await getPosts(postPerPage, postsOffset)) || [];
  const pagesCount = (await getPagesCount(postPerPage)) || [];
  return {
    props: { posts, pagesCount },
  };
}

export async function getStaticPaths() {
  const pagesCount = (await getPagesCount(postPerPage)) || [];
  return {
    paths: [...Array(pagesCount).keys()].map((x) => ({
      params: { slug: "" + (x + 1) },
    })),
    fallback: false,
  };
}

{
  /*paths: posts.map(({ node: { slug }}) => ({ params: { slug }}))*/
}
