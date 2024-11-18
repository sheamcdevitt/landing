'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { signIn } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

import { Loader2, ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

type FormValues = {
  email: string;
  password: string;
};

const SignUpPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (values: FormValues) => {
    setIsLoading(true);
    try {
      const result = await signIn('credentials', {
        ...values,
        callbackUrl: '/dashboard',
      });
      if (result?.error) {
        throw new Error(result.error);
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'An error occurred during sign up. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='min-h-screen flex flex-col sm:items-center sm:justify-center bg-gradient-to-br from-blue-100 to-gray-200'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='w-full h-full sm:h-auto sm:max-w-md'
      >
        <div className='bg-white shadow-xl rounded-none sm:rounded-lg p-8 min-h-screen sm:min-h-0 flex flex-col justify-between'>
          <div>
            <h1 className='text-3xl font-bold text-center mb-6 text-gray-800'>
              Join Opus
            </h1>
            <p className='text-center text-gray-600 mb-8'>
              Build your side project in hours, not weeks.
            </p>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className='space-y-6'
              >
                <FormField
                  control={form.control}
                  name='email'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder='you@example.com'
                          {...field}
                          type='email'
                          required
                          className='w-full'
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='password'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          type='password'
                          placeholder='••••••••'
                          {...field}
                          required
                          minLength={8}
                          className='w-full'
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type='submit' className='w-full' disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                      Please wait
                    </>
                  ) : (
                    <>
                      Sign Up
                      <ArrowRight className='ml-2 h-4 w-4' />
                    </>
                  )}
                </Button>
              </form>
            </Form>
            <div className='mt-6'>
              <Button
                variant='outline'
                className='w-full'
                onClick={() => signIn('google', { callbackUrl: '/dashboard' })}
              >
                Continue with Google
              </Button>
            </div>
          </div>
          <p className='text-center text-sm text-gray-600 mt-6'>
            Already have an account?{' '}
            <a
              href='/signin'
              className='font-medium text-blue-600 hover:text-blue-500'
            >
              Sign in
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default SignUpPage;
