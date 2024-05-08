import Sidebar from '@/components/sidebar';
import Footer from './_components/footer';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Sidebar className='hidden lg:flex' />
      <main className='lg:pl-[256px] h-full'>
        <div className='max-w-7xl mx-auto py-6 h-full flex flex-1'>{children}</div>
        <div>
          <Footer />
        </div>
      </main>
    </>
  );
}
