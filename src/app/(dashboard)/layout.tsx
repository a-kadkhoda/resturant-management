import TopBar from "@/features/topBar/components/TopBar";
import SideBar from "@/features/sidebar/components/SideBar";

export default function DasboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="flex min-h-svh w-full">
      <SideBar />
      <div className={`size-full`}>
        <div className="h-[80px]">
          <TopBar />
        </div>

        <main className="w-full  min-h-[calc(100svh-80px)] p-6">
          {children}
        </main>
      </div>
    </section>
  );
}
