import Page from "@components/page";
import getMarkdown from "@lib/get-markdown";
import Link from "@components/link";

const Uses = ({ html }) => {
  return (
    <Page
      title="Perlengkapan"
      description="Perlengkapan saya dari tahun ke tahun"
    >
      <article dangerouslySetInnerHTML={{ __html: html }} />
    </Page>
  );
};

export const getStaticProps = async () => {
  const md = await getMarkdown("data/uses.md");

  return {
    props: {
      html: md,
    },
  };
};

export default Uses;
