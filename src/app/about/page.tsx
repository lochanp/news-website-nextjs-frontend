import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Target, Heart, Lightbulb } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className='min-h-screen'>
      {/* Your existing header component */}
      {/* <Header /> */}

      <main className='container mx-auto px-4 py-16'>
        {/* Hero Section */}
        <div className='text-center mb-16'>
          <h1 className='text-4xl md:text-5xl font-bold mb-6'>About Us</h1>
          <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
            We're passionate about sharing knowledge, insights, and stories that inspire and inform our readers.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className='grid md:grid-cols-2 gap-8 mb-16'>
          <Card>
            <CardHeader>
              <div className='flex items-center gap-2'>
                <Target className='h-6 w-6 text-primary' />
                <CardTitle>Our Mission</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className='text-muted-foreground'>
                To provide high-quality, accessible content that educates, entertains, and empowers our community. We
                believe in the power of knowledge sharing and creating meaningful connections through our writing.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className='flex items-center gap-2'>
                <Lightbulb className='h-6 w-6 text-primary' />
                <CardTitle>Our Vision</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className='text-muted-foreground'>
                To become a trusted source of information and inspiration, fostering a community where ideas flourish
                and readers feel engaged, informed, and motivated to explore new perspectives.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values Section */}
        <div className='mb-16'>
          <h2 className='text-3xl font-bold text-center mb-8'>Our Values</h2>
          <div className='grid md:grid-cols-3 gap-6'>
            <Card className='text-center'>
              <CardContent className='pt-6'>
                <Heart className='h-12 w-12 text-primary mx-auto mb-4' />
                <h3 className='text-xl font-semibold mb-2'>Authenticity</h3>
                <p className='text-muted-foreground'>
                  We write with genuine passion and share honest perspectives that resonate with our readers.
                </p>
              </CardContent>
            </Card>

            <Card className='text-center'>
              <CardContent className='pt-6'>
                <Users className='h-12 w-12 text-primary mx-auto mb-4' />
                <h3 className='text-xl font-semibold mb-2'>Community</h3>
                <p className='text-muted-foreground'>
                  Building connections and fostering meaningful discussions among our readers and contributors.
                </p>
              </CardContent>
            </Card>

            <Card className='text-center'>
              <CardContent className='pt-6'>
                <Lightbulb className='h-12 w-12 text-primary mx-auto mb-4' />
                <h3 className='text-xl font-semibold mb-2'>Innovation</h3>
                <p className='text-muted-foreground'>
                  Embracing new ideas, technologies, and creative approaches to storytelling and content creation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Topics We Cover */}
        <div className='mb-16'>
          <h2 className='text-3xl font-bold text-center mb-8'>What We Write About</h2>
          <div className='flex flex-wrap justify-center gap-3'>
            <Badge variant='secondary' className='text-sm px-3 py-1'>
              Technology
            </Badge>
            <Badge variant='secondary' className='text-sm px-3 py-1'>
              Web Development
            </Badge>
            <Badge variant='secondary' className='text-sm px-3 py-1'>
              Design
            </Badge>
            <Badge variant='secondary' className='text-sm px-3 py-1'>
              Business
            </Badge>
            <Badge variant='secondary' className='text-sm px-3 py-1'>
              Lifestyle
            </Badge>
            <Badge variant='secondary' className='text-sm px-3 py-1'>
              Travel
            </Badge>
            <Badge variant='secondary' className='text-sm px-3 py-1'>
              Education
            </Badge>
            <Badge variant='secondary' className='text-sm px-3 py-1'>
              Health & Wellness
            </Badge>
          </div>
        </div>

        {/* Story Section */}
        <Card>
          <CardHeader>
            <CardTitle className='text-2xl'>Our Story</CardTitle>
          </CardHeader>
          <CardContent className='prose prose-neutral max-w-none'>
            <p className='text-muted-foreground mb-4'>
              Started in 2024, our blog began as a simple idea: to create a space where knowledge meets creativity. What
              started as a personal project has grown into a platform that reaches thousands of readers worldwide.
            </p>
            <p className='text-muted-foreground mb-4'>
              We believe that everyone has a story to tell and knowledge to share. Our platform serves as a bridge
              between writers and readers, creating a community where ideas can flourish and grow.
            </p>
            <p className='text-muted-foreground'>
              Today, we continue to evolve, always staying true to our core mission of providing valuable, authentic
              content that makes a difference in our readers' lives.
            </p>
          </CardContent>
        </Card>
      </main>

      {/* Your existing footer component */}
      {/* <Footer /> */}
    </div>
  );
}
