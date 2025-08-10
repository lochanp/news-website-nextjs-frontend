'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Calendar } from 'lucide-react';
import { BlogPostProps } from '@/lib/types';

export function FeaturedBlogCard({ post }: { post: BlogPostProps }) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <div className='relative w-full h-[500px] md:h-[600px] rounded-2xl overflow-hidden group cursor-pointer mb-8'>
        {/* Background Image */}
        {post.thumbnail && (
          <Image
            src={post.thumbnail.url}
            alt={post.title}
            fill
            className='object-cover group-hover:scale-105 transition-transform duration-700'
            priority
          />
        )}

        {/* Dark Overlay */}
        <div className='absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300' />

        {/* Content Overlay */}
        <div className='absolute inset-0 flex flex-col justify-end p-6 md:p-8 lg:p-12'>
          {/* Category Badge */}
          {post.category && (
            <div className='mb-4'>
              <span className='inline-block bg-gray-800 text-white px-4 py-2 rounded-full text-sm font-medium uppercase tracking-wide'>
                {post.category}
              </span>
            </div>
          )}

          {/* Title */}
          <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight max-w-4xl'>
            {post.title}
          </h1>

          {/* Summary */}
          <p className='text-lg md:text-xl text-gray-200 mb-6 leading-relaxed max-w-3xl'>
            {post.summary && post.summary.length > 300 ? `${post.summary.substring(0, 300)}...` : post.summary}
          </p>

          {/* Author and Date */}
          <div className='flex items-center gap-4 text-white'>
            {/* Author Avatar and Name */}
            {post.author && (
              <div className='flex items-center gap-3'>
                <div className='w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center text-white font-semibold text-sm'>
                  {post.author
                    .split(' ')
                    .map(name => name[0])
                    .join('')
                    .toUpperCase()}
                </div>
                <div>
                  <span className='text-sm font-medium'>BY {post.author.toUpperCase()}</span>
                </div>
              </div>
            )}

            {/* Date */}
            {post.publishedAt && (
              <div className='flex items-center gap-2 text-sm'>
                <Calendar className='w-4 h-4' />
                <span>
                  {new Date(post.publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Hover Effect Indicator */}
        <div className='absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
          <div className='w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center'>
            <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
