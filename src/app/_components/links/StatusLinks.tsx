"use client";

import { CheckIcon, ListBulletIcon, PencilIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Todo", href: "/todos/todo", icon: ListBulletIcon },
  { name: "Doing", href: "/todos/doing", icon: PencilIcon },
  { name: "Done", href: "/todos/done", icon: CheckIcon },
];

export default function StatusLinks() {
  const pathname = usePathname();

  return (
    <div className="flex w-fit mx-auto md:w-full flex-row md:flex-col justify-center gap-1 md:gap-1">
      {navigation.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className={clsx(
            " md:h-[40px] text-sm md:text-base md:justify-start text-gray-200 justify-center gap-3 flex text-start hover:bg-gray-700/95 hover:text-blue-500 duration-200 rounded-md px-4 md:py-3 py-2 items-center",
            pathname === item.href
              ? "font-semibold bg-gray-700/50 text-blue-400"
              : ""
          )}
        >
          {item.icon && <item.icon className="h-5 w-5" />}
          <p className="select-none">{item.name}</p>
        </Link>
      ))}
    </div>
  );
}
