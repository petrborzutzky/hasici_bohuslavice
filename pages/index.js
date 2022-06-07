import { PostCard } from "../components";
import { getPosts } from "../services";
import Link from "next/link";

const postPerPage = 5;

export default function Home({ posts }) {
  return (
    <>
      {posts.map((post, index) => (
        <PostCard post={post.node} key={post.node.title} />
      ))}
      <div className="float-right">
        <Link href="/archiv/1">
          <span className="hover:text-red-700 text-blue-400 cursor-pointer underline mx-5">
            Archív článků
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

/*git init
git add .
git commit -m "first comit"
git branch -M main
git remote add origin https://github.com/petrborzutzky/hasici_bohuslavice.git
git push -u origin main*/
