import Page from "@components/page";
import getMarkdown from "@lib/get-markdown";

const About = ({ html }) => {
  return (
    <Page title="Tentang" description="Sekilas tentang saya.">
      <article dangerouslySetInnerHTML={{ __html: html }} />
    </Page>
  );
};

export const getStaticProps = async () => {
  const md = await getMarkdown("data/about.md");

  return {
    props: {
      html: md,
    },
  };
};

export default About;
