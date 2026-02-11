import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Lora } from "next/font/google";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function TentangKamiPage() {
  return (
    <div className={`min-h-screen bg-white ${lora.className}`}>
      <Navbar />

      {/* ================= MOBILE BANNER (FULL WIDTH 414x200) ================= */}
      <section className="relative w-full overflow-hidden md:hidden">
        <div className="h-[64px]" />
        <div className="relative w-full h-[200px]">
          <Image
            src="/bannerchemkitt.png"
            alt="Banner Chemkit"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <main className="md:pt-[160px]">
        <section className="w-full bg-[#EEEEFC]">
          <div className="max-w-[1600px] mx-auto px-6 md:px-10 py-10 md:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* LEFT TEXT */}
              <div>
                <h1 className="text-3xl font-semibold mb-6 text-gray-900">
                  Tentang Kami
                </h1>

                <p className="text-gray-800 leading-relaxed text-justify">
                  PT Chemkit Multi Guna adalah perusahaan industri yang bergerak
                  di bidang penelitian, pengembangan, produksi, dan distribusi
                  reagen rapid test kit kimia. Kami berkomitmen untuk
                  menyediakan produk Rapid tes kit yang akurat, andal, mudah
                  dalam penggunaan, terjangkau, dan ramah lingkungan guna
                  mendukung program pengawasan mutu dan keamanan bahan pangan
                  dan hasil olahnya, layanan kesehatan, laboratorium, industri,
                  serta program kesehatan masyarakat di Indonesia.
                </p>

                <p className="text-gray-800 leading-relaxed text-justify mt-4">
                  Didukung oleh tenaga ahli berpengalaman dan fasilitas produksi
                  yang memenuhi standar mutu, kami hadir sebagai mitra strategis
                  bagi laboratorium pengujian, institusi pendidikan, industri,
                  dan instansi pemerintah serta lembaga masyarakat yang
                  mempunyai program pengawasan mutu dan keamanan pangan.
                </p>
              </div>

              {/* ================= DESKTOP IMAGE (ASLI, TIDAK DIUBAH) ================= */}
              <div className="hidden md:flex justify-end">
                <div className="relative w-full max-w-[520px] h-[360px] rounded-lg overflow-hidden shadow-lg translate-x-12 -translate-y-8">
                  <Image
                    src="/asettentangkami.jpg"
                    alt="Aktivitas Laboratorium Chemkit"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
