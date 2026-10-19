import Section from "@/components/sections/Section";
import InlineLink from "@/components/InlineLink";

export default function Experience() {
  return (
    <Section id="pengalaman" title="Pengalaman">
      <p>
        Di luar kerjaan utama, saya juga pernah jadi{" "}
        <strong className="font-semibold">Relawan TIK</strong> di dua
        kementerian. Bareng{" "}
        <InlineLink href="https://komdigi.go.id">
          Kementerian Komunikasi dan Digital Republik Indonesia
        </InlineLink>{" "}
        (dulu Kominfo, sekarang Komdigi), saya ikut program Satu Juta Domain.
        Bareng{" "}
        <InlineLink href="https://kemendesa.go.id">
          Kementerian Desa dan Pembangunan Daerah Tertinggal Republik Indonesia
        </InlineLink>{" "}
        (Kemendes PDT), saya ikut program Desa Melek IT lewat{" "}
        <InlineLink href="https://gedhe.or.id">
          Yayasan Gedhe Nusantara (Gedhe Foundation)
        </InlineLink>
        .
      </p>
      <p>
        Dari pengalaman ini saya banyak belajar gimana teknologi bisa dipakai
        buat nyelesain masalah yang lebih luas dari sekadar produk digital,
        sampai ke level kebijakan publik dan pemberdayaan daerah.
      </p>
    </Section>
  );
}
