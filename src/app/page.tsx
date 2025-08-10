import { BlogCard } from '@/components/BlogCard';
import { FeaturedBlogCard } from '@/components/FeaturedBlogCard';
import { SmallBlogCard } from '@/components/SmallBlogCard';
import NewsletterSignup from '@/components/newsletter-signup';
import { fetchAllBlogs } from '@/lib/fetchBlog';

export default async function BlogListPage() {
  const blogs = await fetchAllBlogs();

  // Separate featured and regular blogs
  const featuredBlog = blogs.find(blog => blog.isFeatured);
  const regularBlogs = blogs.filter(blog => !blog.isFeatured);

  // Example: Simulate ads being available
  const adsAvailable = true;

  return (
    <div className='max-w-screen-xl mx-auto px-4 py-12'>
      {/* Featured Blog - Full Width */}
      {featuredBlog && (
        <div className='mb-12'>
          <FeaturedBlogCard post={featuredBlog} />
        </div>
      )}

      {/* Main Layout with Sidebar */}
      <div className='lg:flex lg:gap-8'>
        {/* Main Content Area */}
        <div className='flex-1'>
          {/* Regular Blogs Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {regularBlogs.map(blog => (
              <BlogCard key={blog.id} post={blog} />
            ))}
          </div>

          <section className='py-16'>
            <NewsletterSignup />
          </section>
        </div>

        {/* Sidebar */}
        <aside className='hidden lg:block w-72 shrink-0'>
          <div className='sticky top-24 space-y-6'>
            <div>
              <h2 className='text-xl font-bold mb-4'>Trending Topics</h2>
              <div className='space-y-2'>
                {regularBlogs.slice(0, 5).map(blog => (
                  <SmallBlogCard key={blog.id} post={blog} />
                ))}
              </div>
            </div>
            {adsAvailable && (
              <>
                {/* You can replace these with real ad components */}
                <div className='bg-gray-100 dark:bg-gray-800 rounded-lg p-4 shadow'>
                  <p className='text-sm text-gray-600 dark:text-gray-400 text-center'>Ad Space 1</p>
                </div>
                <div className='bg-gray-100 dark:bg-gray-800 rounded-lg p-4 shadow'>
                  <p className='text-sm text-gray-600 dark:text-gray-400 text-center'>Ad Space 2</p>
                </div>
                <div className='bg-gray-100 dark:bg-gray-800 rounded-lg p-4 shadow'>
                  <p className='text-sm text-gray-600 dark:text-gray-400 text-center'>Ad Space 3</p>
                </div>
              </>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
}
