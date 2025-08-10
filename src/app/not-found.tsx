import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Home, ArrowLeft, Search } from 'lucide-react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function NotFound() {
  return (
    <div className='min-h-screen flex flex-col'>
      {/* Your existing header component should be imported here */}

      <main className='flex-1 flex items-center justify-center px-4 py-16'>
        <Card className='w-full max-w-md text-center'>
          <CardContent className='pt-6'>
            <div className='mb-6'>
              <h1 className='text-6xl font-bold text-muted-foreground mb-2'>404</h1>
              <h2 className='text-2xl font-semibold mb-2'>Page Not Found</h2>
              <p className='text-muted-foreground'>Sorry, we couldn't find the page you're looking for.</p>
            </div>

            <div className='space-y-3'>
              <Button asChild className='w-full'>
                <Link href='/'>
                  <Home className='mr-2 h-4 w-4' />
                  Go Home
                </Link>
              </Button>

              <Button variant='outline' asChild className='w-full'>
                <Link href='/blog'>
                  <Search className='mr-2 h-4 w-4' />
                  Browse Blog
                </Link>
              </Button>

              {/* <Button variant='ghost' onClick={() => window.history.back()} className='w-full'>
                <ArrowLeft className='mr-2 h-4 w-4' />
                Go Back
              </Button> */}
            </div>
          </CardContent>
        </Card>
      </main>

      {/* Your existing footer component should be imported here */}
      <Footer />
    </div>
  );
}
