import React from 'react';
import { compose, pure } from 'recompose';
import connectApollo from '../lib/connectApollo';
import withRegion from '../lib/withRegion';
import connectI18n from '../lib/connectI18n';
import PageLayout from '../components/PageLayout';
import MemberList from '../components/MemberList';
import JobList from '../components/JobList';

const About = ({ about }) => (
  <PageLayout title={about.meta_title} metaDescription={about.meta_description}>
    <div className="wrap mt7 text-center">
      <h1>
        Reinventing commerce day after day
      </h1>
      <p>
      Digital Commerce Architects, Engineers, Designers & Consultants
        <br />
       Bahnhofplatz 2 Zürich,
       Switzerland 🇨🇭
      </p>
    </div>
    <div className="text-center-md">
      <h2 className="text-center mb1">Story & Roadmap</h2>
      <img className="timeline-icon timeline-idea" src="../static/img/31- idea-document-design.svg" alt="" />
    </div>
    <section className="timeline wrap">
      <div className="container">
        <div className="timeline-item">
          <div className="timeline-img" />
          <div className="timeline-content">
            <div className="date">
Apr 2017
            </div>
            <p>
Sketch out the architecture of a headless digital commerce platform
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-img" />
          <div className="timeline-content">
            <div className="date">
Jun 2017
            </div>
            <p>
Signed first customer contract
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-img" />
          <div className="timeline-content timeline-special">
            <div className="date">
Nov 2017
            </div>
            <p>
              GoLive of first customer online store
            </p>
            <a className="button" href="https://freezyboy.com">
See freezyboy.com
            </a>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-content">
            <div className="date">
Jan 2018
            </div>
            <p>
Release of Unchained Website
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-img" />
          <div className="timeline-content">
            <div className="date">
Mar 2018
            </div>
            <p>
Release of Roadmap 1.0
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-img" />
          <div className="timeline-content">
            <div className="date">
Jun 2018
            </div>
            <p>
Signed second customer contract with two implementation partners
            </p>
          </div>
        </div>


        <div className="timeline-item">
          <div className="timeline-img" />
          <div className="timeline-content">
            <div className="date">
Q2-Q4 2018
            </div>
            <p>
Roadshow for Zürich based agencies
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-img" />
          <div className="timeline-content timeline-special">
            <div className="date">
Feb 2019
            </div>
            <p>
              GoLive of a b2b & b2c shop & portal in the Health Care Industry
            </p>
            <a className="button" href="https://publicare.ch">
See pubicare.ch
            </a>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-img" />
          <div className="timeline-content timeline-special">
            <div className="date">
Mar 2019
            </div>
            <p>
            Release of Unchained Engine as OSS
            </p>
            <a className="button" href="https://github.com/unchainedshop/unchained">
            See on Github
            </a>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-img" />
          <div className="timeline-content timeline-next">
            <div className="date">
Q2 2019
            </div>
            <ul>
              <li>
Release of Unchained Express
              </li>
              <li>
Release of Unchained Managed Hosting
              </li>
              <li>
Release of Roadmap 2.0
              </li>
            </ul>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-img" />
          <div className="timeline-content timeline-next">
            <div className="date">
Q3-Q4 2019
            </div>
            <ul>
              <li>
Release of Plugin Marketplace 1.0 Beta as SaaS
              </li>
              <li>
Release of Unchained Control Panel 1.0 Beta as SaaS
              </li>
              <li>
Global Roadshow
              </li>
              <li>
Unchained Conference 2019
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center-md">
          <img className="timeline-icon timeline-cloud" src="../static/img/06- cloud-download.svg" alt="" />
        </div>

      </div>
    </section>

    <section className="c-bg-dark c-white mb3 pv3">
      <div className="wrap">
        <h3>Interested in joining the team?</h3>
        <p>
          We are a Zurich based software company and are looking for talents to join us.
          <br />
          At the moment we are looking for the following positions:
        </p>
        <JobList />
      </div>
    </section>
    <div className="wrap mb3">
      <h2 className="text-center mb3">Meet the Team</h2>
      <MemberList />
    </div>
  </PageLayout>
);


export default connectApollo(compose(
  connectI18n,
  withRegion('about'),
  pure,
)(About));
