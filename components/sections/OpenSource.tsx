import Section from "@/components/sections/Section";
import ExternalLink from "@/components/ExternalLink";
import GitHubContributions from "@/components/GitHubContributions";
import { githubUsername } from "@/lib/github";

export default function OpenSource() {
  return (
    <Section id="ngoprek-open-source" title="Ngoprek &amp; Open Source">
      <p>
        Bikin tools kecil buat masalah sendiri udah jadi hobi. Contohnya{" "}
        <ExternalLink href="https://github.com/razaqultegar/dotfiles">
          dotfiles
        </ExternalLink>{" "}
        buat mempercepat setup environment, atau{" "}
        <ExternalLink href="https://github.com/razaqultegar/download-organizer">
          download-organizer
        </ExternalLink>{" "}
        yang otomatis merapikan folder Downloads yang berantakan. Ada juga
        proyek komunitas seperti{" "}
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
      <GitHubContributions />
      <p>
        Daftar lengkapnya ada di{" "}
        <ExternalLink href={`https://github.com/${githubUsername}`}>
          GitHub
        </ExternalLink>
        .
      </p>
    </Section>
  );
}
