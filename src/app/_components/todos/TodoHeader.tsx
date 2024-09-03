export default async function TodoHeader({ title }: { title: string }) {
  return (
    <div className="flex justify-center md:justify-normal bg-white/95 z-20 rounded-lg shadow-md px-4 py-3 md:px-6 md:py-4 space-x-6 items-baseline">
      <h1 className="text-2xl font-bold">{title}</h1>
    </div>
  );
}
