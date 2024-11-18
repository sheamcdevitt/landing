import AuthProvider from '@/components/providers/AuthProvider';
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from './components/ui/toaster';
import { GeistSans } from 'geist/font/sans';

export const metadata: Metadata = {
  title: 'App Title',
  description: 'App Description',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <AuthProvider>
      <html lang='en' className={`h-full ${GeistSans.className}`}>
        <body>
          <main>
            {children}
            <Toaster />
          </main>
        </body>
      </html>
    </AuthProvider>
  );
};

export default RootLayout;
