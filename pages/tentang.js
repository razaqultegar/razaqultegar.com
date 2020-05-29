import Page from '../components/page';
import SocialMeta from '../components/social-meta';
import About from '../components/page/about';

export default () => {
  return (
    <Page title={`Tentang | Razaqul Tegar - Full Stack Web Developer`}>
      <SocialMeta
        image="/static/medias/twitter-cards.jpg"
        title={`Tentang | Razaqul Tegar - Full Stack Web Developer`}
        url="https://razaqultegar.com/tentang"
        description={`Razaqul Tegar adalah seorang pemuda beruntung kelahiran Banyumas, 30 Januari. Sekarang sedang menempuh karir profesionalnya sebagai Full Stack Web Developer.`}
        type="website"
        keywords="razaqul tegar, razaqul, tegar"
      />
      <About />
    </Page>
  );
};
