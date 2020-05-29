import Page from '../components/page';
import SocialMeta from '../components/social-meta';
import Contact from '../components/page/contact';

export default () => {
  return (
    <Page title={`Kontak | Razaqul Tegar - Full Stack Web Developer`}>
      <SocialMeta
        image="/static/medias/twitter-cards.jpg"
        title={`Kontak | Razaqul Tegar - Full Stack Web Developer`}
        url="https://razaqultegar.com/kontak"
        description={`Razaqul Tegar adalah seorang pemuda beruntung kelahiran Banyumas, 30 Januari. Sekarang sedang menempuh karir profesionalnya sebagai Full Stack Web Developer.`}
        type="website"
        keywords="razaqul tegar, razaqul, tegar"
      />
      <Contact />
    </Page>
  );
};
