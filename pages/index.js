import Head from 'next/head'
import { PostCard, FacebookWidget } from '../components'
import { getPosts } from '../services'
import Flickity from "react-flickity-component";

export default function Home({ posts }) {
  return (
    <div className='container max-w-7xl mx-auto px-10 mb-8'>
      <Head>
        <title>Hasiči Bohuslavice</title>
        <link rel='icon' href='/logo.png' />
      </Head>


      <div className='grid grid-cols-1 min-h-screen md:grid-cols-2 xl:grid-cols-12 gap-8'>
        <div className='md:col-span-1 xl:col-span-8 col-span-1'>
          {posts.map((post, index) => <PostCard post={post.node} key={post.node.title} />)}
        </div>
        <div className='place-self-center md:place-self-auto xl:col-span-4 w-96 col-span-1'>
            <FacebookWidget />
        </div>
      </div>    
    </div>
  )
}

export async function getStaticProps() {
  const posts = (await getPosts()) || []

  return {
    props: { posts }
  }
}
