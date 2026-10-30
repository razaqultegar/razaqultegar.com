import Section from "@/components/sections/Section";
import InlineLink from "@/components/InlineLink";

export default function Experience() {
  return (
    <Section id="pengalaman" title="Pengalaman">
      <p>
        Selain urusan produk dan tim, saya pernah jadi Relawan TIK di dua
        kementerian. Program Satu Juta Domain saya ikuti bareng{" "}
        <InlineLink href="https://komdigi.go.id">
          Kementerian Komunikasi dan Digital Republik Indonesia
        </InlineLink>{" "}
        (dulu Kominfo, kini Komdigi). Sementara di{" "}
        <InlineLink href="https://kemendesa.go.id">
          Kementerian Desa dan Pembangunan Daerah Tertinggal Republik Indonesia
        </InlineLink>{" "}
        (Kemendes PDT), saya terlibat di program Desa Melek IT lewat{" "}
        <InlineLink href="https://gedhe.or.id">
          Yayasan Gedhe Nusantara (Gedhe Foundation)
        </InlineLink>
        .
      </p>
      <p>
        Turun langsung ke program-program itu bikin saya lihat sisi lain
        teknologi. Ternyata bukan sekadar bikin aplikasi, tapi juga bisa bantu
        masyarakat desa melek digital dan ikut nyentuh ranah kebijakan publik.
      </p>
    </Section>
  );
}
