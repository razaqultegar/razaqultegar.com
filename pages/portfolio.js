import Page from '../components/page';
import SocialMeta from '../components/social-meta';

export default () => {
  return (
    <Page title={`Portfolio | Razaqul Tegar - Full Stack Developer`}>
      <SocialMeta
        image="/static/twitter-cards/home.jpg"
        title={`Portfolio | Razaqul Tegar - Full Stack Developer`}
        url="https://razaqultegar.com/portfolio"
        description={`Razaqul Tegar adalah seorang pemuda beruntung kelahiran Banyumas, 30 Januari. Sekarang sedang menempuh karir profesionalnya sebagai Full Stack Developer.`}
        type="website"
      />
      <h1>Ini Portfolio</h1>
    </Page>
  );
};
