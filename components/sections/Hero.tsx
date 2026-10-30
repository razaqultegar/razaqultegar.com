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
          Saya pembuat <HeaderLink href="#udahkelar">UdahKelar</HeaderLink>, CTO
          di <HeaderLink href="#orderanku">Orderanku</HeaderLink>, Project
          Manager di <HeaderLink href="#dots">DOTS.</HeaderLink> (sebelumnya
          Limbo), pernah menjadi{" "}
          <HeaderLink href="#pengalaman">Relawan TIK</HeaderLink> di dua
          kementerian, dan masih nyempetin waktu buat ngoprek{" "}
          <HeaderLink href="#ngoprek-open-source">
            proyek open-source
          </HeaderLink>
          .
        </p>
      </div>

      <p className="clear-both mt-4 text-lg leading-6.5">
        Kadang saya nulis <HeaderLink href="#jurnal">jurnal</HeaderLink> soal
        proyek yang lagi digarap dan{" "}
        <HeaderLink href="#galeri">iseng jepret momen</HeaderLink> pakai kamera
        hp. Nggak main medsos, jadi kalau mau ngobrol, email aja ke{" "}
        <InlineLink href="mailto:hello@razaqultegar.com">
          hello@razaqultegar.com
        </InlineLink>
        .
      </p>
    </header>
  );
}
