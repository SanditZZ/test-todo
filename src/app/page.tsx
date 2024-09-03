import StatusLinks from "./_components/links/StatusLinks";

export default function Home() {
  return (
    <>
      <div className="flex space-y-2 text-white flex-col px-6 py-4 border border-gray-200/50 bg-gray-500/70 shadow-md rounded-lg">
        <h2 className="text-base uppercase font-semibold">By Status</h2>
        <StatusLinks />
      </div>
    </>
  );
}
