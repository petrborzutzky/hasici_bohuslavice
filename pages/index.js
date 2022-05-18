import { PostCard, FacebookWidget } from "../components"
import { getPosts } from "../services"

export default function Home({ posts }) {
  return (
    <>
      {posts.map((post, index) => <PostCard post={post.node} key={post.node.title} />)}
    </>
  )
}

export async function getStaticProps() {
  const posts = (await getPosts()) || []

  return {
    props: { posts }
  }
}

/*git init
git add .
git commit -m "first comit"
git branch -M main
git remote add origin https://github.com/petrborzutzky/hasici_bohuslavice.git
git push -u origin main*/
