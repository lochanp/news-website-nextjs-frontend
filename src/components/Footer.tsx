import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='border-t bg-background text-muted-foreground'>
      <div className='max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm'>
        {/* Left - Copyright */}
        <p className='text-center md:text-left'>&copy; {new Date().getFullYear()} News Blog. All rights reserved.</p>

        {/* Right - Navigation Links */}
        <nav className='flex flex-wrap items-center justify-center gap-4'>
          <Link href='/' className='hover:text-foreground transition-colors'>
            Home
          </Link>
          <Link href='/about' className='hover:text-foreground transition-colors'>
            About Us
          </Link>
          <Link href='/contact' className='hover:text-foreground transition-colors'>
            Contact
          </Link>
          <Link href='/privacy-policy' className='hover:text-foreground transition-colors'>
            Privacy Policy
          </Link>
          <Link href='/terms' className='hover:text-foreground transition-colors'>
            Terms
          </Link>
        </nav>
      </div>
    </footer>
  );
}
