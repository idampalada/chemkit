import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* ================= BANNER ================= */}
      <section className="relative w-full overflow-hidden">
        <div className="h-[64px] md:h-[160px]" />

        <div className="relative w-full h-[200px] sm:h-[260px] md:h-[400px]">
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

      {/* ================= SECTION PRODUK & LAYANAN ================= */}
      <main>
        <section className="relative w-full overflow-hidden pt-10 pb-20 md:py-28">
          {/* BACKGROUND */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <Image
              src="/backgroundhome.png"
              alt="Background Home"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* ================= PRODUK UTAMA ================= */}
          <div className="relative z-10 w-full mb-24 lg:mb-40">
            {/* ===== DESKTOP IMAGE ===== */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block z-20">
              <div className="relative w-[360px] aspect-square rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/rapidd.png"
                  alt="Rapid Test Kit"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="max-w-[1600px] mx-auto px-4 md:px-6 lg:px-10">
              {/* ===== MOBILE LAYOUT ===== */}
              <div className="grid grid-cols-[1fr_120px] gap-4 items-center lg:hidden">
                <div className="bg-white/90 backdrop-blur rounded-2xl p-6 shadow-lg">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    Produk Utama
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-gray-800">
                    <li>
                      Rapid Test Kit (Formalin, Boraks, Rhodamin B, Metanil
                      Yellow, Garam Beryodium, Nitrit, Peroksida, Ayam Tiren)
                    </li>
                    <li>Reagen Kimia & Biokimia Laboratorium</li>
                  </ul>
                </div>

                <div className="relative w-full h-[120px] rounded-xl overflow-hidden shadow-md">
                  <Image
                    src="/rapidd.png"
                    alt="Rapid Test Kit"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* ===== DESKTOP CONTENT ===== */}
              <div className="hidden lg:block">
                <div
                  className="max-w-[720px] bg-white/90 backdrop-blur rounded-2xl p-10 ml-[420px]
        shadow-[0_20px_50px_rgba(0,0,0,0.12)]
        border border-white/40"
                >
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                    Produk Utama
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-800">
                    <li>
                      Rapid Test Kit (Tes Kit: Formalin, Boraks, Rhodamin B,
                      Metanil Yellow, Garam Beryodium, Nitrit, Peroksida dan Kit
                      Uji Ayam Tiren)
                    </li>
                    <li>Reagen Kimia & Biokimia Laboratorium</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* ================= LAYANAN ================= */}
          <div className="relative z-10 w-full">
            {/* ===== DESKTOP IMAGE ===== */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 hidden lg:block z-20">
              <div className="relative w-[360px] aspect-square rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/layanan.png"
                  alt="Layanan Chemkit"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="max-w-[1600px] mx-auto px-4 md:px-6 lg:px-10">
              {/* ===== MOBILE LAYOUT ===== */}
              <div className="grid grid-cols-[120px_1fr] gap-4 items-center lg:hidden mb-10">
                <div className="relative w-full h-[120px] rounded-xl overflow-hidden shadow-md">
                  <Image
                    src="/layanan.png"
                    alt="Layanan Chemkit"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="bg-white/90 backdrop-blur rounded-2xl p-6 shadow-lg">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    Layanan
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-gray-800">
                    <li>Pengembangan produk sesuai kebutuhan pelanggan</li>
                    <li>Konsultasi teknis laboratorium</li>
                    <li>Pelatihan penggunaan produk</li>
                    <li>Dukungan validasi & aplikasi metode</li>
                  </ul>
                </div>
              </div>

              {/* ===== DESKTOP CONTENT ===== */}
              <div className="hidden lg:block">
                <div
                  className="max-w-[720px] bg-white/90 backdrop-blur rounded-2xl p-10 ml-[300px] -mt-[40px]
        shadow-[0_20px_50px_rgba(0,0,0,0.12)]
        border border-white/40"
                >
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                    Layanan
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-800">
                    <li>Pengembangan produk sesuai kebutuhan pelanggan</li>
                    <li>Konsultasi teknis laboratorium</li>
                    <li>Pelatihan penggunaan produk</li>
                    <li>Dukungan validasi dan aplikasi metode</li>
                    <li>Bimtek Pengujian & Kalibrasi Peralatan</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= KEUNGGULAN KAMI ================= */}
        <section className="relative w-full overflow-hidden bg-white -mt-12 md:-mt-24">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <Image
              src="/backgroundhomee.png"
              alt="Background Keunggulan Kami"
              fill
              className="object-cover object-center"
              priority
            />
          </div>

          <div
            className="relative z-10 max-w-[1200px] mx-auto px-4 md:px-10 pt-8 pb-16 md:pt-16 md:pb-28
"
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 text-center mb-12">
              Keunggulan Kami
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20 mb-16">
              {[
                {
                  title: "Standar Mutu Ketat",
                  img: "/checklist.png",
                  desc: "Diproduksi dengan sistem manajemen mutu terkontrol",
                },
                {
                  title: "Tim Profesional",
                  img: "/group-chat.png",
                  desc: "Didukung analis dan tenaga ahli berpengalaman",
                },
                {
                  title: "Inovatif & Adaptif",
                  img: "/creativity.png",
                  desc: "Responsif terhadap teknologi dan kebutuhan pasar",
                },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <h4 className="text-base md:text-lg font-semibold mb-4">
                    {item.title}
                  </h4>
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={44}
                    height={44}
                    className="mb-4"
                  />
                  <p className="text-gray-700 text-sm max-w-xs">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-28 max-w-[900px] mx-auto">
              {[
                {
                  title: "Produk Dalam Negeri",
                  img: "/box.png",
                  desc: "Mendukung TKDN dan kemandirian nasional",
                },
                {
                  title: "Distribusi Luas",
                  img: "/global.png",
                  desc: "Menjangkau berbagai wilayah Indonesia",
                },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <h4 className="text-base md:text-lg font-semibold mb-4">
                    {item.title}
                  </h4>
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={44}
                    height={44}
                    className="mb-4"
                  />
                  <p className="text-gray-700 text-sm max-w-xs">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
