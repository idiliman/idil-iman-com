import Sidebar from "@/components/sidebar";
import Footer from "./_components/footer";
import MobileNavbar from "@/components/mobile-navbar";
import Header from "./_components/header";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Sidebar className="hidden lg:flex z-50 print:hidden" />
      <main className="lg:pl-[256px]">
        <MobileNavbar className="flex lg:hidden print:hidden" />
        <div className="md:p-7 flex flex-col flex-1 pt-20 md:pt-20 lg:pt-6 max-w-7xl mx-auto min-h-screen">
          {/* <Header /> */}
          {children}
        </div>
        <Footer />
      </main>
    </>
  );
}
