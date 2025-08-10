'use client';

import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Menu, Moon, Sun, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Sample categories data
  const categories = [
    'Technology',
    'Health',
    'Business',
    'Science',
    'Sports',
    'Entertainment',
    'Politics',
    'Travel',
    'Food',
    'Fashion',
    'Education',
    'Environment',
    'Finance',
    'Lifestyle',
    'Art',
    'Music',
    'Gaming',
    'Automotive',
    'Real Estate',
    'Photography'
  ];

  return (
    <header className='border-b bg-background sticky top-0 z-50'>
      <div className='max-w-7xl mx-auto flex items-center justify-between px-4 py-4'>
        {/* Logo */}
        <Link href='/' className='text-xl font-bold tracking-tight'>
          News Blog
        </Link>

        {/* Desktop Navigation */}
        <nav className='hidden md:flex items-center gap-6 text-sm'>
          <Link href='/' className='text-muted-foreground hover:text-foreground transition-colors'>
            Home
          </Link>
          <Link href='/about' className='text-muted-foreground hover:text-foreground transition-colors'>
            About Us
          </Link>
          <Link href='/contact' className='text-muted-foreground hover:text-foreground transition-colors'>
            Contact Us
          </Link>

          {/* Categories Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className='flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors focus:outline-none'>
              Categories
              <ChevronDown className='h-4 w-4' />
            </DropdownMenuTrigger>
            <DropdownMenuContent align='center' className='w-48 max-h-80 overflow-y-auto'>
              {categories.map(category => (
                <DropdownMenuItem key={category} asChild>
                  <Link href={`/category/${category.toLowerCase()}`} className='w-full cursor-pointer'>
                    {category}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        {/* Theme toggle and mobile menu */}
        <div className='flex items-center gap-2 md:gap-4'>
          {/* Theme Toggle */}
          <Button
            variant='ghost'
            size='icon'
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label='Toggle Theme'
          >
            {theme === 'dark' ? <Sun className='h-5 w-5' /> : <Moon className='h-5 w-5' />}
          </Button>

          {/* Mobile Menu Trigger */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant='ghost' size='icon' className='md:hidden'>
                <Menu className='h-5 w-5' />
              </Button>
            </SheetTrigger>

            <SheetContent side='right' className='w-64 sm:w-80'>
              <SheetHeader>
                <span className='text-lg font-semibold'>Menu</span>
              </SheetHeader>
              <div className='mt-4 flex flex-col gap-4 text-sm'>
                <Link href='/' className='hover:underline'>
                  Home
                </Link>
                <Link href='/about' className='hover:underline'>
                  About Us
                </Link>
                <Link href='/contact' className='hover:underline'>
                  Contact Us
                </Link>

                {/* Categories in Mobile Menu */}
                <div className='border-t pt-4'>
                  <span className='font-medium text-foreground mb-2 block'>Categories</span>
                  <div className='max-h-40 overflow-y-auto space-y-2 pl-2'>
                    {categories.map(category => (
                      <Link
                        key={category}
                        href={`/category/${category.toLowerCase()}`}
                        className='block hover:underline text-muted-foreground hover:text-foreground'
                      >
                        {category}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
