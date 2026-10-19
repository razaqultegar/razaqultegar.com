import Section from "@/components/sections/Section";
import Link from "next/link";

export default function Journal() {
  return (
    <Section id="jurnal" title="Jurnal">
      <p>
        Saya nulis lebih buat diri sendiri ketimbang buat pembaca. Isinya
        macem-macem: proses debugging yang bikin frustrasi sebelum akhirnya
        solve, refleksi soal kerjaan atau hidup, dan ke depannya mungkin bakal
        lebih banyak cerita di luar urusan kerja. Nggak ada tema tetap, sekadar
        dokumentasi dari apa yang lagi ada di kepala.
      </p>
      <Link
        href="/jurnal"
        className="text-rust hover:text-rust-dark inline-block underline underline-offset-2 transition-colors"
      >
        Baca jurnal →
      </Link>
    </Section>
  );
}
