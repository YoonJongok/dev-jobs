import { cn } from '@/lib/utils/cn';
import { Kumbh_Sans } from 'next/font/google';
import { Header } from '@/components/header';
import './globals.css';
import QueryClientProvider from '@/lib/context/query-client-provider';
import ThemeProvider from '@/lib/context/theme-provider';

const kumbhSans = Kumbh_Sans({ subsets: ['latin'], variable: '--font-sans' });

export const metadata = {
  title: 'Developer Job Platform',
  description: 'Implementing a job platform for developers',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={cn('font-sans bg-grey-1', kumbhSans.variable)}>
        <ThemeProvider>
          <QueryClientProvider>
            <Header />
            {children}
          </QueryClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

