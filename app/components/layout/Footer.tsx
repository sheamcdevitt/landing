import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className='w-full py-6 px-4 md:px-6 border-t mt-auto bg-white dark:bg-gray-800 shadow-md'>
      <div className='container mx-auto flex flex-col sm:flex-row justify-between items-center'>
        <p className='text-xs text-muted-foreground'>
          © {new Date().getFullYear()} Your App Name. All rights reserved.
        </p>
        <nav className='flex gap-4 sm:gap-6 mt-4 sm:mt-0'>
          <Link
            className='text-xs hover:underline underline-offset-4 transition-colors duration-200'
            href='#'
          >
            Terms of Service
          </Link>
          <Link
            className='text-xs hover:underline underline-offset-4 transition-colors duration-200'
            href='#'
          >
            Privacy Policy
          </Link>
        </nav>
      </div>
    </footer>
  );
};
