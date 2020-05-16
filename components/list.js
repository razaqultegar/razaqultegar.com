import Link from 'next/link';
import formatDate from 'date-fns/format';
import indonesia from 'date-fns/locale/id';

export default ({ thumbnail, title, detail, description, date, link }) => {
  return (
    <div className="article-list">
      <Link href={link}>
        <a>
          <div className="thumbnail">
            <img src={thumbnail} alt={title} />
          </div>
          <div className="text">
            <Link href={link}>
              <h2 className="title">{title}</h2>
            </Link>
            {detail && <div className="summary">{description}</div>}
            <div className="date">
              {formatDate(date, 'dddd, D MMMM YYYY', { locale: indonesia })}
            </div>
          </div>
        </a>
      </Link>
      <style jsx>{`
        .article-list {
          font-family: HelveticaNeueArabic, NeueHelveticaW01, Helvetica, HelveticaWorld, Arial,
            TazuganeGothic, sans-serif;
          display: block;
        }

        .thumbnail {
          position: relative;
        }

        .thumbnail:before {
          display: block;
          content: '';
          width: 100%;
          padding-top: 56.25%;
        }

        .thumbnail img {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          height: 100%;
        }

        .text {
          position: relative;
          padding: 20px 0 20px 0;
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
          margin-bottom: 10px;
        }

        .date {
          display: inline;
          color: #777777;
          text-transform: none;
          font-family: HelveticaNeueArabic, NeueHelveticaW01, Helvetica, HelveticaWorld, Arial,
            TazuganeGothic, sans-serif;
          font-size: 0.625rem;
          font-weight: 400;
          line-height: 1.2;
        }

        @media only screen and (min-width: 650px) {
          .article-list {
            width: 50%;
            padding: 0 10px;
          }

          .text {
            padding: 15px 0 40px 0;
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
