'use client';

import Link from 'next/link';
import {
  ChevronLeft,
  ChevronRight,
  Search,
  ShoppingCart,
  User,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Footer } from './components/footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [bannerIndex, setBannerIndex] = useState(0);
  const banners = [
    'Over 500,000 people love our flavored toothpicks',
    'Free shipping on orders over $50',
    'New flavors dropping every month',
  ];

  return (
    <div className='min-h-screen bg-white'>
      {/* Top Banner */}
      <div className='bg-background py-2 flex items-center justify-center relative'>
        <button
          onClick={() =>
            setBannerIndex((i) => (i - 1 + banners.length) % banners.length)
          }
          className='absolute left-4'
          aria-label='Previous banner'
        >
          <ChevronLeft className='h-4 w-4' />
        </button>
        <span className='text-sm text-center flex items-center gap-2'>
          <User className='h-4 w-4' />
          {banners[bannerIndex]}
        </span>
        <button
          onClick={() => setBannerIndex((i) => (i + 1) % banners.length)}
          className='absolute right-4'
          aria-label='Next banner'
        >
          <ChevronRight className='h-4 w-4' />
        </button>
      </div>

      {/* Navigation */}
      <header className='sticky top-0 z-50 bg-white border-b'>
        <div className='container mx-auto px-4 py-4 flex items-center justify-between'>
          <Link href='/gottem' className='text-2xl font-bold'>
            pick&apos;em
          </Link>

          <nav className='hidden md:flex items-center space-x-8'>
            <Link href='/gottem' className='text-sm font-medium'>
              Home
            </Link>
            <Link href='/gottem/products' className='text-sm font-medium'>
              Products
            </Link>
            <Link href='/gottem/contact' className='text-sm font-medium'>
              Contact
            </Link>
            <Link href='/gottem/creator-hub' className='text-sm font-medium'>
              Creator Hub
            </Link>
          </nav>

          <div className='flex items-center space-x-4'>
            <Button variant='ghost' size='icon'>
              <Search className='h-5 w-5' />
            </Button>
            <Button variant='ghost' size='icon'>
              <User className='h-5 w-5' />
            </Button>
            <Button variant='ghost' size='icon' className='relative'>
              <ShoppingCart className='h-5 w-5' />
              <span className='absolute -top-1 -right-1 bg-primary text-primary-foreground w-4 h-4 rounded-full text-xs flex items-center justify-center'>
                0
              </span>
            </Button>
          </div>
        </div>
      </header>

      <main>{children}</main>
      <Footer />
    </div>
  );
}
