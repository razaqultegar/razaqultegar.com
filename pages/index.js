import Page from "@components/page";
import Link from "@components/link";

const About = () => {
  return (
    <Page description="Hi, saya Razaqul Tegar. Cofounder dari DOTS., untuk saat ini.">
      <article>
        <h1>Razaqul Tegar</h1>

        <p>
          Kepala tim di agensi digital kreatif{" "}
          <Link underline href="https://dotsgroup.id" external>
            DOTS.
          </Link>
          , perokok aktif, kutu buku musiman, kerap berkegiatan di alam terbuka
          dan sesekali menangkap gerak dengan kamera ponsel.
        </p>

        <p>
          <Link underline href="/journal">
            Jurnal
          </Link>{" "}
          /{" "}
          <Link underline href="/quotes">
            Kutipan
          </Link>{" "}
          /{" "}
          <Link underline href="/playlist">
            Musik
          </Link>{" "}
          /{" "}
          <Link underline href="/work">
            Kerjaan
          </Link>{" "}
          <br />
          <Link underline href="/uses">
            Perlengkapan
          </Link>{" "}
          /{" "}
          <Link underline href="/about">
            Tentang
          </Link>
        </p>
      </article>
    </Page>
  );
};

export default About;
