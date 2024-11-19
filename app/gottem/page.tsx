import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className='relative overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-r from-purple-100 to-pink-100' />
        <div className='relative container mx-auto px-4 py-24'>
          <div className='max-w-3xl mx-auto text-center space-y-8'>
            <div className='space-y-2'>
              <p className='text-lg'>pick&apos;em Toothpicks</p>
              <h1 className='text-4xl md:text-6xl font-bold'>
                pick&apos;em x Tom Aspinall
              </h1>
            </div>
            <p className='text-xl'>
              Grab this heavyweight flavor combo before it&apos;s gone!
            </p>
            <Button asChild className='rounded-full px-8'>
              <Link href='/gottem/products'>
                Get the limited flavor collab now
              </Link>
            </Button>
          </div>
          <div className='mt-16 relative'>
            <Image
              src='/assets/hero-1.webp'
              alt='Product collection'
              width={1200}
              height={600}
              className='rounded-lg mx-auto'
              priority
            />
          </div>
        </div>
      </section>
    </div>
  );
}
