import type { Metadata } from 'next';
import localFont from 'next/font/local';

import '@/styles/tailwind.css';
import ReactQueryProviders from '@/hooks/useReactQuery';
import { cn } from '@/lib/utils';

const pretendard = localFont({
  src: '../font/PretendardVariable.woff2',
  variable: '--font-pretendard',
});

export const metadata: Metadata = {
  title: 'RODI',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <ReactQueryProviders>
        <body className={cn(pretendard.className)}>{children}</body>
      </ReactQueryProviders>
    </html>
  );
}
