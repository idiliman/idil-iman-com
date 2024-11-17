import Sidebar from "@/components/sidebar";
import Footer from "./_components/footer";
import MobileNavbar from "@/components/mobile-navbar";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Sidebar className="hidden lg:flex z-50" />
      <main className="lg:pl-[256px] h-screen">
        <MobileNavbar className="flex lg:hidden" />
        <div className="flex flex-1 h-full">{children}</div>
        <Footer />
      </main>
    </>
  );
}
