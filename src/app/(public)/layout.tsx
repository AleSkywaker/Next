import { Navbar } from '@/app/components';
import Link from 'next/link';


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar></Navbar>
      <div className="h-screen flex items-center justify-center">
        {children}
      </div>
    </>
  );
}