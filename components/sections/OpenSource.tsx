import Section from "@/components/sections/Section";
import ExternalLink from "@/components/ExternalLink";

export default function OpenSource() {
  return (
    <Section id="ngoprek-open-source" title="Ngoprek &amp; Open Source">
      <p>
        Di luar kerjaan, saya suka bikin tools kecil buat nyelesain masalah
        sendiri, kayak{" "}
        <ExternalLink href="https://github.com/razaqultegar/dotfiles">
          dotfiles
        </ExternalLink>{" "}
        buat mempercepat setup environment, atau{" "}
        <ExternalLink href="https://github.com/razaqultegar/download-organizer">
          download-organizer
        </ExternalLink>{" "}
        yang otomatis merapikan folder Downloads yang berantakan. Ada juga
        proyek komunitas kayak{" "}
        <ExternalLink href="https://github.com/razaqultegar/tamdes-web">
          tamdes-web
        </ExternalLink>
        , aplikasi buku tamu digital, dan{" "}
        <ExternalLink href="https://github.com/razaqultegar/jakpurwokerto">
          jakpurwokerto
        </ExternalLink>
        , sistem pendaftaran & pendataan anggota buat komunitas suporter The
        Jakmania Biro Purwokerto.
      </p>
      <p>
        Semua proyek bisa dicek di{" "}
        <ExternalLink href="https://github.com/razaqultegar">
          GitHub
        </ExternalLink>
        .
      </p>
    </Section>
  );
}
