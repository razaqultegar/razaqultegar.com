import React from 'react';
import { NextSeo } from 'next-seo';

import MainLayout from '../layouts/main-layout';

const url = 'https://razaqultegar.com/about';
const title = 'About Me – Razaqul Tegar';

const About = () => {
  return (
    <>
      <NextSeo
        title={title}
        canonical={url}
        openGraph={{
          url,
          title
        }}
      />
      <MainLayout>
        <div className="page-header markup">
          <h1>About Me</h1>
        </div>
        <img
          className="page-thumbnail"
          src="/static/images/about.jpg"
          title="Razaqul Tegar's on FOSS and GitHub Workshop"
        />
        <div className="markup">
          <p>
            I live in Ghent, Belgium and am passionate about PHP. I'm a Laravel enthusiast and have
            used the framework for many projects. Follow me{' '}
            <a href="http://twitter.com/razaqultegar">on Twitter</a> to know what keeps me busy.
            Want to know which IDE, apps and hardware I use? <a href="/uses">Here you go</a>!
          </p>
          <p>
            I'm a developer at <a href="https://spatie.be">Spatie</a> of which I'm the co-owner. At
            my company we use a lot of open source software: PHP, Ubuntu, Laravel, Composer, Yarn,…
            are a few of the things we use everyday. My company couldn't exist without open source
            software. That's why we're trying to give back as much as possible.
          </p>
          <p>
            Whenever we stumble upon a problem that we can solve in a clean way, we extract our
            solution so other developers can use it. Together with my colleagues I regularly release{' '}
            <a href="https://spatie.be/opensource">PHP</a>,{' '}
            <a href="https://spatie.be/opensource">Laravel and JavaScript packages</a>. Those
            packages have been downloaded more than 35 million times.
          </p>
        </div>
      </MainLayout>
    </>
  );
};

export default About;
