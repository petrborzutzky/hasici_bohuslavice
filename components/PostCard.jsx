import React from 'react'
import moment from 'moment'
import Link from 'next/link'
import { CalendarIcon} from '@heroicons/react/outline'

const PostCard = ({ post }) => {
  return (
    <div className='bg-white shadow-lg mt-10'>
      <div className='h-min-full'>
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className='w-full object-cover h-48'
        />
        <h1 className='text-center text-xl pt-4'>{post.title}</h1>
        <p className='p-5 text-center'>
          {post.excerpt}
        </p>
        <div className='text-center p-10'>
          <Link href={`/clanek/${post.slug}`}>
            <span className='cursor-pointer inline-block px-5 py-3 shadow-lg bg-red-800 opacity-80 text-white transition duration-500 transform hover:-translate-y-1'>
              Přečíst článek
            </span>
          </Link>
        </div>
          
        <div className='pl-5 pb-2 opacity-60'>
          <CalendarIcon className='w-5 inline-block mb-1 mr-2 text-red-800' />
          {moment(post.createdAt).format('DD. MM. YYYY')}
        </div>
      </div>
      
    </div>
  )
}

export default PostCard
