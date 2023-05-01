import { cn } from '@/lib/utils';
import './globals.css';
import { Kumbh_Sans } from 'next/font/google';

const kumbhSans = Kumbh_Sans({ subsets: ['latin'], variable: '--font-sans' });

export const metadata = {
  title: 'Developer Job Platform',
  description: 'Implementing a job platform for developers',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={cn('w-full min-h-xcreen h-full font-sans', kumbhSans.variable)}>
        {children}
      </body>
    </html>
  );
}
