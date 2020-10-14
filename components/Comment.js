import React from 'react';

export default function Comment({ commentBox }) {
  return (
    <>
      <div ref={commentBox} className="utterances" />
      <style jsx>{`
        .utterances {
          position: relative;
          box-sizing: border-box;
          width: 100%;
          max-width: 760px;
          margin-left: auto;
          margin-right: auto;
        }
      `}</style>
    </>
  );
}
