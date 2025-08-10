// src/app/blog/[slug]/page.tsx

import { Button } from '@/components/ui/button';
import { fetchBlog } from '@/lib/fetchBlog';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import parse from 'html-react-parser';
import { BackButton } from '@/components/BackBtn';

interface PageProps {
  params: { slug: string };
}

export default async function BlogPostPage({ params }: PageProps) {
  const post = await fetchBlog(params.slug);
  if (!post) notFound();

  return (
    <div className='max-w-3xl mx-auto px-4 py-12'>
      {/* <Button variant='ghost' onClick={() => window.history.back()} className='w-full'>
        <ArrowLeft className='mr-2 h-4 w-4' />
        Go Back
      </Button> */}
      <BackButton />
      <h1 className='text-4xl font-bold mb-4'>{post.title}</h1>
      <p className='text-sm text-muted-foreground mb-4'>
        Published on {new Date(post.publishedAt).toLocaleDateString()}
      </p>

      {/* Featured Image */}
      <div className='relative w-full h-[400px] sm:h-[350px] md:h-[400px] overflow-hidden rounded-xl mb-6'>
        {post.featuredImage?.url && (
          <Image
            src={post.featuredImage.url}
            alt={post.featuredImage.alternativeText || post.title}
            fill
            priority
            sizes='(max-width: 768px) 100vw, (max-width: 1024px) 768px, 1024px'
            className='object-cover object-center'
          />
        )}
      </div>

      {/* Rich content rendering (very basic example) */}
      <div className='prose dark:prose-invert max-w-none'>
        {post.content.map((block, i) => (
          <p key={i}>{parse(block.children.map(child => child.text).join(' '))}</p>
        ))}
        {/* {parse(post.content.)} */}
      </div>
    </div>
  );
}
