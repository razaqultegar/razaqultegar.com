import React from 'react';

const Track = track => {
  return (
    <div className="spotify-list">
      <p className="spotify-rank">{track.ranking}</p>
      <div className="spotify-content">
        <a href={track.songUrl} target="_blank" rel="noopener noreferrer">
          {track.title}
        </a>
        <p>{track.artist}</p>
      </div>
      <style jsx>{`
        .spotify-list {
          margin-bottom: 1rem;
          display: flex;
          flex-direction: row;
          border-bottom: 1px solid rgb(237, 242, 247);
          padding: 0.5rem;
          width: 100%;
        }

        .spotify-list .spotify-rank {
          font-size: 0.875rem;
          font-weight: 700;
          color: rgb(160, 174, 192);
        }

        .spotify-list .spotify-content {
          display: flex;
          flex-direction: column;
          margin-left: 0.75rem;
        }

        .spotify-list .spotify-content a {
          transition: all 0.15s ease-out 0s;
          cursor: pointer;
          text-decoration: none;
          outline: none;
          font-weight: 600;
          margin-bottom: 0px;
        }

        .spotify-list .spotify-content a:hover {
          text-decoration: underline;
        }

        .spotify-list .spotify-content p {
          color: rgb(113, 128, 150);
          max-width: 600px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      `}</style>
    </div>
  );
};

export default Track;
