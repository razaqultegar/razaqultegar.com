import Page from '../components/page';
import SocialMeta from '../components/social-meta';
import Portfolio from '../components/page/portfolio';

export default () => {
  return (
    <Page title={`Portfolio | Razaqul Tegar - Full Stack Web Developer`}>
      <SocialMeta
        image="/static/medias/screenshot-covid19-go-id.png"
        title={`Portfolio | Razaqul Tegar - Full Stack Web Developer`}
        url="https://razaqultegar.com/portfolio"
        description={`Razaqul Tegar adalah seorang pemuda beruntung kelahiran Banyumas, 30 Januari. Sekarang sedang menempuh karir profesionalnya sebagai Full Stack Web Developer.`}
        type="website"
        keywords="razaqul tegar, razaqul, tegar"
      />
      <Portfolio />
    </Page>
  );
};
