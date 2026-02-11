import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Lora } from "next/font/google";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function VisiMisiPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* NAVBAR */}
      <Navbar />

      {/* CONTENT */}
      <main className="flex-1 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* HEADER SECTION */}
          <div className="text-center mb-20">
            <h1
              className={`${lora.className} text-5xl md:text-6xl font-bold text-gray-900 mb-4`}
            >
              Visi dan Misi
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 via-red-500 to-purple-600 mx-auto"></div>
          </div>

          {/* VISI & MISI GRID */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* VISI SECTION */}
            <div className="space-y-6">
              <div className="border-l-4 border-yellow-400 pl-6">
                <h2
                  className={`${lora.className} text-4xl font-bold text-gray-900 mb-6`}
                >
                  Visi
                </h2>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <p className="text-lg text-gray-700 leading-relaxed text-justify">
                  Menjadi perusahaan dalam negeri untuk industri reagen dan
                  rapid test kit yang berdaya saing global, inovatif, dan
                  berkontribusi nyata terhadap peningkatan kualitas kesehatan
                  masyarakat.
                </p>
              </div>
            </div>

            {/* MISI SECTION */}
            <div className="space-y-6">
              <div className="border-l-4 border-red-500 pl-6">
                <h2
                  className={`${lora.className} text-4xl font-bold text-gray-900 mb-6`}
                >
                  Misi
                </h2>
              </div>
              <div className="space-y-4">
                {[
                  "Mengembangkan dan memproduksi reagen serta rapid test kit yang memenuhi standar mutu nasional dan internasional.",
                  "Menyediakan produk dengan akurasi tinggi, stabilitas baik, serta kemudahan penggunaan dan ramah lingkungan.",
                  "Mendukung kemandirian industri reagen dan rapid test kit dalam negeri.",
                  "Memberikan layanan teknis dan purna jual yang profesional dan responsif.",
                  "Mendorong inovasi berkelanjutan melalui riset dan kolaborasi.",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 bg-gray-50 p-4 rounded-lg"
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-purple-600 to-red-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 leading-relaxed text-justify pt-1">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
