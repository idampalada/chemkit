import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Lora } from "next/font/google";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function KomitmenMutuKepatuhanPage() {
  return (
    <div className={`min-h-screen flex flex-col bg-white ${lora.className}`}>
      <Navbar />

      {/* ================= CONTENT ================= */}
      <main className="flex-1 pt-[56px] md:pt-[160px] bg-[#EEEEFC]">
        <section className="w-full">
          <div className="max-w-[1600px] mx-auto px-4 md:px-10 pt-12 pb-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* IMAGE */}
              <div className="flex justify-center lg:justify-start">
                <div
                  className="
                    relative
                    w-full
                    max-w-[520px]
                    h-[260px]
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
                    alt="Komitmen Mutu dan Kepatuhan"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* TEXT */}
              <div>
                <h1 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-900">
                  Komitmen Mutu & Kepatuhan
                </h1>

                <p className="text-gray-800 leading-relaxed mb-4 text-justify">
                  Kami berkomitmen untuk mematuhi seluruh peraturan dan standar
                  yang berlaku, termasuk:
                </p>

                <ul className="space-y-4 text-gray-800 leading-relaxed text-justify list-disc pl-5">
                  <li>Cara Pembuatan dan Produksi yang Baik sesuai GMP</li>
                  <li>
                    Standar ISO terkait sistem manajemen mutu
                    <br />
                    (ISO SNI 17025 dan ISO 9001)
                  </li>
                  <li>Regulasi Instansi Pemangku Kepentingan terkait</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ================= FOOTER ================= */}
      <Footer />
    </div>
  );
}
