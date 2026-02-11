"use client";

import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden text-white">
      {/* BACKGROUND */}
      <img
        src="/footerr.png"
        alt="Footer Chemkit"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 lg:hidden px-3 pt-3 pb-5">
        <div className="grid grid-cols-3 gap-3 text-[10px] leading-snug text-gray-200 items-start">
          {/* LEFT */}
          <div>
            <Image
              src="/logochemkitremovebgggg.png"
              alt="Logo Chemkit"
              width={80}
              height={26}
              className="mb-2"
            />
            <p>
              Solusi rapid test kit kimia yang handal, akurat, dan ramah
              lingkungan.
            </p>
          </div>

          {/* MIDDLE */}
          <div className="mt-6 pl-2">
            <h4 className="font-semibold text-white mb-1 text-[11px]">
              Kontak
            </h4>
            <ul className="space-y-1">
              <li className="flex items-start gap-1">
                <FaMapMarkerAlt size={10} />
                <span>Serua Indah VI, Pamulang Timur</span>
              </li>
              <li className="flex items-center gap-1">
                <FaPhoneAlt size={10} />
                <span>085282208799</span>
              </li>
              <li className="flex items-center gap-1">
                <FaEnvelope size={10} />
                <span>chemkit@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* RIGHT */}
          <div className="mt-6 pl-2">
            <h4 className="font-semibold text-white mb-1 text-[11px]">
              Informasi
            </h4>
            <ul className="space-y-1">
              <li>
                <Link
                  href="/fasilitas-teknologi"
                  className="hover:text-white transition"
                >
                  &gt; Fasilitas
                </Link>
              </li>
              <li>
                <Link
                  href="/komitmen-mutu-kepatuhan"
                  className="hover:text-white transition"
                >
                  &gt; Komitmen
                </Link>
              </li>
              <li>
                <Link
                  href="/mitra-pelanggan"
                  className="hover:text-white transition"
                >
                  &gt; Mitra
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ================= DESKTOP FOOTER ================= */}
      <div className="relative z-10 hidden lg:block">
        <div className="max-w-[1600px] mx-auto px-10 pt-6 pb-12">
          <div className="grid grid-cols-3 gap-24 -mt-4">
            {/* LEFT */}
            <div className="max-w-[600px] -mt-6">
              <Image
                src="/logochemkitremovebgggg.png"
                alt="Logo Chemkit"
                width={230}
                height={60}
                className="-mb-3.5"
              />
              <p className="text-sm leading-relaxed text-gray-200 text-justify">
                PT. Chemkit Multi Guna terus berinovasi dan meningkatkan
                kualitas produk untuk menjadi mitra terpercaya dalam penyediaan
                solusi rapid tes kit kimia yang handal dan akurat serta ramah
                lingkungan. Dengan semangat profesionalisme dan integritas, kami
                siap mendukung kemajuan layanan makanan yang aman dan bermutu
                menuju masyarakat sehat di Indonesia.
              </p>
            </div>

            {/* MIDDLE (DITURUNKAN) */}
            <div className="pl-10 mt-10">
              <h3 className="text-lg font-semibold mb-4">Kontak Kami</h3>
              <ul className="text-sm space-y-4 text-gray-200">
                <li className="flex items-start gap-3">
                  <FaMapMarkerAlt size={14} />
                  <span>
                    Serua Indah VI, Serua Residence Blok A1-B1, Pamulang Timur,
                    Pamulang, Tangerang Selatan 15417
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <FaPhoneAlt size={14} />
                  <span>085282208799</span>
                </li>
                <li className="flex items-center gap-3">
                  <FaEnvelope size={14} />
                  <span>chemkit@gmail.com</span>
                </li>
              </ul>
            </div>

            {/* RIGHT (DITURUNKAN) */}
            <div className="pl-10 mt-10">
              <h3 className="text-lg font-semibold mb-2">Informasi</h3>
              <ul className="text-sm text-gray-200 space-y-2 mt-4">
                <li>
                  <Link href="/fasilitas-teknologi">
                    &gt; Fasilitas & Teknologi
                  </Link>
                </li>
                <li>
                  <Link href="/komitmen-mutu-kepatuhan">
                    &gt; Komitmen Mutu & Kepatuhan
                  </Link>
                </li>
                <li>
                  <Link href="/mitra-pelanggan">&gt; Mitra & Pelanggan</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
