import { Header } from '@/components/header';
import './globals.css';
import { cn } from '@/lib/utils';
import { Kumbh_Sans } from 'next/font/google';

const kumbhSans = Kumbh_Sans({ subsets: ['latin'], variable: '--font-sans' });

export const metadata = {
  title: 'Developer Job Platform',
  description: 'Implementing a job platform for developers',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={cn('font-sans bg-black', kumbhSans.variable)}>
        <Header />
        {children}
      </body>
    </html>
  );
}

