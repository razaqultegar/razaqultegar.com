import Section from "@/components/sections/Section";
import InlineLink from "@/components/InlineLink";

export default function UdahKelar() {
  return (
    <Section id="udahkelar" title="UdahKelar">
      <p>
        <InlineLink href="https://udahkelar.id">UdahKelar</InlineLink> itu tools
        changelog & release notes buat developer dan startup Indonesia. Dibangun
        dari nol khusus buat pasar lokal: bahasa santai, harga dalam Rupiah, dan
        notifikasi realtime begitu update kelar dipublish — bukan email digest
        yang telat kayak kebanyakan tools sejenis di luar sana.
      </p>
      <p className="italic">
        &ldquo;Fitur baru? Udah kelar. Tinggal kabarin.&rdquo;
      </p>
      <p>
        Sekarang udah live dan dipakai developer serta startup di Jakarta,
        Bandung, Yogyakarta, sampai Surabaya.
      </p>
    </Section>
  );
}
