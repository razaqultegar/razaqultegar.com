import Page from '../components/page';
import SocialMeta from '../components/social-meta';

export default () => {
  return (
    <Page title={`Tentang | Razaqul Tegar - Full Stack Developer`}>
      <SocialMeta
        image="/static/twitter-cards/home.jpg"
        title={`Tentang | Razaqul Tegar - Full Stack Developer`}
        url="https://razaqultegar.com/tentang"
        description={`Razaqul Tegar adalah seorang pemuda beruntung kelahiran Banyumas, 30 Januari. Sekarang sedang menempuh karir profesionalnya sebagai Full Stack Developer.`}
        type="website"
      />
      <h1>Ini Tentang</h1>
    </Page>
  );
};
