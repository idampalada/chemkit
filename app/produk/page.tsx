"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const products = [
  {
    name: "Tes Kit Formalin",
    code: "C-K.F-001-50",
    image: "/produk1.jpeg",
    slides: [
      "/produk1.jpeg",
      "/spesifikasi1produk1.png",
      "/spesifikasi2produk1.png",
      "/spesifikasi3produk1.png",
    ],
  },
  {
    name: "Tes Kit Boraks",
    code: "C-K.B-002-50",
    image: "/produk2.jpeg",
    slides: [
      "/produk2.jpeg",
      "/spesifikasi1produk2.png",
      "/spesifikasi2produk2.png",
      "/spesifikasi3produk2.png",
    ],
  },
  {
    name: "Tes Kit Rhodamin-B",
    code: "C-K.RB-003-50",
    image: "/produk3.jpeg",
    slides: [
      "/produk3.jpeg",
      "/spesifikasi1produk3.png",
      "/spesifikasi2produk3.png",
      "/spesifikasi3produk3.png",
    ],
  },
  {
    name: "Tes Kit Metanil Yellow",
    code: "C-K.MY-004-75",
    image: "/produk4.jpeg",
    slides: [
      "/produk4.jpeg",
      "/spesifikasi1produk4.png",
      "/spesifikasi2produk4.png",
      "/spesifikasi3produk4.png",
    ],
  },
  {
    name: "Tes Kit Garam Beryodium",
    code: "C-K.I005.100",
    image: "/produk5fix.png",
    slides: [
      "/produk5fix.png",
      "/spesifikasi1produk5.png",
      "/spesifikasi2produk5.png",
      "/spesifikasi3produk5.png",
    ],
  },
  {
    name: "Tes Kit Nitrit NO2",
    code: "C-K.N006.50",
    image: "/produk6fix.png",
    slides: [
      "/produk6fix.png",
      "/spesifikasi1produk6.png",
      "/spesifikasi2produk6.png",
      "/spesifikasi3produk6.png",
    ],
  },
  {
    name: "Tes Kit Peroksida H2O2",
    code: "C-K.P007.50",
    image: "/produk7fix.png",
    slides: [
      "/produk7fix.png",
      "/spesifikasi1produk7.png",
      "/spesifikasi2produk7.png",
      "/spesifikasi3produk7.png",
    ],
  },
  {
    name: "Tes Kit Uji Ayam Tiren",
    code: "C-K.AT008.100",
    image: "/produk8.jpeg",
    slides: [
      "/produk8.jpeg",
      "/spesifikasi1produk8.png",
      "/spesifikasi2produk8.png",
      "/spesifikasi3produk8.png",
    ],
  },
];

export default function ProdukPage() {
  const [open, setOpen] = useState(false);
  const [slide, setSlide] = useState(0);
  const [activeSlides, setActiveSlides] = useState<string[]>([]);
  // ================= SWIPE STATE =================
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const minSwipeDistance = 50;

  const next = () => setSlide((s) => (s + 1) % activeSlides.length);
  const prev = () =>
    setSlide((s) => (s === 0 ? activeSlides.length - 1 : s - 1));

  // ================= SWIPE FUNCTION =================
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;

    if (distance > minSwipeDistance) {
      next();
    } else if (distance < -minSwipeDistance) {
      prev();
    }
  };

  useEffect(() => {
    if (!open) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* ================= CONTENT ================= */}
      <main className="pt-[64px] md:pt-[160px]">
        <section className="w-full bg-[#EEEEFC]">
          <div className="max-w-[1600px] mx-auto px-4 md:px-10 py-10 md:py-16">
            <h1 className="text-2xl md:text-3xl font-semibold text-center text-gray-800 mb-8 md:mb-12">
              Daftar Produk
            </h1>

            {/* GRID PRODUK */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-10">
              {products.map((product, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setActiveSlides(product.slides);
                    setSlide(0);
                    setOpen(true);
                  }}
                  className="bg-[#f8f8f8] rounded-xl md:rounded-2xl p-3 md:p-6 text-center shadow-sm cursor-pointer hover:shadow-md transition"
                >
                  <div className="relative w-full h-[120px] md:h-[180px] mb-4">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>

                  <h3 className="text-sm md:text-base text-gray-800 font-medium leading-snug">
                    {product.name}
                  </h3>

                  <p className="text-xs md:text-sm text-gray-600 mt-1">
                    {product.code}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* ================= MODAL ================= */}
      {open && (
        <div className="fixed inset-0 z-[9999] bg-black/80 flex items-center justify-center">
          <button
            onClick={() => setOpen(false)}
            className="absolute top-6 right-6 text-white text-3xl"
          >
            ✕
          </button>

          <button
            onClick={prev}
            className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 
             bg-white text-black rounded-full 
             w-10 h-10 md:w-12 md:h-12
             flex items-center justify-center 
             shadow-lg z-50"
          >
            ‹
          </button>

          <button
            onClick={next}
            className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 
             bg-white text-black rounded-full 
             w-10 h-10 md:w-12 md:h-12
             flex items-center justify-center 
             shadow-lg z-50"
          >
            ›
          </button>

          <div
            className="relative w-[90vw] h-[85vh] touch-pan-y"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <Image
              src={activeSlides[slide]}
              alt="Preview Produk"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
