import Link from 'next/link';
import { Col } from 'reactstrap';
import formatDate from 'date-fns/format';

export default ({ thumbnail, title, detail, description, date, link }) => {
  return (
    <Col>
      <div className="article-list">
        <div className="thumbnail">
          <picture>
            <Link href={link}>
              <img src={thumbnail} alt={title} />
            </Link>
          </picture>
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
        `}</style>
      </div>
    </Col>
  );
};
