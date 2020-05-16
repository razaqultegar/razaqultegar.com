import Link from 'next/link';
import formatDate from 'date-fns/format';

export default ({ thumbnail, title, detail, description, date, link }) => {
  return (
    <div className="article-list">
      <div className="thumbnail">
        <Link href={link}>
          <img src={thumbnail} alt={title} />
        </Link>
      </div>
      <div className="text">
        <Link href={link}>
          <h2 className="title">{title}</h2>
        </Link>
        <Link href={link}>{detail && <div className="summary">{description}</div>}</Link>
      </div>
      <style jsx>{`
        .article-list {
          cursor: pointer;
          font-family: HelveticaNeueArabic, NeueHelveticaW01, Helvetica, HelveticaWorld, Arial,
            TazuganeGothic, sans-serif;
          display: block;
        }

        .thumbnail {
          position: relative;
        }

        .text {
          position: relative;
          padding: 15px 0 40px 0;
        }

        .title {
          font-size: 1.25rem;
          font-weight: 600;
          line-height: 1.2;
          margin-bottom: 10px;
        }

        .summary {
          font-size: 0.875rem;
          color: #555555;
        }

        @media only screen and (min-width: 650px) {
          .article-list {
            width: 50%;
            padding: 0 10px;
          }
        }

        @media only screen and (min-width: 700px) {
          .article-list {
            padding: 0 10px;
          }
        }

        @media only screen and (min-width: 850px) {
          .article-list {
            padding: 0 10px;
          }
        }

        @media only screen and (min-width: 1000px) {
          .article-list {
            padding: 0 10px;
          }
        }

        @media only screen and (min-width: 1050px) {
          .article-list {
            width: 33.33333%;
            padding: 0 20px;
          }
        }

        @media only screen and (min-width: 1250px) {
          .article-list {
            width: 25%;
            padding: 0 20px;
          }
        }

        @media only screen and (max-width: 699px) {
          .article-list {
            width: 100%;
            padding: 0 5px;
          }
        }
      `}</style>
    </div>
  );
};
