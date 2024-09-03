"use client";

import Link from "next/link";
import StatusLinks from "./links/StatusLinks";

export default function MainNav() {
  return (
    <nav className="flex w-full md:max-w-sm lg:max-w-md p-2 text-white">
      <div className="flex flex-col w-full max-w-md mx-auto md:max-w-full gap-10 px-1 py-3 md:p-6 border border-gray-200/50 bg-gray-600/90 shadow-md rounded-lg md:m-10 md:rounded-xl">
        <div className="hidden md:flex">
          <Link href={"/"}>
            <h2 className="text-xl font-semibold select-none">Todos Tasks</h2>
          </Link>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-sm uppercase font-semibold select-none hidden md:flex">
            Status
          </h2>
          <StatusLinks />
        </div>

        <hr className="hidden md:block my-1 border w-full max-w-[350px] mx-auto border-gray-600/50" />

        {/* <div className="hidden md:flex">
          <h2 className="text-sm uppercase font-semibold select-none">Tags</h2>
        </div> */}
      </div>
    </nav>
  );
}
