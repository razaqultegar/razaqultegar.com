import React from 'react';
import useSWR from 'swr';

import fetcher from '../lib/fetcher';

const NowPlaying = () => {
  const { data } = useSWR('/api/now-playing', fetcher);

  return (
    <div className="spotify-now-playing">
      <div className="spotify-album-cover">
        <img
          alt="Spotify album cover"
          src={data?.albumImageUrl || '/static/images/placeholder.jpg'}
        />
      </div>
      <div className="spotify-now-title">
        <a href={data?.songUrl} target="_blank" rel="noopener noreferrer">
          {data && (data?.title || 'Not Playing')}
        </a>
      </div>
      <div className="spotify-now-artist">{data && (data?.artist || 'Spotify')}</div>
      <style jsx>{`
        .spotify-now-playing {
          position: fixed;
          bottom: 20px;
          width: auto;
          animation: popFromBottom 0.5s ease-in-out;
        }

        @keyframes popFromBottom {
          0% {
            transform: translateY(300px) scale(0);
          }
          100% {
            transform: translateY(0px) scale(1);
          }
        }

        .spotify-now-playing .spotify-album-cover {
          display: inline-block;
          width: 65px;
          position: absolute;
        }

        .spotify-now-playing .spotify-now-title {
          background: #1db954;
          padding: 5px 10px 5px 75px;
          font-size: 18px;
          text-align: left;
        }

        .spotify-now-playing .spotify-now-title a {
          transition: all 0.15s ease-out;
          cursor: pointer;
          text-decoration: none;
          outline: none;
          font-weight: 600;
          margin-bottom: 0;
        }

        .spotify-now-playing .spotify-now-title a:hover {
          -webkit-text-decoration: underline;
          text-decoration: underline;
        }

        .spotify-now-playing .spotify-now-artist {
          text-align: left;
          padding: 5px 10px 5px 75px;
          font-size: 12px;
          background: #22a24f;
          color: #fff;
          display: inline-block;
          float: left;
          font-weight: 600;
        }

        @media (max-width: 1024px) {
          .spotify-now-playing {
            display: inline-block;
            left: 20px;
          }
        }

        @media (max-width: 768px) {
          .spotify-now-playing {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default NowPlaying;
