"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const menu = [
    { name: "Tentang Kami", href: "/tentangkami" },
    { name: "Visi dan Misi", href: "/visi-misi" },
    { name: "Produk", href: "/produk" },
    { name: "Kontak Kami", href: "/kontak" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white z-50 shadow-sm">
      {/* ================= MOBILE NAVBAR (CANVA STYLE) ================= */}
      <div className="lg:hidden h-[64px] flex items-center justify-between px-4">
        {/* HAMBURGER */}
        <button onClick={() => setMobileOpen(true)}>
          <Bars3Icon className="w-7 h-7 text-gray-900" />
        </button>

        {/* LOGO TENGAH */}
        <Link href="/" className="absolute left-1/2 -translate-x-1/2">
          <Image
            src="/logochemkitremovebggggg.png"
            alt="CHEM-KIT"
            width={130}
            height={40}
            priority
          />
        </Link>
      </div>

      {/* MOBILE MENU DRAWER */}
      {mobileOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white z-40 shadow-md">
          <nav className="flex flex-col divide-y">
            {menu.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`
              px-6 py-4
              text-base font-medium
              transition-colors duration-200
              ${isActive ? "text-red-600" : "text-gray-900 hover:text-red-600"}
            `}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
      )}

      {/* ================= DESKTOP NAVBAR (ASLI, TIDAK DIUBAH) ================= */}
      <div className="hidden lg:block">
        <div className="relative w-full h-[160px]">
          {/* LOGO KIRI */}
          <div className="absolute left-0 top-0 h-full flex items-center pl-6 z-50">
            <Link href="/">
              <Image
                src="/logochemkitremovebggggg.png"
                alt="CHEM-KIT"
                width={310}
                height={65}
                priority
              />
            </Link>
          </div>

          {/* MENU DESKTOP */}
          <nav className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-black" />
              <div className="flex space-x-16">
                {menu.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`
                        relative pb-3 text-gray-900 font-medium text-[17px]
                        after:absolute after:left-0 after:bottom-0
                        after:h-[2px] after:bg-red-500
                        after:transition-all after:duration-300
                        ${
                          isActive
                            ? "after:w-full"
                            : "after:w-0 hover:after:w-full"
                        }
                      `}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          </nav>

          {/* LOGO KANAN */}
          <div className="absolute right-0 top-0 w-[320px] pr-6">
            <div className="h-[160px] overflow-hidden flex justify-end items-start">
              <img
                src="/logoremovebg.jpeg"
                alt="CHEM-KIT Icon"
                className="object-contain scale-[2.3] origin-top -translate-y-24 translate-x-10"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
