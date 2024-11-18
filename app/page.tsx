'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { BackgroundGradientAnimation } from './components/layout/BackgroundAnimation';

export default function LandingPage() {
  const [email, setEmail] = useState('');

  return (
    <BackgroundGradientAnimation>
      <div className='relative min-h-screen'>
        <header className='container mx-auto px-4 py-8 relative z-10'>
          <nav className='flex items-center justify-between'>
            <Link href='/' className='text-2xl font-bold text-primary'>
              Opus
            </Link>
            <div className='space-x-4'>
              <Link
                href='/login'
                className='text-sm font-medium hover:underline'
              >
                Log in
              </Link>
              <Button variant='outline'>Sign up</Button>
            </div>
          </nav>
        </header>

        <main className='container mx-auto px-4 py-16 text-center relative z-10'>
          <div className='relative'>
            <h1 className='text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl'>
              Revolutionize Your Workflow with Opus
            </h1>
            <div
              className='absolute inset-0 -z-10 bg-gradient-to-r from-purple-400 to-pink-600 opacity-75 blur-3xl'
              aria-hidden='true'
            />
          </div>

          <motion.p
            className='mt-6 text-xl text-muted-foreground'
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Build your side project in hours, not weeks.
          </motion.p>

          <motion.div
            className='mt-12'
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button size='lg' className='group'>
              Get Started
              <Zap className='ml-2 h-4 w-4 transition-transform group-hover:scale-110' />
            </Button>
          </motion.div>

          <motion.div
            className='mt-16'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h2 className='text-2xl font-bold'>Join our community today</h2>
            <form className='mt-4 flex justify-center space-x-2'>
              <Input
                type='email'
                placeholder='Enter your email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='w-64'
              />
              <Button type='submit'>
                Subscribe
                <ArrowRight className='ml-2 h-4 w-4' />
              </Button>
            </form>
          </motion.div>
        </main>

        <footer className='absolute bottom-0 w-full py-6 text-center text-sm text-muted-foreground'>
          © {new Date().getFullYear()} Opus. All rights reserved.
        </footer>
      </div>
    </BackgroundGradientAnimation>
  );
}
