import TopBar from "@/features/topBar/components/TopBar";
import SideBar from "@/features/sidebar/components/SideBar";

export default function DasboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="relative flex h-screen w-full overflow-hidden">
      <SideBar />
      <div className={`h-screen w-full flex flex-col`}>
        <div className="h-[80px]">
          <TopBar />
        </div>

        <main className="w-full h-[calc(100svh-80px)] p-6 overflow-y-auto">
          {children}
        </main>
      </div>
    </section>
  );
}
