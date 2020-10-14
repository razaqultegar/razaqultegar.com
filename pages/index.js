import React from 'react';

import MainLayout from '../layouts/main-layout';

const Index = () => {
  const Intro = () => (
    <div className="intro markup">
      <p>
        I'm Razaqul, Full Stack Developer and Development Lead of{' '}
        <a href="https://limbodigital.id">@DLD</a> where I worked for this moment. I also a former
        intern at <a href="https://turing.com">@turing</a> (working on remotely). In my free time
        I've built and maintain various open-source projects of my own like: this Websites, Angular
        Electron Kit, Simple Slug Packages and any more. You can find me on{' '}
        <a href="https://twitter.com/razaqultegar">Twitter</a> or{' '}
        <a href="mailto:myrazaqul@gmail.com">write an email</a>. (I'm not on Facebook, LinkedIn, or
        Instagram).
      </p>
      <style jsx>{`
        .intro {
          --bg-opacity: 1;
          --text-opacity: 1;
          background-color: ivory;
          background-color: rgba(255, 255, 240, var(--bg-opacity));
          color: #4a5568;
          color: rgba(74, 85, 104, var(--text-opacity));
          font-size: 0.8rem;
          margin-bottom: 1.5rem;
          padding: 0.5rem;
        }
      `}</style>
    </div>
  );

  return (
    <MainLayout>
      <Intro />
      <div
        style={{
          height: '6px',
          backgroundColor: '#f16563',
          boxShadow: '0 3px 0 #f16563dd, 0 3px 0 #000',
          marginBottom: '1.25rem'
        }}
      />
    </MainLayout>
  );
};

export default Index;
