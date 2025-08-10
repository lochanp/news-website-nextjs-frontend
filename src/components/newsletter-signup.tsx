'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, Send, Loader2, Check } from 'lucide-react';
// import { useToast } from '@/components/ui/use-toast'

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  // const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);

    try {
      // Here you can integrate with your email service provider
      // Examples: Mailchimp, ConvertKit, EmailJS, or your own backend

      // For EmailJS (if you want to collect emails via email)
      /*
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_NEWSLETTER_TEMPLATE_ID',
        {
          subscriber_email: email,
          to_name: 'Your Blog Team',
        },
        'YOUR_PUBLIC_KEY'
      )
      */

      // For a custom API endpoint
      /*
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })
      
      if (!response.ok) throw new Error('Failed to subscribe')
      */

      // Temporary success simulation
      await new Promise(resolve => setTimeout(resolve, 1000));

      setIsSubscribed(true);
      // toast({
      //   title: "Successfully subscribed!",
      //   description: "Thank you for joining our newsletter.",
      // })
      console.log('====================================');
      console.log('Done');
      console.log('====================================');

      setEmail('');
    } catch (error) {
      // toast({
      //   title: "Subscription failed",
      //   description: "Please try again later.",
      //   variant: "destructive",
      // })
      console.log('Done');
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubscribed) {
    return (
      <Card className='bg-primary/5 border-primary/20'>
        <CardContent className='p-8 text-center'>
          <div className='inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4'>
            <Check className='h-8 w-8 text-primary' />
          </div>
          <h3 className='text-xl font-semibold mb-2'>Welcome to our newsletter!</h3>
          <p className='text-muted-foreground'>
            You'll receive our latest updates and exclusive content straight to your inbox.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className='bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20'>
      <CardContent className='p-8'>
        <div className='text-center mb-6'>
          <div className='inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4'>
            <Mail className='h-8 w-8 text-primary' />
          </div>
          <h3 className='text-2xl font-bold mb-2'>Join Our Newsletter</h3>
          <p className='text-muted-foreground'>
            Get the latest posts, updates, and exclusive content delivered straight to your inbox.
          </p>
        </div>

        <form onSubmit={handleSubmit} className='space-y-4'>
          <div className='flex flex-col sm:flex-row gap-3'>
            <Input
              type='email'
              placeholder='Enter your email address'
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              className='flex-1'
              disabled={isLoading}
            />
            <Button type='submit' disabled={isLoading || !email} className='sm:w-auto'>
              {isLoading ? (
                <>
                  <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                  Subscribing...
                </>
              ) : (
                <>
                  <Send className='mr-2 h-4 w-4' />
                  Subscribe
                </>
              )}
            </Button>
          </div>

          <p className='text-xs text-muted-foreground text-center'>We respect your privacy. Unsubscribe at any time.</p>
        </form>

        {/* Features list */}
        <div className='mt-6 grid sm:grid-cols-3 gap-4 text-sm'>
          <div className='text-center'>
            <div className='font-medium mb-1'>Weekly Updates</div>
            <div className='text-muted-foreground'>Fresh content every week</div>
          </div>
          <div className='text-center'>
            <div className='font-medium mb-1'>Exclusive Content</div>
            <div className='text-muted-foreground'>Subscriber-only articles</div>
          </div>
          <div className='text-center'>
            <div className='font-medium mb-1'>No Spam</div>
            <div className='text-muted-foreground'>Quality over quantity</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// Alternative version for homepage hero section
export function NewsletterHero() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  // const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);

    try {
      // Same integration logic as above
      await new Promise(resolve => setTimeout(resolve, 1000));

      // toast({
      //   title: 'Successfully subscribed!',
      //   description: 'Check your email to confirm your subscription.'
      // });

      setEmail('');
    } catch (error) {
      // toast({
      //   title: 'Subscription failed',
      //   description: 'Please try again later.',
      //   variant: 'destructive'
      // });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='bg-primary/5 py-16'>
      <div className='container mx-auto px-4 text-center'>
        <h2 className='text-3xl font-bold mb-4'>Stay Updated</h2>
        <p className='text-muted-foreground mb-8 max-w-2xl mx-auto'>
          Subscribe to our newsletter and never miss our latest articles, tips, and insights.
        </p>

        <form onSubmit={handleSubmit} className='max-w-md mx-auto'>
          <div className='flex gap-2'>
            <Input
              type='email'
              placeholder='Your email address'
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              className='flex-1'
              disabled={isLoading}
            />
            <Button type='submit' disabled={isLoading || !email}>
              {isLoading ? <Loader2 className='h-4 w-4 animate-spin' /> : 'Subscribe'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
