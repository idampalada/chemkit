"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Lora } from "next/font/google";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const lampiranImages = [
  "/lampiran1.png",
  "/lampiran2.png",
  "/lampiran3.png",
  "/lampiran4.png",
  "/lampiran5.png",
  "/lampiran6.png",
  "/lampiran7.png",
  "/lampiran8.png",
  "/lampiran9.png",
  "/lampiran10.png",
];

export default function MitraPelangganPage() {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  /* Keyboard navigation */
  useEffect(() => {
    if (!open) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight")
        setCurrent((c) => (c + 1) % lampiranImages.length);
      if (e.key === "ArrowLeft")
        setCurrent((c) => (c === 0 ? lampiranImages.length - 1 : c - 1));
      if (e.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open]);

  return (
    <div className={`min-h-screen flex flex-col bg-white ${lora.className}`}>
      <Navbar />

      {/* ================= CONTENT ================= */}
      <main className="flex-1 pt-[56px] md:pt-[160px] bg-[#EEEEFC]">
        <section className="w-full">
          <div className="max-w-[1600px] mx-auto px-4 md:px-10 pt-12 pb-24">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
              {/* IMAGE */}
              <div className="flex justify-center lg:justify-start">
                <div
                  className="
                    relative
                    w-full
                    max-w-[420px]
                    h-[240px]
                    md:h-[360px]
                    rounded-lg
                    overflow-hidden
                    shadow-lg
                    lg:-translate-x-12
                    lg:-translate-y-8
                  "
                >
                  <Image
                    src="/mutu.jpeg"
                    alt="Mitra dan Pelanggan Chemkit"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* TEXT */}
              <div>
                <h1 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-900">
                  Mitra & Pelanggan
                </h1>

                <p className="text-gray-800 leading-relaxed mb-4">
                  Produk kami telah digunakan oleh:
                </p>

                <ul className="list-disc pl-5 space-y-3 text-gray-800 leading-relaxed text-justify">
                  <li>Laboratorium Badan POM seluruh Indonesia</li>
                  <li>Laboratorium Kesehatan Daerah</li>
                  <li>Institusi pendidikan dan penelitian</li>
                  <li>Industri dan instansi pemerintah</li>
                  <li>
                    Program Food Security untuk tamu negara termasuk momen
                    kenegaraan (Asian Games, Dapur Haji Kementerian Agama)
                  </li>
                </ul>
              </div>

              {/* INFO */}
              <div className="flex flex-col items-start lg:items-center mt-6 lg:mt-20">
                <p className="text-gray-800 leading-relaxed mb-6 text-left lg:text-center">
                  Sampai dengan tahun 2025 sebanyak
                  <br />
                  <span className="font-semibold">145 pelanggan</span>
                </p>

                <button
                  onClick={() => {
                    setCurrent(0);
                    setOpen(true);
                  }}
                  className="px-8 py-2.5 rounded-full bg-[#8FA9A3] text-white text-sm font-medium hover:bg-[#7c9892] transition"
                >
                  Lampiran
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* ================= MODAL PREVIEW ================= */}
      {open && (
        <div className="fixed inset-0 z-[9999] bg-black/80 flex items-center justify-center">
          <button
            onClick={() => setOpen(false)}
            className="absolute top-6 right-6 text-white text-3xl z-50"
          >
            ✕
          </button>

          <button
            onClick={() =>
              setCurrent(
                current === 0 ? lampiranImages.length - 1 : current - 1,
              )
            }
            className="absolute left-6 text-white text-4xl z-50"
          >
            ‹
          </button>

          <button
            onClick={() => setCurrent((current + 1) % lampiranImages.length)}
            className="absolute right-6 text-white text-4xl z-50"
          >
            ›
          </button>

          <div className="relative w-[90vw] h-[85vh] z-40">
            <Image
              src={lampiranImages[current]}
              alt={`Lampiran ${current + 1}`}
              fill
              className="object-contain"
              priority
            />
          </div>

          <div className="absolute bottom-6 text-white text-sm bg-black/60 px-4 py-1 rounded-full z-50">
            {current + 1} / {lampiranImages.length}
          </div>
        </div>
      )}
    </div>
  );
}
