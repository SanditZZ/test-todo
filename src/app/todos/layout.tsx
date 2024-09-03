export default function TodosLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="space-y-4 md:space-y-6">{children}</div>;
}
