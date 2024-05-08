import Sidebar from '@/components/sidebar';
import Footer from './_components/footer';
import MobileNavbar from '@/components/mobile-navbar';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Sidebar className='hidden lg:flex z-50' />
      <main className='lg:pl-[256px] h-full'>
        <MobileNavbar className='flex lg:hidden' />
        <div className='max-w-7xl mx-auto pt-6 h-full flex flex-1'>{children}</div>
        <div>
          <Footer />
        </div>
      </main>
    </>
  );
}
