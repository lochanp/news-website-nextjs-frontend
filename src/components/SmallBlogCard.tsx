'use client';

import Link from 'next/link';
import Image from 'next/image';
import { BlogPostProps } from '@/lib/types';

export function SmallBlogCard({ post }: { post: BlogPostProps }) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <div className='flex items-start gap-4 p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-lg transition-colors group'>
        {/* Thumbnail Image */}
        {post.thumbnail && (
          <div className='relative w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden'>
            <Image
              src={post.thumbnail.url}
              alt={post.title}
              fill
              className='object-cover group-hover:scale-105 transition-transform duration-200'
            />
          </div>
        )}

        {/* Content */}
        <div className='flex-1 min-w-0'>
          <h3 className='font-semibold text-gray-900 dark:text-gray-100 line-clamp-2 leading-tight transition-colors'>
            {post.title}
          </h3>

          <div className='flex items-center gap-2 mt-2 text-sm text-gray-600 dark:text-gray-400'>
            {/* {post.Author && (
              <span>{post.Author}</span>
            )} */}
            {/* {post.author && post.publishedAt && (
              <span>•</span>
            )} */}
            {post.publishedAt && (
              <span>
                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
