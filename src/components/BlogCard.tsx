'use client';

import Link from 'next/link';
import Image from 'next/image';
import { BlogPostProps } from '@/lib/types';

export function BlogCard({ post }: { post: BlogPostProps }) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <div className='group bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden h-[430px] flex flex-col border border-gray-100 dark:border-gray-700 hover:border-gray-200 dark:hover:border-gray-600'>
        {/* Thumbnail Image with Category Overlay */}
        {post.thumbnail && (
          <div className='relative w-full h-56 flex-shrink-0 overflow-hidden'>
            <Image
              src={post.thumbnail.url}
              alt={post.title}
              fill
              className='object-cover group-hover:scale-105 transition-transform duration-300'
            />
            {/* Category Badge */}
            {post.category && (
              <div className='absolute top-4 left-4 bg-gray-800 hover:bg-gray-500 text-white px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wide shadow-lg backdrop-blur-sm'>
                {post.category}
              </div>
            )}
          </div>
        )}

        {/* Content Section */}
        <div className='flex flex-col flex-grow p-4'>
          <h3 className='text-lg font-bold text-gray-900 dark:text-gray-100 mb-3 line-clamp-2 leading-tight group-hover:text-orange-600 dark:group-hover:text-orange-100 transition-colors duration-200'>
            {post.title}
          </h3>

          <p className='text-gray-600 dark:text-gray-300 text-xs leading-relaxed flex-grow line-clamp-4'>
            {post.summary && post.summary.length > 100 ? `${post.summary.substring(0, 100)}...` : post.summary}
          </p>

          {/* Author and Date Section */}
          {post.publishedAt && (
            <div className='flex items-center gap-1 justify-between mt-3 pt-3 border-t border-gray-100 dark:border-gray-700'>
              {/* Author Avatar and Name */}
              <div className='flex items-center'>
                <div className='w-6 h-6 bg-green-900 rounded-full flex items-center justify-center text-white text-xs font-semibold mr-3'>
                  JB
                </div>
                <span className='text-xs font-medium text-gray-700 dark:text-gray-300'>Jesse Bond</span>
              </div>

              {/* Date */}
              <div className='flex items-center text-gray-500 dark:text-gray-400 text-xs'>
                <svg className='w-4 h-4 mr-1.5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={1.5}
                    d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2v12a2 2 0 002 2z'
                  />
                </svg>
                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric'
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
