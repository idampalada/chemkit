import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Lora } from "next/font/google";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function FasilitasTeknologiPage() {
  const fasilitas = [
    {
      title: "Kantor",
      image: "/fasilitas1.png",
      icon: "/iconfas1.png",
    },
    {
      title: "Fasilitas produksi reagen dan rapid test kit",
      image: "/fasilitas2.png",
      icon: "/iconfas2.png",
    },
    {
      title: "Laboratorium Quality Control (QC)",
      image: "/fasilitas3.png",
      icon: "/iconfas3.png",
    },
    {
      title: "Sistem penyimpanan dan distribusi",
      image: "/fasilitas4.png",
      icon: "/iconfas4.png",
    },
  ];

  return (
    <div className={`min-h-screen flex flex-col bg-white ${lora.className}`}>
      <Navbar />

      {/* ================= CONTENT ================= */}
      <main className="flex-1 pt-[56px] md:pt-[160px] bg-[#EEEEFC]">
        <section className="w-full min-h-[70vh]">
          <div className="max-w-[1600px] mx-auto px-4 md:px-10 pt-12 pb-32">
            {/* TITLE */}
            <h1 className="text-center text-2xl md:text-3xl font-semibold text-gray-900 mb-12">
              Fasilitas & Teknologi
            </h1>

            {/* GRID */}
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-12">
              {fasilitas.map((item, index) => (
                <div
                  key={index}
                  className="relative rounded-3xl overflow-hidden shadow-xl bg-white"
                >
                  {/* IMAGE */}
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={500}
                    className="w-full h-[220px] md:h-[360px] object-cover"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-white/65" />

                  {/* CONTENT */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={48}
                      height={48}
                      className="mb-3"
                    />
                    <p className="text-gray-800 text-sm md:text-base font-medium leading-snug">
                      {item.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* ================= FOOTER (NEMPEL BAWAH) ================= */}
      <Footer />
    </div>
  );
}
