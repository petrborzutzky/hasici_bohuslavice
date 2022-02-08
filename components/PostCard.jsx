import React from 'react'
import moment from 'moment'
import Link from 'next/link'
import { CalendarIcon} from '@heroicons/react/outline'

const PostCard = ({ post }) => {
  return (
    <Link href={`/clanky/${post.slug}`}>
      <div className='bg-white h-min-full mb-10 shadow-lg cursor-pointer'>
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className='w-full object-cover h-48'
        />
        <h1 className='text-center text-xl pt-4'>{post.title}</h1>
        <p className='p-5 mb-5 text-center'>
          {post.excerpt}
        </p>
        <div className='pb-5 text-center'>
          <CalendarIcon className='w-5 inline-block mb-1 mr-2 text-red-800' />
          {moment(post.createdAt).format('DD. MM. YYYY')}
        </div>
      </div>
    </Link>
  )
}

export default PostCard
