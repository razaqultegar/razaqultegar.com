import Section from "@/components/sections/Section";
import Link from "next/link";

export default function Journal() {
  return (
    <Section id="jurnal" title="Jurnal">
      <p>
        Tulisan di sini lebih buat diri sendiri ketimbang pembaca. Isinya campur
        aduk, ada proses debugging yang bikin frustrasi sebelum akhirnya solve,
        refleksi soal kerjaan atau hidup, dan ke depannya mungkin bakal lebih
        banyak cerita non-teknis. Nggak ada tema tetap, anggap aja catatan dari
        apa yang lagi mampir di kepala.
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
