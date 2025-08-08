export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <main className={``}>{children}</main>
    </section>
  );
}
