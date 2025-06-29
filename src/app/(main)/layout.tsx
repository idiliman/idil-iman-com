import Nav from "@/components/nav";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Nav />
      <main className="flex-1 lg:pl-[256px]">{children}</main>
    </div>
  );
}
