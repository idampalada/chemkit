"use client";

import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function HubungiKamiPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* ================= NAVBAR SPACER ================= */}
      <div className="h-[64px] md:h-[160px]" />

      {/* ================= BANNER ================= */}
      <section className="relative w-full h-[200px] md:h-[400px]">
        <Image
          src="/bannerhubungikami.png"
          alt="Hubungi Kami Chemkit"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="max-w-4xl px-6 text-center text-white">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
              Hubungi Kami
            </h1>
            <p className="text-sm md:text-xl leading-relaxed">
              Untuk informasi lebih lanjut mengenai produk dan layanan PT
              Chemkit Multi Guna, kerja sama, maupun konsultasi teknis.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section className="relative w-full py-16 md:py-24 bg-[#EEEEFC] border-t border-[#E2E4F2]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* LEFT CONTENT */}
          <div>
            <div className="relative inline-block mb-6">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1F2A44]">
                Get A <span className="text-[#D11A2A]">Free</span> Consultation!
              </h2>

              <span
                className="
                  absolute
                  left-1/2
                  -translate-x-[65%]
                  -bottom-3
                  w-24
                  h-1
                  bg-[#D11A2A]
                  block
                "
              />
            </div>

            <p className="text-[#4A5568] mb-10 max-w-lg leading-relaxed">
              Kami siap membantu kebutuhan informasi produk, konsultasi teknis,
              dan kerja sama. Silakan isi formulir atau hubungi kami langsung.
            </p>

            <div className="space-y-6 text-sm text-[#4A5568]">
              <div className="flex items-start gap-4">
                <span className="text-[#D11A2A] mt-1">
                  <FaMapMarkerAlt size={14} />
                </span>
                <span>
                  Serua Indah VI, Serua Residence Blok A1-B1
                  <br />
                  Pamulang Timur, Tangerang Selatan 15417
                </span>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-[#D11A2A]">
                  <FaPhoneAlt size={14} />
                </span>
                <span>0852 8220 8799</span>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-[#D11A2A]">
                  <FaEnvelope size={14} />
                </span>
                <span>chemkit@gmail.com</span>
              </div>
            </div>

            {/* SOCIAL ICON */}
            <div className="flex gap-4 mt-10">
              <div className="w-10 h-10 rounded-full bg-[#D11A2A] flex items-center justify-center text-white hover:bg-[#B31623] transition">
                <FaFacebookF />
              </div>
              <div className="w-10 h-10 rounded-full bg-[#D11A2A] flex items-center justify-center text-white hover:bg-[#B31623] transition">
                <FaTwitter />
              </div>
              <div className="w-10 h-10 rounded-full bg-[#D11A2A] flex items-center justify-center text-white hover:bg-[#B31623] transition">
                <FaInstagram />
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-white rounded-xl p-8 md:p-10 text-[#1F2A44] shadow-lg">
            <form className="space-y-6">
              <div>
                <label className="text-sm font-medium">Name</label>
                <input
                  type="text"
                  className="w-full mt-2 px-4 py-3 border border-[#E2E4F2] rounded-md focus:outline-none focus:ring-2 focus:ring-[#D11A2A]"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Email</label>
                  <input
                    type="email"
                    className="w-full mt-2 px-4 py-3 border border-[#E2E4F2] rounded-md focus:outline-none focus:ring-2 focus:ring-[#D11A2A]"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Phone Number</label>
                  <input
                    type="text"
                    className="w-full mt-2 px-4 py-3 border border-[#E2E4F2] rounded-md focus:outline-none focus:ring-2 focus:ring-[#D11A2A]"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium">Your Message</label>
                <textarea
                  rows={4}
                  className="w-full mt-2 px-4 py-3 border border-[#E2E4F2] rounded-md focus:outline-none focus:ring-2 focus:ring-[#D11A2A]"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#D11A2A] hover:bg-[#B31623] text-white py-3 rounded-md font-semibold transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ================= MAP ================= */}
      <section className="relative w-full h-[250px]">
        <iframe
          title="Lokasi PT Chemkit Multi Guna"
          src="https://www.google.com/maps?q=-6.360241889953613,106.74494934082031&z=17&output=embed"
          className="w-full h-full border-0"
          loading="lazy"
        />
      </section>
      <Footer />
    </div>
  );
}
