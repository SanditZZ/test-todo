"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Clean", href: "/locations/top" },
  { name: "Try", href: "/locations/search" },
  { name: "Call", href: "/locations/areas" },
];

export default function TagLinks() {
  const pathname = usePathname();

  return (
    <>
      {navigation.map((item) => (
        <Link key={item.name} href={item.href} className={""}>
          {item.name}
        </Link>
      ))}
    </>
  );
}
