import React from 'react';
import { Link } from 'gatsby';

export default function Pager({ pageContext }) {
  const { previousPagePath, nextPagePath } = pageContext;

  return (
    <nav className="paginate">
      {previousPagePath && (
        <Link to={previousPagePath} className="previous">
          « Previous
        </Link>
      )}

      {nextPagePath && (
        <Link to={nextPagePath} className="next">
          Next »
        </Link>
      )}
    </nav>
  );
}
