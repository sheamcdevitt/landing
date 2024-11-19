import Link from 'next/link';
import Image from 'next/image';
import { ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className='border-t mt-auto'>
      <div className='container mx-auto px-4 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          <div className='space-y-4'>
            <Link href='/' className='text-2xl font-bold'>
              pick&apos;em
            </Link>
            <div className='text-sm text-muted-foreground'>
              <p>Eresburgstraße 24-29</p>
              <p>12103 Berlin</p>
            </div>
          </div>

          <div className='space-y-4'>
            <h3 className='font-semibold'>Others</h3>
            <ul className='space-y-2'>
              <li>
                <Link href='/about-us' className='text-sm hover:underline'>
                  About Us
                </Link>
              </li>
              <li>
                <Link href='/contact-us' className='text-sm hover:underline'>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href='/creator-hub' className='text-sm hover:underline'>
                  Creator Hub
                </Link>
              </li>
              <li>
                <Link href='/returns' className='text-sm hover:underline'>
                  Issues & Returns (only UK Orders)
                </Link>
              </li>
            </ul>
          </div>

          <div className='space-y-4'>
            <h3 className='font-semibold'>Legal</h3>
            <ul className='space-y-2'>
              <li>
                <Link href='/imprint' className='text-sm hover:underline'>
                  Imprint
                </Link>
              </li>
              <li>
                <Link href='/terms' className='text-sm hover:underline'>
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href='/refund' className='text-sm hover:underline'>
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link href='/privacy' className='text-sm hover:underline'>
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div className='space-y-4'>
            <h3 className='font-semibold'>Socials</h3>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='https://tiktok.com'
                  className='text-sm hover:underline'
                >
                  TikTok
                </Link>
              </li>
              <li>
                <Link
                  href='https://instagram.com'
                  className='text-sm hover:underline'
                >
                  Instagram
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className='mt-12 pt-8 border-t'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
            <div className='flex items-center gap-4'>
              <Select defaultValue='en'>
                <SelectTrigger className='w-[120px]'>
                  <SelectValue placeholder='Language' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='en'>English</SelectItem>
                  <SelectItem value='de'>Deutsch</SelectItem>
                </SelectContent>
              </Select>

              <Select defaultValue='gbp'>
                <SelectTrigger className='w-[180px]'>
                  <SelectValue placeholder='Country' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='gbp'>United Kingdom (GBP £)</SelectItem>
                  <SelectItem value='eur'>European Union (EUR €)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className='flex items-center gap-2'>
              <Image
                src='/placeholder.svg'
                alt='Apple Pay'
                width={32}
                height={20}
              />
              <Image
                src='/placeholder.svg'
                alt='Google Pay'
                width={32}
                height={20}
              />
              <Image
                src='/placeholder.svg'
                alt='Klarna'
                width={32}
                height={20}
              />
              <Image
                src='/placeholder.svg'
                alt='Maestro'
                width={32}
                height={20}
              />
              <Image
                src='/placeholder.svg'
                alt='Mastercard'
                width={32}
                height={20}
              />
              <Image
                src='/placeholder.svg'
                alt='PayPal'
                width={32}
                height={20}
              />
              <Image
                src='/placeholder.svg'
                alt='Shop Pay'
                width={32}
                height={20}
              />
              <Image
                src='/placeholder.svg'
                alt='Union Pay'
                width={32}
                height={20}
              />
              <Image src='/placeholder.svg' alt='Visa' width={32} height={20} />
            </div>
          </div>

          <div className='mt-8 flex flex-col md:flex-row justify-between items-center gap-4'>
            <p className='text-sm text-muted-foreground'>
              © 2024 pickem.store, All rights reserved.
            </p>
            <Button
              variant='outline'
              size='icon'
              className='rounded-full'
              onClick={scrollToTop}
            >
              <ChevronUp className='h-4 w-4' />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
