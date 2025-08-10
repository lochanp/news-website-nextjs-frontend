'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
// import { useToast } from '@/components/ui/use-toast'

export default function ContactPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  // const { toast } = useToast()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // EmailJS integration
      // First install: npm install @emailjs/browser
      // Then import: import emailjs from '@emailjs/browser'

      // Replace with your EmailJS credentials
      const serviceId = 'YOUR_SERVICE_ID';
      const templateId = 'YOUR_TEMPLATE_ID';
      const publicKey = 'YOUR_PUBLIC_KEY';

      // Uncomment when you have EmailJS set up
      /*
      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'Your Blog Team',
        },
        publicKey
      )
      */

      // Temporary success simulation
      await new Promise(resolve => setTimeout(resolve, 1000));

      // toast({
      //   title: "Message sent successfully!",
      //   description: "We'll get back to you as soon as possible.",
      // })
      console.log('====================================');
      console.log('rfre');
      console.log('====================================');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      // toast({
      //   title: "Error sending message",
      //   description: "Please try again later or contact us directly.",
      //   variant: "destructive",
      // })
      console.log('====================================');
      console.log('erjkvner');
      console.log('====================================');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='min-h-screen'>
      {/* Your existing header component */}
      {/* <Header /> */}

      <main className='container mx-auto px-4 py-16'>
        {/* Hero Section */}
        <div className='text-center mb-16'>
          <h1 className='text-4xl md:text-5xl font-bold mb-6'>Contact Us</h1>
          <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
            Have a question, suggestion, or just want to say hello? We'd love to hear from you.
          </p>
        </div>

        <div className='grid lg:grid-cols-3 gap-8'>
          {/* Contact Information */}
          <div className='lg:col-span-1'>
            <Card>
              <CardHeader>
                <CardTitle>Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className='space-y-6'>
                <div className='flex items-start gap-3'>
                  <Mail className='h-5 w-5 text-primary mt-0.5' />
                  <div>
                    <h3 className='font-medium mb-1'>Email</h3>
                    <p className='text-muted-foreground'>hello@yourblog.com</p>
                  </div>
                </div>

                <div className='flex items-start gap-3'>
                  <Phone className='h-5 w-5 text-primary mt-0.5' />
                  <div>
                    <h3 className='font-medium mb-1'>Phone</h3>
                    <p className='text-muted-foreground'>+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className='flex items-start gap-3'>
                  <MapPin className='h-5 w-5 text-primary mt-0.5' />
                  <div>
                    <h3 className='font-medium mb-1'>Address</h3>
                    <p className='text-muted-foreground'>
                      123 Blog Street
                      <br />
                      Digital City, DC 12345
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className='mt-6'>
              <CardHeader>
                <CardTitle>Response Time</CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-muted-foreground'>
                  We typically respond to all inquiries within 24-48 hours during business days.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className='lg:col-span-2'>
            <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className='space-y-6'>
                  <div className='grid md:grid-cols-2 gap-4'>
                    <div>
                      <Label htmlFor='name'>Name *</Label>
                      <Input
                        id='name'
                        name='name'
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className='mt-1'
                      />
                    </div>
                    <div>
                      <Label htmlFor='email'>Email *</Label>
                      <Input
                        id='email'
                        name='email'
                        type='email'
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className='mt-1'
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor='subject'>Subject *</Label>
                    <Input
                      id='subject'
                      name='subject'
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className='mt-1'
                    />
                  </div>

                  <div>
                    <Label htmlFor='message'>Message *</Label>
                    <Textarea
                      id='message'
                      name='message'
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className='mt-1'
                    />
                  </div>

                  <Button type='submit' disabled={isLoading} className='w-full'>
                    {isLoading ? (
                      <>
                        <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className='mr-2 h-4 w-4' />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Your existing footer component */}
      {/* <Footer /> */}
    </div>
  );
}

// Instructions for EmailJS setup:
// 1. Install EmailJS: npm install @emailjs/browser
// 2. Create an account at https://www.emailjs.com/
// 3. Create an email service (Gmail, Outlook, etc.)
// 4. Create an email template with variables: {{from_name}}, {{from_email}}, {{subject}}, {{message}}
// 5. Get your Service ID, Template ID, and Public Key
// 6. Replace the credentials in the handleSubmit function
// 7. Uncomment the emailjs.send() code
