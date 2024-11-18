'use client';

import { useSession } from 'next-auth/react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export const Header = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const handleProfileClick = () => {
    router.push('/signout');
  };

  return (
    <header className='w-full px-4 lg:px-6 h-14 flex items-center justify-between'>
      <Link className='flex items-center justify-center' href='/'>
        <span className='font-bold'>Opus Template</span>
      </Link>
      {session && (
        <div
          className='flex items-center space-x-4 cursor-pointer'
          onClick={handleProfileClick}
          role='button'
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              handleProfileClick();
            }
          }}
        >
          <span className='text-sm font-medium hidden sm:inline'>
            {session.user?.name}
          </span>
          {session.user?.image && (
            <Image
              src={session.user.image}
              alt='User profile'
              width={32}
              height={32}
              className='rounded-full'
            />
          )}
        </div>
      )}
    </header>
  );
};
