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
        <TopBar />
        <main className="size-full p-6">{children}</main>
      </div>
    </section>
  );
}
