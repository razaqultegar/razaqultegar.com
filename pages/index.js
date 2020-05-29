import Page from '../components/page';
import SocialMeta from '../components/social-meta';
import List from '../components/list';

function importAll(r) {
  return r.keys().map(r);
}

const listItems = importAll(require.context('../artikel', false, /\-preview\.mdx$/));

function dateSortDesc(a, b) {
  const date1 = new Date(a.meta.date);
  const date2 = new Date(b.meta.date);
  if (date1 > date2) return -1;
  if (date1 < date2) return 1;
  return 0;
}

const items = listItems
  .sort(dateSortDesc)
  .map(({ default: description, meta, thumbnail }, index) => {
    return (
      <List key={meta.title} detail={index < 5} {...meta}>
        {description}
        <img src={thumbnail} />
      </List>
    );
  });

export default () => {
  return (
    <Page title={`Razaqul Tegar - Full Stack Web Developer`}>
      <SocialMeta
        image="/static/medias/twitter-cards.jpg"
        title={`Razaqul Tegar - Full Stack Web Developer`}
        url="https://razaqultegar.com"
        description={`Razaqul Tegar adalah seorang pemuda beruntung kelahiran Banyumas, 30 Januari. Sekarang sedang menempuh karir profesionalnya sebagai Full Stack Web Developer.`}
        type="website"
        keywords="razaqul tegar, razaqul, tegar"
      />
      <div className="article-row">{items}</div>
      <style jsx>{`
        .article-row {
          position: relative;
          display: flex;
          flex-wrap: wrap;
          min-width: 100%;
          margin-left: -5px;
          margin-right: -5px;
        }

        @media only screen and (min-width: 650px) {
          .article-row {
            display: flex;
            flex-wrap: wrap;
            min-width: 100%;
            margin-left: -10px;
            margin-right: -10px;
          }
        }

        @media only screen and (min-width: 700px) {
          .article-row {
            display: flex;
            flex-wrap: wrap;
            min-width: 100%;
            margin-left: -10px;
            margin-right: -10px;
          }
        }

        @media only screen and (min-width: 850px) {
          .article-row {
            display: flex;
            flex-wrap: wrap;
            min-width: 100%;
            margin-left: -10px;
            margin-right: -10px;
          }
        }

        @media only screen and (min-width: 1000px) {
          .article-row {
            display: flex;
            flex-wrap: wrap;
            min-width: 100%;
            margin-left: -10px;
            margin-right: -10px;
          }
        }

        @media only screen and (min-width: 1050px) {
          .article-row {
            display: flex;
            flex-wrap: wrap;
            min-width: 100%;
            margin-left: -20px;
            margin-right: -20px;
          }
        }

        @media only screen and (min-width: 1250px) {
          .article-row {
            display: flex;
            flex-wrap: wrap;
            min-width: 100%;
            margin-left: -20px;
            margin-right: -20px;
          }
        }
      `}</style>
    </Page>
  );
};
