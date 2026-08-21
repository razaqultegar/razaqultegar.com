import Image from "next/image";
import HeaderLink from "@/components/HeaderLink";
import InlineLink from "@/components/InlineLink";

export default function Hero() {
  return (
    <header>
      <h1 className="mb-5 text-[38px] leading-10.5 font-normal">
        RAZAQUL TEGAR
      </h1>

      <div className="flow-root">
        <a
          href="/profile.png"
          target="_blank"
          rel="noopener noreferrer"
          className="float-left mr-3.75 mb-2 block h-20 w-20 overflow-hidden rounded-full max-[580px]:h-27.5 max-[580px]:w-27.5"
        >
          <Image
            src="/profile.png"
            alt="Foto profil Razaqul Tegar"
            width={110}
            height={110}
            className="h-full w-full object-cover"
          />
        </a>

        <p className="text-lg leading-6.5">
          Saya kerja sehari-hari sebagai CTO di{" "}
          <HeaderLink href="#sentralink">SentraLink</HeaderLink>, sekaligus
          ngembangin <HeaderLink href="#udahkelar">UdahKelar</HeaderLink> —
          produk kecil yang bantu tim developer nyatetin changelog tanpa ribet.
          Di luar itu, saya juga ikut ngoprek bareng tim lepas di{" "}
          <HeaderLink href="#dots">DOTS.</HeaderLink>, dan dulu sempet aktif
          jadi <HeaderLink href="#pengalaman">Relawan TIK</HeaderLink> di dua
          program kementerian. Sisa waktu biasanya abis buat{" "}
          <HeaderLink href="#ngoprek-open-source">
            ngoprek proyek kecil
          </HeaderLink>{" "}
          atau nulis di <HeaderLink href="#jurnal">jurnal</HeaderLink>.
        </p>
      </div>

      <p className="clear-both mt-4 text-lg leading-6.5">
        Selain nulis di <HeaderLink href="#jurnal">jurnal</HeaderLink> soal apa
        yang lagi dikerjain, saya juga suka{" "}
        <HeaderLink href="#galeri">iseng jepret momen</HeaderLink> lewat kamera
        hp. Saya nggak aktif di medsos pribadi, jadi kalau mau ngobrol, langsung
        aja email ke{" "}
        <InlineLink href="mailto:hello@razaqultegar.com">
          hello@razaqultegar.com
        </InlineLink>
        .
      </p>
    </header>
  );
}
